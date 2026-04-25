import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGalleryShowcase from "@/components/sections/services/ServicesGalleryShowcase";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Seven specialised technology service lines delivered as one integrated program — software, hardware, networking, cybersecurity, managed IT, HR technology, and EdTech.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGalleryShowcase />
      <ServicesGrid />
      <HomeFinalCTA />
    </>
  );
}
