
// import React from 'react'
// import Layout from './Layout'

// export default function About() {
//   return (
//     <Layout>

//     <div>About</div>
//     </Layout>
//   )
// }
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'gatsby'
import Box from '@mui/material/Box';
import Layout from './Layout';
import './css/about.css'
import Product from './Product';



function BasicExample() {
  return (
    <Layout>
<div className="about">

    <Box
    sx={{
      width: 1300,
      height: 770,
      backgroundColor: 'primary.light',
    }}
    >
      <Product />

      
    
      </Box> 
  </div>
    </Layout>
        )
}

export default BasicExample;