import { site } from "@/data/site";
import type { Service } from "@/types/site";

const baseUrl = site.metadataBaseUrl;

const sameAsList = (): string[] => {
  const s = site.socials;
  if (!s) return [];
  return [s.linkedin, s.twitter, s.instagram].filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );
};

export function organizationSchema() {
  const sameAs = sameAsList();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/mindstorm-global-tech-logo.png`,
      width: 600,
      height: 188,
    },
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: site.address.country,
    },
    ...(site.foundingDate ? { foundingDate: site.foundingDate } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function localBusinessSchema() {
  const sameAs = sameAsList();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: site.name,
    image: `${baseUrl}/mindstorm-global-tech-logo.png`,
    url: baseUrl,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Global" },
    ],
    ...(site.openingHours ? { openingHoursSpecification: site.openingHours } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: site.name,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": `${baseUrl}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${baseUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${baseUrl}${path === "/" ? "" : path}`,
    isPartOf: { "@id": `${baseUrl}/#website` },
    inLanguage: "en-US",
  };
}

export function aboutPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name,
    description,
    url: `${baseUrl}${path}`,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export function contactPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name,
    description,
    url: `${baseUrl}${path}`,
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: { "@id": `${baseUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export function serviceSchema(service: Service) {
  const url = `${baseUrl}/services/${service.slug}`;
  const offerCatalog = service.featureGroups.map((group) => ({
    "@type": "OfferCatalog",
    name: group.heading,
    itemListElement: group.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item },
    })),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    alternateName: service.shortTitle,
    description: service.seoDescription,
    url,
    provider: { "@id": `${baseUrl}/#organization` },
    serviceType: service.shortTitle,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Global" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} Offerings`,
      itemListElement: offerCatalog,
    },
  };
}

export function itemListSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mindstorm Global Service Lines",
    numberOfItems: services.length,
    itemListElement: services.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${baseUrl}/services/${service.slug}`,
      name: service.shortTitle,
    })),
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${baseUrl}${path}`,
    isPartOf: { "@id": `${baseUrl}/#website` },
    inLanguage: "en-US",
  };
}
