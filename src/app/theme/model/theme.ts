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

theme.typography.h1 = {
  lineHeight: '100%',
  '@media (min-width:320px)': {
    fontSize: '2.7rem',
  },
  '@media (min-width:360px)': {
    fontSize: '3.1rem',
  },
  '@media (min-width:375px)': {
    fontSize: '3.2rem',
  },
  '@media (min-width:390px)': {
    fontSize: '3.4rem',
  },
  '@media (min-width:414px)': {
    fontSize: '3.6rem',
  },
  '@media (min-width:428px)': {
    fontSize: '3.8rem',
  },
  [theme.breakpoints.only('xl')]: {
    fontSize: '14rem',
  },
  [theme.breakpoints.only('lg')]: {
    fontSize: '11rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '8rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '5rem',
  },
};
theme.typography.h2 = {
  '@media (min-width:320px)': {
    fontSize: '0.64rem',
  },
  '@media (min-width:360px)': {
    fontSize: '0.74rem',
  },
  '@media (min-width:375px)': {
    fontSize: '0.77rem',
  },
  '@media (min-width:390px)': {
    fontSize: '0.8rem',
  },
  '@media (min-width:414px)': {
    fontSize: '0.84rem',
  },
  '@media (min-width:428px)': {
    fontSize: '0.87rem',
  },
  [theme.breakpoints.only('xl')]: {
    fontSize: '3.6rem',
  },
  [theme.breakpoints.only('lg')]: {
    fontSize: '2.8rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '1.2rem',
  },
};
