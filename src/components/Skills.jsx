import React, { useState, useEffect } from 'react';
import { Typography, Grid, Collapse, IconButton, Box, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SkillCard from './SkillCard';
import skills from '../data/skills';
import { useTheme } from '@mui/material/styles';

function Skills() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Wykrywamy urządzenia o szerokości mniejszej niż 600px

  useEffect(() => {
    if (isMobile) {
      setExpanded(true); // Automatycznie rozwijamy listę na urządzeniach mobilnych
    }
  }, [isMobile]);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box id="skills" sx={{ marginTop: '2rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ flexGrow: 1 }}>
          Umiejętności
        </Typography>
        {!isMobile && ( // Ukrywamy przycisk na urządzeniach mobilnych
          <IconButton
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-label={expanded ? 'Zwiń listę umiejętności' : 'Rozwiń listę umiejętności'}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill.id}>
              <SkillCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
}

export default Skills;
