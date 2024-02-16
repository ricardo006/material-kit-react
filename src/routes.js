import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// pages
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import AdministradorPage from './pages/AdministradorPage';
import CambistasPage from './pages/CambistasPage';
import BilhetesPage from './pages/BilhetesPage';
import ClientesPage from './pages/ClientesPage';
import RelatoriosPage from './pages/RelatoriosPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Page404 from './pages/Page404';
import ProximosJogosPage from './pages/ProximosJogosPage';
import AoVivoPage from './pages/AoVivoPage';
import DashboardAppPage from './pages/DashboardAppPage';
import FutebolPage from './pages/FutebolPage';
import CaixaPage from './pages/CaixaPage';
import ApostasPage from './pages/ApostasPage';
import MatchPage from './pages/MatchPage';
import ConfigurationsPage from './pages/ConfigurationsPage';

import { Context } from './context/AuthContext';

export default function Router() {
  const { userData, loading, authenticated } = useContext(Context);


  const PrivateRoute = ({ element, ...props }) => {
    const { authenticated } = useContext(Context);

    return authenticated ? element : <Navigate to="/login" />;
  };

  const PublicRoute = ({ element, ...props }) => {
    const { authenticated } = useContext(Context);

    return !authenticated ? element : <Navigate to="/dashboard/app" />;
  };

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'administradores', element: <AdministradorPage /> },
        { path: 'cambistas', element: <CambistasPage /> },
        { path: 'clientes', element: <ClientesPage /> },
        { path: 'proximosjogos', element: <ProximosJogosPage /> },
        { path: 'bilhetes', element: <BilhetesPage /> },
        { path: 'aovivo', element: <AoVivoPage /> },
        { path: 'relatorios', element: <RelatoriosPage /> },
        { path: 'apostas', element: <ApostasPage /> },
        { path: 'caixa', element: <CaixaPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'futebol', element: <FutebolPage /> },
        { path: 'configuracoes', element: <ConfigurationsPage /> },
        {
          path: 'match',
          element: <MatchPage />
        },
      ],
    },
    {
      path: 'login',
      element: !authenticated ? <LoginPage /> : <Navigate to="404" />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: 'forgotpassword',
      element: <ForgotPasswordPage />,
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