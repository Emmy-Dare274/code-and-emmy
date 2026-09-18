"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/social-links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <span className="footer-brand">Code &amp; Emmy</span>

          <nav className="footer-links" aria-label="Footer">
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/#projects">projects</Link>
            <Link href="/contact">contact me</Link>
          </nav>

          <div className="footer-social">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Emmanuel Oluwadare</span>
          <a href="#top" className="footer-back-to-top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
