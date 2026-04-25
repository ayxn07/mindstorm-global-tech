import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSplit />
      <HomeFinalCTA />
    </>
  );
}
