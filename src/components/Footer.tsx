import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToId } from '@/lib/scroll';
import { profile } from '@/data/portfolio';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons';

const QUICK_LINKS = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'services', key: 'nav.services' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: 2 }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Luis Henriquez
            </Typography>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} Luis Henriquez. {t('footer.rights')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {t('footer.builtWith')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {t('footer.quickLinks')}
            </Typography>
            <Stack spacing={0.5}>
              {QUICK_LINKS.map(link => (
                <Button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  size="small"
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'text.secondary',
                    textTransform: 'none',
                  }}
                >
                  {t(link.key)}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {t('footer.getInTouch')}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {profile.email}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`https://wa.me/${profile.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
