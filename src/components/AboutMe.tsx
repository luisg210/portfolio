import { Box, Typography, Avatar } from '@mui/material';
import logo from '@/assets/logov1.png';

const DESCRIPTION =
  'Desarrollador Full-Stack con más de 3 años de experiencia creando soluciones tecnológicas para los sectores bancario y fintech. Especializado en React, TypeScript, Spring Boot y Python, con un enfoque en código limpio, arquitecturas mantenibles y resolución de problemas complejos.';

const AboutMe = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'center' },
          justifyContent: 'space-between',
          maxWidth: 800,
          mx: 'auto',
          gap: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Luis Henriquez
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 540, display: { xs: 'none', md: 'block' } }}
          >
            {DESCRIPTION}
          </Typography>
        </Box>
        <Avatar src={logo} alt="Logo" sx={{ width: 180, height: 180 }} />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center' }}
        >
          {DESCRIPTION}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
