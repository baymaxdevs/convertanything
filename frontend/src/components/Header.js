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
  Avatar
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  AutoAwesome as SparkleIcon,
  Rocket as RocketIcon
} from '@mui/icons-material';

const Header = () => {
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
      sx={{ width: 250, pt: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(20, 27, 45, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
                sx={{ mr: 1 }}
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
              <Avatar
                sx={{
                  mr: 1.5,
                  background: 'linear-gradient(135deg, #8E24AA 0%, #00BCD4 100%)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                }}
              >
                <RocketIcon />
              </Avatar>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Audiowide',
                  fontWeight: 400,
                  background: 'linear-gradient(45deg, #8E24AA, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '1.5px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <SparkleIcon sx={{ mr: 0.5, fontSize: '0.8em', WebkitTextFillColor: '#00BCD4' }} />
                ConvertAnything
              </Typography>
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
                  borderRadius: 2,
                  px: 2,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.05)',
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
                  borderRadius: 2,
                  px: 2,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.05)',
                  }
                }}
              >
                About
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
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            backgroundImage: 'linear-gradient(135deg, #141B2D 0%, #1A2138 100%)',
            color: theme.palette.text.primary,
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;