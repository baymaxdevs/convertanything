const functions = require('firebase-functions');
const admin = require('firebase-admin');
const os = require('os');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');

admin.initializeApp();
const storage = new Storage();

// Read format data from a JSON file
const formatsData = require('./formats.json');

// Generate mapping of extensions to categories
const extToCategory = {};
Object.entries(formatsData).forEach(([category, formats]) => {
  formats.forEach(format => {
    format.extensions.forEach(ext => {
      extToCategory[ext.toLowerCase()] = category;
    });
  });
});

// Helper function to verify auth token
const verifyAuthToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or invalid' });
  }

  const token = authHeader.split('Bearer ')[1];

  // Handle anonymous tokens
  if (token.startsWith('anonymous-')) {
    // You could implement rate limiting here for anonymous users
    req.user = { anonymous: true, id: token };
    return next();
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    return next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ error: 'Invalid authorization token' });
  }
};

// Helper function to get file category
function getFileCategory(filePath, ext) {
  // First try extension mapping
  const category = extToCategory[ext.toLowerCase()];
  if (category) return category;

  // If no category found, try to determine from MIME type
  const mime = require('mime-types');
  const mimeType = mime.lookup(filePath);

  if (!mimeType) return 'binary';

  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/')) return 'videos';
  if (mimeType.startsWith('audio/')) return 'audio';
  if (mimeType.includes('pdf')) return 'document';
  if (mimeType.includes('document')) return 'document';
  if (mimeType.includes('spreadsheet')) return 'spreadsheets';
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) return 'presentations';
  if (mimeType.includes('archive') || mimeType.includes('zip')) return 'archieves';
  if (mimeType.includes('epub')) return 'ebook';

  return 'binary';
}

// Helper function to get conversion options
function getAllPossibleConversions(sourceCategory, fileExt) {
  fileExt = fileExt.toLowerCase();
  const conversions = [];

  // Same-category conversions
  if (formatsData[sourceCategory]) {
    formatsData[sourceCategory].forEach(format => {
      // Skip current format
      if (format.extensions.some(ext => ext === fileExt)) return;

      if (format.extensions && format.extensions.length > 0) {
        conversions.push({
          abbr: format.abbr,
          ext: format.extensions[0],
          category: sourceCategory,
          description: format.description || ''
        });
      }
    });
  }

  // Cross-category conversions
  if (sourceCategory === 'image') {
    // Add PDF
    if (!conversions.some(c => c.ext === '.pdf')) {
      conversions.push({
        abbr: 'PDF',
        ext: '.pdf',
        category: 'document',
        is_cross_category: true
      });
    }

    // Add sticker option
    conversions.push({
      abbr: 'PNG (Sticker)',
      ext: '.png',
      category: 'image',
      is_sticker: true
    });
  }

  // Videos -> GIF, Audio, Thumbnail
  if (sourceCategory === 'videos') {
    conversions.push({
      abbr: 'GIF',
      ext: '.gif',
      category: 'image',
      is_cross_category: true,
      is_animation: true
    });
    conversions.push({
      abbr: 'MP3',
      ext: '.mp3',
      category: 'audio',
      is_cross_category: true,
      is_audio_extract: true
    });
    conversions.push({
      abbr: 'JPG (Thumbnail)',
      ext: '.jpg',
      category: 'image',
      is_cross_category: true,
      is_thumbnail: true
    });
  }

  // Document/Spreadsheet/Presentation -> PDF
  if (sourceCategory === 'document' || sourceCategory === 'spreadsheets' || sourceCategory === 'presentations') {
    if (!conversions.some(c => c.ext === '.pdf')) {
      conversions.push({
        abbr: 'PDF',
        ext: '.pdf',
        category: 'document',
        is_cross_category: true
      });
    }
  }

  return conversions;
}

// Set up the Express app
const app = express();

