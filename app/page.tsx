import type { Metadata } from "next";
import HomeHero from "@/components/sections/home/HomeHero";
import CompanyIntro from "@/components/sections/home/CompanyIntro";
import CoreServicesSnapshot from "@/components/sections/home/CoreServicesSnapshot";
import GlobalReachShowcase from "@/components/sections/home/GlobalReachShowcase";
import FeaturedCapabilities from "@/components/sections/home/FeaturedCapabilities";
import FluidOutcomes from "@/components/sections/home/FluidOutcomes";
import WhyChooseUsPreview from "@/components/sections/home/WhyChooseUsPreview";
import ProcessPreview from "@/components/sections/home/ProcessPreview";
import MarqueeBand from "@/components/sections/home/MarqueeBand";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import { pages } from "@/data/pages";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: pages.home.title,
    description: pages.home.description,
    path: "/",
  }),
  title: { absolute: pages.home.title },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CompanyIntro />
      <CoreServicesSnapshot />
      <GlobalReachShowcase />
      <FeaturedCapabilities />
      <FluidOutcomes />
      <WhyChooseUsPreview />
      <ProcessPreview />
      <MarqueeBand />
      <HomeFinalCTA />
    </>
  );
}
