import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import purpleTheme from './purpleTheme';

purpleTheme
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
