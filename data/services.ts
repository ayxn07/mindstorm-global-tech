import type { ProcessStep, Service } from "@/types/site";

const defaultProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Requirement Analysis",
    description:
      "We understand your business needs, current systems, technical challenges, and expected outcomes.",
  },
  {
    number: 2,
    title: "Solution Design",
    description:
      "We plan the architecture, technology stack, infrastructure, security model, and implementation roadmap.",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "We develop, configure, install, and integrate the required hardware, software, network, or security solution.",
  },
  {
    number: 4,
    title: "Testing",
    description:
      "We validate performance, security, compatibility, and user experience before release.",
  },
  {
    number: 5,
    title: "Deployment",
    description:
      "We launch the solution with proper configuration, documentation, and handover.",
  },
  {
    number: 6,
    title: "Support",
    description:
      "We provide maintenance, upgrades, monitoring, and troubleshooting support.",
  },
];

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Custom Software Development for Scalable Business Growth",
    shortTitle: "Software Development",
    tagline: "Custom websites, apps, and enterprise systems.",
    heroHeading: "Custom Software Built for Scalable Business Growth",
    heroSub:
      "From websites and mobile apps to enterprise systems and automation platforms, we build digital solutions tailored to your operations.",
    heroImageKey: "codeScreen",
    overview:
      "We design, build, and maintain production-grade software for enterprises, institutions, and growing companies — balancing craftsmanship, performance, and long-term supportability.",
    featureGroups: [
      {
        heading: "Web Development",
        items: [
          "Corporate websites",
          "Web applications",
          "E-commerce platforms",
          "Landing pages",
          "Admin dashboards",
        ],
      },
      {
        heading: "Mobile App Development",
        items: [
          "Android apps",
          "iOS apps",
          "Cross-platform apps",
          "Customer portals",
        ],
      },
      {
        heading: "Enterprise Systems",
        items: [
          "CRM systems",
          "ERP solutions",
          "Workflow automation",
          "Internal business tools",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "Cloud",
        title: "SaaS Platforms",
        description: "Multi-tenant cloud applications with secure, scalable architecture.",
      },
      {
        icon: "Plug",
        title: "API Integrations",
        description: "Connect internal systems, payment gateways, and third-party services reliably.",
      },
      {
        icon: "Workflow",
        title: "AI-Based Automation",
        description: "Automate decisions and operations with pragmatic machine-assisted workflows.",
      },
      {
        icon: "Layers",
        title: "Cloud-Native Apps",
        description: "Containerised deployments on AWS, Azure, or on-prem orchestration.",
      },
    ],
    benefits: [
      "Automation of business processes",
      "Increased operational efficiency",
      "Scalable, future-ready architecture",
      "Better user experience",
      "Centralised business data",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["managed-it-services", "cybersecurity", "hr-technology"],
    seoDescription:
      "Custom software development in India — web, mobile, CRM, ERP, SaaS, API integrations, and cloud automation for modern businesses.",
  },
  {
    slug: "hardware-solutions",
    title: "Reliable Hardware & IT Infrastructure Solutions",
    shortTitle: "Hardware Solutions",
    tagline: "Hardware procurement, installation, AMC, and upgrades.",
    heroHeading: "Reliable Hardware & IT Infrastructure",
    heroSub:
      "Complete hardware procurement, installation, maintenance, and support for businesses and institutions.",
    heroImageKey: "hardwareRack",
    overview:
      "One vendor for every hardware need — from laptops and servers to structured cabling and CCTV — with AMC support and device lifecycle management built in.",
    featureGroups: [
      {
        heading: "Endpoints & Peripherals",
        items: [
          "Laptops & desktops",
          "Printers & scanners",
          "Peripherals & accessories",
          "Workstation bundles",
        ],
      },
      {
        heading: "Servers & Storage",
        items: [
          "Rack & tower servers",
          "Storage arrays (SAN / NAS)",
          "UPS & power backup",
          "Server room setup",
        ],
      },
      {
        heading: "Networking & Security Hardware",
        items: [
          "Routers & switches",
          "Wi-Fi access points",
          "Firewalls & VPN appliances",
          "CCTV & surveillance",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "Wrench",
        title: "Installation & Setup",
        description: "Rack build-out, structured cabling, and commissioning done to standards.",
      },
      {
        icon: "FileCheck",
        title: "AMC Support",
        description: "Annual Maintenance Contracts with SLA-backed response times.",
      },
      {
        icon: "RefreshCw",
        title: "Infrastructure Upgrades",
        description: "Refresh cycles for compute, storage, and networking without downtime.",
      },
      {
        icon: "ShieldCheck",
        title: "Device Lifecycle Support",
        description: "Warranty, repair, secure decommissioning and disposal.",
      },
    ],
    benefits: [
      "Reliable infrastructure",
      "Cost-effective procurement",
      "Long-term performance",
      "Reduced downtime",
      "Centralised vendor support",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["networking-ccna", "managed-it-services", "cybersecurity"],
    seoDescription:
      "IT hardware solutions — laptops, servers, networking, printers, CCTV, installation, and AMC support for enterprises and institutions.",
  },
  {
    slug: "networking-ccna",
    title: "CCNA-Based Network Design, Routing & Switching",
    shortTitle: "Networking CCNA",
    tagline: "Cisco CCNA-grade networks, from LAN to WAN.",
    heroHeading: "CCNA-Based Network Design, Routing & Switching",
    heroSub:
      "Professional network engineering services based on Cisco CCNA standards for secure, scalable, and high-performance connectivity.",
    heroImageKey: "networkCables",
    overview:
      "We design and operate Cisco-aligned networks — LAN, WAN, VLAN, inter-VLAN routing, and multi-branch connectivity — engineered for uptime and secure data flow.",
    featureGroups: [
      {
        heading: "Network Design",
        items: [
          "LAN / WAN setup",
          "VLAN configuration",
          "IP addressing",
          "Subnetting",
          "Network architecture planning",
        ],
      },
      {
        heading: "Routing & Switching",
        items: [
          "Static & dynamic routing",
          "OSPF, RIP, EIGRP",
          "Inter-VLAN routing",
          "Layer 2 & Layer 3 switching",
        ],
      },
      {
        heading: "Implementation",
        items: [
          "Router configuration",
          "Switch configuration",
          "Multi-branch connectivity",
          "ISP integration",
          "Structured cabling coordination",
        ],
      },
      {
        heading: "Troubleshooting",
        items: [
          "Network diagnostics",
          "Performance optimization",
          "Connectivity resolution",
          "Packet flow analysis",
          "Configuration review",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "Network",
        title: "Secure VLAN Segmentation",
        description: "Isolate traffic across business units with VLAN + ACL design.",
      },
      {
        icon: "Route",
        title: "Multi-Branch Connectivity",
        description: "Reliable site-to-site VPN and MPLS integrations.",
      },
      {
        icon: "Activity",
        title: "Performance Monitoring",
        description: "SNMP & NetFlow monitoring to keep latency and throughput in check.",
      },
    ],
    benefits: [
      "High-speed connectivity",
      "Scalable network design",
      "Secure data flow",
      "Better uptime",
      "Organized network architecture",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["cybersecurity", "hardware-solutions", "managed-it-services"],
    seoDescription:
      "CCNA-based networking services — LAN/WAN, VLAN, routing, switching, and multi-branch connectivity engineered for uptime and security.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions to Protect Systems, Networks & Data",
    shortTitle: "Cybersecurity",
    tagline: "Layered security, SOC-grade monitoring, risk & compliance.",
    heroHeading: "Cybersecurity that Protects Systems, Networks & Data",
    heroSub:
      "Protect your business from cyber threats with layered security, monitoring, risk assessment, and data protection solutions.",
    heroImageKey: "cybersecurityDark",
    overview:
      "From perimeter to endpoint to incident response, our cybersecurity programs combine engineering, monitoring, and governance to reduce risk and maintain compliance posture.",
    featureGroups: [
      {
        heading: "Network Security",
        items: [
          "Firewall setup",
          "IDS / IPS systems",
          "VPN configuration",
          "Secure network segmentation",
        ],
      },
      {
        heading: "Endpoint Security",
        items: [
          "Antivirus & EDR",
          "Device protection",
          "Access control",
          "Patch management",
        ],
      },
      {
        heading: "Data Protection",
        items: [
          "Encryption",
          "Backup systems",
          "Disaster recovery",
          "Secure storage",
        ],
      },
      {
        heading: "Risk & Compliance",
        items: [
          "Vulnerability assessment",
          "Security audits",
          "Risk analysis",
          "Security documentation",
        ],
      },
      {
        heading: "Advanced Security",
        items: [
          "SIEM systems",
          "SOC setup",
          "Threat monitoring",
          "Incident response guidance",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "ShieldAlert",
        title: "Zero-Trust Architecture",
        description: "Identity-driven access control across users, devices, and workloads.",
      },
      {
        icon: "Eye",
        title: "24×7 Threat Monitoring",
        description: "SIEM + SOC monitoring with tuned detections and escalation runbooks.",
      },
      {
        icon: "FileSearch",
        title: "Vulnerability Assessment",
        description: "Scheduled VA/PT with prioritised remediation plans.",
      },
      {
        icon: "Lock",
        title: "Data Encryption & Backup",
        description: "Encryption at rest + in transit, with tested backup and DR.",
      },
    ],
    benefits: [
      "Protection from cyber threats",
      "Data confidentiality",
      "Business continuity",
      "Reduced operational risk",
      "Stronger compliance posture",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["networking-ccna", "managed-it-services", "software-development"],
    seoDescription:
      "Cybersecurity solutions — firewalls, SOC, SIEM, VA/PT, endpoint security, encryption, and incident response for enterprises.",
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services for Smooth Business Operations",
    shortTitle: "Managed IT Services",
    tagline: "Outsourced IT operations, monitoring, and 24×7 support.",
    heroHeading: "Managed IT Services for Smooth Business Operations",
    heroSub:
      "Outsource your IT operations to reduce downtime, improve performance, and maintain secure digital infrastructure.",
    heroImageKey: "serverRoom",
    overview:
      "We run your IT so you can run your business — remote and on-site support, proactive monitoring, backup, and AMC bundled into one predictable engagement.",
    featureGroups: [
      {
        heading: "Core Managed Services",
        items: [
          "IT support — remote & on-site",
          "Network monitoring",
          "System maintenance",
          "Backup & recovery",
          "Security monitoring",
          "Device management",
          "Troubleshooting",
          "AMC support",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "MonitorSmartphone",
        title: "Unified Device Management",
        description: "Central control of laptops, desktops, and mobiles with policy compliance.",
      },
      {
        icon: "Clock",
        title: "24×7 Support Positioning",
        description: "Around-the-clock incident response with clear SLAs.",
      },
      {
        icon: "Database",
        title: "Backup & Recovery",
        description: "Tested backups with fast restore windows for business continuity.",
      },
    ],
    benefits: [
      "Reduced downtime",
      "24/7 support positioning",
      "Cost savings",
      "Better system reliability",
      "Faster technical response",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["hardware-solutions", "cybersecurity", "networking-ccna"],
    seoDescription:
      "Managed IT services — remote and on-site support, monitoring, backup, security monitoring, and AMC for predictable IT operations.",
  },
  {
    slug: "hr-technology",
    title: "HR Technology Solutions for Modern Workforce Management",
    shortTitle: "HR Technology",
    tagline: "HRMS, payroll, recruitment & workforce automation.",
    heroHeading: "HR Technology for Modern Workforce Management",
    heroSub:
      "Digital systems that help organizations manage employees, payroll, recruitment, and workforce operations more efficiently.",
    heroImageKey: "hrOffice",
    overview:
      "Streamline HR with platforms that centralise employee data, automate payroll and attendance, and make hiring measurable.",
    featureGroups: [
      {
        heading: "HR Platforms",
        items: [
          "HR management systems (HRMS)",
          "Payroll software",
          "Recruitment platforms",
          "Employee tracking",
          "Attendance systems",
          "Staff portals",
          "HR workflow automation",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "Users",
        title: "Workforce Analytics",
        description: "Real-time dashboards on headcount, attendance, and productivity.",
      },
      {
        icon: "Calendar",
        title: "Leave & Attendance Automation",
        description: "Geo-fenced punch-in with automated policy enforcement.",
      },
      {
        icon: "FileText",
        title: "Document & Policy Management",
        description: "Centralised employee docs with e-sign and versioning.",
      },
    ],
    benefits: [
      "Process automation",
      "Improved efficiency",
      "Better workforce management",
      "Centralised employee data",
      "Faster HR operations",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["software-development", "managed-it-services", "education-technology"],
    seoDescription:
      "HR technology — HRMS, payroll, recruitment, attendance, and workflow automation platforms for modern workforce management.",
  },
  {
    slug: "education-technology",
    title: "Education Technology Platforms for Digital Learning",
    shortTitle: "Education Technology",
    tagline: "LMS, student systems, and digital learning platforms.",
    heroHeading: "Education Technology for Digital Learning",
    heroSub:
      "Scalable digital solutions for institutions, training centers, and education providers.",
    heroImageKey: "edtechClassroom",
    overview:
      "We build and operate learning platforms that scale — from school LMS and student information systems to enterprise training and assessment tooling.",
    featureGroups: [
      {
        heading: "EdTech Platforms",
        items: [
          "Learning Management Systems (LMS)",
          "Online learning platforms",
          "Student management systems",
          "Training software",
          "Course dashboards",
          "Assessment modules",
          "Instructor portals",
        ],
      },
    ],
    advancedCapabilities: [
      {
        icon: "GraduationCap",
        title: "Campus-Grade LMS",
        description: "Cohort-based learning paths, certifications, and progress tracking.",
      },
      {
        icon: "ClipboardCheck",
        title: "Assessment & Proctoring",
        description: "Configurable quizzes, timed exams, and integrity tooling.",
      },
      {
        icon: "BarChart3",
        title: "Learning Analytics",
        description: "Dashboards on engagement, outcomes, and course performance.",
      },
    ],
    benefits: [
      "Digital learning enablement",
      "Scalable platforms",
      "Efficient management",
      "Better student tracking",
      "Improved training delivery",
    ],
    processSteps: defaultProcessSteps,
    relatedSlugs: ["software-development", "hr-technology", "managed-it-services"],
    seoDescription:
      "Education technology — LMS, student information systems, online learning, assessments, and training platforms for institutions.",
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);
