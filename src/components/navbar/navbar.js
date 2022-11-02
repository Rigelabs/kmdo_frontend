
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import "./nav.css";
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
  
    <Navbar className='nav' fixed='top' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://res.cloudinary.com/dwnxsji2z/image/upload/v1665880855/logo/logo-transparent_pzwcey.png"
            width="50"
            height="50"
            className="d-inline-block align-centre"
          />{' '}
          <span className='brand-name'>Karinga Massive</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav" > 
        <div style={{marginRight:'10rem'}}>{" "}</div>
        <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link className="nav-links" href="/">Home</Nav.Link>
            <Nav.Link className="nav-links" href="/about_us">Who We Are</Nav.Link>
            <Nav.Link className="nav-links" href="/impact">Our Impact</Nav.Link>
            
            <Nav.Link className="nav-links" href="/contact_us">Get in touch</Nav.Link>
            <Nav.Link className="nav-links" href="/membership">Membership</Nav.Link>
            
            </Nav>
            <Button onClick={e=>navigate("/donate")} className='donate-button' >Donate</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
