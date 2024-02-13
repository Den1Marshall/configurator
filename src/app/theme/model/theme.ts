import { experimental_extendTheme as extendTheme } from '@mui/material';
import { Roboto } from 'next/font/google';
import { ukUA } from '@mui/material/locale';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
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
  },
  ukUA
);

theme.typography.h1 = {
  lineHeight: '100%',
  '@media only screen': {
    fontSize: '13.8vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '11rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '7.99rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '5rem',
  },
};
theme.typography.h2 = {
  '@media only screen and (min-width:320px) and (orientation: portrait)': {
    fontSize: '3.5vw',
  },
  '@media only screen and (min-width:320px) and (orientation: landscape)': {
    fontSize: '3.5vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.8rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '1.2rem',
  },
};
