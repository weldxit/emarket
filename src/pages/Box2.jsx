import React from 'react';

import Box from '@mui/material/Box';
import './css/about.css'

export default function Box2(props) {
  return (
    
      
      <div className="about">

<Box
sx={{
width: 1300,
height: 770,
backgroundColor: 'primary.light',
}}
>
{props.children}
</Box>
</div>
    )
    }