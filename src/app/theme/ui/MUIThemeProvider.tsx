'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';
import { theme } from '../model/theme';

export const MUIThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider defaultMode='system' theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
