"use client";

import { useState } from "react";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  WORK_TYPES,
  FORM_ENDPOINT,
} from "@/lib/siteConfig";

type Persona =
  | "homeowner"
  | "landlord"
  | "airbnb"
  | "agent"
  | "contractor"
  | "";

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [persona, setPersona] = useState<Persona>("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = () => {
    // let the browser submit the form normally (to Formspree)
    setSubmitting(true);
    // we’ll just show a “thanks” message after redirect / back
    setTimeout(() => setSubmitted(true), 2000);
  };

  const personaLabel = (() => {
    switch (persona) {
      case "homeowner":
        return "homeowner";
      case "landlord":
        return "landlord";
      case "airbnb":
        return "Airbnb host";
      case "agent":
        return "agent / property manager";
      case "contractor":
        return "contractor";
      default:
        return "customer";
    }
  })();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      {/* LEFT: form */}
      <div>
        <header className="mb-5">
          <p className="text-xs uppercase tracking-[0.22em] text-accent font-semibold mb-1">
            Fast quote request
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">
            Need it fixed? Send your details for a fast, straight-talking quote.
          </h2>
          <p className="text-sm text-textMuted">
            Fill in the form or{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              call {PHONE_DISPLAY}
            </a>{" "}
            for urgent jobs. You&apos;ll speak to the person who actually
            understands the work – not a call centre.
          </p>
        </header>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-surfaceMuted bg-surface px-4 py-5 sm:px-6 sm:py-6 shadow-soft"
          data-event="lead-submit"
          data-source="contact-form-main"
        >
          {/* hidden meta fields for your inbox / analytics */}
          <input type="hidden" name="persona" value={persona} />
          <input type="hidden" name="form_source" value="ldnfix.co.uk/contact" />

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="mb-2">
                <p className="text-xs font-semibold text-textMuted uppercase tracking-[0.18em] mb-2">
                  Step 1 · Who is the job for?
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    ["homeowner", "Homeowner"],
                    ["landlord", "Landlord"],
                    ["airbnb", "Airbnb host"],
                    ["agent", "Agent / manager"],
                    ["contractor", "Contractor"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setPersona(value as Persona)}
                      className={`rounded-full border px-3 py-1 text-xs sm:text-[13px] ${
                        persona === value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-surfaceMuted bg-background/60 text-textMuted hover:border-accent/70"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-textMuted">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="input"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-textMuted">
                    Phone
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="input"
                    placeholder={PHONE_DISPLAY}
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[2fr_1fr]">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-textMuted">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="input"
                    placeholder={EMAIL}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-textMuted">
                    Postcode
                  </label>
                  <input
                    required
                    name="postcode"
                    type="text"
                    className="input"
                    placeholder="e.g. EN1 1AA"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-textMuted">
                  Photos or video (optional)
                </label>
                <input
                  name="photos"
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="block w-full text-xs text-textMuted file:mr-3 file:rounded-full file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-background hover:file:bg-yellow-400"
                />
                <p className="text-[11px] text-textMuted">
                  Clear photos of the issue and surrounding area help pricing be
                  more accurate.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background shadow-soft hover:bg-yellow-400 transition"
                  data-event="lead-step-next"
                  data-source="contact-step1"
                >
                  Next: job details
                </button>
                <p className="text-[11px] text-textMuted">
                  Or{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-accent underline-offset-2 hover:underline"
                    data-event="lead-whatsapp-from-form"
                  >
                    WhatsApp photos instead
                  </a>
                  .
                </p>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-textMuted uppercase tracking-[0.18em]">
                  Step 2 · What needs fixing?
                </p>
                <label className="text-xs font-medium text-textMuted">
                  Type of work
                </label>
                <select
                  name="work_type"
                  className="input"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select the closest match
                  </option>
                  {WORK_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-textMuted">
                  Brief job description
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="input min-h-[120px]"
                  placeholder="Tell me what’s wrong, how long it’s been an issue, and anything else that will help price it properly."
                  required
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-textMuted">
                    Ideal timeframe
                  </label>
                  <select name="timeframe" className="input" defaultValue="">
                    <option value="">Select</option>
                    <option value="asap">ASAP / emergency</option>
                    <option value="week">Within a week</option>
                    <option value="month">Within a month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-textMuted">
                    Property type (optional)
                  </label>
                  <input
                    name="property_type"
                    type="text"
                    className="input"
                    placeholder="Flat, house, HMO, etc."
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-textMuted hover:text-textPrimary"
                >
                  ← Back to contact details
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background shadow-soft hover:bg-yellow-400 transition disabled:opacity-70"
                >
                  {submitting
                    ? "Sending your request..."
                    : `Get my quote as a ${personaLabel}`}
                </button>
              </div>

              <p className="mt-2 text-[11px] text-textMuted">
                By sending this form you agree for LDNFIX to contact you about
                this job. No spam, no selling your details on.
              </p>
            </>
          )}
        </form>

        {submitted && (
          <p className="mt-3 text-xs text-green-400">
            Thanks – your request has been sent. I&apos;ll come back to you as
            soon as possible.
          </p>
        )}
      </div>

      {/* RIGHT: trust & quick contact options */}
      <aside className="space-y-4 text-sm text-textMuted">
        <div className="rounded-2xl border border-surfaceMuted bg-surface px-4 py-4 sm:px-5 sm:py-5">
          <h3 className="text-sm font-semibold mb-2">
            Why quotes from LDNFIX convert into good jobs:
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li>Pricing done by someone with 15+ years on the tools.</li>
            <li>No pushy sales – just what the job needs, explained clearly.</li>
            <li>
              One point of contact managing all trades from first visit to
              sign-off.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-xs mb-2 font-semibold text-textPrimary">
            Prefer WhatsApp?
          </p>
          <p className="text-xs mb-3">
            Tap below to send photos and a quick voice note. It&apos;s often the
            fastest way to get an accurate idea of cost.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-background transition"
            data-event="whatsapp-cta-side"
          >
            📸 Send job photos on WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}
