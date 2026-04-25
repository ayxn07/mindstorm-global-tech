import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Headphones,
  Layers,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import type { PageMeta } from "@/types/site";

export const pages: Record<string, PageMeta> = {
  home: {
    slug: "/",
    title: "Mindstorm Global Consulting Services",
    description:
      "Smart IT infrastructure, secure networks, and scalable digital solutions — software, hardware, CCNA networking, cybersecurity, managed IT, HR tech, and EdTech for enterprises and institutions.",
    heroEyebrow: "Enterprise-Grade Technology Consulting",
    heroHeading:
      "Smart IT Infrastructure. Secure Networks. Scalable Digital Solutions.",
    heroSub:
      "Delivering complete hardware, software, CCNA-based networking, and cybersecurity solutions for businesses, institutions, and enterprises.",
  },
  about: {
    slug: "/about",
    title: "About Us",
    description:
      "Mindstorm Global Consulting Services is a technology-focused consulting enterprise delivering secure, scalable, and future-ready IT solutions.",
    heroEyebrow: "Who We Are",
    heroHeading: "About Mindstorm Global Consulting Services",
    heroSub:
      "A technology-focused consulting enterprise delivering secure, scalable, and future-ready IT solutions.",
  },
  industries: {
    slug: "/industries",
    title: "Industries",
    description:
      "Technology solutions designed for enterprises, institutions, startups, and organisations across multiple sectors.",
    heroEyebrow: "Sectors We Serve",
    heroHeading: "Industries We Serve",
    heroSub:
      "Technology solutions designed for enterprises, institutions, startups, and organisations across multiple sectors.",
  },
  process: {
    slug: "/process",
    title: "Our Process",
    description:
      "A structured implementation approach from requirement analysis to long-term support — designed for predictable delivery.",
    heroEyebrow: "How We Work",
    heroHeading: "Our Work Process",
    heroSub:
      "A structured implementation approach from requirement analysis to long-term support.",
  },
  whyChooseUs: {
    slug: "/why-choose-us",
    title: "Why Choose Mindstorm",
    description:
      "One technology partner for infrastructure, software, networking, cybersecurity, HR platforms, and education systems.",
    heroEyebrow: "Why Mindstorm",
    heroHeading: "Why Choose Mindstorm Global Consulting Services?",
    heroSub:
      "One technology partner for infrastructure, software, networking, cybersecurity, HR platforms, and education systems.",
  },
  contact: {
    slug: "/contact",
    title: "Contact Us",
    description:
      "Speak with our team for IT infrastructure, software, networking, cybersecurity, managed IT, HR technology, or education technology requirements.",
    heroEyebrow: "Let's Talk",
    heroHeading: "Get in Touch With Mindstorm",
    heroSub:
      "Speak with our team for IT infrastructure, software, networking, cybersecurity, managed IT, HR technology, or education technology requirements.",
  },
};

export const whyChooseUsReasons = [
  "End-to-End IT Solutions",
  "Expertise in Networking & Cybersecurity",
  "Custom Business Solutions",
  "Competitive Pricing",
  "Strong Technical Support",
  "Scalable Implementation",
  "Security-Focused Approach",
  "Business-Oriented Technology Planning",
];

export const homeStats = [
  { value: 7, suffix: "+", label: "Service Lines" },
  { value: 24, suffix: "×7", label: "Support Positioning" },
  { value: 100, suffix: "%", label: "Client-First Delivery" },
];

export const homeWhyBullets = [
  "One-stop IT solution provider",
  "Hardware + software + security integration",
  "CCNA-level network engineering",
  "Scalable and future-ready systems",
  "Dedicated technical support",
  "Secure implementation approach",
];

export type HomeWhyBentoItem = {
  title: string;
  body: string;
  icon: LucideIcon;
  size: "sm" | "md" | "lg";
};

