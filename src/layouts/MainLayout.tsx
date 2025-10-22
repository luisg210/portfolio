import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { AboutMe, Jobs, MainTitle, UnderContruction } from '@/shared';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} /> */}
      <Box component="div" sx={{ flexGrow: 1, p: 2 }}>
        {/* Espace for the app bar */}
        {/* <Toolbar /> */}
        <MainTitle title="Portfolio" />

        <Box component="main" mt={6}>
          <AboutMe />
          <UnderContruction />

          {/* <Jobs /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
