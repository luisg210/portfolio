import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const UnderContruction = () => {
  return (
    <div className="under-construction-container">
      <motion.div
        className="warning-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 0.7 }}
        transition={{
          repeat: Infinity,
          type: 'spring',
          stiffness: 120,
          duration: 0.8,
          repeatDelay: 1,
        }}
      >
        ⚠️
      </motion.div>

      <motion.h1
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          stiffness: 120,
          type: 'spring',
          duration: 0.8,
        }}
      >
        UNDER CONSTRUCTION
      </motion.h1>

      <div>
        <Typography variant="body1">
          While I'm building my portfolio,{' '}
          <a target="_blank" href="https://notes-u19y.onrender.com" title="Link">
            here's
          </a>{' '}
          a sneak peek at what I've been working on.
        </Typography>
      </div>
    </div>
  );
};
