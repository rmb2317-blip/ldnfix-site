// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Normalise base URL so we don't end up with double slashes
  const baseUrl = SITE_URL.replace(/\/$/, "");

  // Add any routes you want indexed here
  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority: number;
  }[] = [
    // Core site pages
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/roofing-guttering", changeFrequency: "monthly", priority: 0.9 },
    { path: "/plastering-rendering", changeFrequency: "monthly", priority: 0.9 },
    { path: "/brickwork-structural", changeFrequency: "monthly", priority: 0.8 },
    { path: "/repairs-maintenance", changeFrequency: "monthly", priority: 0.8 },
    { path: "/refurbishments", changeFrequency: "monthly", priority: 0.8 },

    // Local SEO pages – Enfield
    { path: "/roof-repairs-enfield", changeFrequency: "monthly", priority: 0.84 },
    { path: "/plasterer-enfield", changeFrequency: "monthly", priority: 0.84 },

    // Local SEO pages – Barnet
    { path: "/roof-repairs-barnet", changeFrequency: "monthly", priority: 0.84 },

    // Local SEO pages – Hackney
    { path: "/roof-repairs-hackney", changeFrequency: "monthly", priority: 0.84 },
    { path: "/plasterer-hackney", changeFrequency: "monthly", priority: 0.84 },
  ];

  return routes.map((route) => ({
    url: route.path === "/" ? `${baseUrl}` : `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
