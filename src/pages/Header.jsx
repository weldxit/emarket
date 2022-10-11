import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'gatsby';



export default function Header() {
  return (
  

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as = {Link} to ={"/Home"}>E-Mandi</Navbar.Brand>
          <><Navbar.Toggle aria-controls="navbarScroll" /><Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as ={Link} to={'/Home'}>Home</Nav.Link>
                  <Nav.Link as ={Link} to={'/Sell'}>Sell</Nav.Link>
                  <Nav.Link as ={Link} to={'/Buy'}>Buy</Nav.Link>
                  <Nav.Link as={Link} to={'/About'}>About</Nav.Link>
                  <Nav.Link as={Link} to={'/Contact'}>Contact</Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Nav.Link as={Link} to={'/Register'}>Login/Signup</Nav.Link>
              </Navbar.Collapse></>
        </Container>
      </Navbar>
                  
    );
  
}
