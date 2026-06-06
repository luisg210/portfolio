import { jobsDescription } from '@/data/portfolio';
import { CardJob } from './CardJob';

export const Jobs = () => {
  return (
    <div style={{ marginTop: '4rem' }}>
      {jobsDescription.map(job => (
        <CardJob key={job.title} job={job} />
      ))}
    </div>
  );
};
