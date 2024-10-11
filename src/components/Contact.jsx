import React from 'react';
import { Typography, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <Paper elevation={3} id="contact" sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Kontakt
        </Typography>
        <Typography variant="body1">
          <EmailIcon sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Email: <Link href="kamil@leskiewicz.pl">kamil@leskiewicz.pl</Link>
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default Contact;
