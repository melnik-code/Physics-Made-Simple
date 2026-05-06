import { getSiteUrl } from "@/lib/site";

export function getBreadcrumbListJsonLd(items) {
  const base = getSiteUrl();
  const list = [{ label: "Главная", href: "/" }, ...(items ?? [])];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${base}${item.href}` : undefined
    }))
  };
}

