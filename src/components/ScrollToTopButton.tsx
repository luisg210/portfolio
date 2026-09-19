import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { scrollToId } from '@/lib/scroll';

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="small"
        aria-label="Scroll to top"
        onClick={() => scrollToId('home')}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};
