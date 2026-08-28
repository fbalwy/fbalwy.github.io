import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ORCID_ID = "0000-0002-2342-2156";
const API_BASE = "https://pub.orcid.org/v3.0";
const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputPath = path.join(projectRoot, "content/data/orcid-feed.json");
const cataloguePath = path.join(projectRoot, "content/data/publications.json");
const optional = process.argv.includes("--optional");

function safeUrl(value) {
  if (typeof value !== "string") return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol)
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function normalizeType(value) {
  const type = String(value ?? "other")
    .toLowerCase()
    .replaceAll("_", "-");
  if (type === "dissertation-thesis") return "doctoral-thesis";
  return type;
}

function externalIds(record) {
  return record?.["external-ids"]?.["external-id"] ?? [];
}

function externalId(record, type) {
  return externalIds(record).find(
    (item) => String(item?.["external-id-type"] ?? "").toLowerCase() === type,
  );
}

function yearFrom(record) {
  const value = record?.["publication-date"]?.year?.value;
  const year = Number(value);
  return Number.isInteger(year) && year > 1900 && year < 2200
    ? year
    : undefined;
}

function titleFrom(record) {
  return record?.title?.title?.value?.trim();
}

function partialDate(value) {
  const year = value?.year?.value;
  if (!year) return null;
  const month = value?.month?.value;
  const day = value?.day?.value;
  return [year, month, day].filter(Boolean).join("-");
}

function peerReviewSummaries(payload) {
  const summaries = new Map();
  function visit(value) {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (!value || typeof value !== "object") return;
    const putCode = value["put-code"];
    if (
      putCode != null &&
      (value["reviewer-role"] != null || value["review-type"] != null)
    ) {
      summaries.set(String(putCode), value);
      return;
    }
    Object.values(value).forEach(visit);
  }
  visit(payload);
  return [...summaries.values()];
}

function authorNames(record) {
  return (record?.contributors?.contributor ?? [])
    .map((contributor) => contributor?.["credit-name"]?.value?.trim())
    .filter(Boolean);
}

function selectedSummary(group, key) {
  const summaries = group?.[key] ?? [];
  return (
    summaries.find(
      (summary) => summary?.source?.["source-orcid"]?.path === ORCID_ID,
    ) ??
    summaries.find((summary) => String(summary?.["display-index"]) === "1") ??
    summaries[0]
  );
}

function catalogueIndex(catalogue) {
  const byDoi = new Map();
  const byTitle = new Map();
  for (const publication of catalogue.publications ?? []) {
    if (publication.doi)
      byDoi.set(String(publication.doi).toLowerCase(), publication);
    byTitle.set(String(publication.title).toLowerCase(), publication);
  }
  return { byDoi, byTitle };
}

function curatedPublication(publication) {
  const href =
    safeUrl(publication.doi_url) ?? safeUrl(publication.official_url);
  if (!href) return undefined;
  return {
    id: publication.stable_id,
    title: publication.title,
    authors: publication.authors.map((author) => author.name),
    type: normalizeType(publication.type),
    year: publication.display_year,
    sort_date: publication.display_sort_date,
    venue: publication.venue,
    volume: publication.volume,
    issue: publication.issue,
    pages: publication.pages,
    article_number: publication.article_number,
    doi: publication.doi,
    doi_url: safeUrl(publication.doi_url),
    official_url: safeUrl(publication.official_url),
    url: href,
    orcid_put_code: null,
  };
}

