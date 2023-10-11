import { alpha } from '@mui/material/styles';

// SETUP COLORS
const GREY = {
  0: '#001D3D',
  100: '#001D3D',
  200: '#183D66',
  300: '#164D89',
  400: '#3970AE',
  500: '#30557D',
  600: '#B9DAFF',
  700: '#5485BC',
  800: '#B9DAFF',
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
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#4361EE',
  dark: '#4361EE',
  darker: '#001D3D',
  contrastText: '#D0F2FF',
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
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#FFEDA8',
  darker: '#FFEDA8',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FF99AC',
  light: '#F32A50',
  main: '#FF1743',
  dark: '#B72136',
  darker: '#FF99AC',
  contrastText: '#FF99AC',
};

const CARD_VENDAS = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#00B2CA',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const CARD_CLIENTES = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#4361EE',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const CARD_BILHETES = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#F55C7A',
  dark: '#FFF',
  darker: '#FFF',
  contrastText: '#fff',
};

const CARD_COMISSAO = {
  lighter: '#B9DAFF',
  light: '#B9DAFF',
  main: '#FE7F2D',
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
