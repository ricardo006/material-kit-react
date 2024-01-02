import { alpha } from '@mui/material/styles';

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // define cor de fundo quando menu abre, modais e etc
          backgroundColor: alpha(theme.palette.grey[500], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}
