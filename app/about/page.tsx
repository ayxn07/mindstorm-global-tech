import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutOriginStory from "@/components/sections/about/AboutOriginStory";
import AboutCoreValues from "@/components/sections/about/AboutCoreValues";
import AboutKeyMetrics from "@/components/sections/about/AboutKeyMetrics";
import AboutServicePillars from "@/components/sections/about/AboutServicePillars";
import AboutTechStack from "@/components/sections/about/AboutTechStack";
import AboutTeamApproach from "@/components/sections/about/AboutTeamApproach";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMissionVision />
      <AboutOriginStory />
      <AboutCoreValues />
      <AboutKeyMetrics />
      <AboutServicePillars />
      <AboutTechStack />
      <AboutTeamApproach />
      <HomeFinalCTA />
    </>
  );
}
