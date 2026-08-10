import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { saasService, servicesDescription } from '@/data/portfolio';

const Services = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Servicios
      </Typography>

      <Card
        sx={{
          mb: 3,
          border: '1px solid',
          borderColor: 'primary.main',
          bgcolor: 'background.paper',
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {saasService.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {saasService.description}
          </Typography>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            Stack: {saasService.tech}
          </Typography>
          <List dense disablePadding>
            {saasService.features.map(feature => (
              <ListItem key={feature} disableGutters disablePadding>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mr: 1.5,
                    mt: 1,
                    flexShrink: 0,
                  }}
                />
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 2 }}>
            <Typography
              component="a"
              href={saasService.url}
              target="_blank"
              rel="noreferrer"
              color="primary"
              sx={{ textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}
            >
              Ver demo en producción
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {servicesDescription.map(service => (
          <Card key={service.title}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
