import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function SkillCard({ skill, isMobile }) {
  return (
    <Card sx={{
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
        },
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem',}}>
        <img
          src={skill.icon}
          alt={skill.name}
          style={{ width: isMobile ? '60px' : '50px', height: isMobile ? '60px' : '50px' }}
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
