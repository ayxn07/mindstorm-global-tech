"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setGlobalLenisActive } from "@/hooks/useLenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setGlobalLenisActive(true);

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setGlobalLenisActive(false);
    };
  }, []);

  return <>{children}</>;
}
