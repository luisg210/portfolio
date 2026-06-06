import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const UnderContruction = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 4,
        borderRadius: 3,
        bgcolor: 'background.paper',
        maxWidth: 600,
        mx: 'auto',
        my: 4,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          type: 'spring',
          stiffness: 120,
          duration: 0.8,
          repeatDelay: 1,
        }}
        style={{ fontSize: '3rem', marginBottom: '0.5rem' }}
      >
        ⚙️
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          While I&apos;m building my portfolio,{' '}
          <Typography
            component="a"
            href="https://notes-u19y.onrender.com"
            target="_blank"
            color="primary"
            sx={{ textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}
          >
            here&apos;s
          </Typography>{' '}
          a sneak peek at what I&apos;ve been working on.
        </Typography>
      </motion.div>
    </Box>
  );
};
export default UnderContruction;
