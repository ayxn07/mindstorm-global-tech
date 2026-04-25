"use client";

import dynamic from "next/dynamic";
import { getServiceImageSet } from "@/data/serviceImageSets";

const ImageTrail = dynamic(() => import("@/components/ImageTrail"), {
  ssr: false,
});

interface Props {
  slug: string;
}

export default function ServicePageImageTrail({ slug }: Props) {
  const items = getServiceImageSet(slug);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40]"
    >
      <ImageTrail items={items} variant={2} />
    </div>
  );
}
