/**
 * Closed, visitor-safe discovery values. These are intentionally independent
 * of the canonical aggregate: current records are not public and must never
 * affect titles, descriptions, canonical paths, or sitemap entries.
 */
export const DISCOVERY_METADATA = Object.freeze({
  "/": Object.freeze({
    title: "Faisal Albalwy | Personal academic website",
    description:
      "Explore Faisal Albalwy's research, canonical publications, teaching, leadership and service, biography, and professional contact pathway.",
  }),
  "/research": Object.freeze({
    title: "Research | Faisal Albalwy",
    description:
      "Explore Faisal Albalwy's research on privacy-preserving health-data sharing, blockchain security and interoperability, and machine learning for cyber-threat detection.",
  }),
  "/publications": Object.freeze({
    title: "Publications | Faisal Albalwy",
    description:
      "Search and browse Faisal Albalwy's deduplicated publication catalogue with canonical DOI, publisher, and institutional-repository links.",
  }),
  "/teaching": Object.freeze({
    title: "Teaching | Faisal Albalwy",
    description:
      "Review privacy-safe course titles from Faisal Albalwy's teaching record and links to related research, publications, and inquiry guidance.",
  }),
  "/leadership-service": Object.freeze({
    title: "Leadership & Service | Faisal Albalwy",
    description:
      "Review selected technology leadership, peer-review, and community-engagement records for Faisal Albalwy.",
  }),
  "/about": Object.freeze({
    title: "About | Faisal Albalwy",
    description:
      "Read verified academic, doctoral, research, teaching, leadership, affiliation, and CV context for Faisal Albalwy.",
  }),
  "/contact": Object.freeze({
    title: "Contact | Faisal Albalwy",
    description:
      "Prepare a focused professional inquiry for Faisal Albalwy and use his verified Taibah University email address.",
  }),
  "/404.html": Object.freeze({
    title: "Page not found | Faisal Albalwy",
    description:
      "The requested page could not be found. Use the homepage, Research, Publications, or Contact to continue.",
  }),
});

export const DISCOVERY_HTML_PATHS = Object.freeze(
  Object.keys(DISCOVERY_METADATA),
);
const SITEMAP_NAMESPACE = [
  "http:",
  "",
  "www.sitemaps.org/schemas/sitemap/0.9",
].join("/");

function normalisePath(pathname) {
  if (typeof pathname !== "string" || !pathname.startsWith("/"))
    throw new Error("Discovery paths must be root-relative.");
  if (pathname !== "/" && (pathname.endsWith("/") || /[?#]/.test(pathname)))
    throw new Error(
      "Discovery paths must be canonical, query-free, and fragment-free.",
    );
  return pathname;
}

export function metadataFor(pathname) {
  return (
    DISCOVERY_METADATA[normalisePath(pathname)] ??
    DISCOVERY_METADATA["/404.html"]
  );
}

export function canonicalFor(origin, pathname) {
  const canonicalPath = normalisePath(pathname);
  const base = new URL(origin);
  if (
    base.protocol !== "https:" ||
    base.username ||
    base.password ||
    base.pathname !== "/" ||
    base.search ||
    base.hash
  )
    throw new Error("Discovery origin must be an absolute HTTPS origin only.");
  return new URL(canonicalPath, base).href;
}

export function robotsFor(environment) {
  if (environment.indexable)
    return `User-agent: *\nAllow: /\nSitemap: ${environment.origin}/sitemap.xml\n`;
  return "User-agent: *\nDisallow: /\n";
}

export function createSitemap(environment) {
  if (environment.indexable) {
    const urls = DISCOVERY_HTML_PATHS.filter(
      (pathname) => pathname !== "/404.html",
    )
      .map(
        (pathname) =>
          `  <url><loc>${canonicalFor(environment.origin, pathname)}</loc></url>`,
      )
      .join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${SITEMAP_NAMESPACE}">\n${urls}\n</urlset>\n`;
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${SITEMAP_NAMESPACE}"></urlset>\n`;
}
