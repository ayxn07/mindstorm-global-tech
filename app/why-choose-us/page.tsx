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
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.whyChooseUs.title,
  description: pages.whyChooseUs.description,
};

export default function WhyChooseUsPage() {
  return (
    <>
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