export const homeWhyBentoItems: HomeWhyBentoItem[] = [
  {
    icon: Layers,
    title: "One-Stop IT Partner",
    body: "Hardware, software, security and support engineered as one stack — never stitched together from disjoint vendors.",
    size: "lg",
  },
  {
    icon: Network,
    title: "CCNA-Level Network Engineering",
    body: "Cisco-certified architects design LAN, WAN, and VLAN segmentation that scales without rework.",
    size: "md",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    body: "Threat modelling baked in, not bolted on.",
    size: "sm",
  },
  {
    icon: Cpu,
    title: "Hardware + Software",
    body: "Procurement to provisioning, one vendor.",
    size: "sm",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    body: "Named engineers, predictable SLAs, the same team that built it answers the phone.",
    size: "md",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready Systems",
    body: "Capacity headroom and modular architecture sized for the load you'll have in 24 months.",
    size: "md",
  },
];

export const technologyTiles = [
  { title: "Cloud Systems", description: "Scalable cloud infrastructure" },
  { title: "Secure Networks", description: "CCNA-grade networking" },
  { title: "Business Applications", description: "CRM, ERP, SaaS" },
  { title: "Endpoint Protection", description: "EDR + device policy" },
  { title: "Infrastructure Support", description: "AMC + 24×7 monitoring" },
  { title: "HR Platforms", description: "HRMS, payroll, attendance" },
  { title: "LMS Platforms", description: "Campus + training LMS" },
  { title: "Data Backup", description: "Encrypted backup + DR" },
];

export const homeIndustries = [
  { title: "Enterprise", image: "serverRoom" },
  { title: "Finance", image: "skyline" },
  { title: "Manufacturing", image: "hardwareRack" },
  { title: "Education", image: "edtechClassroom" },
  { title: "Healthcare", image: "consultingMeeting" },
  { title: "Government", image: "cybersecurityDark" },
  { title: "Retail", image: "codeScreen" },
  { title: "Telecom", image: "networkCables" },
  { title: "Cloud Ops", image: "cloudSky" },
  { title: "HR Services", image: "hrOffice" },
  { title: "Security Ops", image: "socDashboard" },
  { title: "Data & AI", image: "matrixCode" },
] as const;

export const homeMarqueeWords = [
  "ENTERPRISE",
  "SECURITY",
  "INFRASTRUCTURE",
  "LEARNING",
  "PEOPLE",
  "NETWORKS",
  "CLOUD",
];

export const homeTechLogos = [
  "Cisco",
  "Microsoft",
  "AWS",
  "Azure",
  "Google Cloud",
  "Linux",
  "VMware",
  "Fortinet",
  "Palo Alto",
  "CrowdStrike",
  "Oracle",
  "SAP",
];

export const homeOutcomes = [
  {
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime Target",
    detail: "Resilient platforms engineered for always-on operations.",
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster Rollouts",
    detail: "Structured delivery shortens time-to-deploy for new systems.",
  },
  {
    value: 360,
    suffix: "°",
    label: "Coverage",
    detail: "Software · hardware · networks · security — one partner.",
  },
];

export const homeProcessSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "Understanding your business, infrastructure, and goals.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Architecture, stack, and timelines mapped to your constraints.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Build, integrate, and validate across hardware and software.",
  },
  {
    step: "04",
    title: "Security Review",
    description: "Threat modelling, hardening, and compliance-aware defaults.",
  },
  {
    step: "05",
    title: "Deployment",
    description: "Controlled rollout with runbooks and rollback paths.",
  },
  {
    step: "06",
    title: "Support & Scale",
    description: "Ongoing operations, monitoring, and evolution.",
  },
];

export const featuredCapabilities = [
  {
    title: "Zero-Trust Network Rollout",
    description: "Identity-first access across 14 branches with segmented VLANs.",
  },
  {
    title: "ERP for Manufacturing",
    description: "End-to-end production, inventory, and payroll in one system.",
  },
  {
    title: "Campus LMS",
    description: "5,000+ learner platform with proctored assessments and analytics.",
  },
  {
    title: "24×7 SOC",
    description: "SIEM-driven monitoring with tuned detections and runbooks.",
  },
];
