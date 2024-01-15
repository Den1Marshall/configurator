import { experimental_extendTheme as extendTheme } from '@mui/material';
import { Roboto } from 'next/font/google';
import { ukUA } from '@mui/material/locale';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const theme = extendTheme(
  {
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  },
  ukUA
);
