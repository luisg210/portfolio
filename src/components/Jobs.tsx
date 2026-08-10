import { Box } from '@mui/material';
import { jobsDescription } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';
import { CardJob } from './CardJob';

export const Jobs = () => {
  const { t } = useLanguage();

  return (
    <Box id="experience" sx={{ mt: 6, scrollMarginTop: 88 }}>
      <SectionHeading title={t('sections.experience')} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {jobsDescription.map(job => (
          <CardJob key={`${job.at}-${job.from}`} job={job} />
        ))}
      </Box>
    </Box>
  );
};
