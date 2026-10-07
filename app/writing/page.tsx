import type { Metadata } from "next";
import Link from "next/link";
import { FEATURED_WRITING, PUBLISHED_WRITING } from "@/data/writing";
import styles from "./writing.module.css";

export const metadata: Metadata = {
  title: "Writing — Benny",
  description: "Notes, explainers, research, and things I couldn't stop thinking about.",
};

export default function WritingPage() {
  const featured = FEATURED_WRITING;
  const entries = PUBLISHED_WRITING.filter((entry) => entry.id !== featured.id);

  return (
    <div className={styles.page}>
      <header className={styles.routeHeader}>
        <Link href="/" className={styles.wordmark}>BENNY</Link>
        <nav aria-label="Writing navigation"><Link href="/#writing">← Back to Selected Writing</Link></nav>
      </header>
      <main>
        <header className={styles.intro}>
          <div>
            <p className={styles.meta}>WRITING / ARCHIVE</p>
            <h1>Writing</h1>
            <p className={styles.description}>Notes, explainers, research, and things I couldn&apos;t stop thinking about.</p>
          </div>
          <aside className={styles.aside}>
            <p className={styles.annotation}>if you can&apos;t prove it,<br />don&apos;t post it.</p>
            <p className={styles.publicationNote}>Each entry opens its original publication in a new tab.</p>
          </aside>
        </header>

        <section aria-label="Featured writing" className={styles.feature}>
          <p className={styles.meta}>FEATURE / {featured.category}</p>
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className={styles.publication}>
            <h2 className={styles.title}>{featured.title}</h2>
            <p className={styles.excerpt}>{featured.excerpt}</p>
            <span className={styles.destination}>Read on {featured.platform} ↗ <span className="sr-only">(opens in a new tab)</span></span>
          </a>
        </section>

        <section aria-labelledby="archive-index-heading" className={styles.indexSection}>
          <header className={styles.indexHeader}>
            <h2 id="archive-index-heading">THE INDEX</h2>
            <span>X / PARAGRAPH</span>
          </header>
          <ol className={styles.index}>
            {entries.map((entry, index) => (
              <li key={entry.id} className={styles.entry}>
                <a href={entry.url} target="_blank" rel="noopener noreferrer" className={styles.publication}>
                  <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    {entry.category && <p className={styles.meta}>{entry.category}</p>}
                    <h3 className={styles.title}>{entry.title}</h3>
                  </div>
                  <span className={styles.destination}>Read on {entry.platform} ↗ <span className="sr-only">(opens in a new tab)</span></span>
                </a>
              </li>
            ))}
          </ol>
        </section>
        <footer className={styles.footer}><Link href="/">← Back to the portfolio</Link></footer>
      </main>
    </div>
  );
}
