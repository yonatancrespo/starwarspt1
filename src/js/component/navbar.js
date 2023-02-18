import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";
import { FavoritesDropdown } from "./FavoritesDropdown.jsx";

export const Navbar = () => {
  return (
    <BNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BNavbar.Brand as={Link} to="/">
          Star Wars Databank
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/demo">
              Demo
            </Nav.Link>
          </Nav>
          <FavoritesDropdown />
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};
