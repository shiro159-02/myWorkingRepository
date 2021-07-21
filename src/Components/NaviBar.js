import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NaviBar() {
  return (
  <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      <Navbar.Brand>WEB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About me</Link></Nav.Link>
            <Nav.Link><Link to="/project">My project</Link></Nav.Link>
          </Nav>
          <Nav>
              <Button variant="primary" className="me-2">Log In</Button>
              <Button variant="primary">Sign out</Button>
          </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>

  </>
  );
}
