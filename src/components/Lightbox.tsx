import { useState } from 'react';
import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

type Props = {
  images: string[];
  alt: string;
  open: boolean;
  onClose: () => void;
};

export const Lightbox = ({ images, alt, open, onClose }: Props) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const handleClose = () => {
    setIndex(0);
    onClose();
  };

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: '#fff',
          }}
          aria-label={t('blog.close')}
        >
          <Close />
        </IconButton>
        <Box
          component="img"
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          sx={{ width: '100%', display: 'block', borderRadius: 1 }}
        />
        {images.length > 1 && (
          <>
            <IconButton
              onClick={prev}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.5)',
                color: '#fff',
              }}
              aria-label="previous"
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={next}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.5)',
                color: '#fff',
              }}
              aria-label="next"
            >
              <ArrowForward />
            </IconButton>
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                bottom: 8,
                left: 8,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                px: 1,
                py: 0.25,
                borderRadius: 1,
              }}
            >
              {index + 1} / {images.length}
            </Typography>
          </>
        )}
      </Box>
    </Dialog>
  );
};
