import { AboutIndex, DeskNote } from "./AboutDiscoveries";
import SelectedExperienceSection from "./SelectedExperienceSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative w-full pt-16 sm:pt-24 pb-28 sm:pb-36 overflow-hidden border-t border-rule"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <header className="border-b border-rule pb-6 mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
                03 / ABOUT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink">
                About
              </h2>
            </div>
            <div className="font-mono text-xs text-ink-muted tracking-widest uppercase">
              2026
            </div>
          </div>
        </header>

        {/* Primary Editorial Composition (Statement Left, Bio Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28 lg:mb-36">
          {/* Left: Primary Editorial Statement */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-[1.15] space-y-2">
              <span>Curious enough to look.</span>
              <br />
              <span className="italic font-light text-ink/85">
                Stubborn enough to build.
              </span>
            </h3>
            <DeskNote />
          </div>

          {/* Right: Bio & Handwritten Marginal Annotation */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-3">
            <div className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed space-y-5">
              <p>
                I&apos;m Benny. I build digital products and write about technology,
                markets, and whatever else sends me down a rabbit hole.
              </p>
              <p>
                A lot of my work starts the same way: I find something interesting,
                spend too much time trying to understand it, and eventually end up
                either writing about it or building something around it.
              </p>
              <p className="text-ink font-medium">
                Sometimes both.
              </p>
            </div>

            {/* Handwritten Marginal Note */}
            <div className="mt-8 sm:mt-10 flex items-center gap-2 font-script text-xl sm:text-2xl text-ink/75 select-none">
              <span>still figuring things out</span>
              <span className="text-base sm:text-lg">&rarr;</span>
            </div>
          </div>
        </div>

        <AboutIndex />
        <SelectedExperienceSection />
      </div>
    </section>
  );
}
