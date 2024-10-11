import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import projects from '../data/project';

function Projects() {
  return (
    <div id="projects" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Projekty
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <Button size="small" href={project.link}>Zobacz więcej</Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
