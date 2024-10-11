import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <img
              src="/images/ja.jpg"
              alt="Kamil"
              style={{ width: '100%', borderRadius: '50%' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              O mnie
            </Typography>
            <Typography variant="body1">
              Jestem Kamil Leśkiewicz, pasjonatem programowania i technologii...
            </Typography>
          </Grid>
        </Grid>
        </Paper>
      </motion.div>
    </div>
  );
}

export default About;

