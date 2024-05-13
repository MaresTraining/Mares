import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import App from './App';
import { CssBaseline } from '@mui/material';
import SystemContextProvider from './contexts/SystemContext';
import AuthContextProvider from './contexts/AuthContext';
export const API = "http://localhost:5000";



const theme = createTheme({
  direction: 'rtl',
    typography: {
    fontFamily: 'Tajawal, sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SystemContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </SystemContextProvider>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>
);


