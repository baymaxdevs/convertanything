import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';

// Professional color palette
const professionalTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5046E4', // Vibrant indigo
      light: '#6E66FF',
      dark: '#3F37B3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00B8D9', // Bright teal
      light: '#57D9EE',
      dark: '#0098B7',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F7F9FC', // Light gray background
      paper: '#FFFFFF', // White paper
      card: '#FFFFFF', // Card background
      dark: '#2A2F45', // Dark background for contrast
      darkPaper: '#353A50', // Darker paper for contrast
    },
    text: {
      primary: '#2A2F45', // Dark blue-gray
      secondary: '#6B7280', // Medium gray
      disabled: '#9CA3AF', // Light gray
      hint: '#9CA3AF', // Light gray
    },
    error: {
      main: '#F44336', // Red
      light: '#FF7961',
      dark: '#BA000D',
    },
    warning: {
      main: '#FF9800', // Orange
      light: '#FFB74D',
      dark: '#F57C00',
    },
    info: {
      main: '#2196F3', // Blue
      light: '#64B5F6',
      dark: '#0B79D0',
    },
    success: {
      main: '#4CAF50', // Green
      light: '#80E27E',
      dark: '#087F23',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
    '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.06), 0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 8px 16px rgba(0, 0, 0, 0.06), 0px 16px 24px rgba(0, 0, 0, 0.1)',
    '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 24px 32px rgba(0, 0, 0, 0.1)',
    '0px 24px 32px rgba(0, 0, 0, 0.06), 0px 32px 40px rgba(0, 0, 0, 0.1)',
    '0px 32px 40px rgba(0, 0, 0, 0.06), 0px 40px 48px rgba(0, 0, 0, 0.1)',
    '0px 40px 48px rgba(0, 0, 0, 0.06), 0px 48px 56px rgba(0, 0, 0, 0.1)',
    '0px 48px 56px rgba(0, 0, 0, 0.06), 0px 56px 64px rgba(0, 0, 0, 0.1)',
    '0px 56px 64px rgba(0, 0, 0, 0.06), 0px 64px 72px rgba(0, 0, 0, 0.1)',
    '0px 64px 72px rgba(0, 0, 0, 0.06), 0px 72px 80px rgba(0, 0, 0, 0.1)',
    '0px 72px 80px rgba(0, 0, 0, 0.06), 0px 80px 88px rgba(0, 0, 0, 0.1)',
    '0px 80px 88px rgba(0, 0, 0, 0.06), 0px 88px 96px rgba(0, 0, 0, 0.1)',
    '0px 88px 96px rgba(0, 0, 0, 0.06), 0px 96px 104px rgba(0, 0, 0, 0.1)',
    '0px 96px 104px rgba(0, 0, 0, 0.06), 0px 104px 112px rgba(0, 0, 0, 0.1)',
    '0px 104px 112px rgba(0, 0, 0, 0.06), 0px 112px 120px rgba(0, 0, 0, 0.1)',
    '0px 112px 120px rgba(0, 0, 0, 0.06), 0px 120px 128px rgba(0, 0, 0, 0.1)',
    '0px 120px 128px rgba(0, 0, 0, 0.06), 0px 128px 136px rgba(0, 0, 0, 0.1)',
    '0px 128px 136px rgba(0, 0, 0, 0.06), 0px 136px 144px rgba(0, 0, 0, 0.1)',
    '0px 136px 144px rgba(0, 0, 0, 0.06), 0px 144px 152px rgba(0, 0, 0, 0.1)',
    '0px 144px 152px rgba(0, 0, 0, 0.06), 0px 152px 160px rgba(0, 0, 0, 0.1)',
    '0px 152px 160px rgba(0, 0, 0, 0.06), 0px 160px 168px rgba(0, 0, 0, 0.1)',
    '0px 160px 168px rgba(0, 0, 0, 0.06), 0px 168px 176px rgba(0, 0, 0, 0.1)',
  ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2A2F45',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06), 0px 8px 16px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        },
        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
          overflow: 'hidden',
          border: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        },
        elevation2: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.24)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#5046E4',
            },
          },
        },
      },
    },
  },
});

export default professionalTheme;
