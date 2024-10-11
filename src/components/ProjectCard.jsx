import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.name}
        sx={{ height: project.height }}
      />
      <CardContent>
        <Typography variant="h5" component="div">sssssssssss
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.link} target="_blank" rel="noopener noreferrer">
          Zobacz więcej
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
