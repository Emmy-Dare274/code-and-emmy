import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique Ado | Code & Emmy",
  description:
    "A full-stack Django e-commerce store for clothing and homeware, with a shopping bag, Stripe checkout, and user profiles.",
};

export default function BoutiqueAdoPage() {
  return (
    <main>
      <header className="portfolio-detail-header">
        <span className="portfolio-eyebrow">Portfolio</span>
        <h1>Boutique Ado</h1>
        <p className="text-muted-soft">
          A full-stack e-commerce store for clothing and homeware, built with
          Django.
        </p>
      </header>

      <div className="portfolio-detail-media">
        <Image
          src="/images/projects/boutique-ado.jpg"
          alt="Boutique Ado screenshot"
          fill
          sizes="(min-width: 992px) 960px, 95vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="portfolio-detail-body">
        <p>
          Boutique Ado is a full-stack online store selling clothing and
          homeware, organized around category browsing, special offers, and
          a free-delivery threshold. It&apos;s structured as a set of
          independent Django apps, each owning one part of the shopping
          flow — the product catalog, the shopping bag, checkout, and user
          profiles — rather than one large, tangled codebase.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>Product browsing by category, with search across the catalog</li>
          <li>A persistent shopping bag that carries items through to checkout</li>
          <li>Checkout and payment processing</li>
          <li>User profiles for managing account details and order history</li>
        </ul>

        <h2>Built with</h2>
        <p>
          Python and Django on the backend, with Bootstrap for layout and
          server-rendered templates on the front — the same server-rendered,
          fundamentals-first approach as my other Django projects.
        </p>

        <Link href="https://github.com/Emmy-Dare274/boutique_ado_v26" className="portfolio-back-link" target="_blank" rel="noopener noreferrer">
          View source on GitHub →
        </Link>
        <br />
        <Link href="/#portfolio" className="portfolio-back-link">
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
