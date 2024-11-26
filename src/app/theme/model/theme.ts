import { createTheme } from '@mui/material';
import { ukUA } from '@mui/material/locale';

export const theme = createTheme(
  {
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: '#fff',
          },
          secondary: {
            main: '#000',
          },
          background: {
            default: '#000',
          },
        },
      },

      light: {
        palette: {
          primary: {
            main: '#000',
          },
          secondary: {
            main: '#fff',
          },
        },
      },
    },

    typography: {
      fontFamily: 'var(--font-roboto)',
    },

    cssVariables: true,
  },
  ukUA
);

theme.typography.h1 = {
  transform: 'scaleY(1.35)',
  lineHeight: '110%',
  margin: '35% 0',
  fontSize: 'min(13.5vw, 172.48px)',
  fontWeight: 500,
  scrollSnapAlign: 'start',
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
};

theme.typography.h2 = {
  fontSize: 'min(3.5vw, 43.12px)',
};
