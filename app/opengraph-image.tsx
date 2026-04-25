import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Mindstorm Global Consulting Services";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "Enterprise-Grade Technology Consulting",
    heading: "Smart IT Infrastructure. Secure Networks. Scalable Solutions.",
    sublabel:
      "Software, hardware, CCNA networking, cybersecurity, managed IT, HR tech, and EdTech — one technology partner.",
  });
}
