import { Box, Typography, Avatar } from '@mui/material';
import logo from '@/assets/logov1.png';

const AboutMe = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 800,
          mx: 'auto',
          gap: 4,
        }}
      >
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Luis Henriquez
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540 }}>
            Desarrollador Full-Stack con más de 3 años de experiencia creando soluciones
            tecnológicas para los sectores bancario y fintech. Especializado en React, TypeScript,
            Spring Boot y Python, con un enfoque en código limpio, arquitecturas mantenibles y
            resolución de problemas complejos.
          </Typography>
        </Box>
        <Avatar src={logo} alt="Logo" sx={{ width: 180, height: 180 }} />
      </Box>
    </Box>
  );
};
export default AboutMe;
