import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Box,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Button,
  Breadcrumbs,
  Link
} from '@mui/material';
import {
  NavigateNext as NavigateNextIcon,
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { ConversionProvider, useConversion } from '../contexts/ConversionContext';
import ConversionOptions from '../components/ConversionOptions';

const ConvertPage = () => {
  return (
    <ConversionProvider>
      <ConvertPageContent />
    </ConversionProvider>
  );
};

const ConvertPageContent = () => {
  const { fileId } = useParams();
  const navigate = useNavigate();
  const { getConversionOptions, convertFile, isConverting, error } = useConversion();

  const [fileInfo, setFileInfo] = useState(null);
  const [conversionOptions, setConversionOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  // Fetch file info and conversion options on load
  useEffect(() => {
    async function fetchData() {
      if (!fileId) {
        setLoadingError('Invalid file ID');
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching data for file ID:', fileId);

        // Retrieve file info from session storage
        const storedFileData = sessionStorage.getItem('uploadedFile');
        if (!storedFileData) {
          console.error('File information not found in session storage');
          setLoadingError('File information not found. Please upload the file again.');
          setLoading(false);
          return;
        }

        let fileData;
        try {
          fileData = JSON.parse(storedFileData);
          console.log('Retrieved file data from session storage:', fileData);
        } catch (parseError) {
          console.error('Error parsing file data from session storage:', parseError);
          setLoadingError('Invalid file data format. Please upload the file again.');
          setLoading(false);
          return;
        }

        if (!fileData || !fileData.url || !fileData.name) {
          console.error('Invalid file data structure:', fileData);
          setLoadingError('Incomplete file information. Please upload the file again.');
          setLoading(false);
          return;
        }

        // Extract file extension
        const fileExt = fileData.name.includes('.')
          ? fileData.name.substring(fileData.name.lastIndexOf('.'))
          : '';

        // Set initial file info with extension
        setFileInfo({
          ...fileData,
          ext: fileExt
        });

        // Get conversion options
        console.log('Requesting conversion options for:', fileData.name);
        const optionsData = await getConversionOptions(fileData.url, fileData.name);

        if (!optionsData) {
          throw new Error('Failed to get conversion options from API');
        }

        console.log('Setting conversion options:', optionsData.options?.length || 0, 'options available');
        setConversionOptions(optionsData.options || []);

        // Add category from the API response
        if (optionsData.sourceCategory) {
          console.log('Setting file category from API:', optionsData.sourceCategory);
          setFileInfo(prev => ({
            ...prev,
            category: optionsData.sourceCategory,
            ext: fileExt
          }));
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoadingError(`Error loading conversion options: ${err.message}`);
        setLoading(false);
      }
    }

    fetchData();
  }, [fileId, getConversionOptions]);

  // Handle conversion
  const handleConvert = async (format, options) => {
    if (!fileInfo) return;

    const result = await convertFile(fileInfo.url, fileInfo.name, {
      sourceCategory: fileInfo.category,
      targetExtension: format.ext,
      ...options
    });

    if (result && result.convertedFileUrl) {
      try {
        // Store a smaller version of the result in session storage
        // Remove the large fileData property to avoid exceeding storage quota
        const resultToStore = { ...result };

        // Don't store the base64 data in session storage
        if (resultToStore.fileData) {
          delete resultToStore.fileData;
        }

        sessionStorage.setItem('conversionResult', JSON.stringify(resultToStore));

        // Navigate to the result page
        navigate(`/result/${fileId}`);
      } catch (storageError) {
        console.error('Error storing conversion result:', storageError);
        // Still navigate to result page since we have the URL in memory
        navigate(`/result/${fileId}`);
      }
    }
  };

  // Handle going back
  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Helmet>
        <title>Convert File - Convert Anything</title>
        <meta name="description" content="Choose a target format to convert your file." />
      </Helmet>

      {/* Breadcrumbs - Hidden on mobile */}
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            display="flex"
            alignItems="center"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography color="text.primary">Convert</Typography>
        </Breadcrumbs>
      </Box>

      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{
          mb: 2,
          fontSize: { xs: '0.8rem', sm: '0.875rem' },
          py: { xs: 0.5, sm: 1 }
        }}
      >
        Back to Home
      </Button>

      {/* Main Content */}
      <Paper
        elevation={2}
        sx={{
          p: { xs: 1.5, sm: 3, md: 4 },
          borderRadius: { xs: 1, sm: 2 },
          overflow: 'hidden'
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            fontFamily: '"Courier New", monospace',
            fontWeight: 600
          }}
        >
          Convert Your File
        </Typography>

        <Box sx={{ my: 2 }}>
          {loadingError ? (
            <Alert severity="error" sx={{ mb: 2 }}>
              {loadingError}
            </Alert>
          ) : loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <ConversionOptions
              fileInfo={fileInfo}
              conversionOptions={conversionOptions}
              onConvert={handleConvert}
              loading={isConverting}
              error={error}
            />
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default ConvertPage;