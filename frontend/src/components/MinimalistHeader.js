import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmailIcon from '@mui/icons-material/Email';

const MinimalistHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Privacy Policy', path: '/privacy' },
    { text: 'Terms of Service', path: '/terms' },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          mb: 2,
          border: '1px solid #D4AF37',
          borderRadius: 1,
          mx: 2,
          mt: 2,
          boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)'
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            color: '#000000',
            mb: 1
          }}
        >
          Developed By: Baymax
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton
            component="a"
            href="mailto:iamsharadh7@gmail.com"
            size="small"
            sx={{ color: '#000000', p: 0.5 }}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/baymaxdevs"
            target="_blank"
            size="small"
            sx={{ color: '#000000', p: 0.5 }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://buymeacoffee.com/baymaxdevs"
            target="_blank"
            size="small"
            sx={{ color: '#000000', p: 0.5 }}
          >
            <LocalCafeIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  mr: 1.5,
                  backgroundColor: '#000000',
                }}
              >
                <SwapHorizIcon />
              </Avatar>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box component="span">ConvertAnything</Box>
              </Typography>
            </Box>
          </Box>

          {/* Developer credit - visible on all devices */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 'auto',
            mr: { xs: 2, sm: 0 }
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                py: 0.5,
                px: { xs: 1, sm: 1.5 },
                border: '1px solid #D4AF37',
                borderRadius: 1,
                boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)',
                maxWidth: { xs: '120px', sm: 'none' }
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 'bold',
                  color: '#000000',
                  mr: { xs: 0, sm: 1 },
                  mb: { xs: 0.5, sm: 0 },
                  fontSize: { xs: '0.7rem', sm: '0.875rem' },
                  textAlign: 'center'
                }}
              >
                Developed By: Baymax
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconButton
                  component="a"
                  href="mailto:iamsharadh7@gmail.com"
                  size="small"
                  sx={{ color: '#000000', p: { xs: 0.3, sm: 0.5 } }}
                >
                  <EmailIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.25rem' } }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/baymaxdevs"
                  target="_blank"
                  size="small"
                  sx={{ color: '#000000', p: { xs: 0.3, sm: 0.5 } }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.25rem' } }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://buymeacoffee.com/baymaxdevs"
                  target="_blank"
                  size="small"
                  sx={{ color: '#000000', p: { xs: 0.3, sm: 0.5 } }}
                >
                  <LocalCafeIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.25rem' } }} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MinimalistHeader;
