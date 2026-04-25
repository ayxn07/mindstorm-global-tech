import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Contact Mindstorm Global";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "Let's Talk",
    heading: "Get in Touch with Mindstorm Global",
    sublabel:
      "Speak with our team for IT, networking, cybersecurity, managed IT, HR technology, or EdTech requirements.",
  });
}
