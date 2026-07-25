import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (siteConfig.siteMode !== "live" || !siteConfig.siteUrl) {
    return [];
  }

  const paths = ["", "/termos", "/privacidade", "/reembolso"];

  return paths.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.3 : 1,
  }));
}
