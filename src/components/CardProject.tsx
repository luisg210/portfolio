import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ProjectType } from '@/data/portfolio';

type Props = {
  project: ProjectType;
};

export const CardProject = ({ project }: Props) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          {project.context}
        </Typography>
        <List dense disablePadding>
          {project.highlights.map(highlight => (
            <ListItem key={highlight} disableGutters disablePadding>
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
              <ListItemText primary={highlight} primaryTypographyProps={{ variant: 'body2' }} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
