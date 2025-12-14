// components/Footer.tsx
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  WHATSAPP_URL
} from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-surfaceMuted/60 bg-surface">
      <div className="section-wrapper py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-textMuted">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-[0.24em] text-accent uppercase">
              {BUSINESS_NAME}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.26em] sm:inline">
              {BUSINESS_TAGLINE}
            </span>
          </div>
          <p className="mt-2">
            Construction-led multi-trade repairs, refurbishments and managed
            specialist works across Greater London.
          </p>
        </div>

        <div className="space-y-1">
          <p>
            📞{" "}
            <a href={`tel:${PHONE_TEL}`} className="hover:text-accent">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            📧{" "}
            <a href={`mailto:${EMAIL}`} className="hover:text-accent">
              {EMAIL}
            </a>
          </p>
          <p>
            💬{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
