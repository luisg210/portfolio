import { AppBar, Toolbar, Container, Box } from '@mui/material';
import logo from '@/assets/logov1.png';

export const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 100, width: 100, borderRadius: '50%' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
