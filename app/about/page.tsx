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
import JsonLd from "@/components/seo/JsonLd";
import { pages } from "@/data/pages";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  aboutPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: pages.about.title,
  description: pages.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPageSchema({
            name: pages.about.title,
            description: pages.about.description,
            path: "/about",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
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
