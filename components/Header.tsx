// components/Header.tsx
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#specialist-trades", label: "Specialist trades" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#areas", label: "Areas" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surfaceMuted/60 bg-background/90 backdrop-blur">
      <div className="section-wrapper flex items-center justify-between py-3 sm:py-4">
        {/* Logo / brand text */}
        <Link href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-[0.18em] text-accent">
            LDNFIX
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-textMuted sm:inline">
            Fixing London. Properly.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-xs font-medium text-textMuted sm:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black hover:bg-yellow-400 transition-colors"
          >
            Book a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
