import { Card, CardContent, Typography } from '@mui/material';
import { pick } from '@/i18n';
import { JobsDescriptionType } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

type Props = {
  job: JobsDescriptionType;
};

export const CardJob = ({ job }: Props) => {
  const { lang } = useLanguage();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {pick(job.title, lang)}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {job.at} &middot; {job.from} &mdash; {job.to}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pick(job.description, lang)}
        </Typography>
      </CardContent>
    </Card>
  );
};
