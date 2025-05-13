import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Grid, 
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.grey[100]
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          {/* Logo and tagline */}
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              color="primary"
              component={RouterLink}
              to="/"
              sx={{ 
                fontWeight: 700, 
                mb: 1,
                textDecoration: 'none',
                display: 'block'
              }}
            >
              Convert Anything
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The free and easy way to convert files between 100+ formats.
              No downloads required. Fast and secure.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link 
              component={RouterLink} 
              to="/" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
            >
              Home
            </Link>
            <Link 
              component={RouterLink} 
              to="/about" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
            >
              About
            </Link>
            {/* My Files link removed */}
          </Grid>

          {/* Legal */}
          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Legal
            </Typography>
            <Link 
              component={RouterLink} 
              to="/privacy" 
              color="inherit" 
              display="block" 
              sx={{ mb: 1 }}
            >
              Privacy Policy
            </Link>
            <Link 
              component={RouterLink} 
              to="/terms" 
              color="inherit" 
              display="block"
            >
              Terms of Service
            </Link>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Need help? Have feedback?<br />
              <Link 
                href="mailto:iamsharadh7@gmail.com" 
                color="inherit"
              >
                iamsharadh7@gmail.com
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          <Typography variant="body2" color="text.secondary" align={isMobile ? 'center' : 'left'}>
            &copy; {new Date().getFullYear()} Convert Anything. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;