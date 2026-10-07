import Link from "next/link";
import { FEATURED_WRITING, HOMEPAGE_WRITING } from "@/data/writing";

export default function SelectedWritingSection() {
  const featured = FEATURED_WRITING;
  const supportingEntries = HOMEPAGE_WRITING;

  return (
    <section
      id="writing"
      data-selected-writing
      aria-label="Selected Writing"
      className="relative w-full pt-16 sm:pt-24 pb-28 sm:pb-36 overflow-hidden border-t border-rule"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <header className="border-b border-rule pb-6 mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
                [ 02 ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink">
                Selected Writing
              </h2>
            </div>
            <div className="font-mono text-xs text-ink-muted tracking-widest uppercase">
              2026
            </div>
          </div>
        </header>

        {/* Featured Article Composition (~65-70% width + Marginalia) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20 sm:mb-28 lg:mb-32">
          {/* Main Dominant Essay Feature (70% width on desktop) */}
          <div className="lg:col-span-8">
            <article className="group relative flex flex-col justify-between">
              <div>
                {/* Category & Index */}
                <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">
                  <span className="text-ink font-bold text-xs sm:text-sm">FEATURE</span>
                  <span className="w-3 h-[1px] bg-ink-muted/40" />
                  <span className="text-ink-secondary/90 font-medium">
                    {featured.category}
                  </span>
                </div>

                {/* Main Article Title */}
                <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-[1.04]">
                  <a
                    href={featured.url}
                    aria-label={`${featured.title} (opens on ${featured.platform} in a new tab)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink/80 transition-colors focus-visible:ring-1 focus-visible:ring-ink focus-visible:outline-none"
                  >
                    {featured.title}
                  </a>
                </h3>

                {/* Supporting Excerpt */}
                <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl mt-4 sm:mt-6">
                  {featured.excerpt}
                </p>
              </div>

              {/* Source & CTA Link */}
              <div className="mt-8 pt-6 border-t border-rule/50 flex items-center justify-between">
                <a
                  href={featured.url}
                  aria-label={`Read on ${featured.platform}: ${featured.title} (opens in a new tab)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink hover:text-ink/70 transition-colors focus-visible:ring-1 focus-visible:ring-ink focus-visible:outline-none"
                >
                  <span className="font-semibold">READ ON X</span>
                  <span className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
                    ↗
                  </span>
                </a>
                <span className="font-mono text-xs text-ink-secondary/80 uppercase tracking-wider">
                  ESSAY // X
                </span>
              </div>
            </article>
          </div>

          {/* Right Column: Editorial Marginal Note */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:pl-6 lg:border-l lg:border-rule/60 pt-2 lg:pt-8">
            <div className="relative self-start -rotate-2 select-none">
              <div className="font-script text-2xl sm:text-3xl text-ink/75 leading-tight">
                if you can&apos;t prove it, don&apos;t post it.
              </div>
              <svg
                className="w-14 h-7 text-ink-muted/70 mt-2 ml-2"
                viewBox="0 0 60 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 8 C 20 20, 36 12, 48 22 M 40 23 L 48 22 L 46 14" />
              </svg>
            </div>
          </div>
        </div>

        {/* Supporting Writing Index Header */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted uppercase tracking-widest mb-4">
          <span>ADDITIONAL WRITING &bull; INDEX</span>
          <span>DISPATCHES</span>
        </div>

        {/* Supporting Writing Index List */}
        <div className="w-full flex flex-col divide-y divide-rule border-y border-rule group/list">
          {supportingEntries.map((entry, index) => (
            <a
              key={entry.id}
              href={entry.url}
              aria-label={`${entry.title} (opens on ${entry.platform} in a new tab)`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item py-6 sm:py-8 transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:outline-none hover:opacity-100  "
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-baseline">
                {/* Micro Index & Category */}
                <div className="lg:col-span-4 flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest">
                  <span className="text-ink font-bold text-xs sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-3 h-[1px] bg-ink-muted/40" />
                  <span className="text-ink-secondary/90 font-medium group-hover/item:text-ink transition-colors">
                    {entry.category}
                  </span>
                </div>

                {/* Article Title */}
                <div className="lg:col-span-6">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight leading-snug transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    {entry.title}
                  </h3>
                </div>

                {/* Source & Action */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-2 font-mono text-xs text-ink-secondary font-medium group-hover/item:text-ink transition-colors">
                  <span className="tracking-wider uppercase">
                    {entry.platform}
                  </span>
                  <span className="transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA to View All Writing */}
        <div className="mt-12 sm:mt-16 flex justify-start">
          <Link
            href="/writing"
            className="group/all inline-flex min-h-11 items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-secondary font-medium hover:text-ink transition-colors focus-visible:ring-1 focus-visible:ring-ink focus-visible:outline-none"
          >
            <span>VIEW ALL WRITING</span>
            <span className="transition-transform duration-300 group-hover/all:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
