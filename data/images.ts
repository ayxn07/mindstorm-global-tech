import type { ImageAsset } from "@/types/site";

const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?q=${q}&w=${w}&auto=format&fit=crop`;

export const images = {
  serverRoom: {
    key: "serverRoom",
    src: "/Hero-Section.jpeg",
    alt: "Illuminated server racks in an enterprise data center",
  },
  socDashboard: {
    key: "socDashboard",
    src: "/SOCDashboard.png",
    alt: "Security operations centre with monitoring dashboards",
  },
  networkCables: {
    key: "networkCables",
    src: "/CCNA.png",
    alt: "Neatly patched network cabling in a structured rack",
  },
  codeScreen: {
    key: "codeScreen",
    src: "/SoftwareEng.png",
    alt: "Software engineer writing code on multi-monitor workstation",
  },
  consultingMeeting: {
    key: "consultingMeeting",
    src: "/group-diss.png",
    alt: "Business consulting meeting around a glass conference table",
  },
  hardwareRack: {
    key: "hardwareRack",
    src: "/Hardware.png",
    alt: "Close-up of hardware rack with status LEDs",
  },
  hrOffice: {
    key: "hrOffice",
    src: "/HRTech.png",
    alt: "Modern open-plan office with collaborative workstations",
  },
  edtechClassroom: {
    key: "edtechClassroom",
    src: "/SmartClass.png",
    alt: "Students using digital learning tools in a classroom",
  },
  cloudSky: {
    key: "cloudSky",
    src: u("1451187580459-43490279c0fa"),
    alt: "Atmospheric cloud layers viewed from above",
  },
  skyline: {
    key: "skyline",
    src: u("1449824913935-59a10b8d2000"),
    alt: "Premium global business skyline at dusk",
  },
  cybersecurityDark: {
    key: "cybersecurityDark",
    src: u("1550751827-4bd374c3f58b"),
    alt: "Dark server room illuminated by cyan and amber indicators",
  },
  matrixCode: {
    key: "matrixCode",
    src: u("1526374965328-7f61d4dc18c5"),
    alt: "Abstract stream of green code against a dark background",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
