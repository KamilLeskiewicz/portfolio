import { Typography,} from '@mui/material';
import React from 'react';
import { Masonry } from '@mui/lab';
import ProjectCard from './ProjectCard';
import projects from '../data/project';

function Projects() {
    return (
      <div id="projects" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Projekty
        </Typography>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Masonry>
      </div>
    );
  }

export default Projects;

