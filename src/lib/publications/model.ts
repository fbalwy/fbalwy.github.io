import { isPublicRenderable } from "../security/public.ts";

export const FEATURED_PUBLICATION_IDS = [
  "doi-10-3390-systems14040385",
  "doi-10-1016-j-aej-2025-06-011",
  "doi-10-3389-fcomp-2024-1387354",
  "doi-10-2196-27816",
] as const;

export const LATEST_PUBLICATION_IDS = [
  "doi-10-1016-j-eswa-2026-132969",
  "doi-10-3390-systems14040385",
  "doi-10-32604-cmc-2025-075098",
  "doi-10-1016-j-aej-2025-06-011",
  "doi-10-18280-isi-300510",
] as const;

export const CANONICAL_PUBLICATION_IDS = [
  "doi-10-1016-j-eswa-2026-132969",
  "doi-10-3390-systems14040385",
  "doi-10-32604-cmc-2025-075098",
  "doi-10-1016-j-aej-2025-06-011",
  "doi-10-18280-isi-300510",
  "doi-10-7717-peerj-cs-2914",
  "doi-10-4236-iim-2025-173004",
  "doi-10-4236-ait-2025-152002",
  "doi-10-3390-systems13040231",
  "doi-10-54364-aaiml-2025-51193",
  "doi-10-3390-electronics14050922",
  "doi-10-1007-978-981-97-7603-0-35",
  "doi-10-3390-app142411966",
  "doi-10-3390-electronics13193799",
  "doi-10-1016-j-bspc-2024-106313",
  "doi-10-1016-j-eswa-2023-123056",
  "doi-10-3389-fcomp-2024-1387354",
  "doi-10-2139-ssrn-4765808",
  "doi-10-1016-j-heliyon-2024-e25958",
  "doi-10-1016-j-future-2023-09-032",
  "doi-10-1109-access-2024-3518973",
  "doi-10-3390-computers12060126",
  "doi-10-1371-journal-pone-0280038",
  "doi-10-1038-s41397-022-00285-5",
  "doi-10-1155-2022-4389729",
  "manchester-thesis-2022-albalwy-clinical-genomics",
  "doi-10-2196-27816",
] as const;

const typeLabels = {
  journal_article: ["journal-article", "Journal article"],
  conference_paper: ["conference-paper", "Conference paper"],
  book_chapter: ["book-chapter", "Book chapter"],
  review: ["review", "Review"],
  preprint: ["preprint", "Preprint"],
  doctoral_thesis: ["doctoral-thesis", "Doctoral thesis"],
  dataset: ["dataset", "Dataset"],
  other: ["other", "Other"],
} as const;

const allowedActionLabels = new Map([
  ["doi", "Open DOI (external)"],
  ["publisher", "View publisher page (external)"],
  ["institution", "View institutional record (external)"],
  ["full_text", "View lawful full text (external)"],
  ["code", "View code (external)"],
  ["data", "View data (external)"],
]);

const visibleNoticeStates = new Set(["none_found", "not_applicable"]);
const omittedStatuses = new Set(["corrected", "retracted", "withdrawn"]);

type Governance = Readonly<{
  verification_status?: unknown;
  public_disposition?: unknown;
  render_eligibility?: unknown;
  rights_status?: unknown;
  consent_status?: unknown;
  approvals?: Readonly<Record<string, unknown>>;
}>;

type AggregateAuthor = Readonly<{ name?: unknown; is_faisal?: unknown }>;
type AggregateDate = Readonly<{
  type?: unknown;
  value?: unknown;
  precision?: unknown;
}>;
type AggregateAction = Readonly<{
  kind?: unknown;
  url?: unknown;
  label?: unknown;
  availability?: unknown;
}>;

export type AggregatePublicationRecord = Readonly<{
  record_id?: unknown;
  governance?: Governance;
  public_presentation?: Readonly<{
    public_wording?: unknown;
    public_location_ids?: readonly unknown[];
    fragment_id?: unknown;
  }>;
  versioning?: Readonly<{ correction_state?: unknown }>;
  data?: Readonly<{
    title?: unknown;
    authors?: readonly AggregateAuthor[];
    work_type?: unknown;
    venue?: unknown;
    publisher?: unknown;
    doi?: unknown;
    dates?: readonly AggregateDate[];
    display_year?: unknown;
    volume?: unknown;
    issue?: unknown;
    pages?: unknown;
    article_number?: unknown;
    status?: unknown;
    external_actions?: readonly AggregateAction[];
    notice_state?: unknown;
    notice_checked_at?: unknown;
  }>;
}>;

