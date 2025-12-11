import ContactForm from "./ContactForm";
import CTAButtons from "./CTAButtons";

const phoneNumber = "+44 20 1234 5678";    // change to your real number
const emailAddress = "info@ldnfix.co.uk";  // change later
const whatsappNumber = "447000000000";     // change later

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b border-surfaceMuted/60 bg-surface py-14 sm:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
          >
            Share the job details and get a fast, honest quote.
          </h2>
          <p className="text-sm text-textMuted mb-4 max-w-lg">
            Send us the basics and we&apos;ll come back with a clear quote or
            day rate. If we need more information or photos, we&apos;ll let you
            know straight away.
          </p>
          <ContactForm />
        </div>

        <aside className="space-y-6 rounded-2xl border border-surfaceMuted bg-background/60 p-5 sm:p-6">
          <div>
            <h3 className="text-sm font-semibold mb-2">Prefer to chat?</h3>
            <p className="text-xs text-textMuted mb-3">
              If it&apos;s easier, call us or drop a quick message and we&apos;ll
              work out the best way to quote the job.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-textMuted text-xs uppercase tracking-wide">
                  Phone
                </span>
                <br />
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-medium hover:text-accent"
                >
                  {phoneNumber}
                </a>
              </p>
              <p>
                <span className="text-textMuted text-xs uppercase tracking-wide">
                  Email
                </span>
                <br />
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-medium hover:text-accent break-all"
                >
                  {emailAddress}
                </a>
              </p>
              <p>
                <span className="text-textMuted text-xs uppercase tracking-wide">
                  WhatsApp
                </span>
                <br />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  Message us on WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-surfaceMuted pt-4">
            <h3 className="text-sm font-semibold mb-2">Typical projects</h3>
            <ul className="space-y-1.5 text-xs text-textMuted">
              <li>• Making good after leaks and insurance works.</li>
              <li>• Ceiling repairs and re-skims after rewires.</li>
              <li>• Roofing leaks traced and fixed, not just patched.</li>
              <li>• Ongoing handyman support for managing agents.</li>
              <li>• Subcontracted labour on refurb and fit-out projects.</li>
            </ul>
          </div>

          <div className="border-t border-surfaceMuted pt-4">
            <h3 className="text-sm font-semibold mb-3">
              Need to move quickly?
            </h3>
            <p className="text-xs text-textMuted mb-3">
              If you&apos;re dealing with a leak, unsafe ceiling or urgent
              repair, contact us by phone after submitting the form so we can
              prioritise it.
            </p>
            <CTAButtons variant="secondary" />
          </div>
        </aside>
      </div>
    </section>
  );
}
