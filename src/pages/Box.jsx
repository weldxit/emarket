import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx(props) {
  return (
    <Box
      sx={{
        width: 600,
        height: 770,
        backgroundColor: 'primary.light',
      }}
    >
        {props.children}
        </Box>
  );
}
