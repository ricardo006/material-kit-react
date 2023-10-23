import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import CambistasPage from './pages/CambistasPage';
import RelatoriosPage from './pages/RelatoriosPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Page404 from './pages/Page404';
import ProximosJogosPage from './pages/ProximosJogosPage';
import AoVivoPage from './pages/AoVivoPage';
import DashboardAppPage from './pages/DashboardAppPage';
import FutebolPage from './pages/FutebolPage';
import CaixaPage from './pages/CaixaPage';
import ApostasPage from './pages/ApostasPage';
import MatchPage from './pages/MatchPage';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'cambistas', element: <CambistasPage /> },
        { path: 'proximosjogos', element: <ProximosJogosPage /> },
        { path: 'aovivo', element: <AoVivoPage /> },
        { path: 'relatorios', element: <RelatoriosPage /> },
        { path: 'apostas', element: <ApostasPage /> },
        { path: 'caixa', element: <CaixaPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'futebol', element: <FutebolPage /> },
        {
          path: 'match',
          element: <MatchPage />
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
