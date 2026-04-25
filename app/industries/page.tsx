import type { Metadata } from "next";
import IndustriesHero from "@/components/sections/corporate/IndustriesHero";
import SectorsShowcase from "@/components/sections/corporate/SectorsShowcase";
import SectorPrinciples from "@/components/sections/corporate/SectorPrinciples";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.industries.title,
  description: pages.industries.description,
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <SectorsShowcase />
      <SectorPrinciples />
    </>
  );
}
