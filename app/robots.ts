import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "ClaudeBot",
          "PerplexityBot",
          "Bytespider",
          "Amazonbot",
          "Applebot-Extended",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${site.metadataBaseUrl}/sitemap.xml`,
    host: site.metadataBaseUrl,
  };
}
