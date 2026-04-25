import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.metadataBaseUrl;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { path: "/", priority: 1.0, changeFrequency: "monthly" },
      { path: "/about", priority: 0.8, changeFrequency: "monthly" },
      { path: "/services", priority: 0.9, changeFrequency: "monthly" },
      { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
      { path: "/process", priority: 0.6, changeFrequency: "monthly" },
      { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
      { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    ] as const
  ).map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
