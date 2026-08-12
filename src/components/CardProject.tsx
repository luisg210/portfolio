import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { pick } from '@/i18n';
import { ProjectType } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

type Props = {
  project: ProjectType;
};

export const CardProject = ({ project }: Props) => {
  const { lang, t } = useLanguage();
  const detailPath = `/proyecto/${project.slug}`;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box component={Link} to={detailPath} sx={{ display: 'block' }}>
        <CardMedia
          component="img"
          image={project.screenshots[0]}
          alt={pick(project.title, lang)}
          height={180}
          sx={{ objectFit: 'cover' }}
        />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {pick(project.title, lang)}
        </Typography>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          {pick(project.context, lang)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pick(project.shortDescription, lang)}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0, mt: 'auto' }}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Button component={Link} to={detailPath} variant="contained" color="primary" size="small">
            {t('projects.viewDetail')}
          </Button>
          {project.links?.demo && (
            <Button
              component="a"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color="primary"
              size="small"
            >
              {t('projects.viewDemo')}
            </Button>
          )}
        </Stack>
      </Box>
    </Card>
  );
};
