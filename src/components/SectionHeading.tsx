import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ title, subtitle }: Props) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ maxWidth: 640, mx: 'auto' }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);
