import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Home from './views/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='animated-gradient'>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AI" element={<Chatbot/>}/>
        </Routes>
        </BrowserRouter>
        </Container>
      </div>
    </ThemeProvider>

  );
}

export default App;
