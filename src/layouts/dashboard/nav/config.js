// component
import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
import InsightsTwoToneIcon from '@mui/icons-material/InsightsTwoTone';
import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';

import SvgColor from '../../../components/svg-color';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: <DashboardTwoToneIcon />,
  },
  {
    title: 'Futebol',
    path: '/dashboard/futebol',
    icon: <SportsSoccerTwoToneIcon />,
  },
  {
    title: 'Apostas',
    path: '/dashboard/apostas',
    icon: <AutoAwesomeMotionTwoToneIcon />,
  },
  {
    title: 'Usuários',
    path: '/dashboard/user',
    icon: <PeopleAltTwoToneIcon />,
  },
  {
    title: 'Administradores',
    path: 'administradores',
    icon: <PersonPinTwoToneIcon />,
  },
  {
    title: 'Cambistas',
    path: 'cambistas',
    icon: <PersonPinTwoToneIcon />,
  },
  {
    title: 'Clientes',
    path: 'clientes',
    icon: <PersonPinTwoToneIcon />,
  },
  {
    title: 'Bilhetes',
    path: 'bilhetes',
    icon: <AutoAwesomeMotionTwoToneIcon />,
  },
  {
    title: 'Relatórios',
    path: '/dashboard/relatorios',
    icon: <ArticleTwoToneIcon />,
  },
  {
    title: 'Caixa',
    path: '/dashboard/caixa',
    icon: <MonetizationOnTwoToneIcon />,
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Configurações',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
