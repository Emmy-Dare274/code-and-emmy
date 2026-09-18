"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// The three-link navigation plus the theme toggle. react-bootstrap's
// Navbar handles the collapsing mobile menu (hamburger icon) on its
// own, no extra code needed for that.
export default function NavBar() {
  return (
    <Navbar expand="md" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Code &amp; Emmy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
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
