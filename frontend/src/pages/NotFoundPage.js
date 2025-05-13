import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 5, 
          textAlign: 'center',
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '6rem', md: '10rem' },
            fontWeight: 700,
            color: 'primary.main',
            mb: 2
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ mb: 3, fontWeight: 500 }}
        >
          Page Not Found
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          paragraph
          sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
          Maybe the file was deleted, the URL changed, or the page is temporarily unavailable.
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            sx={{ px: 4, py: 1.5 }}
          >
            Go to Homepage
          </Button>
        </Box>
        
        <Box sx={{ mt: 5 }}>
          <Typography variant="body2" color="text.secondary">
            Looking to convert a file? Head back to our homepage and start your conversion.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFoundPage;