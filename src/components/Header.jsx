import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kamil Leśkiewicz
        </Typography>
        <Button color="inherit">O mnie</Button>
        <Button color="inherit" href="https://github.com/SmoczaSkala">Projekty</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
