"use client";

import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";

export default function ClickSparkGlobal({ children }: { children: ReactNode }) {
  return (
    <ClickSpark
      sparkColor="#D7BF5E"
      sparkSize={9}
      sparkRadius={18}
      sparkCount={6}
      duration={520}
      easing="ease-out"
      extraScale={1}
    >
      {children}
    </ClickSpark>
  );
}
