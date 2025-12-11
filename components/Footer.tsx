import Link from "next/link";

const phoneNumber = "+44 20 1234 5678";    // change later
const emailAddress = "info@ldnfix.co.uk";  // change later

export default function Footer() {
  return (
    <footer className="border-t border-surfaceMuted/60 bg-background py-8">
      <div className="section-wrapper flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs text-textMuted">
        <div>
          <p className="font-semibold text-textPrimary mb-1">LDNFIX</p>
          <p>London trade services · Plastering · Roofing · Repairs</p>
          <p className="mt-1">
            {phoneNumber} ·{" "}
            <a
              href={`mailto:${emailAddress}`}
              className="hover:text-accent break-all"
            >
              {emailAddress}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#services" className="hover:text-accent">
            Services
          </a>
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
          <Link href="/" className="hover:text-accent">
            Privacy & cookies
          </Link>
        </div>

        <p className="text-[11px] text-textMuted/80">
          © {new Date().getFullYear()} LDNFIX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