export type PublicationActionVM = Readonly<{
  kind: string;
  url: string;
  label: string;
}>;

export type PublicationVM = Readonly<{
  id: string;
  fragment: string;
  title: string;
  authors: readonly string[];
  faisalAuthorIndex: number;
  year: number;
  type: string;
  typeLabel: string;
  venue: string;
  publisher?: string;
  statusLabel: string;
  displayDate: string;
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  doi?: string;
  citation?: string;
  actions: readonly PublicationActionVM[];
  searchText: string;
  noticeCheckedAt: string;
}>;

export type PublicationsModel = Readonly<{
  public: boolean;
  records: readonly PublicationVM[];
  featured: readonly PublicationVM[];
  latest: readonly PublicationVM[];
  years: readonly number[];
  types: readonly Readonly<{ value: string; label: string }>[];
  counts: Readonly<{
    records: number;
    dois: number;
    thesisWithoutDoi: number;
    published: number;
    futureIssue: number;
    preprint: number;
    awardedThesis: number;
    journalArticles: number;
    bookChapters: number;
  }>;
  lastChecked: string;
  futureIssueLabel?: string;
  partial: boolean;
}>;

export const PUBLICATION_OPERATIONAL_COPY = Object.freeze({
  noResultsHeading: "No publications match these filters.",
  noResultsExplanation:
    "Change the search or filters, or clear them to return to the complete catalogue.",
  partialHeading: "Some publication details are unavailable.",
  partialExplanation:
    "Available verified fields remain visible. Missing optional fields are omitted and can be checked at the linked canonical source.",
  unavailableHeading: "Publications could not be loaded.",
  unavailableExplanation:
    "The catalogue data is temporarily unavailable. Try again or use an approved scholarly profile.",
  externalHeading: "The external source is currently unavailable.",
  externalExplanation:
    "The verified local record remains available. Try the canonical destination again later.",
  offlineHeading: "You are offline.",
  offlineExplanation:
    "Content already loaded on this page remains available, but external sources and enhanced actions may not work until the connection returns.",
  invalidQuery: "Unsupported publication filters were removed.",
  copied: "Citation copied.",
  copyFailed:
    "The citation could not be copied. Select the citation text and copy it manually.",
});

function isApprovedLifecycle(governance: Governance | undefined): boolean {
  if (!governance || !isPublicRenderable({ governance })) return false;
  const approvals = governance.approvals;
  if (
    approvals &&
    ["evidence", "privacy", "rights", "editorial", "qa"].some(
      (key) => approvals[key] !== true,
    )
  )
    return false;
  if (
    governance.rights_status !== undefined &&
    !["granted", "not_applicable"].includes(String(governance.rights_status))
  )
    return false;
  if (
    governance.consent_status !== undefined &&
    !["granted", "not_applicable"].includes(String(governance.consent_status))
  )
    return false;
  return true;
}

function isSafeExternalUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password || url.hash)
      return false;
    for (const key of url.searchParams.keys())
      if (/^(?:utm_.+|fbclid|gclid|mc_.+)$/i.test(key)) return false;
    return true;
  } catch {
    return false;
  }
}

function requiredString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() === value && value
    ? value
    : undefined;
}

function optionalString(value: unknown): string | undefined {
  return value === null || value === undefined
    ? undefined
    : requiredString(value);
}

function formatDate(value: string, precision: string): string | undefined {
  if (!/^\d{4}(?:-\d{2})?(?:-\d{2})?$/.test(value)) return undefined;
  if (precision === "year") return value.slice(0, 4);
  const date = new Date(
    `${value.length === 4 ? `${value}-01-01` : value.length === 7 ? `${value}-01` : value}T00:00:00Z`,
  );
  if (Number.isNaN(date.valueOf())) return undefined;
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: precision === "month" || precision === "day" ? "long" : undefined,
    day: precision === "day" ? "numeric" : undefined,
  }).format(date);
}

