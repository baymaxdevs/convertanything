import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
  useTheme,
  Tooltip
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

const ProfessionalFooter = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 1
              }}
            >
              ConvertAnything
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Convert any file format with ease
            </Typography>
          </Box>
          
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[1],
              width: { xs: '100%', md: 'auto' },
              minWidth: { md: 350 },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
              <CodeIcon sx={{ color: theme.palette.primary.main }} />
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 600,
                }}
              >
                Developed By: 
                <Box 
                  component="span" 
                  sx={{ 
                    ml: 1,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  BaymaxDevs
                </Box>
              </Typography>
            </Stack>
            
            <Divider sx={{ mb: 1.5 }} />
            
            <Stack 
              direction="row" 
              alignItems="center" 
              justifyContent="space-between"
              spacing={1}
            >
              <Stack direction="row" spacing={1}>
                <Tooltip title="Email: iamsharadh7@gmail.com">
                  <IconButton 
                    component="a" 
                    href="mailto:iamsharadh7@gmail.com" 
                    size="small"
                    sx={{ 
                      color: theme.palette.info.main,
                      '&:hover': {
                        color: theme.palette.info.dark,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="GitHub">
                  <IconButton 
                    component="a" 
                    href="https://github.com/baymaxdevs" 
                    target="_blank"
                    size="small"
                    sx={{ 
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Buy Me a Coffee">
                  <IconButton 
                    component="a" 
                    href="https://buymeacoffee.com/baymaxdevs" 
                    target="_blank"
                    size="small"
                    sx={{ 
                      color: theme.palette.warning.main,
                      '&:hover': {
                        color: theme.palette.warning.dark,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <LocalCafeIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 500,
                  color: theme.palette.text.secondary
                }}
              >
                iamsharadh7@gmail.com
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalFooter;
