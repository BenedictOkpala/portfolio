import Link from "next/link";

export default function Navigation() {
  return (
    <header className="w-full border-b border-rule">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Left: Benny */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-base sm:text-lg font-serif font-medium tracking-tight text-ink hover:text-ink/80 transition-colors"
        >
          <span className="font-semibold tracking-wide uppercase text-sm sm:text-base font-sans">
            BENNY
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-ink/40 group-hover:bg-ink transition-colors"
            aria-hidden="true"
          />
        </Link>

        {/* Right: Work, Writing, About, Contact */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-3 sm:gap-8 lg:gap-10 text-xs sm:text-sm font-sans tracking-widest uppercase text-ink-secondary">
            <li>
              <Link
                href="/#work"
                className="hover:text-ink transition-colors inline-flex min-h-11 items-center relative group"
              >
                <span>Work</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link
                href="/#writing"
                className="hover:text-ink transition-colors inline-flex min-h-11 items-center relative group"
              >
                <span>Writing</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-ink transition-colors inline-flex min-h-11 items-center relative group"
              >
                <span>About</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-ink transition-colors inline-flex min-h-11 items-center relative group text-ink font-medium"
              >
                <span>Contact</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
