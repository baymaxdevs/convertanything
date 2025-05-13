import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage, auth } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ConversionContext = createContext();

export function useConversion() {
  return useContext(ConversionContext);
}

export function ConversionProvider({ children }) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);
  const [conversionResult, setConversionResult] = useState(null);

  // Helper function to get auth token
  const getAuthToken = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        return await user.getIdToken();
      }
      // For anonymous users, generate a temporary token using UUID
      return `anonymous-${uuidv4()}`;
    } catch (error) {
      console.error('Error getting auth token:', error);
      return null;
    }
  };

  async function uploadFile(file) {
    if (!file) {
      const msg = 'No file provided for upload.';
      console.error(msg);
      setError(msg);
      return Promise.reject(new Error(msg));
    }

    setError(null);
    setIsUploading(true);
    setUploadProgress(0);

    console.log(`[Upload] Starting upload for file: ${file.name}`);

    try {
      if (!storage) {
        throw new Error('Firebase Storage is not initialized');
      }

      const filePath = `public_uploads/${Date.now()}_${file.name}`;
      console.log(`[Upload] Target Storage Path: ${filePath}`);
      const storageRef = ref(storage, filePath);

      const metadata = {
        contentType: file.type || 'application/octet-stream'
      };
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
            switch (snapshot.state) {
              case 'paused': console.log('Upload is paused'); break;
              case 'running': console.log('Upload is running'); break;
              default: console.log('Upload state:', snapshot.state);
            }
          },
          (uploadError) => {
            console.error('[Upload] Firebase Upload Error:', uploadError.code, uploadError.message);
            setIsUploading(false);
            const errorCode = uploadError.code;
            let userMessage = 'Upload failed. Please try again.';
            if (errorCode === 'storage/unauthorized') {
              userMessage = 'Upload failed: Permission denied. Please check Firebase Storage rules.';
            } else if (errorCode === 'storage/object-not-found') {
              userMessage = 'Upload failed: Storage path seems incorrect.';
            }
            setError(userMessage);
            reject(new Error(userMessage));
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              const fileData = {
                id: uuidv4(),
                name: file.name,
                size: file.size,
                type: file.type,
                path: filePath,
                url: downloadURL,
                createdAt: new Date().toISOString(),
                status: 'uploaded'
              };
              setIsUploading(false);
              resolve(fileData);
            } catch (urlError) {
              console.error('[Upload] Error getting download URL:', urlError);
              setIsUploading(false);
              setError('Upload succeeded, but failed to get file URL.');
              reject(urlError);
            }
          }
        );
      });
    } catch (initError) {
      console.error('[Upload] Initialization error:', initError);
      setIsUploading(false);
      setError('Could not start upload: ' + initError.message);
      return Promise.reject(initError);
    }
  }

  // Function to get conversion options (using CORS proxy)
  async function getConversionOptions(fileUrl, fileName) {
    setError(null);
    try {
      console.log('Getting conversion options for:', { fileUrl, fileName });
      const authToken = await getAuthToken();

      // Use our dedicated CORS proxy
      const apiUrl = process.env.REACT_APP_API_URL || 'https://your-cors-proxy.run.app';
      const response = await fetch(`${apiUrl}/proxy/get-conversion-options`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ fileUrl, fileName })
      });

      console.log('Conversion options API response status:', response.status);

      if (!response.ok) {
        const errorBody = await response.text();
        console.error('Conversion options API error response:', errorBody);
        throw new Error(`API Error for getConversionOptions (${response.status}): ${errorBody}`);
      }

      const data = await response.json();
      console.log('Conversion options received:', {
        sourceCategory: data.sourceCategory,
        optionsCount: data.options?.length || 0
      });

      return data;
    } catch (error) {
      console.error('Error getting conversion options:', error);
      setError('Failed to get conversion options: ' + error.message);
      return null;
    }
  }

  // Function to convert a file (using CORS proxy)
  async function convertFile(fileUrl, fileName, options = {}) {
    setError(null);
    setIsConverting(true);
    setConversionResult(null);
    try {
      console.log('Starting conversion with options:', options);
      const authToken = await getAuthToken();

      // Use our dedicated CORS proxy
      const apiUrl = process.env.REACT_APP_API_URL || 'https://your-cors-proxy.run.app';
      const response = await fetch(`${apiUrl}/proxy/convert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ fileUrl, fileName, options })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error('Conversion API error response:', errorBody);
        throw new Error(`API Error for convertFile (${response.status}): ${errorBody}`);
      }

      const result = await response.json();
      console.log('Conversion result received:', {
        success: result.success,
        filename: result.filename,
        hasFileData: !!result.fileData
      });

      // If we have base64 file data, create a download URL
      if (result.fileData) {
        // Convert base64 to blob
        const byteCharacters = atob(result.fileData);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);

          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }

        // Determine MIME type based on file extension
        const ext = options.targetExtension.toLowerCase();
        let mimeType = 'application/octet-stream'; // Default

        if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
        else if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.gif') mimeType = 'image/gif';
        else if (ext === '.pdf') mimeType = 'application/pdf';
        else if (ext === '.svg') mimeType = 'image/svg+xml';

        const blob = new Blob(byteArrays, { type: mimeType });
        const convertedFileUrl = URL.createObjectURL(blob);

        // Add the URL to the result
        result.convertedFileUrl = convertedFileUrl;
      }

      setConversionResult(result);
      setIsConverting(false);
      return result;
    } catch (error) {
      console.error('Error converting file:', error);
      setIsConverting(false);
      setError('Conversion failed: ' + error.message);
      return null;
    }
  }

  const value = {
    uploadFile,
    getConversionOptions,
    convertFile,
    uploadProgress,
    isUploading,
    isConverting,
    error,
    conversionResult,
    setError
  };

  return (
    <ConversionContext.Provider value={value}>
      {children}
    </ConversionContext.Provider>
  );
}