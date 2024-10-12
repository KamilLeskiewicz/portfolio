import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function SkillCard({ skill }) {
  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <motion.img
          src={skill.icon}
          alt={skill.name}
          style={{ width: '50px', height: '50px' }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {skill.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
