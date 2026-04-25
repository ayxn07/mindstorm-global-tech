import type { NavItem } from "@/types/site";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Software Development",
        href: "/services/software-development",
        description: "Web, mobile, enterprise systems & automation",
      },
      {
        label: "Hardware Solutions",
        href: "/services/hardware-solutions",
        description: "Procurement, installation, AMC support",
      },
      {
        label: "CCNA Networking",
        href: "/services/networking-ccna",
        description: "Routing, switching, VLAN, WAN",
      },
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Firewalls, SOC, risk & compliance",
      },
      {
        label: "Managed IT Services",
        href: "/services/managed-it-services",
        description: "Monitoring, 24×7 support, AMC",
      },
      {
        label: "HR Technology",
        href: "/services/hr-technology",
        description: "HRMS, payroll, recruitment platforms",
      },
      {
        label: "Education Technology",
        href: "/services/education-technology",
        description: "LMS, student & training platforms",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Why Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Hardware Solutions", href: "/services/hardware-solutions" },
  { label: "Networking CCNA", href: "/services/networking-ccna" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Managed IT Services", href: "/services/managed-it-services" },
  { label: "HR Technology", href: "/services/hr-technology" },
  { label: "Education Technology", href: "/services/education-technology" },
];

export const footerIndustries: NavItem[] = [
  { label: "Corporate Enterprises", href: "/industries#enterprises" },
  { label: "SMEs & Startups", href: "/industries#smes" },
  { label: "Educational Institutions", href: "/industries#education" },
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Retail & E-commerce", href: "/industries#retail" },
];