// Configure CORS - must be before any route handlers
app.use(cors({
  origin: ['https://your-app-domain.web.app', 'https://your-cloud-run-service.run.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Pragma', 'Expires', 'X-Requested-With'],
  exposedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 3600
}));

// Handle preflight requests explicitly
app.options('*', cors());

// Add CORS headers to all responses
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://your-app-domain.web.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Expires');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Apply auth middleware after CORS is configured, but exclude health check endpoint
// This ensures the health endpoint can be accessed without authentication
app.use((req, res, next) => {
  if (req.path === '/health') {
    return next();
  }
  return verifyAuthToken(req, res, next);
});

// Get conversion options endpoint
app.post('/get-conversion-options', (req, res) => {
  const { fileUrl, fileName } = req.body;
  if (!fileUrl || !fileName) {
    return res.status(400).json({ error: 'Missing fileUrl or fileName' });
  }

  const extension = path.extname(fileName);
  const sourceCategory = getFileCategory(fileName, extension);
  const options = getAllPossibleConversions(sourceCategory, extension);

  res.json({
    sourceCategory,
    options
  });
});

// Convert file endpoint
app.post('/convert', async (req, res) => {
  const { fileUrl, fileName, options } = req.body;
  if (!fileUrl || !fileName || !options) {
    return res.status(400).json({ error: 'Missing required data' });
  }

  try {
    // Generate a unique ID for this anonymous user
    const anonymousId = req.user.anonymous ? req.user.id : req.user.uid;

    // Download file from URL
    const tempFilePath = path.join(os.tmpdir(), fileName);

    // Handle direct file upload URLs
    if (fileUrl.startsWith('data:')) {
      // Handle base64 data URLs
      const base64Data = fileUrl.split(',')[1];
      fs.writeFileSync(tempFilePath, Buffer.from(base64Data, 'base64'));
    } else {
      // Handle regular URLs or Firebase Storage URLs
      try {
        // Try to get from Firebase Storage first
        const bucket = admin.storage().bucket();

        // Parse the fileUrl to get the file path in storage (if it's a Firebase URL)
        if (fileUrl.includes('firebase') || fileUrl.includes('googleapis')) {
          const fileUrlObj = new URL(fileUrl);
          const filePath = decodeURIComponent(fileUrlObj.pathname.split('/o/')[1]?.split('?')[0]);
          if (filePath) {
            await bucket.file(filePath).download({ destination: tempFilePath });
          } else {
            // If not a Firebase Storage URL, download directly
            const fetch = require('node-fetch');
            const response = await fetch(fileUrl);
            const buffer = await response.buffer();
            fs.writeFileSync(tempFilePath, buffer);
          }
        } else {
          // Regular URL download
          const fetch = require('node-fetch');
          const response = await fetch(fileUrl);
          const buffer = await response.buffer();
          fs.writeFileSync(tempFilePath, buffer);
        }
      } catch (downloadError) {
        console.error('Error downloading file:', downloadError);

        // Fallback to direct HTTP request
        const fetch = require('node-fetch');
        const response = await fetch(fileUrl);
        const buffer = await response.buffer();
        fs.writeFileSync(tempFilePath, buffer);
      }
    }

    // Prepare output file
    const outputFileName = `${path.basename(fileName, path.extname(fileName))}_${uuidv4().substring(0, 8)}${options.targetExtension}`;
    const outputFilePath = path.join(os.tmpdir(), outputFileName);

    // For demo purposes, we're just copying the file
    // In production, you'd implement actual conversion logic here
    fs.copyFileSync(tempFilePath, outputFilePath);

    // Upload the converted file to a public folder
    const bucket = admin.storage().bucket();
    const destinationPath = `public_conversions/${anonymousId}/${outputFileName}`;

    await bucket.upload(outputFilePath, {
      destination: destinationPath,
      metadata: {
        contentType: require('mime-types').lookup(outputFileName) || 'application/octet-stream'
      },
      public: true  // Make the file publicly accessible
    });

    // Generate a public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destinationPath}`;

    // Clean up temp files
    fs.unlinkSync(tempFilePath);
    fs.unlinkSync(outputFilePath);

    res.json({
      convertedFileUrl: publicUrl,
      convertedFileName: outputFileName
    });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({ error: 'Failed to convert file: ' + error.message });
  }
});

