import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { LoadingProvider } from './context/LoadingContext';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <HelmetProvider>
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Router />
          </ThemeProvider>
        </HelmetProvider>
      </AuthProvider >
    </LoadingProvider>
  );
}

export default App;
