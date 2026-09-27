import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import IntroHero from "@/components/homepage-hero/IntroHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <IntroHero />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <FeaturedProjects />
      </ScrollReveal>
    </main>
  );
}
