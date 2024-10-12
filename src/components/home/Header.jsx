import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

function Header({ darkMode, handleThemeChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [anchorElLang, setAnchorElLang] = useState(null);
  const { t, i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleLanguageMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };
  
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setAnchorElLang(null);
  };

  const menuItems = [
    { text: <Typography cariant="h6">{t('aboutme')}</Typography>, path: '/' },
    { text: <Typography cariant="h6">{t('chat')}</Typography>, path: '/ai' },
    { text: <Typography cariant="h6">{t('projects')}</Typography>, external: true, href: 'https://github.com/SmoczaSkala' },
  ];

  const handleMenuClick = (item) => {
    if (item.external) {
      window.open(item.href, '_blank');
    } else {
      navigate(item.path);
    }
  };

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
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List sx={{ width: 250 }}>
                  {menuItems.map((item) => (
                    <ListItem
                      button
                      key={item.text}
                      onClick={() => {
                        handleMenuClick(item);
                        handleDrawerToggle();
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            menuItems.map((item) => (
              <Button
                color="inherit"
                key={item.text}
                onClick={() => handleMenuClick(item)}
              >
                {item.text}
              </Button>
            ))
          )}
          <IconButton
            color="inherit"
            onClick={handleThemeChange}
            sx={{ ml: 1 }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton color="inherit" onClick={handleLanguageMenu}>
  <LanguageIcon />
</IconButton>
<Menu
  anchorEl={anchorElLang}
  open={Boolean(anchorElLang)}
  onClose={() => setAnchorElLang(null)}
>
  <MenuItem onClick={() => handleLanguageChange('pl')}>Polski</MenuItem>
  <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
</Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
