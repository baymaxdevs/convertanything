import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  useTheme,
  Tooltip,
  Divider,
  Paper
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmailIcon from '@mui/icons-material/Email';

const SpaceFooter = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        background: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
        },
        // Add star-like dots in the background
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px, 90px 90px',
          backgroundPosition: '0 0, 15px 15px',
          pointerEvents: 'none',
          opacity: 0.3,
        }
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
                fontFamily: '"Outfit", sans-serif',
                background: 'linear-gradient(45deg, #8E24AA, #00BCD4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              ConvertAnything
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.3px'
              }}
            >
              Convert any file format with ease
            </Typography>
          </Box>

          <Paper
            elevation={4}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              p: 2,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(142, 36, 170, 0.3) 0%, rgba(0, 188, 212, 0.3) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, rgba(142, 36, 170, 0.5), rgba(0, 188, 212, 0.5))',
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.text.primary,
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.5px'
                }}
              >
                Developed By:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #8E24AA, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"Outfit", sans-serif',
                  letterSpacing: '0.5px'
                }}
              >
                BaymaxDevs
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
            <Divider sx={{ width: '100%', display: { xs: 'block', sm: 'none' }, my: 1 }} />

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Tooltip title="Email: iamsharadh7@gmail.com">
                <IconButton
                  component="a"
                  href="mailto:iamsharadh7@gmail.com"
                  size="small"
                  sx={{
                    color: theme.palette.info.main,
                    '&:hover': {
                      color: theme.palette.info.light,
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
                    color: theme.palette.primary.main,
                    '&:hover': {
                      color: theme.palette.primary.light,
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
                      color: theme.palette.warning.light,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  <LocalCafeIcon />
                </IconButton>
              </Tooltip>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  ml: 1,
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.3px'
                }}
              >
                iamsharadh7@gmail.com
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default SpaceFooter;
