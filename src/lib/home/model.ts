import { isPublicRenderable } from "../security/public.js";

export const HOME_MODULE_ORDER = [
  "identity",
  "research-evidence",
  "themes",
  "featured-publications",
  "snapshots",
  "about-cv",
  "contact",
] as const;

export const FEATURED_PUBLICATION_IDS = [
  "doi-10-3390-systems14040385",
  "doi-10-1016-j-aej-2025-06-011",
  "doi-10-3389-fcomp-2024-1387354",
  "doi-10-2196-27816",
] as const;

export const THEME_IDS = [
  "theme-privacy-preserving-health-data-sharing",
  "theme-blockchain-security-and-interoperability",
  "theme-machine-learning-for-cyber-threat-detection",
] as const;

type CanonicalRecord = {
  record_id: string;
  governance?: Record<string, unknown>;
  data?: Record<string, unknown>;
};

export type HomeModel = Readonly<{
  modules: readonly (typeof HOME_MODULE_ORDER)[number][];
  themes: readonly CanonicalRecord[];
  featured: readonly CanonicalRecord[];
  courses: readonly CanonicalRecord[];
  career: readonly CanonicalRecord[];
  service: readonly CanonicalRecord[];
  profiles: readonly CanonicalRecord[];
  public: boolean;
}>;

export function createHomeModel(input: {
  themes: readonly CanonicalRecord[];
  publications: readonly CanonicalRecord[];
  courses: readonly CanonicalRecord[];
  career: readonly CanonicalRecord[];
  service: readonly CanonicalRecord[];
  profiles: readonly CanonicalRecord[];
}): HomeModel {
  const themes = THEME_IDS.map((id) =>
    input.themes.find((item) => item.record_id === id),
  ).filter(
    (item): item is CanonicalRecord =>
      Boolean(item) && isPublicRenderable(item),
  );
  const featured = FEATURED_PUBLICATION_IDS.map((id) =>
    input.publications.find((item) => item.record_id === id),
  ).filter(
    (item): item is CanonicalRecord =>
      Boolean(item) && isPublicRenderable(item),
  );
  const courses = input.courses.filter(isPublicRenderable);
  const career = input.career.filter(isPublicRenderable);
  const service = input.service.filter(isPublicRenderable);
  const profiles = input.profiles.filter(isPublicRenderable);
  return {
    modules: HOME_MODULE_ORDER,
    themes,
    featured,
    courses,
    career,
    service,
    profiles,
    public:
      themes.length === 3 &&
      featured.length === 4 &&
      courses.length > 0 &&
      career.length > 0 &&
      service.length > 0 &&
      profiles.length > 0,
  };
}
