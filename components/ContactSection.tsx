import styles from "./ContactSection.module.css";

const DESTINATIONS = [
  { name: "Email", href: "mailto:boywthehalo@gmail.com", external: false },
  { name: "X", href: "https://x.com/0xBuzor", external: true },
  { name: "GitHub", href: "https://github.com/BenedictOkpala", external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/benedict-okpala-81680b21b", external: true },
];

export default function ContactSection() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className={styles.closing}>
      <div className={styles.inner}>
        <div className={styles.spread}>
          <div className={styles.statement}>
            <h2 id="contact-heading" className={styles.headline}>
              <span>Have something</span>
              <span>worth building?</span>
            </h2>
            <p className={styles.gesture}>Let&apos;s talk.</p>
          </div>
          <nav aria-label="Contact destinations" className={styles.contacts}>
            <ul>
              {DESTINATIONS.map((destination, index) => (
                <li key={destination.name}>
                  <a href={destination.href} className={styles.destination}
                    target={destination.external ? "_blank" : undefined}
                    rel={destination.external ? "noopener noreferrer" : undefined}>
                    <span className={styles.index} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.name}>{destination.name}</span>
                    <span className={styles.arrow} aria-hidden="true">{destination.external ? "↗" : "→"}</span>
                    {destination.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.imprint}>
          <span>BENNY</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
