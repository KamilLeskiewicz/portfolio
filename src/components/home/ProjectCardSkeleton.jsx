import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

function ProjectCardSkeleton() {
  return (
    <Card>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" height={20} width="80%" />
      </CardContent>
    </Card>
  );
}

export default ProjectCardSkeleton;
