import type { Metadata } from "next";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessFlowingStages from "@/components/sections/process/ProcessFlowingStages";
import ProcessStages from "@/components/sections/process/ProcessStages";
import ProcessPrinciples from "@/components/sections/process/ProcessPrinciples";
import ProcessPostersShowcase from "@/components/sections/process/ProcessPostersShowcase";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Six engineered stages from brief to production — discovery, design, build, harden, launch, and operate. A predictable delivery programme across software, hardware, and security.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessFlowingStages />
      <ProcessStages />
      <ProcessPrinciples />
      <ProcessPostersShowcase />
      <HomeFinalCTA />
    </>
  );
}
