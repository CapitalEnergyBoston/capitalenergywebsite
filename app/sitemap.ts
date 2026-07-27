import type { MetadataRoute } from "next";

// Canonical destination domain (override with NEXT_PUBLIC_SITE_URL if needed).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://capitalenergy.io";

const routes = ["/", "/services/", "/work/", "/insights/", "/about/", "/contact/"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
