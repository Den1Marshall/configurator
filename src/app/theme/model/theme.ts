import { experimental_extendTheme as extendTheme } from '@mui/material';
import { Roboto } from 'next/font/google';
import { ukUA } from '@mui/material/locale';
import localFont from 'next/font/local';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const lpFont = localFont({
  src: './lp.woff2',
  display: 'swap',
});

export const theme = extendTheme(
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
      fontFamily: roboto.style.fontFamily,
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          h1: { fontFamily: lpFont.style.fontFamily },
          h2: { fontFamily: lpFont.style.fontFamily },
        },
      },
    },
  },
  ukUA
);

theme.typography.h1 = {
  lineHeight: '150%',
  fontSize: 'min(calc(13.5vw), 172.48px)',
};
theme.typography.h2 = {
  fontSize: 'min(3.5vw, 43.12px)',
};
