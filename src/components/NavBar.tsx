"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFileArrowDown, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import { SOCIAL_LINKS } from "@/lib/social-links";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="site-navbar" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/" className="site-navbar-brand">
          Code &amp; Emmy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="site-nav-links me-auto">
            <Nav.Link as={Link} href="/">home</Nav.Link>
            <Nav.Link as={Link} href="/about">about</Nav.Link>
            <Nav.Link as={Link} href="/#projects">projects</Nav.Link>
            <Nav.Link as={Link} href="/contact">contact me</Nav.Link>
          </Nav>

          {/* CV download, social links and the theme toggle, grouped on
              the right of the navbar instead of inline in the hero text */}
          <div className="nav-action-cluster">
            <a
              href="/cv/emmanuel-oluwadare-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="Download CV"
              title="Download CV"
            >
              <FaFileArrowDown aria-hidden="true" />
            </a>

            <span className="nav-divider" aria-hidden="true" />

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="X (Twitter)"
              title="X (Twitter)"
            >
              <FaXTwitter aria-hidden="true" />
            </a>

            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
