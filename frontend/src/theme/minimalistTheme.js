import { createTheme } from '@mui/material/styles';

// Minimalist black and white theme
const minimalistTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black
      light: '#333333',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#333333', // Dark gray
      light: '#555555',
      dark: '#111111',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF', // White
      paper: '#F5F5F5', // Light gray
      card: '#FFFFFF', // White
    },
    text: {
      primary: '#000000', // Black
      secondary: '#333333', // Dark gray
      disabled: '#777777', // Medium gray
    },
    error: {
      main: '#000000',
    },
    warning: {
      main: '#333333',
    },
    info: {
      main: '#555555',
    },
    success: {
      main: '#000000',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: '"Courier New", monospace',
    h1: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 700,
      letterSpacing: '0px',
    },
    h2: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 700,
      letterSpacing: '0px',
    },
    h3: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
      letterSpacing: '0px',
    },
    h4: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Courier New", monospace',
    },
    subtitle2: {
      fontFamily: '"Courier New", monospace',
    },
    body1: {
      fontFamily: '"Courier New", monospace',
    },
    body2: {
      fontFamily: '"Courier New", monospace',
    },
    button: {
      fontFamily: '"Courier New", monospace',
      fontWeight: 600,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Courier New", monospace',
    },
    overline: {
      fontFamily: '"Courier New", monospace',
    },
  },
  shape: {
    borderRadius: 0, // Square corners for Wikipedia-like appearance
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '8px 16px',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#F0F0F0',
          },
        },
        contained: {
          backgroundColor: '#F0F0F0',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
            backgroundColor: '#F0F0F0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          borderRadius: 0,
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 0,
        },
        elevation1: {
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
        elevation2: {
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000000',
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },
});

export default minimalistTheme;
