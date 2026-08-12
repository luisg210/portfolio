import { Box } from '@mui/material';
import { projectsDescription } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';
import { CardProject } from './CardProject';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <Box id="projects" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.projects')} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {projectsDescription.map(project => (
          <CardProject key={project.slug} project={project} />
        ))}
      </Box>
    </Box>
  );
};
