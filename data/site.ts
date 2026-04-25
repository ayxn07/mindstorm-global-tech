import type { CompanyInfo } from "@/types/site";

export const site: CompanyInfo = {
  name: "Mindstorm Global Consulting Services",
  shortName: "Mindstorm Global",
  tagline:
    "Smart IT Infrastructure. Secure Networks. Scalable Digital Solutions.",
  description:
    "A technology-driven MSME delivering end-to-end IT, software, CCNA-based networking, cybersecurity, managed IT, HR technology, and education technology solutions for modern enterprises and institutions.",
  email: "hr@mindstormglobal.com",
  phone: "+917814806077",
  phoneDisplay: "+91 78148 06077",
  address: {
    line1: "",
    city: "Zirakpur",
    state: "Punjab",
    country: "India",
    full: "Zirakpur, Punjab, India",
  },
  domain: "mindstormtechglobal.com",
  metadataBaseUrl: "https://mindstormtechglobal.com",
};

export const legal = {
  copyright: `© ${new Date().getFullYear()} Mindstorm Global Consulting Services. All rights reserved.`,
  cin: "",
  tagline: "Technology. Network. Security. Scale.",
};

export const contactServices = [
  "Software Development",
  "Hardware Solutions",
  "CCNA Networking",
  "Cybersecurity",
  "Managed IT Services",
  "HR Technology",
  "Education Technology",
  "General Consultation",
] as const;

export type ContactService = (typeof contactServices)[number];
