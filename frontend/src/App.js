import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import MinimalistHeader from './components/MinimalistHeader';
import MinimalistFooter from './components/MinimalistFooter';
import LoadingFallback from './components/LoadingFallback';
import MinimalistBackground from './components/MinimalistBackground';
import minimalistTheme from './theme/minimalistTheme';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage.js'));
const ConvertPage = lazy(() => import('./pages/ConvertPage.js'));
const ResultPage = lazy(() => import('./pages/ResultPage.js'));
const AboutPage = lazy(() => import('./pages/AboutPage.js'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.js'));
const TermsPage = lazy(() => import('./pages/TermsPage.js'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.js'));

function App() {
  return (
    <ThemeProvider theme={minimalistTheme}>
      <CssBaseline />
      <MinimalistBackground />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <MinimalistHeader />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/convert/:fileId" element={<ConvertPage />} />
              <Route path="/result/:fileId" element={<ResultPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Box>
        <MinimalistFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;