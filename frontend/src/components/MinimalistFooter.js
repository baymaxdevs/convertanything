import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  Tooltip,
  Divider,
  Paper
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmailIcon from '@mui/icons-material/Email';

const MinimalistFooter = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                mb: 1
              }}
            >
              ConvertAnything
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Convert any file format with ease
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: { xs: 'center', md: 'right' } }}
          >
            &copy; {new Date().getFullYear()} ConvertAnything. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MinimalistFooter;
