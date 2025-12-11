import Link from "next/link";

const phoneNumber = "+44 20 1234 5678"; // TODO: change to your real number
const whatsappNumber = "447000000000"; // TODO: your WhatsApp, no '+'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-surfaceMuted/60 bg-background/80 backdrop-blur">
      <div className="section-wrapper flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-background font-bold">
            L
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight uppercase text-sm">
              LDNFIX
            </span>
            <span className="text-xs text-textMuted">
              London Trade & Repair Specialists
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-accent transition">
            Services
          </a>
          <a href="#about" className="hover:text-accent transition">
            About
          </a>
          <a href="#testimonials" className="hover:text-accent transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${phoneNumber}`}
            className="text-xs font-medium text-accent hover:underline"
          >
            Call {phoneNumber}
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-accent hover:text-background transition"
          >
            WhatsApp
          </a>
        </div>

        <a
          href="#contact"
          className="md:hidden rounded-full bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-background"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
