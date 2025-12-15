// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_SLOGAN,
  PHONE_DISPLAY,
  EMAIL,
  WHATSAPP_URL,
  SERVICE_AREAS,
} from "@/lib/siteConfig";
import StickyContactBar from "@/components/StickyContactBar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} – ${BUSINESS_SLOGAN}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Construction-led multi-trade repairs, roofing, plastering, brickwork and refurbs across North & East London. 15+ years on the tools, no call centre, no cowboys.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} – ${BUSINESS_SLOGAN}`,
    description:
      "Multi-trade construction experience for roofs, plastering, brickwork, refurbs and repairs across London. Quotes and jobs managed by someone who has actually done the work.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} – ${BUSINESS_SLOGAN}`,
    description:
      "London multi-trade repairs, refurbs and maintenance with 15+ years real construction experience behind every quote.",
  },
};

// Optional: Google Tag Manager support (fill in on Vercel later)
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
    description:
      "Construction-led multi-trade repair and build service in London, covering roofing, plastering, brickwork, refurbs and maintenance.",
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    slogan: BUSINESS_SLOGAN,
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    sameAs: [WHATSAPP_URL],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const schemaGraph = [localBusinessSchema, webSiteSchema];

  return (
    <html lang="en">
      <head>
        {/* Global JSON-LD schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />

        {/* Optional Google Tag Manager – only renders if NEXT_PUBLIC_GTM_ID is set */}
        {GTM_ID && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className="bg-background text-textPrimary antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}

        {/* Site-wide sticky mobile CTA bar (WhatsApp + Call) */}
        <StickyContactBar />
      </body>
    </html>
  );
}
