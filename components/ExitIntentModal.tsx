// components/ExitIntentModal.tsx
"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/siteConfig";

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseOut = (event: MouseEvent) => {
      // Only on desktop
      if (window.innerWidth < 1024) return;

      // If leaving viewport at top
      if (event.clientY <= 0) {
        setVisible(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const close = () => setDismissed(true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="exit-intent-heading"
    >
      {/* backdrop click closes */}
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={close}
        aria-label="Close quote offer"
      />

      <div className="relative z-10 max-w-md rounded-2xl border border-surfaceMuted bg-surface px-5 py-6 shadow-xl">
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 text-xs text-textMuted hover:text-textPrimary"
          aria-label="Close"
        >
          ✕
        </button>

        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          Before you go
        </p>
        <h2
          id="exit-intent-heading"
          className="mb-2 text-lg font-semibold tracking-tight"
        >
          Still need it fixed? Get a quick quote before you leave.
        </h2>
        <p className="mb-4 text-xs text-textMuted">
          Send photos of the problem or a quick description now. I&apos;ll
          reply with a straight-talking plan – no call centre, no hard sell.
        </p>

        <div className="mb-3 flex flex-col gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
            data-event="cta-click-send-photo"
            data-source="exit-intent"
          >
            📸 Send photo on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
            data-event="cta-click-call"
            data-source="exit-intent"
          >
            📞 Call {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-[11px] font-semibold text-textMuted transition hover:border-accent hover:text-accent"
            data-event="cta-click-form"
            data-source="exit-intent"
          >
            ✏️ Prefer the form? Jump down to it.
          </a>
        </div>

        <p className="text-[10px] text-textMuted">
          No spam. No selling your details. Just a quote and clear advice on
          what the job really needs.
        </p>
      </div>
    </div>
  );
}
