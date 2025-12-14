// components/ContactSection.tsx

import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-label="Contact and fast quote form"
    >
      <div className="section-wrapper">
        <ContactForm />
      </div>
    </section>
  );
}
