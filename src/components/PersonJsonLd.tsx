import { SOCIAL_LINKS } from "@/lib/social-links";
import { getBaseUrl } from "@/lib/site-url";

const baseUrl = getBaseUrl();

export default function PersonJsonLd() {
  // Only include real profile URLs. Placeholder "#" links get filtered out
  // so the structured data never claims a social profile that doesn't exist yet.
  const sameAs = Object.values(SOCIAL_LINKS).filter((url) => url !== "#");

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emmanuel Oluwadare",
    url: baseUrl,
    jobTitle: "Full-Stack Software Developer & UX Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Code Institute",
    },
    award: "1st Place Exceptional Award, UK & Ireland Hackathon 2024 (Broker Buddy)",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
      "Figma",
      "UI/UX Design",
    ],
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
