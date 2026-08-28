export type RouteId = "R1" | "R2" | "R3" | "R4" | "R5" | "R6" | "R7";

export type RouteDefinition = Readonly<{
  id: RouteId;
  path: string;
  label: string;
  html: boolean;
  optional: boolean;
}>;

export const ROUTES: readonly RouteDefinition[] = [
  { id: "R1", path: "/", label: "Home", html: true, optional: false },
  {
    id: "R2",
    path: "/research",
    label: "Research",
    html: true,
    optional: false,
  },
  {
    id: "R3",
    path: "/publications",
    label: "Publications",
    html: true,
    optional: false,
  },
  {
    id: "R4",
    path: "/teaching",
    label: "Teaching",
    html: true,
    optional: false,
  },
  {
    id: "R5",
    path: "/leadership-service",
    label: "Leadership & Service",
    html: true,
    optional: false,
  },
  { id: "R6", path: "/about", label: "About", html: true, optional: false },
  { id: "R7", path: "/contact", label: "Contact", html: true, optional: false },
] as const;

export const PUBLICATION_QUERY_KEYS = ["q", "year", "type", "theme"] as const;

export function routeForPath(pathname: string): RouteDefinition | undefined {
  return ROUTES.find((route) => route.path === pathname);
}

export function isAllowedPublicationQuery(
  key: string,
): key is (typeof PUBLICATION_QUERY_KEYS)[number] {
  return (PUBLICATION_QUERY_KEYS as readonly string[]).includes(key);
}
