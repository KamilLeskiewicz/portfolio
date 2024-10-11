import React from 'react';
import { Typography, Paper, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


function Contact() {
  return (
    <div id="contact">
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Kontakt
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <EmailIcon sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
              Email: <Link href="mailto:kamil@leskiewicz.pl">kamil@leskiewicz.pl</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <PhoneIcon sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
              Telefon: <Link href="tel:+48000000000">+48 123 456 789</Link>
            </Typography>
          </Grid>
        </Grid>
        </Paper>
      </motion.div>
    </div>
  );
}

export default Contact;

