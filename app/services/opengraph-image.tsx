import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Mindstorm Global Services";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OgImage() {
  return renderOg({
    eyebrow: "Our Services",
    heading: "Seven Service Lines. One Integrated Program.",
    sublabel:
      "Software, hardware, networking, cybersecurity, managed IT, HR technology, and education technology.",
  });
}
