import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceOverview from "@/components/sections/services/ServiceOverview";
import ServiceFeatureGroups from "@/components/sections/services/ServiceFeatureGroups";
import ServiceCapabilities from "@/components/sections/services/ServiceCapabilities";
import ServiceOutcomeConstellation from "@/components/sections/services/ServiceOutcomeConstellation";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServicePageImageTrail from "@/components/sections/services/ServicePageImageTrail";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServicePageImageTrail slug={service.slug} />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatureGroups service={service} />
      <ServiceCapabilities service={service} />
      <ServiceOutcomeConstellation service={service} />
      <ServiceProcess service={service} />
      <HomeFinalCTA />
    </>
  );
}