function seedFeed(catalogue) {
  return {
    schema_version: "1.0.0",
    orcid: ORCID_ID,
    source: "verified_catalogue_seed",
    generated_at: catalogue.generated_at,
    publications: (catalogue.publications ?? [])
      .map(curatedPublication)
      .filter(Boolean),
    fundings: [],
    peer_reviews: [],
  };
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function existingFeed() {
  try {
    return await readJson(outputPath);
  } catch {
    return undefined;
  }
}

async function apiToken() {
  if (process.env.ORCID_PUBLIC_API_TOKEN)
    return process.env.ORCID_PUBLIC_API_TOKEN;
  const clientId = process.env.ORCID_CLIENT_ID;
  const clientSecret = process.env.ORCID_CLIENT_SECRET;
  if (!clientId || !clientSecret) return undefined;

  const response = await fetch("https://orcid.org/oauth/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
      scope: "/read-public",
    }),
  });
  if (!response.ok)
    throw new Error(`ORCID token request failed (${response.status}).`);
  const payload = await response.json();
  if (!payload.access_token)
    throw new Error("ORCID token response did not include an access token.");
  return payload.access_token;
}

async function apiGet(pathname, token) {
  const response = await fetch(`${API_BASE}${pathname}`, {
    headers: {
      accept: "application/vnd.orcid+json",
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok)
    throw new Error(
      `ORCID API request failed (${response.status}) for ${pathname}.`,
    );
  return response.json();
}

async function mapInBatches(items, size, mapper) {
  const results = [];
  for (let index = 0; index < items.length; index += size) {
    results.push(
      ...(await Promise.all(items.slice(index, index + size).map(mapper))),
    );
  }
  return results;
}

function newestModified(records) {
  const timestamps = records
    .map((record) => Number(record?.["last-modified-date"]?.value))
    .filter(Number.isFinite);
  return timestamps.length
    ? new Date(Math.max(...timestamps)).toISOString()
    : undefined;
}

async function synchronizedFeed(token, catalogue, previous) {
  const workGroups = (await apiGet(`/${ORCID_ID}/works`, token)).group ?? [];
  const summaries = workGroups
    .map((group) => selectedSummary(group, "work-summary"))
    .filter(Boolean);
  const works = await mapInBatches(summaries, 4, async (summary) => {
    const putCode = summary?.["put-code"];
    return putCode ? apiGet(`/${ORCID_ID}/work/${putCode}`, token) : summary;
  });

  const index = catalogueIndex(catalogue);
  const publications = works
    .map((work) => {
      const title = titleFrom(work);
      const year = yearFrom(work);
      if (!title || !year) return undefined;
      const doiRecord = externalId(work, "doi");
      const doi = doiRecord?.["external-id-value"]?.trim()?.toLowerCase();
      const curated =
        (doi && index.byDoi.get(doi)) ?? index.byTitle.get(title.toLowerCase());
      const curatedEntry = curated ? curatedPublication(curated) : undefined;
      const doiUrl = doi
        ? (safeUrl(doiRecord?.["external-id-url"]?.value) ??
          `https://doi.org/${doi}`)
        : undefined;
      const canonicalUrl =
        doiUrl ?? safeUrl(work?.url?.value) ?? curatedEntry?.url;
      if (!canonicalUrl) return undefined;
      return {
        id:
          curatedEntry?.id ??
          (doi
            ? `doi-${doi.replaceAll(/[^a-z0-9]+/g, "-")}`
            : `orcid-work-${work["put-code"]}`),
        title,
        authors: authorNames(work).length
          ? authorNames(work)
          : (curatedEntry?.authors ?? ["Faisal Albalwy"]),
        type: normalizeType(work.type),
        year,
        sort_date: curatedEntry?.sort_date ?? `${year}-01-01`,
        venue:
          work?.["journal-title"]?.value?.trim() ?? curatedEntry?.venue ?? null,
        volume: curatedEntry?.volume ?? null,
        issue: curatedEntry?.issue ?? null,
        pages: curatedEntry?.pages ?? null,
        article_number: curatedEntry?.article_number ?? null,
        doi: doi ?? curatedEntry?.doi ?? null,
        doi_url: doiUrl ?? curatedEntry?.doi_url ?? null,
        official_url:
          safeUrl(work?.url?.value) ?? curatedEntry?.official_url ?? null,
        url: canonicalUrl,
        orcid_put_code: work["put-code"] ?? null,
      };
    })
    .filter(Boolean)
    .sort(
      (left, right) =>
        right.sort_date.localeCompare(left.sort_date) ||
        left.title.localeCompare(right.title),
    );

  const fundingGroups =
    (await apiGet(`/${ORCID_ID}/fundings`, token)).group ?? [];
  const fundingSummaries = fundingGroups
    .map((group) => selectedSummary(group, "funding-summary"))
    .filter(Boolean);
  const fundings = fundingSummaries
    .map((funding) => {
      const title = titleFrom(funding);
      if (!title) return undefined;
      const external = externalIds(funding)[0];
      return {
        id: `orcid-funding-${funding["put-code"]}`,
        title,
        type: funding.type ?? null,
        organization: funding.organization?.name ?? null,
        start_year: funding?.["start-date"]?.year?.value ?? null,
        end_year: funding?.["end-date"]?.year?.value ?? null,
        grant_number: external?.["external-id-value"] ?? null,
        url: safeUrl(external?.["external-id-url"]?.value) ?? null,
      };
    })
    .filter(Boolean);

  const peerReviewPayload = await apiGet(`/${ORCID_ID}/peer-reviews`, token);
  const reviewSummaries = peerReviewSummaries(peerReviewPayload);
  const reviewRecords = await mapInBatches(
    reviewSummaries,
    4,
    async (summary) => {
      const putCode = summary?.["put-code"];
      return putCode
        ? apiGet(`/${ORCID_ID}/peer-review/${putCode}`, token)
        : summary;
    },
  );
  const peerReviews = reviewRecords
    .map((review) => {
      const putCode = review?.["put-code"];
      if (putCode == null) return undefined;
      const organization = review?.["convening-organization"]?.name?.trim();
      const container = review?.["subject-container-name"]?.trim();
      return {
        id: `orcid-peer-review-${putCode}`,
        role: review?.["reviewer-role"] ?? null,
        review_type: review?.["review-type"] ?? null,
        organization: organization ?? null,
        container: container ?? null,
        completion_date: partialDate(review?.["completion-date"]),
        group_id: review?.["review-group-id"] ?? null,
        url: safeUrl(review?.["review-url"]?.value) ?? null,
      };
    })
    .filter(Boolean)
    .sort((left, right) =>
      String(right.completion_date ?? "").localeCompare(
        String(left.completion_date ?? ""),
      ),
    );

  const generatedAt =
    newestModified([...works, ...fundingSummaries, ...reviewRecords]) ??
    previous?.generated_at ??
    catalogue.generated_at;
  return {
    schema_version: "1.0.0",
    orcid: ORCID_ID,
    source: "orcid_public_api",
    generated_at: generatedAt,
    publications,
    fundings,
    peer_reviews: peerReviews,
  };
}

async function main() {
  const catalogue = await readJson(cataloguePath);
  const previous = await existingFeed();
  const token = await apiToken();

  if (!token) {
    if (previous) {
      console.log(
        "ORCID sync skipped: credentials are not configured; existing feed preserved.",
      );
      return;
    }
    await writeFile(
      outputPath,
      `${JSON.stringify(seedFeed(catalogue), null, 2)}\n`,
    );
    console.log(
      "ORCID feed seeded from the verified local publication catalogue.",
    );
    return;
  }

  try {
    const feed = await synchronizedFeed(token, catalogue, previous);
    await writeFile(outputPath, `${JSON.stringify(feed, null, 2)}\n`);
    console.log(
      `ORCID sync complete: ${feed.publications.length} works, ${feed.fundings.length} funding records, and ${feed.peer_reviews.length} peer-review records.`,
    );
  } catch (error) {
    if (optional && previous) {
      console.warn(
        `ORCID sync unavailable; existing feed preserved. ${error.message}`,
      );
      return;
    }
    throw error;
  }
}

await main();
