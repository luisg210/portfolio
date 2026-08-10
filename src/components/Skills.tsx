import { Box, Chip, Typography } from '@mui/material';
import { pick } from '@/i18n';
import { skillsCategories } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';

export const Skills = () => {
  const { lang, t } = useLanguage();

  return (
    <Box id="skills" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.skills')} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {skillsCategories.map(cat => (
          <Box key={cat.label.es}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              {pick(cat.label, lang)}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cat.skills.map(skill => (
                <Chip key={skill} label={skill} color={cat.color} variant="outlined" size="small" />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
