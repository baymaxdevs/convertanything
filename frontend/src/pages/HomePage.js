import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme
} from '@mui/material';
import FileUpload from '../components/FileUpload';
import JokeGenerator from '../components/JokeGenerator';
import { ConversionProvider } from '../contexts/ConversionContext';

// Import icons
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MovieIcon from '@mui/icons-material/Movie';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import ShieldIcon from '@mui/icons-material/Shield';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SecurityIcon from '@mui/icons-material/Security';

const HomePage = () => {
  const theme = useTheme();

  return (
    <ConversionProvider>
      <Helmet>
        <title>Convert Anything - Free Online File Converter</title>
        <meta name="description" content="Convert files between 100+ formats online for free. Support for images, videos, documents, audio files, and more. No registration required." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={10} sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontFamily: '"Courier New", monospace',
                  position: 'relative',
                  display: 'inline-block',
                  borderBottom: '1px solid #000',
                  pb: 2,
                  px: { xs: 1, sm: 0 },
                  width: { xs: '95%', sm: 'auto' }
                }}
              >
                Convert Any File Format
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  maxWidth: { xs: '95%', sm: '90%' },
                  mx: 'auto',
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  fontFamily: '"Courier New", monospace',
                  px: { xs: 1, sm: 0 }
                }}
              >
                Free, fast and secure file conversion between 100+ formats.
                No registration required.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button
                  component="a"
                  href="#convert-section"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: '"Courier New", monospace',
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: '#333333',
                    }
                  }}
                >
                  Start Converting
                </Button>

                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: '"Courier New", monospace',
                    borderColor: '#000000',
                    color: '#000000',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: '#F0F0F0',
                      borderColor: '#000000',
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>

              {/* Removed bottom decorative elements that caused random lines */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Format categories section */}
      <Container sx={{ px: { xs: 1, sm: 2, md: 3 }, maxWidth: '100%' }}>
        <Box
          sx={{
            mt: { xs: -4, sm: -6 },
            p: { xs: 1, sm: 2, md: 3 },
            bgcolor: 'background.paper',
            position: 'relative',
            zIndex: 2,
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: 0,
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Grid container spacing={1} justifyContent="center">
            <FormatCategory
              icon={<ImageIcon fontSize="large" color="primary" />}
              title="Images"
              items={['JPG', 'PNG', 'WEBP', 'HEIC', 'SVG', 'GIF']}
            />
            <FormatCategory
              icon={<MovieIcon fontSize="large" color="secondary" />}
              title="Videos"
              items={['MP4', 'MKV', 'AVI', 'MOV', 'GIF', 'WEBM']}
            />
            <FormatCategory
              icon={<DescriptionIcon fontSize="large" color="info" />}
              title="Documents"
              items={['PDF', 'DOCX', 'TXT', 'ODT', 'RTF', 'MD']}
            />
            <FormatCategory
              icon={<PictureAsPdfIcon fontSize="large" color="warning" />}
              title="eBooks"
              items={['EPUB', 'MOBI', 'AZW3', 'PDF', 'FB2', 'CBZ']}
            />
            <FormatCategory
              icon={<AudiotrackIcon fontSize="large" color="error" />}
              title="Audio"
              items={['MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A']}
            />
            <FormatCategory
              icon={<FolderZipIcon fontSize="large" color="success" />}
              title="Archives"
              items={['ZIP', 'RAR', '7Z', 'TAR', 'ISO', 'GZ']}
            />
          </Grid>
        </Box>
      </Container>

      {/* Upload section */}
      <Box
        id="convert-section"
        sx={{
          pt: 8,
          pb: 10,
          position: 'relative',
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ position: 'relative', mb: 4 }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontWeight={700}
              gutterBottom
              sx={{
                mb: 2,
                color: theme.palette.text.primary,
                fontFamily: '"Courier New", monospace',
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                borderBottom: '1px solid #000',
                pb: 2,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              Convert Your File Now
            </Typography>
          </Box>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
              fontFamily: '"Courier New", monospace',
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              px: { xs: 1, sm: 2, md: 0 }
            }}
          >
            Simply upload your file and we'll detect the best conversion options.
            No registration required.
          </Typography>

          <FileUpload />

          {/* Joke Generator */}
          <Box sx={{ mt: 6 }}>
            <JokeGenerator />
          </Box>
        </Container>
      </Box>

      {/* Features section */}
      <Box sx={{
        py: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        backgroundColor: '#F5F5F5',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <Container sx={{ maxWidth: '100%', px: { xs: 1, sm: 2, md: 3 } }}>
          <Box sx={{ position: 'relative', mb: { xs: 1, sm: 1.5, md: 2 }, width: '100%' }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontWeight={700}
              gutterBottom
              sx={{
                mb: { xs: 1, sm: 1.5, md: 2 },
                color: theme.palette.text.primary,
                fontFamily: '"Courier New", monospace',
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                borderBottom: '1px solid #000',
                pb: { xs: 1, sm: 1.5, md: 2 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
              }}
            >
              Why Choose ConvertAnything?
            </Typography>
          </Box>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
              fontFamily: '"Courier New", monospace',
              lineHeight: 1.6,
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            Our platform offers the best file conversion experience with powerful features.
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Feature
              icon={<SpeedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />}
              title="Lightning Fast"
              description="Our optimized conversion engine processes your files quickly, saving you time."
            />
            <Feature
              icon={<SecurityIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />}
              title="100% Secure"
              description="Your files are automatically deleted after conversion. We never share your data."
            />
            <Feature
              icon={<CloudDoneIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />}
              title="Cloud Powered"
              description="All processing happens in the cloud - no need to install any software."
            />
            <Feature
              icon={<PublicIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />}
              title="100+ Formats"
              description="Support for all major file formats and specialized conversions."
            />
            <Feature
              icon={<DevicesIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />}
              title="Any Device"
              description="Works perfectly on desktop, tablet, and mobile devices."
            />
            <Feature
              icon={<ShieldIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />}
              title="Free to Use"
              description="All basic conversions are completely free with no hidden costs."
            />
          </Grid>
        </Container>
      </Box>

      {/* How it works section */}
      <Box sx={{
        py: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <Container sx={{ maxWidth: '100%', px: { xs: 1, sm: 2, md: 3 } }}>
          <Box sx={{ position: 'relative', mb: { xs: 1, sm: 1.5, md: 2 }, width: '100%' }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontWeight={700}
              gutterBottom
              sx={{
                mb: { xs: 1, sm: 1.5, md: 2 },
                color: theme.palette.text.primary,
                fontFamily: '"Courier New", monospace',
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                borderBottom: '1px solid #000',
                pb: { xs: 1, sm: 1.5, md: 2 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
              }}
            >
              How It Works
            </Typography>
          </Box>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
              fontFamily: '"Courier New", monospace',
              lineHeight: 1.6,
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            Converting files is simple and straightforward with our 3-step process.
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <StepCard
              number="1"
              title="Upload Your File"
              description="Select or drag & drop your file into the upload area. We support files up to 500MB."
            />
            <StepCard
              number="2"
              title="Choose Target Format"
              description="Select from suggested formats or browse all available conversion options."
            />
            <StepCard
              number="3"
              title="Download Result"
              description="Your converted file will be ready to download immediately after conversion."
            />
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 4, sm: 5, md: 6 },
          my: { xs: 4, sm: 5, md: 6 },
          backgroundColor: '#FFFFFF',
          color: '#000000',
          maxWidth: { xs: '95%', sm: '92%', md: '90%' },
          mx: 'auto',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <Container sx={{ maxWidth: '100%', px: { xs: 1, sm: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  color: '#000000',
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 700,
                  position: 'relative',
                  display: 'inline-block',
                  borderBottom: '1px solid #000',
                  pb: { xs: 0.5, sm: 0.75, md: 1 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                  width: { xs: '100%', md: 'auto' },
                }}
              >
                Ready to Convert Your Files?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: { xs: 2, sm: 2, md: 2 },
                  fontWeight: 400,
                  fontFamily: '"Courier New", monospace',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                }}
              >
                Start using our free file converter now - no signup required.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Button
                component="a"
                href="#convert-section"
                variant="contained"
                size="large"
                sx={{
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  px: { xs: 2, sm: 3, md: 4 },
                  fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                  fontWeight: 600,
                  fontFamily: '"Courier New", monospace',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    backgroundColor: '#333333',
                  }
                }}
              >
                Start Converting
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ConversionProvider>
  );
};

// Format Category Component
const FormatCategory = ({ icon, title, items }) => {
  return (
    <Grid item xs={6} sm={4} md={2}>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: { xs: 0.75, sm: 1.5, md: 2 },
          pt: { xs: 1.5, sm: 2, md: 3 },
          height: '100%',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
          borderRadius: 0,
          position: 'relative',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          minHeight: { xs: '140px', sm: '160px', md: '180px' },
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 0.5, sm: 1, md: 1.5 },
            width: { xs: 32, sm: 40, md: 48 },
            height: { xs: 32, sm: 40, md: 48 },
            border: '1px solid rgba(0, 0, 0, 0.12)',
            position: 'relative',
            zIndex: 1,
            color: '#000000',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          component="h3"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
            mb: 0.5,
            color: '#000000',
            fontFamily: '"Courier New", monospace',
            fontWeight: 600,
            position: 'relative',
            zIndex: 1,
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#FFFFFF',
            p: { xs: 0.25, sm: 0.5, md: 0.75 },
            border: '1px solid rgba(0, 0, 0, 0.12)',
            width: '100%',
            overflow: 'hidden',
            mt: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '100%',
            gap: { xs: 0.1, sm: 0.2, md: 0.3 },
          }}>
            {items.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                color="text.secondary"
                component="span"
                sx={{
                  display: 'inline-block',
                  fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                  fontFamily: '"Courier New", monospace',
                  padding: { xs: '0 1px', sm: '0 2px' },
                }}
              >
                {item}{index < items.length - 1 ? ',' : ''}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

// Feature Component
const Feature = ({ icon, title, description }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          pt: { xs: 3, sm: 3.5, md: 4 },
          pb: { xs: 3, sm: 3.5, md: 4 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: 0,
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >

        <Box
          sx={{
            mb: { xs: 1.5, sm: 2, md: 3 },
            p: { xs: 1.5, sm: 1.75, md: 2 },
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            border: '1px solid rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            color: '#000000',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            mb: { xs: 1, sm: 1.5, md: 2 },
            color: '#000000',
            fontFamily: '"Courier New", monospace',
            fontWeight: 600,
            position: 'relative',
            borderBottom: '1px solid #000',
            pb: { xs: 0.5, sm: 0.75, md: 1 },
            width: '100%',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            fontFamily: '"Courier New", monospace',
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' },
            width: '100%',
            wordBreak: 'break-word',
          }}
        >
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
};

// Step Card Component
const StepCard = ({ number, title, description }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          pt: { xs: 3, sm: 3.5, md: 4 },
          pb: { xs: 3, sm: 3.5, md: 4 },
          height: '100%',
          position: 'relative',
          borderRadius: 0,
          overflow: 'hidden',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            position: 'absolute',
            top: { xs: 10, sm: 12, md: 15 },
            right: { xs: 10, sm: 12, md: 15 },
            fontFamily: '"Courier New", monospace',
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#000000',
            lineHeight: 1,
          }}
        >
          {number}
        </Typography>

        <Box
          sx={{
            pr: { xs: 3, sm: 4, md: 5 },
            position: 'relative',
            width: '100%',
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              mb: { xs: 1, sm: 1.5, md: 2 },
              color: '#000000',
              fontFamily: '"Courier New", monospace',
              fontWeight: 600,
              position: 'relative',
              borderBottom: '1px solid #000',
              pb: { xs: 0.5, sm: 0.75, md: 1 },
              width: '100%',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontFamily: '"Courier New", monospace',
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' },
              position: 'relative',
              width: '100%',
              wordBreak: 'break-word',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default HomePage;