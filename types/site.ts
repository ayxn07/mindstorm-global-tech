export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type ImageAsset = {
  key: string;
  src: string;
  alt: string;
  credit?: string;
  width?: number;
  height?: number;
};

export type ServiceFeatureGroup = {
  heading: string;
  items: string[];
};

export type Capability = {
  icon: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroHeading: string;
  heroSub: string;
  heroImageKey: string;
  overview: string;
  featureGroups: ServiceFeatureGroup[];
  advancedCapabilities: Capability[];
  benefits: string[];
  processSteps: ProcessStep[];
  relatedSlugs: string[];
  seoDescription: string;
};

export type Industry = {
  slug: string;
  title: string;
  challenge: string;
  solution: string;
  keyServices: string[];
  imageKey: string;
};

export type CTAVariant = "primary" | "secondary" | "ghost";

export type CTA = {
  label: string;
  href: string;
  variant?: CTAVariant;
};

export type PageMeta = {
  slug: string;
  title: string;
  description: string;
  heroEyebrow?: string;
  heroHeading: string;
  heroSub?: string;
  ogImage?: string;
};

export type OfficeAddress = {
  label: string;
  line1: string;
  city: string;
  state: string;
  country: string;
  full: string;
  geo: { latitude: number; longitude: number };
  mapsQuery: string;
};

export type CompanyInfo = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address: {
    line1: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  offices: OfficeAddress[];
  domain: string;
  metadataBaseUrl: string;
  geo: { latitude: number; longitude: number };
  priceRange: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  twitterHandle?: string;
  foundingDate?: string;
  openingHours?: string[];
};
