import {
  containsPublicMarker,
  isPublicRenderable,
  isSafePublicUrl,
} from "../security/public.js";

export const RESEARCH_THEME_IDS = [
  "theme-privacy-preserving-health-data-sharing",
  "theme-blockchain-security-and-interoperability",
  "theme-machine-learning-for-cyber-threat-detection",
] as const;
export const RESEARCH_MODULE_ORDER = [
  "purpose-and-boundary",
  "privacy-preserving-health-data-sharing",
  "blockchain-security-and-interoperability",
  "machine-learning-for-cyber-threat-detection",
  "collaboration-inquiry",
  "complete-publication-record",
] as const;
export const RESEARCH_BINDINGS = [
  [
    "theme-privacy-preserving-health-data-sharing",
    "doi-10-1016-j-eswa-2026-132969",
  ],
  [
    "theme-privacy-preserving-health-data-sharing",
    "doi-10-3390-systems14040385",
  ],
  ["theme-privacy-preserving-health-data-sharing", "doi-10-2196-27816"],
  [
    "theme-blockchain-security-and-interoperability",
    "doi-10-1016-j-aej-2025-06-011",
  ],
  [
    "theme-blockchain-security-and-interoperability",
    "doi-10-7717-peerj-cs-2914",
  ],
  [
    "theme-machine-learning-for-cyber-threat-detection",
    "doi-10-3390-systems13040231",
  ],
  [
    "theme-machine-learning-for-cyber-threat-detection",
    "doi-10-3389-fcomp-2024-1387354",
  ],
] as const;

type CanonicalRecord = {
  record_id: string;
  data?: Record<string, unknown>;
  governance?: Record<string, unknown>;
  public_presentation?: Record<string, unknown>;
  versioning?: Record<string, unknown>;
};
type RelatedPublication = Readonly<{ id: string; title: string; href: string }>;
export type ResearchTheme = Readonly<{
  id: string;
  title: string;
  summary: string;
  publications: readonly RelatedPublication[];
}>;
export type ResearchModel = Readonly<{
  modules: readonly (typeof RESEARCH_MODULE_ORDER)[number][];
  themes: readonly ResearchTheme[];
  public: boolean;
}>;

function plain(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim();
  return normalized && !containsPublicMarker(normalized)
    ? normalized
    : undefined;
}

function locations(record: CanonicalRecord): readonly string[] | undefined {
  const value = record.public_presentation?.public_location_ids;
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value
    : undefined;
}

function releaseIsValid(record: CanonicalRecord): boolean {
  return (
    isPublicRenderable(record) &&
    record.governance?.conflict_state === "none" &&
    record.versioning?.correction_state === "none"
  );
}

function atPublicLocation(record: CanonicalRecord, location: string): boolean {
  return (
    Boolean(plain(record.public_presentation?.public_wording)) &&
    Boolean(locations(record)?.includes(location))
  );
}

function exactOne(
  records: readonly CanonicalRecord[],
  id: string,
): CanonicalRecord | undefined {
  const matches = records.filter((record) => record.record_id === id);
  return matches.length === 1 ? matches[0] : undefined;
}

function isSafeDoiAction(record: CanonicalRecord): boolean {
  const actions = record.data?.external_actions;
  return (
    Array.isArray(actions) &&
    actions.some((action) => {
      if (!action || typeof action !== "object") return false;
      const value = action as Record<string, unknown>;
      return (
        value.kind === "doi" &&
        value.availability === "available" &&
        typeof value.url === "string" &&
        isSafePublicUrl(value.url)
      );
    })
  );
}

function themeProjection(
  record: CanonicalRecord,
): Omit<ResearchTheme, "publications"> | undefined {
  const title = plain(record.data?.name);
  const summary = plain(record.data?.summary);
  const wording = plain(record.public_presentation?.public_wording);
  return releaseIsValid(record) &&
    atPublicLocation(record, "R2") &&
    title &&
    summary &&
    wording === title
    ? { id: record.record_id, title, summary }
    : undefined;
}

function publicationProjection(
  record: CanonicalRecord,
): RelatedPublication | undefined {
  const title = plain(record.data?.title);
  const wording = plain(record.public_presentation?.public_wording);
  const fragment = plain(record.public_presentation?.fragment_id);
  const status = record.data?.status;
  return releaseIsValid(record) &&
    atPublicLocation(record, "R3") &&
    title &&
    wording === title &&
    fragment === `publication-${record.record_id}` &&
    (status === "published" ||
      status === "online_first_with_future_issue_assignment") &&
    record.data?.notice_state === "none_found" &&
    isSafeDoiAction(record)
    ? { id: record.record_id, title, href: `/publications#${fragment}` }
    : undefined;
}
export function createResearchModel(input: {
  themes: readonly CanonicalRecord[];
  bindings: readonly CanonicalRecord[];
  publications: readonly CanonicalRecord[];
  projects: readonly unknown[];
}): ResearchModel {
  const unavailable: ResearchModel = {
    modules: RESEARCH_MODULE_ORDER,
    themes: [],
    public: false,
  };
  if (
    input.projects.length !== 0 ||
    input.themes.length !== RESEARCH_THEME_IDS.length ||
    input.bindings.length !== RESEARCH_BINDINGS.length
  )
    return unavailable;
  const themes = RESEARCH_THEME_IDS.map((id) => {
    const record = exactOne(input.themes, id);
    return record && themeProjection(record);
  });
  if (themes.some((theme) => !theme)) return unavailable;
  const related = new Map<string, RelatedPublication[]>();
  for (const [index, [themeId, publicationId]] of RESEARCH_BINDINGS.entries()) {
    const binding = input.bindings[index];
    const data = binding?.data;
    if (
      !binding ||
      binding.record_id !==
        `theme-publication-${String(index + 1).padStart(3, "0")}` ||
      !releaseIsValid(binding) ||
      !atPublicLocation(binding, "R2") ||
      data?.theme_id !== themeId ||
      data?.publication_id !== publicationId ||
      data?.relationship_type !== "primary_evidence" ||
      data?.confidence !== "verified"
    )
      return unavailable;
    const publication = exactOne(input.publications, publicationId);
    const projected = publication && publicationProjection(publication);
    if (!projected) return unavailable;
    related.set(themeId, [...(related.get(themeId) ?? []), projected]);
  }
  return {
    modules: RESEARCH_MODULE_ORDER,
    themes: themes.map((theme) => ({
      ...theme!,
      publications: related.get(theme!.id) ?? [],
    })),
    public: true,
  };
}
