import React from 'react';
import { Navbar, Nav, Link, Button, Container } from 'react-bootstrap';

export default function NaviBar() {
  return (
  <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      <Navbar.Brand>WEB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>My self</Nav.Link>
            <Nav.Link>My project</Nav.Link>
          </Nav>
          <Nav>
              <Button variant="primary">Log In</Button>
              <Button variant="primary">Sign out</Button>
          </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>

  </>
  );
}
