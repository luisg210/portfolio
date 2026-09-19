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
                <Chip
                  key={skill.name}
                  color={cat.color}
                  variant="outlined"
                  size="small"
                  label={
                    skill.level ? (
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span>{skill.name}</span>
                        <Typography
                          component="span"
                          sx={{ fontWeight: 500, opacity: 0.65, fontSize: '0.7rem', lineHeight: 1 }}
                        >
                          {pick(skill.level, lang)}
                        </Typography>
                      </Box>
                    ) : (
                      skill.name
                    )
                  }
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
