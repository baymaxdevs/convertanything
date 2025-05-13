import { createTheme } from '@mui/material/styles';
import '@fontsource/playfair-display';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/libre-baskerville';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';

// Vintage color palette
const vintageTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B85C38', // Warm sepia
      light: '#D4825F',
      dark: '#8A4428',
      contrastText: '#F9F3E6',
    },
    secondary: {
      main: '#553939', // Dark brown
      light: '#7A5252',
      dark: '#3E2929',
      contrastText: '#F9F3E6',
    },
    background: {
      default: '#F2E8CF', // Cream parchment
      paper: '#F9F3E6', // Off-white
      card: '#F9F3E6', // Card background
      dark: '#553939', // Dark background for contrast
      darkPaper: '#6D4C41', // Darker paper for contrast
    },
    text: {
      primary: '#382933', // Dark brown
      secondary: '#5F4B32', // Medium brown
      disabled: '#A89B91', // Light brown
      hint: '#A89B91', // Light brown
    },
    error: {
      main: '#9E2B25', // Vintage red
      light: '#C44640',
      dark: '#7A1F1C',
    },
    warning: {
      main: '#E8AA42', // Vintage gold
      light: '#FFD8A9',
      dark: '#D38B29',
    },
    info: {
      main: '#5F7A61', // Vintage green
      light: '#7D9A7F',
      dark: '#435944',
    },
    success: {
      main: '#5F7A61', // Vintage green
      light: '#7D9A7F',
      dark: '#435944',
    },
    divider: 'rgba(95, 75, 50, 0.12)',
    action: {
      active: 'rgba(56, 41, 51, 0.54)',
      hover: 'rgba(184, 92, 56, 0.08)',
      selected: 'rgba(184, 92, 56, 0.16)',
      disabled: 'rgba(56, 41, 51, 0.26)',
      disabledBackground: 'rgba(56, 41, 51, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Libre Baskerville", "Georgia", "Times New Roman", serif',
    h1: {
      fontFamily: '"Tangerine", "Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Cinzel", "Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2.2rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Cinzel", "Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
      fontFamily: '"Libre Baskerville", serif',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontFamily: '"Libre Baskerville", serif',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontFamily: '"Libre Baskerville", serif',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontFamily: '"Libre Baskerville", serif',
    },
    button: {
      fontWeight: 600,
      fontSize: '1rem',
      textTransform: 'none',
      letterSpacing: '0.03em',
      fontFamily: '"Pacifico", "Playfair Display", serif',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.6,
      fontFamily: '"Libre Baskerville", serif',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontFamily: '"Playfair Display", serif',
    },
  },
  shape: {
    borderRadius: 15,
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(95, 75, 50, 0.1), 0px 1px 2px rgba(95, 75, 50, 0.06)',
    '0px 3px 6px rgba(95, 75, 50, 0.1), 0px 2px 4px rgba(95, 75, 50, 0.06)',
    '0px 10px 20px rgba(95, 75, 50, 0.1), 0px 3px 6px rgba(95, 75, 50, 0.06)',
    '0px 15px 25px rgba(95, 75, 50, 0.1), 0px 5px 10px rgba(95, 75, 50, 0.06)',
    '0px 20px 40px rgba(95, 75, 50, 0.1), 0px 8px 16px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
    '0px 25px 50px rgba(95, 75, 50, 0.1), 0px 10px 20px rgba(95, 75, 50, 0.06)',
  ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F3E6',
          color: '#382933',
          boxShadow: '0px 1px 3px rgba(95, 75, 50, 0.1), 0px 1px 2px rgba(95, 75, 50, 0.06)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23B85C38\' fill-opacity=\'0.05\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E")',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0px 6px 12px rgba(95, 75, 50, 0.2), 0px 2px 4px rgba(95, 75, 50, 0.15)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 5v1H0V0h5z\' /%3E%3C/g%3E%3C/svg%3E")',
            pointerEvents: 'none',
          },
        },
        contained: {
          boxShadow: '0px 3px 6px rgba(95, 75, 50, 0.15), 0px 2px 4px rgba(95, 75, 50, 0.1)',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(95, 75, 50, 0.2), 0px 3px 6px rgba(95, 75, 50, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #B85C38 0%, #A45C40 100%)',
          boxShadow: '0px 3px 6px rgba(95, 75, 50, 0.25), 0px 2px 4px rgba(95, 75, 50, 0.15)',
        },
        outlined: {
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'rgba(95, 75, 50, 0.3)',
          '&:hover': {
            borderWidth: 2,
            borderColor: 'rgba(95, 75, 50, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F3E6',
          boxShadow: '0px 4px 8px rgba(95, 75, 50, 0.1), 0px 2px 4px rgba(95, 75, 50, 0.06)',
          borderRadius: 15,
          overflow: 'hidden',
          border: '1px solid rgba(95, 75, 50, 0.08)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23B85C38\' fill-opacity=\'0.03\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E")',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23B85C38\' fill-opacity=\'0.03\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E")',
        },
        elevation1: {
          boxShadow: '0px 2px 4px rgba(95, 75, 50, 0.1), 0px 1px 2px rgba(95, 75, 50, 0.06)',
        },
        elevation2: {
          boxShadow: '0px 4px 8px rgba(95, 75, 50, 0.1), 0px 2px 4px rgba(95, 75, 50, 0.06)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: 'rgba(95, 75, 50, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(95, 75, 50, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#B85C38',
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(95, 75, 50, 0.12)',
        },
      },
    },
  },
});

export default vintageTheme;
