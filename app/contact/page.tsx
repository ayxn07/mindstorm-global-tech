import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { pages } from "@/data/pages";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  contactPageSchema,
  localBusinessSchema,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema({
            name: pages.contact.title,
            description: pages.contact.description,
            path: "/contact",
          }),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactHero />
      <ContactSplit />
      <HomeFinalCTA />
    </>
  );
}
