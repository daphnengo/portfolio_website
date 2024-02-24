import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: purple[100],
    },
    secondary: {
      main: lime[400],
    },
  },
  sizings: {
    font: {
      xxs: '9px',
      xs: '10px',
      sm: '12px',
      med: '14px',
      lg: '16px',
      lg2: '18px',
      lg3: '20px',
      xl: '22px',
      xl2: '24px',
      xl3: '34px',
      xxl: '48px',
      xxl2: '60px',
    },
    fontWeight: {
      THIN: 100,
      LIGHT: 300,
      NORMAL: 400,
      MEDIUM: 500,
      SEMI_BOLD: 600,
      BOLD: 700,
      HEAVY: 900,
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif !important',
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
