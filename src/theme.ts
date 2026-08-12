import { createTheme, PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            main: '#00e676',
            contrastText: '#0d0d0d',
          },
          secondary: {
            main: '#b026ff',
          },
          background: {
            default: '#0d0d0d',
            paper: '#1f1f1f',
          },
          text: {
            primary: '#f5f5f5',
            secondary: '#808080',
          },
        }
      : {
          primary: {
            main: '#2e7d32',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#7b1fa2',
          },
          background: {
            default: '#f6f7f9',
            paper: '#ffffff',
          },
          text: {
            primary: '#141414',
            secondary: '#5f6368',
          },
        }),
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export const getTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
