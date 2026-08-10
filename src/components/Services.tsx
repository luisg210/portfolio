import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { pick } from '@/i18n';
import { featuredSaas, servicesDescription, whatsappLink } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';

const Services = () => {
  const { lang, t } = useLanguage();
  const whatsappUrl = whatsappLink(t('whatsapp.message'));

  return (
    <Box id="services" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.services')} />

      {featuredSaas.map(saas => (
        <Card
          key={saas.title.es}
          sx={{
            mb: 3,
            border: '1px solid',
            borderColor: 'primary.main',
            bgcolor: 'background.paper',
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {pick(saas.title, lang)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {pick(saas.description, lang)}
            </Typography>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Stack: {saas.tech}
            </Typography>
            <List dense disablePadding>
              {saas.features.map(feature => (
                <ListItem key={feature.es} disableGutters disablePadding>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      mr: 1.5,
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />
                  <ListItemText
                    primary={pick(feature, lang)}
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              ))}
            </List>
            <Stack direction="row" spacing={1.5} sx={{ mt: 2, flexWrap: 'wrap' }}>
              {saas.url && (
                <Button
                  variant="contained"
                  color="primary"
                  href={saas.url}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                >
                  {t('projects.viewDemo')}
                </Button>
              )}
              <Button
                variant="outlined"
                color="success"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                size="small"
              >
                {t('contact.whatsapp')}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {servicesDescription.map(service => (
          <Card key={service.title.es}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {pick(service.title, lang)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pick(service.description, lang)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
