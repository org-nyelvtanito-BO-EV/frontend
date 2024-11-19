import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Válaszd ki!</Nav.Link>
            <Nav.Link href="#link">Egészítsd ki!</Nav.Link>
            <Nav.Link href="#link">Rakd sorba!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
