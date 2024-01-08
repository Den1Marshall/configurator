import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';
import { ukUA } from '@mui/material/locale';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
    },

    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  },
  ukUA
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },

    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  },
  ukUA
);
