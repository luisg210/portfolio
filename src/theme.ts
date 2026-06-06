import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffff',
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

export default theme;
