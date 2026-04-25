import { images } from "@/data/images";

export interface ProcessStage {
  step: string;
  title: string;
  shortTitle: string;
  description: string;
  outcomes: string[];
  duration: string;
  artefacts: string[];
  imageKey: keyof typeof images;
  narrative: string;
  keyDetails: string[];
}

export const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    shortTitle: "Discover",
    description:
      "Stakeholder interviews, infrastructure audit, and goal mapping to surface every constraint before a single line of code is written.",
    outcomes: [
      "Documented business objectives",
      "Inventory of existing systems",
      "Risk and compliance baseline",
    ],
    duration: "Week 1 – 2",
    artefacts: ["Discovery brief", "Stakeholder map", "Constraint matrix"],
    imageKey: "consultingMeeting",
    narrative:
      "We sit with operators, engineers, and executives to map every constraint — political, technical, and budgetary — before a single architecture line is drawn.",
    keyDetails: [
      "Lead: Principal Consultant",
      "Tooling: Miro, Notion, Loom walkthroughs",
      "KPI: ≤ 80hrs to signed brief",
      "Risk: scope creep gated at week 2",
    ],
  },
  {
    step: "02",
    title: "Solution Design",
    shortTitle: "Architect",
    description:
      "Architecture, technology stack, integration topology, and timeline mapped to the constraints we surfaced — reviewed with your team before build.",
    outcomes: [
      "Reference architecture",
      "Technology stack decisions",
      "Phased delivery roadmap",
    ],
    duration: "Week 2 – 4",
    artefacts: ["Architecture diagram", "RACI matrix", "Sprint plan"],
    imageKey: "codeScreen",
    narrative:
      "Architecture, stack, and topology decisions are written down with the trade-offs on the page — your team reviews and signs before any build cycle starts.",
    keyDetails: [
      "Lead: Solutions Architect",
      "Tooling: Lucidchart, ADRs in Git",
      "KPI: 100% decisions traceable",
      "Risk: vendor lock-in flagged in ADR",
    ],
  },
  {
    step: "03",
    title: "Development & Integration",
    shortTitle: "Build",
    description:
      "Iterative builds across software, hardware, and network layers — with continuous validation against the design baseline.",
    outcomes: [
      "Working software increments",
      "Integrated hardware + network",
      "Automated test coverage",
    ],
    duration: "Week 4 – 14",
    artefacts: ["CI/CD pipelines", "Integration test reports", "Code reviews"],
    imageKey: "serverRoom",
    narrative:
      "Two-week increments cut across software, hardware, and network — every demo lands in a working environment, not a slide.",
    keyDetails: [
      "Lead: Delivery Lead + squad of 4–8",
      "Tooling: GitHub, Terraform, Datadog",
      "KPI: ≥ 85% automated test coverage",
      "Risk: integration drift caught nightly",
    ],
  },
  {
    step: "04",
    title: "Security Review",
    shortTitle: "Harden",
    description:
      "Threat modelling, penetration testing, and compliance-aware defaults applied across the stack — not bolted on at the end.",
    outcomes: [
      "Threat model + mitigations",
      "Pen-test findings closed",
      "Compliance posture report",
    ],
    duration: "Week 12 – 15",
    artefacts: ["Threat model", "Pen-test report", "Hardening checklist"],
    imageKey: "cybersecurityDark",
    narrative:
      "Threat modelling, pen-testing, and compliance posture run in parallel with build — defects close before launch, not after the auditor finds them.",
    keyDetails: [
      "Lead: Security Engineer (CREST/OSCP)",
      "Tooling: Burp Suite, Semgrep, Wiz",
      "KPI: zero open critical/high at cutover",
      "Risk: third-party SLAs verified in writing",
    ],
  },
  {
    step: "05",
    title: "Deployment",
    shortTitle: "Launch",
    description:
      "Controlled rollout with runbooks, observability, and rehearsed rollback paths — so go-live is calm, not chaotic.",
    outcomes: [
      "Phased production rollout",
      "Runbooks and rollback plans",
      "Live observability dashboards",
    ],
    duration: "Week 15 – 17",
    artefacts: ["Cutover runbook", "Rollback playbook", "Dashboards"],
    imageKey: "networkCables",
    narrative:
      "Cutover is rehearsed end-to-end on staging, with rollback paths timed and observability live before the first real user lands.",
    keyDetails: [
      "Lead: SRE + Delivery Lead, on-call",
      "Tooling: Argo, PagerDuty, Grafana",
      "KPI: < 4hr planned downtime",
      "Risk: rollback rehearsed twice pre-cutover",
    ],
  },
  {
    step: "06",
    title: "Support & Scale",
    shortTitle: "Operate",
    description:
      "24×7 monitoring, scheduled patching, and quarterly evolution reviews — your platform keeps pace with the business, not the other way around.",
    outcomes: [
      "24×7 SOC + helpdesk",
      "Quarterly evolution reviews",
      "Capacity and cost optimisation",
    ],
    duration: "Ongoing",
    artefacts: ["SLA dashboard", "Quarterly business review", "Roadmap deltas"],
    imageKey: "socDashboard",
    narrative:
      "A 24×7 SOC, scheduled patch windows, and quarterly reviews keep the platform aligned with the business — without surprise bills or re-platform regrets.",
    keyDetails: [
      "Lead: Account Director + SOC team",
      "Tooling: SIEM, ITSM, FinOps dashboards",
      "KPI: 99.95% SLA, monthly evidence",
      "Risk: roadmap re-baselined every quarter",
    ],
  },
];

export const processPrinciples = [
  {
    title: "Integrated, not siloed",
    body:
      "Software, infrastructure, networks, and security move through one programme — no hand-off gaps between vendors.",
  },
  {
    title: "Evidence over opinion",
    body:
      "Every architecture decision is backed by measured constraints, not preference — recorded so you can re-litigate it later.",
  },
  {
    title: "Production from day one",
    body:
      "Build pipelines, observability, and security controls go in before the first feature, not after launch panic.",
  },
  {
    title: "Decommission as a deliverable",
    body:
      "We design for graceful exit — so you are never trapped by us or the technology choices we recommend.",
  },
];

export const processMetrics = [
  { value: "6", suffix: "", label: "Stages", detail: "From discovery to scale" },
  { value: "98", suffix: "%", label: "On-time", detail: "Milestone delivery rate" },
  { value: "24", suffix: "×7", label: "Coverage", detail: "Post-launch operations" },
  { value: "12", suffix: "+", label: "Sectors", detail: "Verticals delivered" },
];
