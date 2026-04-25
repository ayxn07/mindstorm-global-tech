import type { Metadata } from "next";
import IndustriesHero from "@/components/sections/corporate/IndustriesHero";
import SectorsShowcase from "@/components/sections/corporate/SectorsShowcase";
import SectorPrinciples from "@/components/sections/corporate/SectorPrinciples";
import JsonLd from "@/components/seo/JsonLd";
import { pages } from "@/data/pages";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  collectionPageSchema,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: pages.industries.title,
  description: pages.industries.description,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: pages.industries.title,
            description: pages.industries.description,
            path: "/industries",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />
      <IndustriesHero />
      <SectorsShowcase />
      <SectorPrinciples />
    </>
  );
}
