import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'O mnie', href: '' },
    { text: 'Projekty', href: 'https://github.com/SmoczaSkala' },
  ];

  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kamil Leśkiewicz
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                  {menuItems.map((item) => (
                    <ListItem button key={item.text} onClick={handleDrawerToggle} component="a" href={item.href}>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            menuItems.map((item) => (
              <Button color="inherit" href={item.href} key={item.text}>
                {item.text}
              </Button>
            ))
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
