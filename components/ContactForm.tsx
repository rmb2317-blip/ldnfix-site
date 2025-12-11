"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Could not send your message.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Request a quote or call back"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs font-medium">
            Name<span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="h-10 rounded-lg border border-surfaceMuted bg-background px-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs font-medium">
            Email<span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-10 rounded-lg border border-surfaceMuted bg-background px-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-xs font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-10 rounded-lg border border-surfaceMuted bg-background px-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Mobile or landline"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="service" className="text-xs font-medium">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            className="h-10 rounded-lg border border-surfaceMuted bg-background px-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option value="">Select an option</option>
            <option value="Plastering / making good">
              Plastering / making good
            </option>
            <option value="Roofing repairs">Roofing repairs</option>
            <option value="Repairs / maintenance">Repairs / maintenance</option>
            <option value="Handyman / small works">
              Handyman / small works
            </option>
            <option value="Subcontracting / multiple jobs">
              Subcontracting / multiple jobs
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-xs font-medium">
          Tell us about the job<span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="rounded-lg border border-surfaceMuted bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Where is the property, what needs doing, and how soon do you need it sorted?"
        />
      </div>

      <p className="text-[11px] text-textMuted">
        If you&apos;d like a faster quote, mention if you can send photos or a
        short video via WhatsApp after we reply.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-background shadow-soft hover:bg-yellow-300 transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request my quote"}
      </button>

      {status === "success" && (
        <p className="text-xs text-green-400">
          Thanks — your message has been sent. We&apos;ll come back to you as
          soon as we can.
        </p>
      )}

      {status === "error" && (
        <p className="text-xs text-red-400">
          {errorMessage ||
            "We couldn&apos;t send your message. Please try again or call us."}
        </p>
      )}
    </form>
  );
}
