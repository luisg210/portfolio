import { Skeleton, Card, CardContent, Box } from '@mui/material';

const SkeletonCard = () => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Skeleton variant="text" width="40%" height={28} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="20%" height={20} sx={{ mb: 1.5 }} />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="60%" />
    </CardContent>
  </Card>
);

export const Loading = () => (
  <Box sx={{ mt: 8 }}>
    {[1, 2, 3].map(i => (
      <SkeletonCard key={i} />
    ))}
  </Box>
);
