import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import logo from '@/assets/logov1.png';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToId } from '@/lib/scroll';
import { profile } from '@/data/portfolio';

const CAREER_START = new Date(2023, 6);

const getYears = () => {
  const months = (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 30.4375);
  return Math.max(1, Math.floor(months / 12));
};

export const AboutMe = () => {
  const { t } = useLanguage();
  const years = getYears();
  const description = t('about.description', { years });

  return (
    <Box id="about" sx={{ py: 4, scrollMarginTop: 88 }}>
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
          <Typography variant="h6" color="primary" gutterBottom>
            {t('about.role')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 540, display: { xs: 'none', md: 'block' } }}
          >
            {description}
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}
          >
            <Button variant="contained" color="primary" onClick={() => scrollToId('projects')}>
              {t('about.ctaProjects')}
            </Button>
            <Button variant="outlined" color="primary" onClick={() => scrollToId('contact')}>
              {t('about.ctaContact')}
            </Button>
            <Button
              component="a"
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              {t('about.downloadCv')}
            </Button>
          </Stack>
        </Box>
        <Avatar src={logo} alt="Logo" sx={{ width: 180, height: 180 }} />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center' }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
