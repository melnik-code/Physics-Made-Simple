export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`.replace(/\/$/, "");

  return "http://localhost:3000";
}

export function getCanonicalHostForRobots() {
  try {
    const url = new URL(getSiteUrl());
    return url.host;
  } catch {
    return "";
  }
}