// Health check endpoint (no auth required)
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    contact: 'your-email@example.com'
  });
});

// Import node-fetch at the top level
const fetch = require('node-fetch');

// Proxy endpoint for Cloud Run service
app.post('/proxy/get-conversion-options', async (req, res) => {
  try {
    // Forward all headers from the original request
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': req.headers.authorization || ''
    };

    // Add any additional headers from the original request
    if (req.headers['cache-control']) headers['Cache-Control'] = req.headers['cache-control'];
    if (req.headers['pragma']) headers['Pragma'] = req.headers['pragma'];
    if (req.headers['expires']) headers['Expires'] = req.headers['expires'];
    if (req.headers['x-requested-with']) headers['X-Requested-With'] = req.headers['x-requested-with'];

    const response = await fetch('https://your-backend-service.run.app/api/get-conversion-options', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to proxy request: ' + error.message });
  }
});

// Proxy endpoint for Cloud Run convert service
app.post('/proxy/convert', async (req, res) => {
  try {
    // Forward all headers from the original request
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': req.headers.authorization || ''
    };

    // Add any additional headers from the original request
    if (req.headers['cache-control']) headers['Cache-Control'] = req.headers['cache-control'];
    if (req.headers['pragma']) headers['Pragma'] = req.headers['pragma'];
    if (req.headers['expires']) headers['Expires'] = req.headers['expires'];
    if (req.headers['x-requested-with']) headers['X-Requested-With'] = req.headers['x-requested-with'];

    const response = await fetch('https://your-backend-service.run.app/api/convert', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to proxy request: ' + error.message });
  }
});

// Export the API as a Firebase Function
// This will make the API available at /api/* instead of /*
exports.api = functions.https.onRequest((req, res) => {
  // Remove /api prefix if present to match our Express routes
  if (req.path.startsWith('/api/')) {
    req.url = req.url.replace('/api', '');
  }
  return app(req, res);
});

// Cloud Function to clean up files older than 24 hours
exports.cleanupOldFiles = functions.pubsub.schedule('every 24 hours').onRun(async (_context) => {
  try {
    console.log('Starting cleanup of old files...');

    const bucket = admin.storage().bucket();

    // Calculate the cutoff time (24 hours ago)
    const cutoffTime = new Date();
    cutoffTime.setHours(cutoffTime.getHours() - 24);

    // Clean up public_uploads folder
    await cleanupFolder(bucket, 'public_uploads/', cutoffTime);

    // Clean up public_conversions folder
    await cleanupFolder(bucket, 'public_conversions/', cutoffTime);

    console.log('Cleanup complete for all folders');
    return null;
  } catch (error) {
    console.error('Error during file cleanup:', error);
    return null;
  }
});

// Helper function to clean up files in a specific folder
async function cleanupFolder(bucket, folderPrefix, cutoffTime) {
  try {
    // List all files in the folder
    const [files] = await bucket.getFiles({ prefix: folderPrefix });

    console.log(`Found ${files.length} files in ${folderPrefix} folder`);

    let deletedCount = 0;

    // Check each file's creation time and delete if older than the cutoff
    for (const file of files) {
      const [metadata] = await file.getMetadata();
      const creationTime = new Date(metadata.timeCreated);

      if (creationTime < cutoffTime) {
        console.log(`Deleting old file: ${file.name}, created: ${creationTime.toISOString()}`);
        await file.delete();
        deletedCount++;
      }
    }

    console.log(`Cleanup complete for ${folderPrefix}. Deleted ${deletedCount} files.`);
  } catch (error) {
    console.error(`Error cleaning up ${folderPrefix}:`, error);
  }
}