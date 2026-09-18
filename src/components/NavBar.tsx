"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// A plain, quiet navbar: no background card, no blur, just text on
// the page itself, matching a minimal personal-portfolio feel rather
// than a boxed app-style header.
export default function NavBar() {
  return (
    <Navbar expand="md" className="site-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/" className="site-navbar-brand">
          Code &amp; Emmy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto site-nav-links">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact Me
            </Nav.Link>
          </Nav>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
