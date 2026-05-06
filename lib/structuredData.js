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
        name: "Физика Просто",
        url: base,
        logo: `${base}/logo.svg`,
        sameAs: [
          "https://github.com/melnik-code"
        ]
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: base,
        name: "Физика Просто",
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
    name: "Физика Просто",
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

export function getFaqPageJsonLd({ urlPath, questions }) {
  const base = getSiteUrl();
  const url = `${base}${urlPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  };
}

export function getContactPageJsonLd() {
  const base = getSiteUrl();
  const url = `${base}/contacts`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contactpage`,
    url,
    name: "Контакты — Физика Просто",
    isPartOf: { "@id": `${base}/#website` },
    about: { "@id": `${base}/#organization` },
    inLanguage: "ru-RU"
  };
}