function displayDate(
  dates: readonly AggregateDate[],
  status: string,
  year: number,
): string {
  const priority =
    status === "online_first_with_future_issue_assignment"
      ? ["issue"]
      : status === "posted_preprint"
        ? ["preprint"]
        : status === "awarded"
          ? ["award"]
          : ["issue", "publication", "online_first"];
  const selected = priority
    .map((kind) => dates.find((date) => date.type === kind))
    .find(Boolean);
  const value = requiredString(selected?.value);
  const precision = requiredString(selected?.precision);
  return value && precision
    ? (formatDate(value, precision) ?? String(year))
    : String(year);
}

function statusLabel(
  status: string,
  workType: string,
  dates: readonly AggregateDate[],
  year: number,
): string | undefined {
  if (status === "published") return "Published";
  if (status === "posted_preprint") return "Preprint posted";
  if (status === "awarded" && workType === "doctoral_thesis")
    return "Doctoral thesis awarded";
  if (status === "online_first_with_future_issue_assignment")
    return `Available online; issue assigned for ${displayDate(dates, status, year)}`;
  return undefined;
}

function validCitation(value: unknown): string | undefined {
  if (typeof value !== "string" || value.length === 0 || value.length > 2_000)
    return undefined;
  if (
    value !== value.trim() ||
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value)
  )
    return undefined;
  return value;
}

