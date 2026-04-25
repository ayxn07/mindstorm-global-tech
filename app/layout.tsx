import type { Metadata } from "next";
import "./globals.css";
import { cinzel, inter } from "@/lib/fonts";
import BootVault from "@/components/layout/BootVault";
import ClickSparkGlobal from "@/components/layout/ClickSparkGlobal";
import LenisProvider from "@/components/layout/LenisProvider";
import PageShell from "@/components/layout/PageShell";
import PageTransition from "@/components/layout/PageTransition";
import SplashScreen from "@/components/layout/SplashScreen";
import { VaultProvider } from "@/components/layout/VaultContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://mindstormtechglobal.com"),
  title: {
    default: "Mindstorm Global Consulting Services | IT, Networking, Cybersecurity & Managed IT",
    template: "%s | Mindstorm Global Consulting Services",
  },
  description:
    "Premium IT, software, CCNA networking, cybersecurity, managed IT, HR technology, and education technology solutions for modern enterprises and institutions.",
  applicationName: "Mindstorm Global Consulting Services",
  openGraph: {
    type: "website",
    siteName: "Mindstorm Global Consulting Services",
    locale: "en_US",
    url: "/",
    title: "Mindstorm Global Consulting Services",
    description:
      "Smart IT infrastructure, secure networks, and scalable digital solutions for modern businesses.",
    images: [{ url: "/mindstorm-global-tech-logo.png", alt: "Mindstorm Global" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindstorm Global Consulting Services",
    description:
      "Smart IT infrastructure, secure networks, and scalable digital solutions.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-ms-black text-ms-white font-body overflow-x-hidden">
        <BootVault />
        <LenisProvider>
          <VaultProvider>
            <ClickSparkGlobal>
              <SplashScreen />
              <PageTransition />
              <PageShell>{children}</PageShell>
            </ClickSparkGlobal>
          </VaultProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
