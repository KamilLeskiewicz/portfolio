import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { Masonry } from '@mui/lab';
import ProjectCard from './ProjectCard';
import projects from '../../data/project';
import { motion } from 'framer-motion';
import ProjectCardSkeleton from './ProjectCardSkeleton';
import { useTranslation } from 'react-i18next';


function Projects() {
  const [loading, setLoading] = useState(true);
  const [projectsData, setProjectsData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setProjectsData(projects);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div id="projects" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
      {t('projects')}
      </Typography>
      {loading ? (
        <Grid container spacing={2}>
          {Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ yoyo: Infinity, duration: 1 }}
              >
                <ProjectCardSkeleton />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </Masonry>
      )}
    </div>
  );
}

export default Projects;
