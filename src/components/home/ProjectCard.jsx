import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.name}
          sx={{ height: project.height }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            opacity: 0,
            transition: 'opacity 0.3s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Typography variant="h5">{project.name}</Typography>
          <Typography variant="body1">{project.description}</Typography>
          <Button
            variant="contained"
            color="primary"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            Zobacz więcej
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
