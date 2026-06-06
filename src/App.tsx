import { lazy, Suspense } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Navbar } from '@/components/Navbar';
import { Loading } from '@/components/Loader';

const AboutMe = lazy(() => import('@/components/AboutMe'));
const UnderContruction = lazy(() => import('@/components/UnderConstruction'));
const Footer = lazy(() => import('@/components/Footer'));

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Suspense fallback={<Loading />}>
          <AboutMe />
          <UnderContruction />
        </Suspense>
      </Container>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </Box>
  );
}

export default App;
