import { sections } from "@/lib/physicsContent";
import { getSiteUrl } from "@/lib/site";

export default function sitemap() {
  const baseUrl = getSiteUrl();

  const staticRoutes = [
    "",
    "/topics",
    "/formulas",
    "/exam",
    "/scientists",
    "/terms",
    "/about",
    "/contacts"
  ];

  const now = new Date();

  const entries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/topics") ? 0.85 : 0.72
  }));

  for (const section of sections) {
    entries.push({
      url: `${baseUrl}/topics/${section.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    });

    for (const group of section.groups) {
      entries.push({
        url: `${baseUrl}/topics/${section.slug}/${group.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8
      });

      for (const topic of group.topics) {
        entries.push({
          url: `${baseUrl}/topics/${section.slug}/${group.slug}/${topic.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.9
        });
      }
    }
  }

  return entries;
}
