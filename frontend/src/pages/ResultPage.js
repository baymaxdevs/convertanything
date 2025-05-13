import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HomeIcon from '@mui/icons-material/Home';
import ReplayIcon from '@mui/icons-material/Replay';

const ResultPage = () => {
  const { fileId } = useParams();
  const navigate = useNavigate();
  const [convertedFile, setConvertedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [originalFile, setOriginalFile] = useState(null);

  useEffect(() => {
    if (!fileId) {
      setError('Invalid file ID');
      setLoading(false);
      return;
    }

    try {
      // Retrieve conversion result from session storage
      const resultData = sessionStorage.getItem('conversionResult');
      if (!resultData) {
        setError('Conversion result not found');
        setLoading(false);
        return;
      }

      const result = JSON.parse(resultData);
      console.log('Loaded conversion result:', result);

      // Get original file data
      const uploadedFileData = sessionStorage.getItem('uploadedFile');
      let originalFileData = null;

      if (uploadedFileData) {
        originalFileData = JSON.parse(uploadedFileData);
        console.log('Loaded original file data:', originalFileData);

        setOriginalFile({
          name: originalFileData.name,
          url: originalFileData.url,
          type: originalFileData.type
        });
      }

      setConvertedFile({
        name: result.filename || result.convertedFileName,
        url: result.convertedFileUrl,
        originalFileName: originalFileData ? originalFileData.name : 'Original file'
      });

      setLoading(false);
    } catch (err) {
      console.error('Error loading conversion result:', err);
      setError('Failed to load conversion result');
      setLoading(false);
    }
  }, [fileId]);

  const handleDownload = () => {
    if (!convertedFile?.url) return;

    // Create a temporary anchor and trigger download
    const a = document.createElement('a');
    a.href = convertedFile.url;
    a.download = convertedFile.name || 'converted-file';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleConvertAnother = () => {
    navigate('/');
  };

  // Get file type for preview
  const getFileType = (file) => {
    if (!file?.name) return 'unknown';

    // Check if we have a MIME type first
    if (file.type) {
      if (file.type.startsWith('image/')) return 'image';
      if (file.type.startsWith('audio/')) return 'audio';
      if (file.type.startsWith('video/')) return 'video';
      if (file.type.startsWith('text/')) return 'text';
      if (file.type === 'application/pdf') return 'pdf';
    }

    // Fall back to extension check
    const extension = file.name.split('.').pop().toLowerCase();

    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) return 'image';
    if (['mp3', 'wav', 'ogg', 'flac', 'aac'].includes(extension)) return 'audio';
    if (['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(extension)) return 'video';
    if (['txt', 'html', 'css', 'js', 'json', 'xml'].includes(extension)) return 'text';
    if (extension === 'pdf') return 'pdf';

    return 'other';
  };

  // Render file preview based on type
  const renderFilePreview = (file, title) => {
    if (!file) return null;

    const fileType = getFileType(file);

    const previewContent = (() => {
      switch (fileType) {
        case 'image':
          return (
            <CardMedia
              component="img"
              image={file.url}
              alt={file.name}
              sx={{ maxHeight: 300, objectFit: 'contain' }}
            />
          );
        case 'audio':
          return (
            <Box sx={{ p: 2 }}>
              <audio controls style={{ width: '100%' }}>
                <source src={file.url} />
                Your browser does not support the audio element.
              </audio>
            </Box>
          );
        case 'video':
          return (
            <Box sx={{ p: 2 }}>
              <video controls style={{ width: '100%', maxHeight: 300 }}>
                <source src={file.url} />
                Your browser does not support the video element.
              </video>
            </Box>
          );
        case 'pdf':
          return (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                PDF file preview
              </Typography>
              <Button
                variant="outlined"
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </Button>
            </Box>
          );
        default:
          return (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                No preview available for this file type
              </Typography>
            </Box>
          );
      }
    })();

    return (
      <Card elevation={3} sx={{ mb: 3 }}>
        {title && (
          <CardContent sx={{ pb: 0 }}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </CardContent>
        )}
        {previewContent}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {file.name}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading your converted file...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            We couldn't find your converted file.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Back to Home
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Conversion Complete!
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* Original file preview */}
          {originalFile && renderFilePreview(originalFile, "Original File")}

          {/* Converted file preview */}
          <Card elevation={3}>
            {renderFilePreview(convertedFile, "Converted File").props.children}
            <CardActions>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                fullWidth
                sx={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  py: 1.5,
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#333333',
                  }
                }}
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              What's next?
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ReplayIcon />}
                onClick={handleConvertAnother}
                fullWidth
                sx={{ mb: 2 }}
              >
                Convert Another File
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultPage;