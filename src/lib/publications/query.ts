import type { PublicationVM } from "./model.js";

export const PUBLICATION_QUERY_ORDER = ["q", "year", "type", "theme"] as const;

export type PublicationQueryState = Readonly<{
  q: string;
  year: string;
  type: string;
  theme: string;
}>;

export type PublicationQueryOptions = Readonly<{
  years: ReadonlySet<string>;
  types: ReadonlySet<string>;
  themes?: ReadonlySet<string>;
}>;

export const EMPTY_PUBLICATION_QUERY: PublicationQueryState = Object.freeze({
  q: "",
  year: "",
  type: "",
  theme: "",
});

export function boundPublicationQuery(value: string): string {
  return Array.from(value).slice(0, 200).join("").trim();
}

export function parsePublicationQuery(
  params: URLSearchParams,
  options: PublicationQueryOptions,
): Readonly<{ state: PublicationQueryState; invalid: boolean }> {
  let invalid = false;
  for (const key of params.keys())
    if (!(PUBLICATION_QUERY_ORDER as readonly string[]).includes(key))
      invalid = true;
  for (const key of PUBLICATION_QUERY_ORDER)
    if (params.getAll(key).length > 1) invalid = true;

  const rawQ = params.get("q") ?? "";
  const q = boundPublicationQuery(rawQ);
  if (q !== rawQ.trim() || Array.from(rawQ.trim()).length > 200) invalid = true;
  const rawYear = params.get("year") ?? "";
  const year = rawYear && options.years.has(rawYear) ? rawYear : "";
  if (rawYear && !year) invalid = true;
  const rawType = params.get("type") ?? "";
  const type = rawType && options.types.has(rawType) ? rawType : "";
  if (rawType && !type) invalid = true;
  const rawTheme = params.get("theme") ?? "";
  const theme = rawTheme && options.themes?.has(rawTheme) ? rawTheme : "";
  if (rawTheme && !theme) invalid = true;
  return {
    state: Object.freeze({ q, year, type, theme }),
    invalid,
  };
}

export function serializePublicationQuery(
  state: PublicationQueryState,
): string {
  const params = new URLSearchParams();
  for (const key of PUBLICATION_QUERY_ORDER) {
    const value = state[key];
    if (value) params.set(key, value);
  }
  return params.toString();
}

export function publicationMatches(
  record: Pick<PublicationVM, "searchText" | "year" | "type">,
  state: PublicationQueryState,
): boolean {
  const q = boundPublicationQuery(state.q).toLocaleLowerCase("en");
  return (
    (!q || record.searchText.includes(q)) &&
    (!state.year || String(record.year) === state.year) &&
    (!state.type || record.type === state.type) &&
    !state.theme
  );
}

export function reconcilePublicationFragment(
  recordIds: ReadonlySet<string>,
  fragment: string,
  state: PublicationQueryState,
): Readonly<{
  targetId?: string;
  state: PublicationQueryState;
  invalid: boolean;
}> {
  if (!fragment) return { state, invalid: false };
  const targetId = fragment.startsWith("publication-")
    ? fragment.slice("publication-".length)
    : "";
  if (!targetId || !recordIds.has(targetId))
    return { state: EMPTY_PUBLICATION_QUERY, invalid: true };
  return {
    targetId,
    state: EMPTY_PUBLICATION_QUERY,
    invalid: false,
  };
}

export async function copyVisibleCitation(
  citation: string,
  writeText: (value: string) => Promise<void>,
): Promise<boolean> {
  if (
    !citation ||
    citation !== citation.trim() ||
    citation.length > 2_000 ||
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(citation)
  )
    return false;
  try {
    await writeText(citation);
    return true;
  } catch {
    return false;
  }
}
