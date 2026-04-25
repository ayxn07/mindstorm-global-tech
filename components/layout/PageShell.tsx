import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBlur from "./PageBlur";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer />
      <PageBlur />
    </>
  );
}
