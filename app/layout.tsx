import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cinzel, inter } from "@/lib/fonts";
import BootVault from "@/components/layout/BootVault";
import ClickSparkGlobal from "@/components/layout/ClickSparkGlobal";
import LenisProvider from "@/components/layout/LenisProvider";
import PageShell from "@/components/layout/PageShell";
import PageTransition from "@/components/layout/PageTransition";
import SplashScreen from "@/components/layout/SplashScreen";
import { VaultProvider } from "@/components/layout/VaultContext";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/structured-data";

const ROOT_TITLE =
  "Mindstorm Global Consulting Services | IT, Networking, Cybersecurity & Managed IT";
const ROOT_DESCRIPTION =
  "Premium IT, software, CCNA networking, cybersecurity, managed IT, HR technology, and education technology solutions for modern enterprises and institutions.";

export const metadata: Metadata = {
  metadataBase: new URL(site.metadataBaseUrl),
  title: {
    default: ROOT_TITLE,
    template: `%s | ${site.name}`,
  },
  description: ROOT_DESCRIPTION,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.metadataBaseUrl }],
  creator: site.name,
  publisher: site.name,
  category: "Technology Consulting",
  classification: "IT Consulting, Cybersecurity, Networking, Managed IT",
  keywords: [
    "Mindstorm Global",
    "IT consulting India",
    "managed IT services",
    "CCNA networking",
    "cybersecurity solutions",
    "software development company",
    "hardware procurement",
    "HR technology platforms",
    "education technology",
    "Zirakpur IT services",
    "Punjab IT consulting",
    "MSME technology partner",
    "enterprise IT solutions",
    "SOC SIEM monitoring",
    "LAN WAN VLAN design",
    "ERP CRM development",
    "LMS platforms",
  ],
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.metadataBaseUrl,
    title: ROOT_TITLE,
    description: ROOT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: ROOT_TITLE,
    description: ROOT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
  viewportFit: "cover",
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
        <JsonLd
          data={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
        />
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
