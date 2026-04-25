import type { Metadata } from "next";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessFlowingStages from "@/components/sections/process/ProcessFlowingStages";
import ProcessStages from "@/components/sections/process/ProcessStages";
import ProcessPrinciples from "@/components/sections/process/ProcessPrinciples";
import ProcessPostersShowcase from "@/components/sections/process/ProcessPostersShowcase";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/seo/structured-data";

const PROCESS_TITLE = "Our Process";
const PROCESS_DESCRIPTION =
  "Six engineered stages from brief to production — discovery, design, build, harden, launch, and operate. A predictable delivery programme across software, hardware, and security.";

export const metadata: Metadata = buildMetadata({
  title: PROCESS_TITLE,
  description: PROCESS_DESCRIPTION,
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: PROCESS_TITLE,
            description: PROCESS_DESCRIPTION,
            path: "/process",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ]}
      />
      <ProcessHero />
      <ProcessFlowingStages />
      <ProcessStages />
      <ProcessPrinciples />
      <ProcessPostersShowcase />
      <HomeFinalCTA />
    </>
  );
}
