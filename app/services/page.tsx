import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGalleryShowcase from "@/components/sections/services/ServicesGalleryShowcase";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/lib/seo/structured-data";

const SERVICES_TITLE = "Our Services";
const SERVICES_DESCRIPTION =
  "Seven specialised technology service lines delivered as one integrated program — software, hardware, networking, cybersecurity, managed IT, HR technology, and EdTech.";

export const metadata: Metadata = buildMetadata({
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: SERVICES_TITLE,
            description: SERVICES_DESCRIPTION,
            path: "/services",
          }),
          itemListSchema(services),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ServicesHero />
      <ServicesGalleryShowcase />
      <ServicesGrid />
      <HomeFinalCTA />
    </>
  );
}
