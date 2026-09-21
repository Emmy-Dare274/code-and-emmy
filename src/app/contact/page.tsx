import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { FaEnvelope, FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Emmanuel Oluwadare for full-time roles, contract work, or freelance projects. Based in Dublin, available to companies and clients worldwide.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="contact-hero">
        <div className="container">
          <span className="role-label">Contact</span>
          <h1>Let&apos;s build something.</h1>
          <p className="text-muted-soft">
            Open to full-time roles, contract work, and freelance projects
            worldwide. I usually reply within 24 to 48 hours.
          </p>
        </div>
      </header>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-card">
            <h2>Direct contact</h2>
            <ul className="contact-info-list">
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:emmy4toz2010@gmail.com">
                  emmy4toz2010@gmail.com
                </a>
              </li>
              <li>
                <FaLocationDot aria-hidden="true" />
                <span>Based in Dublin, Ireland. Open to remote work worldwide.</span>
              </li>
              {SOCIAL_LINKS.linkedin !== "#" && (
                <li>
                  <FaLinkedin aria-hidden="true" />
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <FaGithub aria-hidden="true" />
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-card">
            <h2>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
