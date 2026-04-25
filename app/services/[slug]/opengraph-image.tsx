import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { OG_SIZE, OG_CONTENT_TYPE, renderOg } from "@/lib/seo/og-template";

export const alt = "Mindstorm Global Service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return renderOg({
    eyebrow: service.shortTitle,
    heading: service.heroHeading,
    sublabel: service.tagline,
  });
}
