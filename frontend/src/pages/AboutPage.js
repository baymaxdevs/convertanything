import React from 'react';
import { Container, Typography, Paper, Box, Grid, Divider, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material';
import { CheckCircle as CheckIcon, Code as CodeIcon, Security as SecurityIcon, Speed as SpeedIcon } from '@mui/icons-material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 5 }}>
        About Convert Anything
      </Typography>
      
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Convert Anything was created with a simple mission: to make file conversion accessible, easy, and reliable for everyone. 
          We believe that technology should simplify your life, not complicate it.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you need to convert images, videos, documents, or any other file type, our platform provides a seamless experience without the hassle of installing software or dealing with complex interfaces.
        </Typography>
      </Paper>
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              What We Offer
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Universal Format Support" 
                  secondary="Convert between hundreds of file formats across multiple categories"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Cross-Category Conversions" 
                  secondary="Transform your files across different format categories"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="High-Quality Output" 
                  secondary="We prioritize maintaining the quality of your files during conversion"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="User-Friendly Interface" 
                  secondary="Simple, intuitive design that works on all devices"
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Core Values
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SecurityIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Privacy & Security" 
                  secondary="Your files are private and automatically deleted after conversion"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SpeedIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Efficiency" 
                  secondary="Fast conversions with optimal resource usage"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Innovation" 
                  secondary="Constantly improving our conversion technology"
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      
      <Divider sx={{ mb: 6 }} />
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Technical Details
        </Typography>
        <Typography variant="body1" paragraph>
          Convert Anything is built using modern web technologies, with a focus on reliability and performance. Our backend processing system is designed to handle a wide range of file formats and conversion paths.
        </Typography>
        <Typography variant="body1" paragraph>
          We've implemented an intelligent format detection system that automatically identifies your file type, even when extensions are missing or incorrect. This allows us to suggest the most relevant conversion options for your specific file.
        </Typography>
        <Typography variant="body1" paragraph>
          For specialized conversions (like video to GIF, or creating transparent stickers), we provide additional customization options to ensure you get exactly the output you need.
        </Typography>
      </Box>
      
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to Convert Some Files?
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          href="/"
          sx={{ mt: 2 }}
        >
          Start Converting
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;