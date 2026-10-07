export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative w-full min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] flex flex-col justify-between pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-rule overflow-hidden"
    >
      {/* Top Editorial Index (clean negative space, no invented locations) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center justify-between text-xs font-mono tracking-widest text-ink-muted uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-ink/70 inline-block" />
          <span>PORTFOLIO / VOL. 26</span>
        </div>
        {/* Negative space deliberately preserved on the right */}
        <div aria-hidden="true" />
      </div>

      {/* Centerpiece Typographic Statement */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Main Statement Typographic Composition */}
          <div className="lg:col-span-8">
            <h1 className="flex flex-col tracking-tight text-ink font-serif select-none">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.92] font-normal">
                I write.
              </span>
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.92] font-semibold pl-2 sm:pl-6 lg:pl-10 text-ink">
                I build.
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.98] font-light italic text-ink/85 pl-4 sm:pl-12 lg:pl-20 mt-1">
                Sometimes both.
              </span>
            </h1>
          </div>

          {/* Supporting Intro & Subtle Tactile Note */}
          <div className="lg:col-span-4 flex flex-col justify-end gap-8 lg:pl-6 lg:border-l lg:border-rule/60 pb-2">
            {/* Tactile handwritten note with subtle sketch arrow */}
            <div className="relative self-start sm:self-auto -rotate-1 select-none mb-2">
              <div className="font-script text-2xl sm:text-3xl text-ink/80 leading-tight">
                building, writing, experimenting.
              </div>
              <svg
                className="w-16 h-8 text-ink-muted/80 mt-1 ml-4"
                viewBox="0 0 60 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6 C 18 18, 38 10, 52 20 M 44 22 L 52 20 L 50 12" />
              </svg>
            </div>

            {/* Supporting Introduction Copy */}
            <p className="text-base sm:text-lg font-sans text-ink-secondary leading-relaxed max-w-sm">
              I build digital products and write about the things I find
              interesting.
            </p>

            {/* Micro metadata row */}
            <div className="flex items-center gap-6 pt-4 border-t border-rule/50 text-xs font-mono text-ink-muted">
              <span>01 / SELECTED WORK</span>
              <span>&mdash;</span>
              <span>2026 ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cue to Scroll */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center justify-between text-xs font-mono text-ink-muted">
        <a
          href="#selected-work"
          className="group inline-flex min-h-11 items-center gap-3 text-ink-secondary hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-umber focus-visible:outline-offset-4"
          aria-label="Scroll down to Selected Work"
        >
          <span className="w-5 h-5 rounded-full border border-ink/30 flex items-center justify-center group-hover:border-ink transition-colors">
            <span className="text-xs">&darr;</span>
          </span>
          <span className="font-sans uppercase tracking-widest text-[11px] sm:text-xs">
            Selected Work Below
          </span>
        </a>

        {/* Tactile index mark */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-ink-muted" />
          <span className="text-[11px] font-mono tracking-widest">
            SEC. 00 // INTRO
          </span>
        </div>
      </div>
    </section>
  );
}
