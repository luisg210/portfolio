import { Card, CardContent, Typography } from '@mui/material';
import { JobsDescriptionType } from '@/data/portfolio';

type Props = {
  job: JobsDescriptionType;
};

export const CardJob = ({ job }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {job.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {job.at} &middot; {job.from} &mdash; {job.to}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
