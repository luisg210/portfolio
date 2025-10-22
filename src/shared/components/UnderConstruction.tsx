import { motion } from 'framer-motion';

export const UnderContruction = () => {
  return (
    <div className="under-construction-container">
      <motion.div
        className="warning-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
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
          repeat: Infinity,
          type: 'spring',
          duration: 0.8,
          repeatDelay: 1,
        }}
      >
        UNDER CONSTRUCTION
      </motion.h1>
    </div>
  );
};
