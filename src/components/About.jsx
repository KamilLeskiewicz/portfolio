import React from 'react';
import { Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Paper elevation={3} id="about" sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          O mnie
        </Typography>
        <Typography variant="body1">
          Jestem Kamil Leśkiewicz, pasjonatem programowania i technologii...
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default About;
