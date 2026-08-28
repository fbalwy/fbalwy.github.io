import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import {
  CANONICAL_PUBLICATION_IDS,
  FEATURED_PUBLICATION_IDS,
  LATEST_PUBLICATION_IDS,
  PUBLICATION_OPERATIONAL_COPY,
  createPublicationsModel,
} from "../../src/lib/publications/model.ts";
import {
  EMPTY_PUBLICATION_QUERY,
  boundPublicationQuery,
  copyVisibleCitation,
  parsePublicationQuery,
  publicationMatches,
  reconcilePublicationFragment,
  serializePublicationQuery,
} from "../../src/lib/publications/query.ts";
import {
  canonicalAggregateRecords,
  promotedPublicationRecords,
  renderNonEmittedBaseHtml,
  sourceCatalogueRecords,
} from "../fixtures/publications.mjs";

function populatedModel(options = {}) {
  return createPublicationsModel({
    records: promotedPublicationRecords(),
    ...options,
  });
}

test("current canonical aggregate projects zero records and remains unavailable", () => {
  const model = createPublicationsModel({ records: canonicalAggregateRecords });
  assert.equal(model.public, false);
  assert.equal(model.records.length, 0);
  assert.equal(model.featured.length, 0);
  assert.equal(model.latest.length, 0);
});

test("non-emitted promotion fixture projects the exact canonical catalogue", () => {
  const model = populatedModel();
  assert.equal(model.public, true);
  assert.deepEqual(
    model.records.map((record) => record.id),
    CANONICAL_PUBLICATION_IDS,
  );
  assert.deepEqual(
    model.records.map((record) => record.id),
    sourceCatalogueRecords.map((record) => record.stable_id),
  );
  assert.deepEqual(model.counts, {
    records: 27,
    dois: 26,
    thesisWithoutDoi: 1,
    published: 24,
    futureIssue: 1,
    preprint: 1,
    awardedThesis: 1,
    journalArticles: 24,
    bookChapters: 1,
  });
  assert.deepEqual(
    model.featured.map((record) => record.id),
    FEATURED_PUBLICATION_IDS,
  );
  assert.deepEqual(
    model.latest.map((record) => record.id),
    LATEST_PUBLICATION_IDS,
  );
  assert.equal(
    model.futureIssueLabel,
    "Available online; issue assigned for 1 December 2026",
  );
  assert.equal(model.lastChecked, "19 August 2026");
});

test("projection preserves exact source bibliographic facts and safe actions", () => {
  const model = populatedModel();
  for (const [index, record] of model.records.entries()) {
    const source = sourceCatalogueRecords[index];
    assert.equal(record.title, source.title);
    assert.deepEqual(
      record.authors,
      source.authors.map((author) => author.name),
    );
    assert.equal(record.venue, source.venue);
    assert.equal(record.doi, source.doi ?? undefined);
    assert.ok(record.actions.length > 0);
    for (const action of record.actions) {
      assert.equal(new URL(action.url).protocol, "https:");
      assert.match(action.label, /\(external\)$/);
    }
  }
});

test("held and linked versions do not enter or inflate the catalogue", () => {
  const model = populatedModel();
  assert.equal(
    model.records.some((record) => record.id.includes("jnmes")),
    false,
  );
  assert.equal(model.records.length, 27);
  assert.equal(
    sourceCatalogueRecords
      .flatMap((record) => record.version_relationships)
      .filter((relationship) => relationship.counted_separately === false)
      .length,
    4,
  );
});

test("complete release fails closed for missing, reordered, duplicate, or corrupt public records", () => {
  const complete = promotedPublicationRecords();
  assert.equal(
    createPublicationsModel({ records: complete.slice(1) }).public,
    false,
  );
  assert.equal(
    createPublicationsModel({
      records: [complete[1], complete[0], ...complete.slice(2)],
    }).public,
    false,
  );
  assert.equal(
    createPublicationsModel({
      records: [...complete, structuredClone(complete[0])],
    }).public,
    false,
  );
  const corrupt = structuredClone(complete);
  corrupt[0].data.external_actions = [];
  assert.equal(createPublicationsModel({ records: corrupt }).public, false);
});

test("optional-detail partial state preserves an otherwise complete catalogue", () => {
  const records = promotedPublicationRecords();
  records[1].data.volume = null;
  const model = createPublicationsModel({
    records,
    partialRecordIds: [records[1].record_id],
  });
  assert.equal(model.public, true);
  assert.equal(model.partial, true);
  assert.equal(model.records.length, 27);
  assert.equal(model.records[1].volume, undefined);
});

test("non-emitted base HTML contains all records in canonical order without script-only copy controls", () => {
  const model = populatedModel({
    citations: {
      [CANONICAL_PUBLICATION_IDS[0]]: "Visible validated citation.",
    },
  });
  const html = renderNonEmittedBaseHtml(model);
  assert.equal((html.match(/<article\b/g) ?? []).length, 27);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /data-publication-controls hidden/);
  assert.match(html, /Visible validated citation\./);
  assert.doesNotMatch(html, /Copy citation/);
  let cursor = -1;
  for (const record of model.records) {
    const next = html.indexOf(record.title);
    assert.ok(next > cursor);
    cursor = next;
  }
});

