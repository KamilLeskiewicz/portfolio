import React, { useState, useEffect, lazy } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/home/Header';
import Chatbot from './components/AI/Chatbot';

const About = lazy(() => import('./components/home/About'));
const Skills = lazy(() => import('./components/home/Skills'));
const Projects = lazy(() => import('./components/home/Projects'));
const Contact = lazy(() => import('./components/home/Contact'));

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
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/ai" element={<Chatbot />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
