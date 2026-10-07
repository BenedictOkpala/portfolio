import styles from "./SelectedExperienceSection.module.css";

const EXPERIENCE = [
  { company: "Arbitrum", role: "Ambassador · Community Lead" },
  { company: "Zealy", role: "Content Strategist" },
  { company: "Zoth", role: "Technical Writer · Ambassador" },
  { company: "StonFi", role: "Community Builder · Content" },
  { company: "Fere AI", role: "Ambassador · Strategy" },
  { company: "Okto", role: "Community Growth" },
  { company: "Wunder", role: "UX Analyst · Ambassador" },
  { company: "Seedify", role: "Creator" },
  { company: "GDSC", role: "Community Manager", year: "2020" },
];

export default function SelectedExperienceSection() {
  return (
    <section id="selected-experience" aria-labelledby="experience-heading" className={styles.section}>
      <header className={styles.heading}>
        <h2 id="experience-heading">SELECTED EXPERIENCE</h2>
        <span aria-hidden="true">01 — {String(EXPERIENCE.length).padStart(2, "0")}</span>
      </header>
      <ol className={styles.ledger}>
        {EXPERIENCE.map((entry, index) => (
          <li key={entry.company} className={styles.entry} tabIndex={0}
            aria-labelledby={`experience-${index}-company`}
            aria-describedby={`experience-${index}-role`}>
            <span className={styles.index} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className={styles.text}>
              <h3 id={`experience-${index}-company`} className={styles.company}>{entry.company}</h3>
              <p id={`experience-${index}-role`} className={styles.role}>
                {entry.role}
                {entry.year && <time dateTime={entry.year} className={`${styles.index} ml-4`}>{entry.year}</time>}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
