import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Cpu,
  CircleDollarSign,
  GraduationCap,
  Headphones,
  KeyRound,
  Layers,
  Network,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Users,
  Compass,
  Eye,
  Workflow,
} from "lucide-react";
import type { ImageKey } from "@/data/images";

export type WhyDifferentiator = {
  icon: LucideIcon;
  title: string;
  body: string;
  size: "sm" | "md" | "lg";
  tone: "amber" | "gold" | "deep";
  imageKey?: ImageKey;
};

export const whyHeroBadges = [
  { value: "7+", label: "Service Lines" },
  { value: "12+", label: "Sectors" },
  { value: "24×7", label: "Coverage" },
  { value: "1", label: "Partner" },
] as const;

export const whyDifferentiators: WhyDifferentiator[] = [
  {
    icon: Layers,
    title: "End-to-End IT Solutions",
    body: "Software, hardware, networking, and security delivered as one engineered programme — never stitched together from disjoint vendors.",
    size: "lg",
    tone: "gold",
    imageKey: "serverRoom",
  },
  {
    icon: ShieldCheck,
    title: "Networking & Cybersecurity Expertise",
    body: "CCNA-grade routing, VLAN segmentation, and zero-trust defaults — hardened by SIEM telemetry and tested runbooks.",
    size: "md",
    tone: "amber",
    imageKey: "cybersecurityDark",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Business Solutions",
    body: "Built around your workflow, not a template. Every architecture decision starts with the operating reality of your team.",
    size: "md",
    tone: "deep",
    imageKey: "codeScreen",
  },
  {
    icon: CircleDollarSign,
    title: "Competitive Pricing",
    body: "Enterprise-grade engineering without enterprise-grade markup — calibrated for SMEs, mid-market, and institutions.",
    size: "sm",
    tone: "gold",
    imageKey: "skyline",
  },
  {
    icon: Headphones,
    title: "Strong Technical Support",
    body: "Same engineers who built the system answer the phone when it matters. No tier-1 ticket triage purgatory.",
    size: "sm",
    tone: "amber",
    imageKey: "hrOffice",
  },
  {
    icon: TrendingUp,
    title: "Scalable Implementation",
    body: "Sized for tomorrow's load. Capacity headroom, modular architecture, and clean migration paths are designed in.",
    size: "md",
    tone: "deep",
    imageKey: "networkCables",
  },
  {
    icon: KeyRound,
    title: "Security-Focused Approach",
    body: "Threat modelling, hardening, and compliance-aware defaults baked in from day one — never bolted on at the end.",
    size: "md",
    tone: "gold",
    imageKey: "matrixCode",
  },
  {
    icon: Target,
    title: "Business-Oriented Technology Planning",
    body: "Roadmaps tied to revenue, risk, and growth — translating business intent into measurable infrastructure outcomes.",
    size: "md",
    tone: "amber",
    imageKey: "consultingMeeting",
  },
];

export type ComparisonRow = {
  vendor: string;
  mindstorm: string;
};

export const whyComparison = {
  vendor: {
    label: "Most IT Vendors",
    badge: "Fragmented",
    summary:
      "Single-specialty teams handing off between contracts — gaps and rework grow with every phase.",
  },
  mindstorm: {
    label: "Mindstorm Global",
    badge: "Integrated",
    summary:
      "One programme. One accountability. Software, hardware, networks, and security designed together.",
  },
  rows: [
    {
      vendor: "Single specialty — software OR networks OR security",
      mindstorm: "End-to-end stack — designed and delivered as one programme",
    },
    {
      vendor: "Hand-offs between vendors — scope gaps surface late",
      mindstorm: "Single accountability — one team, one contract, no gaps",
    },
    {
      vendor: "Security bolted on as a phase, not designed in",
      mindstorm: "Zero-trust posture architected from day one",
    },
    {
      vendor: "Lock-in through proprietary tooling",
      mindstorm: "Open vendors — Cisco, Microsoft, AWS, Linux, Fortinet",
    },
    {
      vendor: "Helpdesk separated from the delivery team",
      mindstorm: "AMC + helpdesk continues with the same engineers",
    },
    {
      vendor: "Static once delivered — no evolution path",
      mindstorm: "Quarterly reviews, evolving roadmap, lasting value",
    },
    {
      vendor: "Generic SLAs that ignore business tolerance",
      mindstorm: "Tiered SLOs calibrated to your operating reality",
    },
  ] satisfies ComparisonRow[],
} as const;

export type CapabilityCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  imageKey: ImageKey;
  href: string;
};

export const whyCapabilityStack: CapabilityCard[] = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Web, mobile, enterprise systems, automation, and APIs — engineered to your workflow.",
    imageKey: "codeScreen",
    href: "/services/software-development",
  },
  {
    icon: Cpu,
    title: "Hardware Solutions",
    description: "Procurement, structured installation, AMC support — calibrated to your operating reality.",
    imageKey: "hardwareRack",
    href: "/services/hardware-solutions",
  },
  {
    icon: Network,
    title: "CCNA Networking",
    description: "Routing, switching, VLAN segmentation, WAN, and remote monitoring — carrier-grade architecture.",
    imageKey: "networkCables",
    href: "/services/networking-ccna",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "SIEM, EDR, vulnerability management, SOC, and compliance — always on, always tuned.",
    imageKey: "cybersecurityDark",
    href: "/services/cybersecurity",
  },
  {
    icon: Server,
    title: "Managed IT Services",
    description: "AMC contracts, 24×7 helpdesk, patch management, infrastructure monitoring.",
    imageKey: "serverRoom",
    href: "/services/managed-it-services",
  },
  {
    icon: Users,
    title: "HR Technology",
    description: "HRMS, payroll, attendance, recruitment — deployed as one cohesive system.",
    imageKey: "hrOffice",
    href: "/services/hr-technology",
  },
  {
    icon: GraduationCap,
    title: "Education Technology",
    description: "LMS, campus networks, assessment, and SSO platforms for institutions and training.",
    imageKey: "edtechClassroom",
    href: "/services/education-technology",
  },
];

