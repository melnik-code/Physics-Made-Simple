import { getCanonicalHostForRobots, getSiteUrl } from "@/lib/site";

export default function robots() {
  const host = getCanonicalHostForRobots();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: []
      }
    ],
    host: host || undefined,
    sitemap: `${getSiteUrl()}/sitemap.xml`
  };
}
