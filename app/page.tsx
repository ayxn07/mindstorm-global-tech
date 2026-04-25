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

export const metadata: Metadata = {
  title: { absolute: pages.home.title },
  description: pages.home.description,
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
