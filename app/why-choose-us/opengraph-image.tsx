import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Why Choose Mindstorm Global";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "Why Mindstorm",
    heading: "One Technology Partner. Every Discipline.",
    sublabel:
      "Infrastructure, software, networking, cybersecurity, HR platforms, and education systems — under one roof.",
  });
}
