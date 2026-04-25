import type { Metadata } from "next";
import { site } from "@/data/site";

const DEFAULT_KEYWORDS = [
  "IT consulting India",
  "managed IT services",
  "CCNA networking",
  "cybersecurity solutions",
  "software development company",
  "hardware and infrastructure",
  "HR technology platforms",
  "education technology",
  "Zirakpur IT services",
  "Punjab IT consulting",
  "MSME technology partner",
  "enterprise IT solutions",
];

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
}): Metadata {
  const url = `${site.metadataBaseUrl}${path === "/" ? "" : path}`;
  const allKeywords = Array.from(new Set([...(keywords ?? []), ...DEFAULT_KEYWORDS]));

  const twitter: NonNullable<Metadata["twitter"]> = {
    card: "summary_large_image",
    title,
    description,
  };
  if (site.twitterHandle) {
    twitter.creator = site.twitterHandle;
    twitter.site = site.twitterHandle;
  }

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      siteName: site.name,
      locale: "en_US",
      title,
      description,
    },
    twitter,
  };
}
