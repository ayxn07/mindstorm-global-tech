import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "About Mindstorm Global Consulting Services";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "Who We Are",
    heading: "Technology Solutions Built for Modern Business",
    sublabel:
      "A consulting enterprise delivering secure, scalable, future-ready IT — across infrastructure, software, and security.",
  });
}
