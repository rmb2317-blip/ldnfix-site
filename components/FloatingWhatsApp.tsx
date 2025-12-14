// components/FloatingWhatsApp.tsx
"use client";

import { WHATSAPP_URL, PHONE_TEL } from "@/lib/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <div
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center sm:hidden"
      aria-hidden="false"
      aria-label="Quick contact bar for WhatsApp and phone"
    >
      <div className="flex max-w-md flex-1 items-center gap-2 rounded-full border border-surfaceMuted bg-surface/95 px-3 py-2 text-xs shadow-soft backdrop-blur">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center rounded-full bg-accent px-3 py-2 font-semibold text-background transition hover:bg-yellow-400"
          data-event="floating-whatsapp"
        >
          📸 Send job photos
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-3 py-2 font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
          data-event="floating-call"
        >
          📞 Call
        </a>
      </div>
    </div>
  );
}
