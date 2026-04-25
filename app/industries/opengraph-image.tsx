import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Industries We Serve — Mindstorm Global";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "Sectors We Serve",
    heading: "Technology Across Industries",
    sublabel:
      "Solutions for enterprises, institutions, startups, and organisations across multiple sectors.",
  });
}
