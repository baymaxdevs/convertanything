import React from 'react';
import { Box } from '@mui/material';

const MinimalistBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: '#FFFFFF',
      }}
    />
  );
};

export default MinimalistBackground;
