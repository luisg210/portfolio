import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Luis
      </Typography>
    </Box>
  );
};
export default Footer;
