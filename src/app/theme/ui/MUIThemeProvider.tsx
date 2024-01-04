'use client';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { FC, ReactNode } from 'react';
import { darkTheme, lightTheme } from '../model/theme';

export const MUIThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
