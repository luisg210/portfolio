import { Box, Container, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Jobs } from '@/components/Jobs';
import UnderContruction from '@/components/UnderConstruction';
import { Footer } from '@/components/Footer';

const sectionReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <motion.div {...sectionReveal}>
          <AboutMe />
        </motion.div>
        <motion.div {...sectionReveal}>
          <Skills />
        </motion.div>
        <motion.div {...sectionReveal}>
          <Jobs />
        </motion.div>
        <motion.div {...sectionReveal}>
          <UnderContruction />
        </motion.div>
      </Container>
      <motion.div {...sectionReveal}>
        <Footer />
      </motion.div>
    </Box>
  );
}

export default App;
