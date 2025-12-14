// components/StickyContactBar.tsx
"use client";

import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/siteConfig";

export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surfaceMuted bg-surface/95 backdrop-blur-sm sm:hidden">
      <div className="section-wrapper flex justify-between gap-2 py-2 text-xs">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 rounded-full bg-accent px-3 py-2 font-semibold text-background text-center"
        >
          📞 Call {PHONE_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full border border-accent px-3 py-2 font-semibold text-accent text-center"
        >
          💬 WhatsApp
        </a>
        <a
          href="#contact"
          className="flex-1 rounded-full border border-surfaceMuted px-3 py-2 font-semibold text-textPrimary text-center"
        >
          📅 Book quote
        </a>
      </div>
    </div>
  );
}