export type OutcomeChapter = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  icon: LucideIcon;
};

export const whyOutcomeChapters: OutcomeChapter[] = [
  {
    index: "01",
    eyebrow: "Predictable Delivery",
    title: "Engineered for go-live confidence",
    body: "Every engagement ships with runbooks, rollback paths, and a post-deployment review. Surprises end before they reach your users — and we own the consequences when they do not.",
    bullets: [
      "Documented SLAs and RACI matrices on every project",
      "Change management with rollback paths from day one",
      "Post-deployment reviews close the loop on every release",
    ],
    icon: Workflow,
  },
  {
    index: "02",
    eyebrow: "Security by Design",
    title: "Zero-trust posture from the first commit",
    body: "Threat modelling, hardening, and compliance defaults are designed into the architecture — not retrofitted at the end. Auditor-ready evidence trails follow naturally.",
    bullets: [
      "Identity-first access and segmented VLANs by default",
      "SIEM telemetry routed to a dedicated detection pipeline",
      "Compliance — PCI, HIPAA, ISO, DPDP — baked into design",
    ],
    icon: ShieldCheck,
  },
  {
    index: "03",
    eyebrow: "Single Partner",
    title: "One contract spans the whole stack",
    body: "Most vendors specialise in one slice. We engineer the whole stack — so there is no scope gap between the software, the rack, and the firewall. Single phone number, single accountability.",
    bullets: [
      "Same engineers deliver, support, and evolve the system",
      "No hand-off contracts between specialty providers",
      "Quarterly architecture reviews tied to business KPIs",
    ],
    icon: Layers,
  },
  {
    index: "04",
    eyebrow: "Operational Visibility",
    title: "Observability is a first-class deliverable",
    body: "If a metric matters, it lives on a dashboard and a paging policy. You see what your oncall sees — and so do your auditors. Nothing fails silently in our deployments.",
    bullets: [
      "Golden-signal telemetry from the first deployment",
      "Centralised logs and alerts with paging escalation",
      "Quarterly service reviews with measurable deltas",
    ],
    icon: Eye,
  },
  {
    index: "05",
    eyebrow: "Long-Horizon Partnership",
    title: "We do not disappear after go-live",
    body: "Managed IT, AMC, and a dedicated helpdesk are part of the original engagement — not an afterthought. The same team that built the platform evolves it for the next three years.",
    bullets: [
      "AMC and 24×7 helpdesk staffed by the build team",
      "Tiered escalation paths with named senior engineers",
      "Roadmap reviews aligned to your fiscal planning",
    ],
    icon: Compass,
  },
];

export type WhyMetric = {
  to: number;
  decimals?: number;
  suffix: string;
  label: string;
  detail: string;
  duration?: number;
};

export const whyMetrics: WhyMetric[] = [
  {
    to: 99.95,
    decimals: 2,
    suffix: "%",
    label: "Typical uptime target",
    detail: "Across managed IT and infrastructure engagements.",
    duration: 2.0,
  },
  {
    to: 40,
    suffix: "%",
    label: "Faster rollouts",
    detail: "Structured delivery shortens time-to-deploy.",
    duration: 1.6,
  },
  {
    to: 360,
    suffix: "°",
    label: "Stack coverage",
    detail: "Software · hardware · networks · security.",
    duration: 1.5,
  },
  {
    to: 24,
    suffix: "×7",
    label: "Support coverage",
    detail: "Same engineers — build, run, evolve.",
    duration: 1.4,
  },
];

export type WhyFaq = {
  q: string;
  a: string;
};

export const whyFaqs: WhyFaq[] = [
  {
    q: "How are you different from a traditional MSP?",
    a: "Most MSPs handle helpdesk and patching. We handle the whole stack — software builds, hardware procurement, CCNA-grade networking, cybersecurity architecture, and HR/EdTech platforms — under a single engagement and a single accountability.",
  },
  {
    q: "Do you lock clients into proprietary tooling?",
    a: "No. We deploy on the platforms your team already trusts — Cisco, Microsoft, AWS, Azure, Google Cloud, Linux, Fortinet, Palo Alto, VMware, Oracle, SAP. Open standards, open exit paths.",
  },
  {
    q: "Can you serve our specific industry?",
    a: "We deliver across 12+ sectors — enterprise, finance, manufacturing, education, healthcare, government, retail, telecom, cloud ops, HR services, security ops, data and AI. Each engagement is calibrated to the regulatory and operating reality of the sector.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Six engineered stages — Discovery, Design, Build, Harden, Launch, Operate. Documented SLAs, change-control with rollback, post-deployment review, and a 24×7 helpdesk staffed by the same engineers who built the system.",
  },
  {
    q: "Do you provide on-site support?",
    a: "Yes. Headquartered in Zirakpur, Punjab, with on-site delivery across India and remote operations globally. AMC contracts include scheduled site visits and named senior engineers on escalation paths.",
  },
  {
    q: "How quickly can you start?",
    a: "Discovery typically begins within a week of the first conversation. Design and architecture artefacts land within two to three weeks, and engineering work begins immediately after stakeholder sign-off on the architecture decision record.",
  },
  {
    q: "What happens after go-live?",
    a: "We move into managed operations — 24×7 monitoring, quarterly architecture reviews, vulnerability cycles, and a roadmap aligned to your fiscal planning. The same engineers who delivered the platform evolve it.",
  },
];
