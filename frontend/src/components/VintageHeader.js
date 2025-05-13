import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  SwapHoriz as SwapIcon
} from '@mui/icons-material';

// SVG for decorative flourish
const Flourish = ({ color, width = 24, height = 24 }) => (
  <Box
    component="svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    sx={{ opacity: 0.6 }}
  >
    <path
      d="M6,12 C3.5,9.5 3.5,5.5 6,3 M18,12 C20.5,9.5 20.5,5.5 18,3 M3,9 C5.5,11.5 9.5,11.5 12,9 M12,9 C14.5,11.5 18.5,11.5 21,9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Box>
);

const VintageHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle mobile drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Mobile drawer content
  const drawerContent = (
    <Box
      sx={{
        width: 250,
        pt: 2,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23${theme.palette.primary.main.replace('#', '')}' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              background: `radial-gradient(circle, #D4825F 0%, #B85C38 60%, #8A4428 100%)`,
              border: '2px solid rgba(95, 75, 50, 0.2)',
              boxShadow: '0 3px 6px rgba(95, 75, 50, 0.15)',
            }}
          >
            <SwapIcon sx={{ fontSize: 30, color: '#F9F3E6' }} />
          </Avatar>
        </Box>
      </Box>
      
      <Divider sx={{ 
        my: 2, 
        '&::before, &::after': {
          borderColor: 'rgba(95, 75, 50, 0.2)',
        },
        borderColor: 'rgba(95, 75, 50, 0.2)',
        '&::before, &::after': {
          borderTop: '1px solid rgba(95, 75, 50, 0.2)',
        }
      }} />
      
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Home" 
            primaryTypographyProps={{ 
              fontFamily: '"Playfair Display", serif',
              fontWeight: 500
            }} 
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="About" 
            primaryTypographyProps={{ 
              fontFamily: '"Playfair Display", serif',
              fontWeight: 500
            }} 
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={1}
      color="inherit"
      sx={{
        borderBottom: '1px solid rgba(95, 75, 50, 0.12)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo and mobile menu button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ 
                  mr: 1,
                  color: theme.palette.primary.main,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  sx={{
                    mr: 2,
                    width: 48,
                    height: 48,
                    background: `radial-gradient(circle, #D4825F 0%, #B85C38 60%, #8A4428 100%)`,
                    border: '2px solid rgba(95, 75, 50, 0.2)',
                    boxShadow: '0 3px 6px rgba(95, 75, 50, 0.15)',
                  }}
                >
                  <SwapIcon sx={{ color: '#F9F3E6' }} />
                </Avatar>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Flourish color={theme.palette.primary.main} width={16} height={16} />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    alignItems: 'center',
                    mx: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  <Box component="span" sx={{ color: theme.palette.primary.main }}>Convert</Box>
                  <Box component="span" sx={{ color: theme.palette.text.primary }}>Anything</Box>
                </Typography>
                <Flourish color={theme.palette.primary.main} width={16} height={16} />
              </Box>
            </Box>
          </Box>

          {/* Desktop navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{
                  mx: 1,
                  px: 2,
                  fontFamily: '"Playfair Display", serif',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    width: 0,
                    height: 1,
                    backgroundColor: theme.palette.primary.main,
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '60%',
                  }
                }}
              >
                Home
              </Button>

              <Button
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{
                  mx: 1,
                  px: 2,
                  fontFamily: '"Playfair Display", serif',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    width: 0,
                    height: 1,
                    backgroundColor: theme.palette.primary.main,
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '60%',
                  }
                }}
              >
                About
              </Button>
              
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/#convert-section"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontFamily: '"Playfair Display", serif',
                  color: '#F9F3E6',
                  boxShadow: '0 2px 4px rgba(85, 57, 57, 0.2)',
                  border: '1px solid rgba(85, 57, 57, 0.1)',
                  background: 'linear-gradient(to bottom, #553939, #3E2929)',
                  '&:hover': {
                    background: 'linear-gradient(to bottom, #624242, #553939)',
                  }
                }}
              >
                Start Converting
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default VintageHeader;
