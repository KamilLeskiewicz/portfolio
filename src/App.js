import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
