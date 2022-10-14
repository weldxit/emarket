// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



// export default function Header() {
//   return (
  

  //       <Navbar bg="light" expand="lg">
  //         <Container fluid>
  //           <Navbar.Brand as = {Link} to ={"/Home"}>E-Mandi</Navbar.Brand>
  //           <><Navbar.Toggle aria-controls="navbarScroll" /><Navbar.Collapse id="navbarScroll">
  //                 <Nav
  //                   className="me-auto my-2 my-lg-0"
  //                   style={{ maxHeight: '100px' }}
  //                   navbarScroll
  //                 >
  
  //                   <Nav.Link as ={Link} to={'/Sell'}>Sell</Nav.Link>
  //                   <Nav.Link as ={Link} to={'/Buy'}>Buy</Nav.Link>
  //                   <Nav.Link as={Link} to={'/About'}>About</Nav.Link>
  //                   <Nav.Link as={Link} to={'/Contact'}>Contact</Nav.Link>
  //                 </Nav>
  //                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search" />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//                 <Nav.Link as={Link} to={'/Register'}>Login/Signup</Nav.Link>
//               </Navbar.Collapse></>
//         </Container>
//       </Navbar>          
//     );

// }

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'gatsby';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as ={Link} to='/Home'>E - mandi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Buy">Buy</Nav.Link>
            <Nav.Link href="/Sell">Sell</Nav.Link>
            {/* <NavDropdown title="Market Place" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Buy Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sell your product
              </NavDropdown.Item>
              <NavDropdown.Divider />  
              <NavDropdown.Item href="#action/3.3">Trusted Sellers</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Buy'>
               Verified Buyers
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/Login'>Log In</Nav.Link>
            <Nav.Link eventKey={2} as = {Link} to ='/Signup'>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;