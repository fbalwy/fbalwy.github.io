export function canonicalRedirect(pathname, search = "") {
  if (!pathname.startsWith("/"))
    throw new Error("Pathname must start with '/'.");
  if (pathname === "/" || !pathname.endsWith("/")) return undefined;
  // Redirect targets never carry the request query: a query may be sensitive and
  // must not become a cacheable canonical URL.
  void search;
  return pathname.slice(0, -1);
}

export function expectedStatus(pathname) {
  return pathname === "/404.html" ? 404 : 200;
}

export function cacheClass(pathname) {
  if (pathname.startsWith("/_astro/")) return "fingerprintedAsset";
  return "html";
}

export function isIndexableRoute({
  pathname,
  hasQuery = false,
  availability = "available",
  mode = "local",
}) {
  return (
    mode === "production" &&
    pathname !== "/404.html" &&
    !hasQuery &&
    availability === "available"
  );
}
