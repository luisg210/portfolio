import { Box, Typography } from '@mui/material';
import { projectsDescription } from '@/data/portfolio';
import { CardProject } from './CardProject';

export const Projects = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Proyectos
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {projectsDescription.map(project => (
          <CardProject key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  );
};
