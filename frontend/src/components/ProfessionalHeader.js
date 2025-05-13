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
  SwapHoriz as SwapIcon
} from '@mui/icons-material';

const ProfessionalHeader = () => {
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
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={1}
      color="inherit"
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
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: theme.shadows[1],
                }}
              >
                <SwapIcon />
              </Avatar>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box component="span" sx={{ color: theme.palette.primary.main }}>Convert</Box>
                <Box component="span" sx={{ color: theme.palette.text.primary }}>Anything</Box>
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
                  borderRadius: 1,
                  px: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
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
                  borderRadius: 1,
                  px: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  }
                }}
              >
                About
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/#convert-section"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
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

export default ProfessionalHeader;
