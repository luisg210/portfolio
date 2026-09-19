import { useState } from 'react';
import { Box, Button, CardMedia, Chip, Container, Stack, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ArrowBack, OpenInNew } from '@mui/icons-material';
import { pick } from '@/i18n';
import { projectsDescription } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { useSeo } from '@/hooks/useSeo';
import { CardProject } from '@/components/CardProject';
import { Lightbox } from '@/components/Lightbox';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);

  const project = projectsDescription.find(item => item.slug === slug);

  useSeo({
    title: project ? `${pick(project.title, lang)} — Luis Henriquez` : 'Proyecto no encontrado',
    description: project ? pick(project.longDescription, lang) : undefined,
  });

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          404
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          {t('projects.back')}
        </Button>
      </Container>
    );
  }

  const others = projectsDescription.filter(item => item.slug !== slug);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBack />}
        sx={{ mb: 2, textTransform: 'none' }}
      >
        {t('projects.back')}
      </Button>

      <Typography variant="h4" fontWeight={700} gutterBottom>
        {pick(project.title, lang)}
      </Typography>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        {pick(project.context, lang)}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          mt: 3,
        }}
      >
        <Box>
          <Box sx={{ cursor: 'pointer' }} onClick={() => setGalleryOpen(true)}>
            <CardMedia
              component="img"
              image={project.screenshots[0]}
              alt={pick(project.title, lang)}
              sx={{ borderRadius: 2, width: '100%' }}
            />
            <Button size="small" sx={{ mt: 1, textTransform: 'none' }}>
              {t('projects.gallery')}
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {t('projects.context')}
          </Typography>
          <Typography variant="body1" paragraph>
            {pick(project.longDescription, lang)}
          </Typography>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {t('projects.tech')}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
            {project.tech.map(tech => (
              <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
            ))}
          </Stack>
          {project.links?.demo && (
            <Button
              variant="contained"
              color="primary"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              endIcon={<OpenInNew />}
            >
              {t('projects.viewDemo')}
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {t('projects.other')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 2,
          }}
        >
          {others.map(projectItem => (
            <CardProject key={projectItem.slug} project={projectItem} />
          ))}
        </Box>
      </Box>

      <Lightbox
        key={project.slug}
        images={project.screenshots}
        alt={pick(project.title, lang)}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </Container>
  );
};
