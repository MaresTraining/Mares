import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import SystemContextProvider from './contexts/SystemContext';
import AuthContextProvider from './contexts/AuthContext';
export const API = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>

      <SystemContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </SystemContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);


