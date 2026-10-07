import Image from "next/image";
import styles from "./SelectedWorkSection.module.css";

interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  year: string;
  imageSrc: string;
  imageAlt?: string;
}

const PROJECTS: Project[] = [
  {
    id: "tickerkin",
    num: "01",
    title: "TickerKin",
    category: "TOKENIZED EQUITY INTELLIGENCE",
    description: "Trace an equity across its verified tokenized representations.",
    year: "2026",
    imageSrc: "/projects/tickerkin.png",
    imageAlt: "TickerKin — Trace an equity across its verified tokenized representations.",
  },
  {
    id: "wicklink",
    num: "02",
    title: "WickLink",
    category: "MARKET INTELLIGENCE",
    description: "Market intelligence for spotting and investigating dislocations.",
    year: "2026",
    imageSrc: "/projects/wicklink.png",
    imageAlt: "WickLink Overnight Watch & Market Intelligence Dashboard",
  },
  {
    id: "witroom",
    num: "03",
    title: "WITROOM",
    category: "INTERACTIVE EXPERIMENT",
    description: "Making the moments spent waiting for AI a little more interesting.",
    year: "2026",
    imageSrc: "/projects/witroom.png",
    imageAlt: "WITROOM Interactive Experiment — What needs doing?",
  },
  {
    id: "rps",
    num: "04",
    title: "RPS",
    category: "AI EXPERIMENT",
    description: "Rock, paper, scissors against an AI that gets the final move.",
    year: "2026",
    imageSrc: "/projects/rps.png",
    imageAlt: "RPS — Rock, paper, scissors against an AI that gets the final move.",
  },
  {
    id: "signalpilot",
    num: "05",
    title: "SignalPilot",
    category: "AI / MARKET ANALYSIS",
    description: "AI-assisted market analysis built around paper trading.",
    year: "2026",
    imageSrc: "/projects/signalpilot.png",
    imageAlt: "SignalPilot AI Market Analysis Dashboard — Read the market before you move.",
  },
];

export default function SelectedWorkSection() {
  return (
    <section
      id="selected-work"
      aria-label="Selected Work"
      className="relative w-full pt-16 sm:pt-24 pb-28 sm:pb-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <header className="border-b border-rule pb-6 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
                [ 01 ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink">
                Selected Work
              </h2>
            </div>
            <div className="flex items-center gap-6 font-mono text-xs text-ink-muted tracking-widest uppercase">
              <span>ACTIVE INDEX</span>
              <span className="text-ink font-semibold">2026</span>
            </div>
          </div>
        </header>

        <div id="work" className={styles.workbench}>
          {PROJECTS.map((project) => (
            <article key={project.id} className={`${styles.piece} ${styles[project.id]}`}>
              <a
                href={project.imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.surface}
                aria-labelledby={`${project.id}-title`}
                aria-describedby={`${project.id}-description ${project.id}-action`}
              >
                <div className={styles.visual}>
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    fill
                    sizes={project.id === "tickerkin"
                      ? "(max-width: 767px) 90vw, (max-width: 1279px) 55vw, 680px"
                      : project.id === "rps"
                        ? "(max-width: 767px) 75vw, (max-width: 1279px) 30vw, 380px"
                        : project.id === "signalpilot"
                          ? "(max-width: 767px) 90vw, (max-width: 1279px) 50vw, 590px"
                          : "(max-width: 767px) 85vw, (max-width: 1279px) 40vw, 480px"}
                    className={styles.image}
                  />
                </div>
                <div className={styles.caption}>
                  <div className={styles.metadata}>
                    <span>{project.num} / {project.category}</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  <div className={styles.titleRow}>
                    <h3 id={`${project.id}-title`} className="font-serif">{project.title}</h3>
                    <span className={styles.inspect} aria-hidden="true">↗</span>
                  </div>
                  <p id={`${project.id}-description`}>{project.description}</p>
                  <span id={`${project.id}-action`} className="sr-only">Open full screenshot in a new tab</span>
                </div>
              </a>
            </article>
          ))}
          <div className={styles.annotation} aria-hidden="true">
            <span className="font-script">building, experimenting.<br />a few things from the desk.</span>
            <svg viewBox="0 0 100 48" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M8 8 Q32 42 86 24 M76 19 L86 24 L80 34" />
            </svg>
          </div>
        </div>
        <div className="pt-24 sm:pt-36 lg:pt-48 pb-12 sm:pb-20 border-t border-rule mt-20 sm:mt-28">
          <div className="max-w-4xl">
            {/* Tiny index coordinate mark */}
            <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-8 sm:mb-12">
              <span className="w-2 h-[1px] bg-ink-muted" />
              <span>PERSPECTIVE</span>
            </div>

            {/* Main Editorial Transition Statement */}
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-[1.15] space-y-2 select-none">
              <p>Builder when something should exist.</p>
              <p className="italic font-light text-ink/85 pl-0 sm:pl-8 lg:pl-12">
                Writer when something should be said.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
