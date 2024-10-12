import React from 'react';
import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

function SocialMediaLinks() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <IconButton
        color="inherit"
        href="https://github.com/SmoczaSkala"
        target="_blank"
        rel="noopener"
      >
        <GitHub />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://www.linkedin.com/in/kamil-leśkiewicz-4548bb254/"
        target="_blank"
        rel="noopener"
      >
        <LinkedIn />
      </IconButton>
    </Box>
  );
}

export default SocialMediaLinks;
