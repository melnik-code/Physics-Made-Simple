import { getCanonicalHostForRobots, getSiteUrl } from "@/lib/site";

export default function robots() {
  const host = getCanonicalHostForRobots();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/"]
      }
    ],
    host: host || undefined,
    sitemap: `${getSiteUrl()}/sitemap.xml`
  };
}
