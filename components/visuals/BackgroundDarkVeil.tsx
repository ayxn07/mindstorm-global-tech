"use client";

import dynamic from "next/dynamic";

const DarkVeil = dynamic(() => import("@/components/DarkVeil"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="absolute inset-0 bg-[var(--color-ms-black)]" />
  ),
});

interface Props {
  hueShift?: number;
  warpAmount?: number;
  speed?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  scanlineFrequency?: number;
  resolutionScale?: number;
  className?: string;
}

export default function BackgroundDarkVeil({
  hueShift = -158,
  warpAmount = 3,
  speed = 0.6,
  noiseIntensity = 0.02,
  scanlineIntensity = 0,
  scanlineFrequency = 0,
  resolutionScale = 1,
  className,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <DarkVeil
        hueShift={hueShift}
        warpAmount={warpAmount}
        speed={speed}
        noiseIntensity={noiseIntensity}
        scanlineIntensity={scanlineIntensity}
        scanlineFrequency={scanlineFrequency}
        resolutionScale={resolutionScale}
      />
    </div>
  );
}
