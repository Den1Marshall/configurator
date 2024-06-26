'use client';
import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import { theme } from '../model/theme';

export const MUIThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CssVarsProvider defaultMode='system' theme={theme}>
      {getInitColorSchemeScript()}
      <CssBaseline enableColorScheme />
      {children}
    </CssVarsProvider>
  );
};
