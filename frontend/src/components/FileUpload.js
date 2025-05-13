import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  LinearProgress,
  Alert,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
  InsertDriveFile as FileIcon,
  PictureAsPdf as PdfIcon,
  AudioFile as AudioIcon,
  VideoFile as VideoIcon,
  Description as TextIcon
} from '@mui/icons-material';
import { useConversion } from '../contexts/ConversionContext';

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Helper function to get file type icon
const getFileIcon = (file) => {
  if (!file) return <FileIcon fontSize="large" />;

  const type = file.type || '';
  const name = file.name || '';
  const extension = name.split('.').pop().toLowerCase();

  if (type.startsWith('image/') || ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(extension)) {
    return <FileIcon fontSize="large" color="primary" />;
  } else if (type.startsWith('audio/') || ['mp3', 'wav', 'ogg', 'flac'].includes(extension)) {
    return <AudioIcon fontSize="large" color="secondary" />;
  } else if (type.startsWith('video/') || ['mp4', 'webm', 'avi', 'mov'].includes(extension)) {
    return <VideoIcon fontSize="large" color="error" />;
  } else if (type.includes('pdf') || extension === 'pdf') {
    return <PdfIcon fontSize="large" color="warning" />;
  } else if (type.startsWith('text/') || ['txt', 'html', 'css', 'js', 'json'].includes(extension)) {
    return <TextIcon fontSize="large" color="info" />;
  }

  return <FileIcon fontSize="large" />;
};

// File preview component
const FilePreview = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const [previewError, setPreviewError] = useState(false);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    // Check if file is an image
    if (file.type && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.onerror = () => {
        setPreviewError(true);
      };
      reader.readAsDataURL(file);
    } else if (file.type && file.type.startsWith('video/')) {
      // For videos, create an object URL
      const videoUrl = URL.createObjectURL(file);
      setPreview(videoUrl);

      // Clean up the URL when component unmounts
      return () => URL.revokeObjectURL(videoUrl);
    } else if (file.type && file.type.startsWith('audio/')) {
      // For audio, create an object URL
      const audioUrl = URL.createObjectURL(file);
      setPreview(audioUrl);

      // Clean up the URL when component unmounts
      return () => URL.revokeObjectURL(audioUrl);
    } else {
      setPreview(null);
    }
  }, [file]);

  if (!file) return null;

  const renderPreview = () => {
    if (previewError) {
      return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="error">
            Unable to generate preview
          </Typography>
        </Box>
      );
    }

    if (!preview) {
      return (
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {getFileIcon(file)}
        </Box>
      );
    }

    if (file.type && file.type.startsWith('image/')) {
      return (
        <CardMedia
          component="img"
          image={preview}
          alt={file.name}
          sx={{
            height: 200,
            objectFit: 'contain',
            backgroundColor: '#f5f5f5'
          }}
        />
      );
    } else if (file.type && file.type.startsWith('video/')) {
      return (
        <Box sx={{ p: 2 }}>
          <video
            controls
            style={{ width: '100%', maxHeight: 200 }}
            src={preview}
          >
            Your browser does not support the video tag.
          </video>
        </Box>
      );
    } else if (file.type && file.type.startsWith('audio/')) {
      return (
        <Box sx={{ p: 2 }}>
          <audio
            controls
            style={{ width: '100%' }}
            src={preview}
          >
            Your browser does not support the audio tag.
          </audio>
        </Box>
      );
    }

    return (
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {getFileIcon(file)}
      </Box>
    );
  };

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      {renderPreview()}
      <CardContent sx={{ py: 1 }}>
        <Typography variant="body2" color="text.secondary" noWrap>
          {file.name} ({formatFileSize(file.size)})
        </Typography>
      </CardContent>
    </Card>
  );
};

