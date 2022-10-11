  
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import Layout from './Layout'
import './css/home.css'
import { Link } from 'gatsby';
import Button from 'react-bootstrap/Button';

export default function Home() {


  return (
 
  <Layout>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>E-Mandi</h1>
              <h5 className='mb-4'>Online Market Place | Heart of Farmers</h5>
              <Button variant="outline-primary" as={Link} to={'/Sell' }  size="lg">Sell Your Product</Button>
              {''}  {''}  {''}
              <Button variant="outline-secondary" as={Link} to={'/Sell' }  size="lg">Explore Market</Button>
           
            </div>
          </div>
        </div>
      </div>
    
   </Layout>
  )
}
