import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#4F46E5',
          dark: '#4338CA',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#14B8A6',
          contrastText: '#FFFFFF',
        },
        warning: {
          main: '#F59E0B',
        },
        error: {
          main: '#EF4444',
        },
        background: {
          default: '#F9FAFB',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
        divider: '#E5E7EB',
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#4F46E5',
          dark: '#4338CA',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#1E293B',
          contrastText: '#0F172A',
        },
        warning: {
          main: '#F59E0B',
        },
        error: {
          main: '#EF4444',
        },
        background: {
          default: '#0F172A',
          paper: '#1E293B',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
        },
        divider: '#334155',
      },
    },
  },
});

export default theme;