import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import { pick } from '@/i18n';
import { educationDescription } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';

export const Education = () => {
  const { lang, t } = useLanguage();

  return (
    <Box id="education" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.education')} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {educationDescription.map(entry => (
          <Card key={entry.title.es}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {pick(entry.title, lang)}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {entry.institution} &middot; {entry.from}
                {entry.to ? ` — ${entry.to}` : ''}
              </Typography>
              <Chip
                size="small"
                variant="outlined"
                color={entry.kind === 'degree' ? 'primary' : 'secondary'}
                label={entry.kind === 'degree' ? t('education.degree') : t('education.certs')}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
