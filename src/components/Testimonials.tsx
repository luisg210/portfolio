import { Box, Card, CardContent, Typography } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { pick } from '@/i18n';
import { testimonialsDescription } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';

export const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <Box id="testimonials" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.testimonials')} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 2,
        }}
      >
        {testimonialsDescription.map(testimonial => (
          <Card key={testimonial.author} sx={{ height: '100%' }}>
            <CardContent>
              <FormatQuote color="primary" sx={{ mb: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {pick(testimonial.quote, lang)}
              </Typography>
              <Typography variant="subtitle2" fontWeight={700}>
                {testimonial.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pick(testimonial.role, lang)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