const FileUpload = () => {
  const navigate = useNavigate();
  const { uploadFile, uploadProgress, isUploading, error, setError } = useConversion();
  const [selectedFile, setSelectedFile] = useState(null);

  const interactionDisabled = isUploading;

  const onDrop = useCallback((acceptedFiles) => {
    if (interactionDisabled) {
      setError("File upload is currently in progress. Please wait.");
      return;
    }
    if (acceptedFiles && acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
      setError(null);
    }
  }, [interactionDisabled, setError]);

  const { getRootProps, getInputProps, isDragActive, open: openFileDialog } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 500 * 1024 * 1024,
    disabled: interactionDisabled,
    noClick: true,
    noKeyboard: true,
  });



  const handleBrowseClick = () => {
    if (!interactionDisabled) {
      openFileDialog();
    } else {
      setError("File upload is currently in progress. Please wait.");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || interactionDisabled) {
      if (!selectedFile) setError("Please select a file first.");
      return;
    }

    try {
      const fileData = await uploadFile(selectedFile);
      if (fileData && fileData.url) {
        sessionStorage.setItem('uploadedFile', JSON.stringify({
          id: fileData.id,
          name: fileData.name,
          url: fileData.url
        }));
        navigate(`/convert/${fileData.id}`);
      }
    } catch (err) {
      console.error('Upload error in FileUpload component handler:', err);
      if (!error && err && err.message) {
        setError(err.message);
      }
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 3,
        borderRadius: 0,
        borderColor: isDragActive && !interactionDisabled
          ? '#000000'
          : 'rgba(0, 0, 0, 0.12)',
        borderWidth: isDragActive && !interactionDisabled ? 2 : 1,
        borderStyle: 'dashed',
        bgcolor: '#FFFFFF',
        cursor: !interactionDisabled ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        opacity: interactionDisabled && !isUploading ? 0.6 : 1,
      }}
      {...getRootProps()}
    >
      {error && (
        <Alert
          severity="error"
          onClose={() => setError(null)}
          sx={{
            mb: 2,
            borderRadius: 0,
            border: '1px solid rgba(0, 0, 0, 0.12)',
            '& .MuiAlert-icon': {
              color: '#000000',
            },
          }}
        >
          {error}
        </Alert>
      )}

      {isUploading ? (
        <Box
          sx={{
            p: 3,
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            transform: 'translateZ(20px)',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              mb: 2,
            }}
          >
            <CircularProgress
              sx={{
                color: '#000000',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                },
              }}
            />
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: '"Courier New", monospace',
              fontWeight: 600,
              color: '#000000',
            }}
          >
            Uploading {selectedFile?.name}...
          </Typography>

          <Box sx={{ position: 'relative', mt: 3, mb: 1 }}>
            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              sx={{
                height: 10,
                borderRadius: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 0,
                  background: '#000000',
                },
              }}
            />
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: '#333333',
              fontFamily: '"Courier New", monospace',
              fontWeight: 400,
            }}
          >
            {Math.round(uploadProgress)}% Complete
          </Typography>


        </Box>
      ) : selectedFile ? (
        <Box
          sx={{
            textAlign: 'center',
            p: 3,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* File Preview */}
          <Box sx={{ transform: 'translateZ(30px)' }}>
            <FilePreview file={selectedFile} />
          </Box>

          <Box
            sx={{
              my: 3,
              height: '1px',
              width: '80%',
              mx: 'auto',
              position: 'relative',
              background: 'rgba(0, 0, 0, 0.12)',
            }}
          />

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              transform: 'translateZ(20px)',
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                if (!isUploading) setSelectedFile(null);
              }}
              disabled={isUploading}
              sx={{
                py: 1.2,
                px: 3,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: '#000000',
                fontFamily: '"Courier New", monospace',
                fontWeight: 500,
                color: '#000000',
                '&:hover': {
                  borderWidth: 1,
                  borderColor: '#000000',
                  backgroundColor: '#F0F0F0',
                },
              }}
            >
              Change File
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={interactionDisabled || !selectedFile}
              sx={{
                py: 1.2,
                px: 3,
                borderRadius: 0,
                backgroundColor: '#000000',
                color: '#FFFFFF',
                fontFamily: '"Courier New", monospace',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              Convert Now
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <input {...getInputProps()} />

          <Box
            sx={{
              position: 'relative',
              mb: 3,
              transform: 'translateZ(40px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 100,
                height: 100,
                border: '1px solid rgba(0, 0, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CloudUploadIcon
                sx={{
                  fontSize: 50,
                  color: '#000000',
                }}
              />
            </Box>
          </Box>

          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontFamily: '"Courier New", monospace',
              fontWeight: 600,
              color: '#000000',
              mb: 2,
            }}
          >
            {isDragActive && !interactionDisabled
              ? "Drop to Begin Conversion..."
              : "Drag & Drop Your File Here"}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: '#333333',
              fontFamily: '"Courier New", monospace',
              fontWeight: 400,
              maxWidth: 400,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Supports all common file formats including images, videos, documents, and audio files. Max size: 500MB
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleBrowseClick}
            disabled={interactionDisabled}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 0,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              fontFamily: '"Courier New", monospace',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            Select File
          </Button>


        </Box>
      )}
    </Paper>
  );
};

export default FileUpload;
