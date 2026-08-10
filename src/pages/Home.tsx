import { useEffect } from 'react';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToId } from '@/lib/scroll';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Jobs } from '@/components/Jobs';
import Services from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Blog } from '@/components/Blog';
import Contact from '@/components/Contact';

const sectionReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-100px' },
  transition: { duration: 0.6 },
};

export const Home = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useSeo({
    title: 'Luis Henriquez — Desarrollador Full-Stack',
    description: t('about.description', { years: 3 }),
  });

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) scrollToId(scrollTo);
  }, [location.state]);

  return (
    <Container maxWidth="lg" id="home" sx={{ py: 4, scrollMarginTop: 88 }}>
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
        <Services />
      </motion.div>
      <motion.div {...sectionReveal}>
        <Projects />
      </motion.div>
      <motion.div {...sectionReveal}>
        <Education />
      </motion.div>
      <motion.div {...sectionReveal}>
        <Blog />
      </motion.div>
      <motion.div {...sectionReveal}>
        <Contact />
      </motion.div>
    </Container>
  );
};