function projectRecord(
  record: AggregatePublicationRecord,
  citation: unknown,
): PublicationVM | undefined {
  if (!isApprovedLifecycle(record.governance)) return undefined;
  const data = record.data;
  const presentation = record.public_presentation;
  if (!data || !presentation) return undefined;
  if (!presentation.public_location_ids?.includes("R3")) return undefined;

  const id = requiredString(record.record_id);
  const fragment = requiredString(presentation.fragment_id);
  const title = requiredString(data.title);
  const publicTitle = requiredString(presentation.public_wording);
  const venue = requiredString(data.venue);
  const workType = requiredString(data.work_type);
  const status = requiredString(data.status);
  const year = data.display_year;
  if (
    !id ||
    fragment !== `publication-${id}` ||
    !title ||
    publicTitle !== title ||
    !venue ||
    !workType ||
    !status ||
    typeof year !== "number" ||
    !Number.isInteger(year) ||
    omittedStatuses.has(status) ||
    !visibleNoticeStates.has(String(data.notice_state)) ||
    record.versioning?.correction_state !== "none"
  )
    return undefined;

  const type = typeLabels[workType as keyof typeof typeLabels];
  if (!type) return undefined;
  const sourceAuthors = data.authors ?? [];
  const authors = sourceAuthors.map((author) => requiredString(author.name));
  const faisalAuthorIndexes = sourceAuthors.flatMap((author, index) =>
    author.is_faisal === true ? [index] : [],
  );
  if (!authors?.length || authors.some((author) => !author)) return undefined;
  if (faisalAuthorIndexes.length !== 1) return undefined;
  const dates = data.dates ?? [];
  const publicStatus = statusLabel(status, workType, dates, year);
  const noticeCheckedAt = requiredString(data.notice_checked_at);
  if (!publicStatus || !noticeCheckedAt || !formatDate(noticeCheckedAt, "day"))
    return undefined;

  const actions: PublicationActionVM[] = [];
  const seenUrls = new Set<string>();
  for (const action of data.external_actions ?? []) {
    const kind = requiredString(action.kind);
    const url = requiredString(action.url);
    const label = requiredString(action.label);
    if (
      !kind ||
      !url ||
      !label ||
      action.availability !== "available" ||
      allowedActionLabels.get(kind) !== label ||
      !isSafeExternalUrl(url) ||
      seenUrls.has(url)
    )
      continue;
    actions.push({ kind, url, label });
    seenUrls.add(url);
  }
  if (!actions.length) return undefined;
  const doi = optionalString(data.doi);
  if (
    (doi && !actions.some((action) => action.kind === "doi")) ||
    (!doi && !actions.some((action) => action.kind === "institution"))
  )
    return undefined;

  const projectedAuthors = authors as string[];
  const dateLabel = displayDate(dates, status, year);
  const publisher = optionalString(data.publisher);
  const projectedCitation = validCitation(citation);
  const searchText = [
    title,
    ...projectedAuthors,
    venue,
    doi,
    type[1],
    publicStatus,
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase("en");

  return Object.freeze({
    id,
    fragment,
    title,
    authors: Object.freeze(projectedAuthors),
    faisalAuthorIndex: faisalAuthorIndexes[0],
    year,
    type: type[0],
    typeLabel: type[1],
    venue,
    publisher,
    statusLabel: publicStatus,
    displayDate: dateLabel,
    volume: optionalString(data.volume),
    issue: optionalString(data.issue),
    pages: optionalString(data.pages),
    articleNumber: optionalString(data.article_number),
    doi,
    citation: projectedCitation,
    actions: Object.freeze(actions),
    searchText,
    noticeCheckedAt,
  });
}

function selectByIds(
  records: readonly PublicationVM[],
  ids: readonly string[],
): readonly PublicationVM[] {
  const byId = new Map(records.map((record) => [record.id, record]));
  return Object.freeze(
    ids.map((id) => byId.get(id)).filter(Boolean) as PublicationVM[],
  );
}

export function createPublicationsModel({
  records,
  citations = {},
  partialRecordIds = [],
}: Readonly<{
  records: readonly AggregatePublicationRecord[];
  citations?: Readonly<Record<string, string>>;
  partialRecordIds?: readonly string[];
}>): PublicationsModel {
  const projected: PublicationVM[] = [];
  const ids = new Set<string>();
  let projectionInvalid = false;
  for (const record of records) {
    const id = requiredString(record.record_id);
    const publication = projectRecord(record, id ? citations[id] : undefined);
    if (!publication) continue;
    if (ids.has(publication.id)) {
      projectionInvalid = true;
      continue;
    }
    projected.push(publication);
    ids.add(publication.id);
  }
  const years = [...new Set(projected.map((record) => record.year))].sort(
    (left, right) => right - left,
  );
  const typeValues = [...new Set(projected.map((record) => record.type))];
  const types = typeValues.map((value) => ({
    value,
    label:
      projected.find((record) => record.type === value)?.typeLabel ?? value,
  }));
  const counts = Object.freeze({
    records: projected.length,
    dois: projected.filter((record) => record.doi).length,
    thesisWithoutDoi: projected.filter(
      (record) => record.type === "doctoral-thesis" && !record.doi,
    ).length,
    published: projected.filter((record) => record.statusLabel === "Published")
      .length,
    futureIssue: projected.filter((record) =>
      record.statusLabel.startsWith("Available online; issue assigned for "),
    ).length,
    preprint: projected.filter(
      (record) => record.statusLabel === "Preprint posted",
    ).length,
    awardedThesis: projected.filter(
      (record) => record.statusLabel === "Doctoral thesis awarded",
    ).length,
    journalArticles: projected.filter(
      (record) => record.type === "journal-article",
    ).length,
    bookChapters: projected.filter((record) => record.type === "book-chapter")
      .length,
  });
  const featured = selectByIds(projected, FEATURED_PUBLICATION_IDS);
  const latest = selectByIds(projected, LATEST_PUBLICATION_IDS);
  const futureIssueLabel = projected.find((record) =>
    record.statusLabel.startsWith("Available online; issue assigned for "),
  )?.statusLabel;
  const noticeDates = [
    ...new Set(projected.map((record) => record.noticeCheckedAt)),
  ];
  const lastChecked =
    noticeDates.length === 1 ? (formatDate(noticeDates[0], "day") ?? "") : "";
  const exactCatalogue =
    !projectionInvalid &&
    projected.every(
      (record, index) => record.id === CANONICAL_PUBLICATION_IDS[index],
    ) &&
    counts.records === 27 &&
    counts.dois === 26 &&
    counts.thesisWithoutDoi === 1 &&
    counts.published === 24 &&
    counts.futureIssue === 1 &&
    counts.preprint === 1 &&
    counts.awardedThesis === 1 &&
    counts.journalArticles === 24 &&
    counts.bookChapters === 1 &&
    featured.length === 4 &&
    latest.length === 5 &&
    Boolean(lastChecked);
  const partial = exactCatalogue && partialRecordIds.some((id) => ids.has(id));
  return Object.freeze({
    public: exactCatalogue,
    records: Object.freeze(projected),
    featured,
    latest,
    years: Object.freeze(years),
    types: Object.freeze(types),
    counts,
    lastChecked,
    futureIssueLabel,
    partial,
  });
}
