import { Box, Typography, Chip } from '@mui/material';

const categories = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'Angular', 'JavaScript', 'HTML / CSS'],
    color: 'primary' as const,
  },
  {
    label: 'Backend',
    skills: ['Spring Boot', 'Java', 'Node.js', 'Python', 'REST APIs'],
    color: 'secondary' as const,
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'Oracle', 'DB2', 'SQL'],
    color: 'info' as const,
  },
  {
    label: 'Observability',
    skills: ['Grafana', 'OpenTelemetry', 'Dynatrace', 'Zabbix'],
    color: 'success' as const,
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'Scrum', 'Clean Code', 'SOLID'],
    color: 'warning' as const,
  },
];

export const Skills = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
          mt: 2,
        }}
      >
        {categories.map(cat => (
          <Box key={cat.label}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              {cat.label}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cat.skills.map(skill => (
                <Chip key={skill} label={skill} color={cat.color} variant="outlined" size="small" />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
