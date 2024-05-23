'use client';
import { Raleway } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const raleway = Raleway({
  weight: ['500', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(19, 19, 19)',
    },
  },
  typography: {
    fontFamily: raleway.style.fontFamily,
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontSize: 20,
          fontWeight: 500,
          padding: 0,
          lineHeight: 1,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 17,
          fontWeight: 500,
          color: '#a0a0a0',
        },
      },
    },
  },
});

export default theme;
