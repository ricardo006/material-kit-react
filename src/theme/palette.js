import { alpha } from '@mui/material/styles';

// SETUP COLORS
const GREY = {
  0: '#001D3D',
  100: '#001D3D',
  200: '#183D66',
  300: '#164D89',
  400: '#3970AE',
  500: '#30557D',
  600: '#edf2f4',
  700: '#5485BC',
  800: '#eff7f6',
  900: '#30557D',
};

const PRIMARY = {
  lighter: '#023047',
  light: '#073B4C',
  main: '#33FFC2',
  dark: '#B6F4E2',
  darker: '#33FFC2',
  contrastText: '#023047',
};

const SECONDARY = {
  lighter: '#F4F6F8',
  light: '#B6F4E2',
  main: '#33FFC2',
  dark: '#B6F4E2',
  darker: '#B6F4E2',
  contrastText: '#023047',
};

const INFO = {
  lighter: '#efd9ce',
  light: '#efd9ce',
  main: '#957fef',
  dark: '#efd9ce',
  darker: '#efd9ce',
  contrastText: '#efd9ce',
};

const SUCCESS = {
  lighter: '#B6F4E2',
  light: '#B6F4E2',
  main: '#33FFC2',
  dark: '#B6F4E2',
  darker: '#B6F4E2',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#edf2f4',
  light: '#edf2f4',
  main: '#eeef20',
  dark: '#edf2f4',
  darker: '#edf2f4',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#d9115a',
  light: '#d9115a',
  main: '#b23a48',
  dark: '#db504a',
  darker: '#d9115a',
  contrastText: '#d9115a',
};

const CARD_VENDAS = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#0077b6',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const CARD_CLIENTES = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#731dd8',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const CARD_BILHETES = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#28ada8',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const CARD_COMISSAO = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#f79d65',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#001D3D', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  cl_vendas: CARD_VENDAS,
  cl_clientes: CARD_CLIENTES,
  cl_bilhetes: CARD_BILHETES,
  cl_comissao: CARD_COMISSAO,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#001D3D',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
