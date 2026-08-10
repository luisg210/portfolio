import { lazy, Suspense, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Home } from '@/pages/Home';

const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then(module => ({ default: module.ProjectDetail }))
);

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyecto/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
}

export default App;
