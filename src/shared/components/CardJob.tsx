import { Card, CardContent, Typography } from '@mui/material';
import { JobsDescriptionType } from '@/utils';

type Props = {
  job: JobsDescriptionType;
};

export const CardJob = ({ job }: Props) => {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="subtitle1">{job.title}</Typography>
      </CardContent>
    </Card>
  );
};
