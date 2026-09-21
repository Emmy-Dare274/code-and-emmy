# Code & Emmy

A personal portfolio and resume site for Emmanuel Oluwadare ("Emmy"), a full-stack developer and UX designer based. Built to pitch for hiring companies and freelance clients.

**Live site:** [Code & Emmy](https://www.codeandemmy.dev)

## Tech stack

- **Next.js 16** (App Router) with TypeScript
- **Sass/SCSS** with a customized **Bootstrap 5**, light/dark mode via `next-themes`
- **react-bootstrap** for layout primitives (navbar, etc.)
- **Framer Motion** for interactive and scroll-triggered animation
- **react-icons** for tech logos and UI icons
- **Formspree** for the contact form (no backend or database)
- **Vitest** + **React Testing Library** for tests
- Hosted on **Vercel**, custom domain purchased and managed there too

## Getting started

```powershell
npm install
npm run dev
```

Runs at `http://localhost:3000`.

Both `dev` and `build` force webpack (`--webpack` flag) instead of Next's default Turbopack bundler. Turbopack currently can't resolve Bootstrap's internal Sass imports in this project, this is a known limitation, not a project misconfiguration, and it's expected to go away in a future Next.js release.

## Environment variables

Create a `.env.local` file (already gitignored, never commit it):


Used to build absolute URLs for metadata, the sitemap, `robots.txt`, and the Open Graph image. If it's unset or malformed, `src/lib/site-url.ts` catches that and falls back safely to the production URL instead of crashing the build, see `src/lib/site-url.test.ts` for the regression test covering exactly that failure mode.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Run the production build locally |
| `npm run lint` | ESLint |
| `npm run test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure
src/
app/
layout.tsx Root layout, site-wide metadata
page.tsx Home page (hero + featured projects)
globals.scss All styling
sitemap.ts / robots.ts Auto-generated for search engines
opengraph-image.tsx Auto-generated social share image
about/page.tsx
contact/page.tsx
portfolio/
faaji-brew-afromart/page.tsx
boutique-ado/page.tsx
figma-design-system/page.tsx
components/
NavBar.tsx / Footer.tsx
Hero.tsx / FeaturedProjects.tsx
ContactForm.tsx Formspree submission, honeypot, auto-redirect
ScrollReveal.tsx Framer Motion scroll-in-view wrapper
ThemeProvider.tsx / ThemeToggle.tsx
PersonJsonLd.tsx Structured data for search engines
lib/
social-links.ts
site-url.ts Validated NEXT_PUBLIC_SITE_URL reader
public/
images/
cv/


## Deployment

Connected to this GitHub repo, deploys automatically on every push to `main`. Domain (`codeandemmy.dev`) was purchased directly through Vercel, which auto-manages its DNS and SSL.

## SEO

- `sitemap.xml` and `robots.txt` generated from `src/app/sitemap.ts` / `robots.ts`
- Person structured data (JSON-LD) via `src/components/PersonJsonLd.tsx`
- Auto-generated Open Graph image for social link previews
- Submitted to Google Search Console

## Contact form

No backend, submissions go straight to Formspree from the browser. Includes a honeypot field for basic spam filtering and automatically redirects back to the home page a couple of seconds after a successful send.

