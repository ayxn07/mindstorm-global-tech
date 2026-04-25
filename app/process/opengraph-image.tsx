import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Our Process — Mindstorm Global";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "How We Work",
    heading: "A Structured Path from Discovery to Support",
    sublabel:
      "Requirement analysis, design, build, security review, deployment, and long-term operations.",
  });
}
