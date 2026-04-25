import type { Metadata } from "next";
import WhyHero from "@/components/sections/why/WhyHero";
import WhyDifferentiators from "@/components/sections/why/WhyDifferentiators";
import WhyLanyardSection from "@/components/sections/why/WhyLanyardSection";
import WhyComparison from "@/components/sections/why/WhyComparison";
import WhyCapabilityStack from "@/components/sections/why/WhyCapabilityStack";
import WhyMetrics from "@/components/sections/why/WhyMetrics";
import WhyOutcomes from "@/components/sections/why/WhyOutcomes";
import WhyFAQ from "@/components/sections/why/WhyFAQ";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { pages } from "@/data/pages";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: pages.whyChooseUs.title,
  description: pages.whyChooseUs.description,
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: pages.whyChooseUs.title,
            description: pages.whyChooseUs.description,
            path: "/why-choose-us",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Why Choose Us", path: "/why-choose-us" },
          ]),
        ]}
      />
      <WhyHero />
      <WhyDifferentiators />
      <WhyLanyardSection />
      <WhyComparison />
      <WhyCapabilityStack />
      <WhyMetrics />
      <WhyOutcomes />
      <WhyFAQ />
      <HomeFinalCTA />
    </>
  );
}
