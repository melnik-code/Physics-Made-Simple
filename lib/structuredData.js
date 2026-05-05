import { getSiteUrl } from "@/lib/site";

function withId(node, id) {
  if (!node || typeof node !== "object") return node;
  return { "@id": id, ...node };
}

export function getSiteWideJsonLdGraph() {
  const base = getSiteUrl();
  const siteId = `${base}/#website`;
  const orgId = `${base}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Физика просто",
        url: base
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: base,
        name: "Физика просто",
        publisher: { "@id": orgId },
        inLanguage: "ru-RU"
      }
    ]
  };
}

export function getHomeWebPageJsonLd() {
  const base = getSiteUrl();
  const pageId = `${base}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageId,
    url: `${base}/`,
    name: "Физика просто",
    inLanguage: "ru-RU",
    isPartOf: { "@id": `${base}/#website` }
  };
}

export function getLearningResourceJsonLd({ title, description, topicUrl }) {
  const base = getSiteUrl();
  const resolvedUrl = topicUrl || base;

  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    url: resolvedUrl,
    name: title,
    description,
    inLanguage: "ru-RU",
    isPartOf: { "@id": `${base}/#website` }
  };
}