test("query parsing is bounded, allowlisted, single-valued, and serialized in canonical order", () => {
  const model = populatedModel();
  const options = {
    years: new Set(model.years.map(String)),
    types: new Set(model.types.map((type) => type.value)),
    themes: new Set(),
  };
  const valid = parsePublicationQuery(
    new URLSearchParams("type=preprint&q=blockchain&year=2024"),
    options,
  );
  assert.equal(valid.invalid, false);
  assert.equal(
    serializePublicationQuery(valid.state),
    "q=blockchain&year=2024&type=preprint",
  );

  const long = "😀".repeat(205);
  const invalid = parsePublicationQuery(
    new URLSearchParams(
      `q=${encodeURIComponent(long)}&year=1900&type=metric&sort=rank&q=second`,
    ),
    options,
  );
  assert.equal(invalid.invalid, true);
  assert.equal(Array.from(invalid.state.q).length, 200);
  assert.equal(invalid.state.year, "");
  assert.equal(invalid.state.type, "");
  assert.equal(boundPublicationQuery(" x "), "x");
});

test("q, year, and type filters combine without reordering records", () => {
  const model = populatedModel();
  const match = (query) =>
    model.records.filter((record) => publicationMatches(record, query));
  const blockchain = match({ ...EMPTY_PUBLICATION_QUERY, q: "blockchain" });
  assert.equal(blockchain.length, 13);
  assert.deepEqual(
    blockchain.map((record) => record.id),
    model.records
      .filter((record) => record.searchText.includes("blockchain"))
      .map((record) => record.id),
  );
  assert.equal(
    match({ ...EMPTY_PUBLICATION_QUERY, q: "blockchain", year: "2022" }).length,
    3,
  );
  assert.deepEqual(
    match({ ...EMPTY_PUBLICATION_QUERY, type: "preprint" }).map(
      (record) => record.id,
    ),
    ["doi-10-2139-ssrn-4765808"],
  );
  assert.equal(
    match({ ...EMPTY_PUBLICATION_QUERY, q: "no-such-publication" }).length,
    0,
  );
});

test("history round-trip and fragments restore bounded state without hidden targets", () => {
  const model = populatedModel();
  const options = {
    years: new Set(model.years.map(String)),
    types: new Set(model.types.map((type) => type.value)),
    themes: new Set(),
  };
  const first = parsePublicationQuery(
    new URLSearchParams("q=blockchain"),
    options,
  ).state;
  const second = parsePublicationQuery(
    new URLSearchParams("q=blockchain&year=2022"),
    options,
  ).state;
  const history = [
    serializePublicationQuery(first),
    serializePublicationQuery(second),
  ];
  assert.deepEqual(
    history.map(
      (query) =>
        parsePublicationQuery(new URLSearchParams(query), options).state,
    ),
    [first, second],
  );
  const ids = new Set(model.records.map((record) => record.id));
  const recovered = reconcilePublicationFragment(
    ids,
    `publication-${model.records[0].id}`,
    second,
  );
  assert.equal(recovered.targetId, model.records[0].id);
  assert.deepEqual(recovered.state, EMPTY_PUBLICATION_QUERY);
  assert.equal(
    reconcilePublicationFragment(ids, "publication-private-record", second)
      .invalid,
    true,
  );
});

test("citation copy succeeds exactly or returns the approved manual recovery", async () => {
  let copied = "";
  assert.equal(
    await copyVisibleCitation("Visible validated citation.", async (value) => {
      copied = value;
    }),
    true,
  );
  assert.equal(copied, "Visible validated citation.");
  assert.equal(
    await copyVisibleCitation("Visible validated citation.", async () => {
      throw new Error("clipboard denied");
    }),
    false,
  );
  assert.equal(PUBLICATION_OPERATIONAL_COPY.copied, "Citation copied.");
  assert.match(
    PUBLICATION_OPERATIONAL_COPY.copyFailed,
    /Select the citation text/,
  );
});

test("client source keeps controls progressive and encodes focus/recovery contracts", async () => {
  const client = await readFile("src/client/publication-catalogue.ts", "utf8");
  const component = await readFile(
    "src/components/catalogue/PublicationsContent.astro",
    "utf8",
  );
  assert.match(component, /data-publication-controls role="search" hidden/);
  assert.doesNotMatch(component, /<form\b/);
  assert.doesNotMatch(component, /Copy citation/);
  assert.match(client, /controls\.hidden = false/);
  assert.match(client, /record\.hidden = !matches/);
  assert.match(client, /window\.addEventListener\("popstate"/);
  assert.match(client, /window\.addEventListener\("hashchange"/);
  assert.match(client, /clearFilters\("search"\)/);
  assert.match(client, /clearFilters\("heading"\)/);
  assert.match(client, /citationStatus\.textContent/);
  assert.doesNotMatch(client, /innerHTML|localStorage|sessionStorage|fetch\(/);
});

test("operational copy covers data, external, partial, offline, invalid, and no-result states", () => {
  assert.match(
    PUBLICATION_OPERATIONAL_COPY.unavailableHeading,
    /could not be loaded/,
  );
  assert.match(PUBLICATION_OPERATIONAL_COPY.externalHeading, /external source/);
  assert.match(
    PUBLICATION_OPERATIONAL_COPY.partialHeading,
    /details are unavailable/,
  );
  assert.match(PUBLICATION_OPERATIONAL_COPY.offlineHeading, /offline/);
  assert.match(
    PUBLICATION_OPERATIONAL_COPY.invalidQuery,
    /filters were removed/,
  );
  assert.match(
    PUBLICATION_OPERATIONAL_COPY.noResultsHeading,
    /No publications match/,
  );
});
