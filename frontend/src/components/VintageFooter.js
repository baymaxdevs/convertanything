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
  Tooltip,
  Paper
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';

// SVG for decorative flourish
const Flourish = ({ color, width = 100, height = 20 }) => (
  <Box
    component="svg"
    width={width}
    height={height}
    viewBox="0 0 100 20"
    fill="none"
    sx={{ opacity: 0.6, my: 1 }}
  >
    <path
      d="M0,10 C30,18 70,18 100,10 M0,10 C30,2 70,2 100,10"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="50" cy="10" r="3" fill={color} opacity="0.5" />
  </Box>
);

// SVG for vintage stamp
const VintageStamp = ({ size = 40 }) => {
  const theme = useTheme();
  
  return (
    <Box
      component="svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      sx={{ opacity: 0.9 }}
    >
      <circle cx="20" cy="20" r="19" fill="#F9F3E6" stroke={theme.palette.primary.main} strokeWidth="1" />
      <circle cx="20" cy="20" r="17" fill="none" stroke={theme.palette.primary.main} strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M10,20 C10,14.5 14.5,10 20,10 C25.5,10 30,14.5 30,20 C30,25.5 25.5,30 20,30 C14.5,30 10,25.5 10,20 Z" fill="none" stroke={theme.palette.primary.main} strokeWidth="0.5" />
      <text x="20" y="17" fontSize="4" textAnchor="middle" fill={theme.palette.primary.main} fontFamily="serif" fontWeight="bold">BAYMAX</text>
      <text x="20" y="23" fontSize="4" textAnchor="middle" fill={theme.palette.primary.main} fontFamily="serif" fontWeight="bold">DEVS</text>
      <path d="M20,5 L20,8 M5,20 L8,20 M20,35 L20,32 M35,20 L32,20" stroke={theme.palette.primary.main} strokeWidth="0.5" />
    </Box>
  );
};

const VintageFooter = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23${theme.palette.primary.main.replace('#', '')}' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, rgba(184, 92, 56, 0) 0%, rgba(184, 92, 56, 0.3) 50%, rgba(184, 92, 56, 0) 100%)`,
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
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 1,
                letterSpacing: '0.02em',
              }}
            >
              ConvertAnything
            </Typography>
            <Flourish color={theme.palette.primary.main} width={150} height={15} />
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                fontFamily: '"Libre Baskerville", serif',
                fontStyle: 'italic',
              }}
            >
              Convert any file format with ease
            </Typography>
          </Box>
          
          <Paper
            elevation={1}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              width: { xs: '100%', md: 'auto' },
              minWidth: { md: 350 },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, rgba(184, 92, 56, 0.03) 0%, rgba(184, 92, 56, 0) 100%)`,
                borderRadius: 2,
                pointerEvents: 'none',
              }
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
              <VintageStamp size={36} />
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                Developed By: 
                <Box 
                  component="span" 
                  sx={{ 
                    ml: 1,
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                  }}
                >
                  BaymaxDevs
                </Box>
              </Typography>
            </Stack>
            
            <Divider sx={{ 
              mb: 1.5, 
              '&::before, &::after': {
                borderColor: 'rgba(95, 75, 50, 0.2)',
              }
            }} />
            
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
                      color: theme.palette.primary.main,
                      border: `1px solid ${theme.palette.primary.main}30`,
                      backgroundColor: `${theme.palette.primary.main}08`,
                      '&:hover': {
                        backgroundColor: `${theme.palette.primary.main}15`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <EmailIcon fontSize="small" />
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
                      border: `1px solid ${theme.palette.text.primary}30`,
                      backgroundColor: `${theme.palette.text.primary}08`,
                      '&:hover': {
                        backgroundColor: `${theme.palette.text.primary}15`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <GitHubIcon fontSize="small" />
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
                      border: `1px solid ${theme.palette.warning.main}30`,
                      backgroundColor: `${theme.palette.warning.main}08`,
                      '&:hover': {
                        backgroundColor: `${theme.palette.warning.main}15`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <LocalCafeIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CreateIcon 
                  fontSize="small" 
                  sx={{ 
                    mr: 0.5, 
                    color: theme.palette.text.secondary,
                    fontSize: '0.875rem'
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: '"Libre Baskerville", serif',
                    fontStyle: 'italic',
                    color: theme.palette.text.secondary
                  }}
                >
                  iamsharadh7@gmail.com
                </Typography>
              </Box>
            </Stack>
            
            {/* Buy Me Coffee Highlight */}
            <Box
              sx={{
                position: 'absolute',
                top: -15,
                right: -15,
                transform: 'rotate(5deg)',
                width: 80,
                height: 80,
                display: { xs: 'none', md: 'block' }
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #E8AA42 0%, #FFD8A9 100%)',
                  borderRadius: 1,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                  border: '1px dashed rgba(95, 75, 50, 0.3)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${theme.palette.secondary.main.replace('#', '')}' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z' /%3E%3C/g%3E%3C/svg%3E")`,
                    pointerEvents: 'none',
                    borderRadius: 1,
                  }
                }}
              >
                <LocalCafeIcon sx={{ color: theme.palette.secondary.main, mb: 0.5, fontSize: '1.5rem' }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: theme.palette.secondary.main,
                    textAlign: 'center',
                    lineHeight: 1,
                    fontSize: '0.6rem',
                  }}
                >
                  SUPPORT
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default VintageFooter;
