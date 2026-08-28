#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const schemaDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(schemaDir, "../..");
const expectedSchemaFiles = [
  "availability.schema.json",
  "career.schema.json",
  "common.schema.json",
  "metric.schema.json",
  "profile-link.schema.json",
  "project-system.schema.json",
  "publication-dataset-v1.schema.json",
  "publication.schema.json",
  "service.schema.json",
  "site-content.schema.json",
  "teaching.schema.json",
  "theme.schema.json"
];

const results = [];
const failures = [];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function record(check, pass, detail) {
  results.push({ check, pass, detail });
  if (!pass) failures.push(`${check}: ${detail}`);
}

function pointerGet(document, pointer) {
  if (!pointer || pointer === "#") return document;
  if (!pointer.startsWith("#/")) return undefined;
  return pointer.slice(2).split("/").reduce((node, raw) => {
    const key = raw.replaceAll("~1", "/").replaceAll("~0", "~");
    return node && Object.prototype.hasOwnProperty.call(node, key) ? node[key] : undefined;
  }, document);
}

function walk(node, visit) {
  visit(node);
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) node.forEach((item) => walk(item, visit));
  else Object.values(node).forEach((value) => walk(value, visit));
}

function normalizeDoi(value) {
  if (value == null) return null;
  return String(value).trim().toLowerCase().replace(/^https?:\/\/(?:dx\.)?doi\.org\//, "");
}

function duplicate(values) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return null;
}

function isIsoDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

function isTypedDate(value, precision) {
  if (precision === "day") return isIsoDate(value);
  if (precision === "month") return typeof value === "string" && /^\d{4}-\d{2}$/.test(value);
  if (precision === "year") return typeof value === "string" && /^\d{4}$/.test(value);
  return false;
}

function allowedLifecycle(status, disposition) {
  const allowed = {
    unassessed: ["suppress"],
    collecting: ["hold"],
    insufficient: ["hold"],
    verified: ["eligible", "publish", "suppress"],
    conflict_open: ["suppress"],
    stale: ["hold", "withdraw"],
    superseded: ["withdraw"],
    retracted: ["withdraw"],
    rejected: ["suppress"]
  };
  return Boolean(allowed[status]?.includes(disposition));
}

function releaseComplete(payload) {
  const approvals = payload.approvals || {};
  return payload.record_owner_id != null
    && ["not_applicable", "granted"].includes(payload.rights_status)
    && ["not_applicable", "granted"].includes(payload.consent_status)
    && ["evidence", "privacy", "rights", "editorial", "qa"].every((key) => approvals[key] === true)
    && typeof payload.public_wording === "string" && payload.public_wording.length > 0
    && Array.isArray(payload.public_location_ids) && payload.public_location_ids.length > 0;
}

const unresolvedMarker = /\[(?:VERIFY|SOURCE|AS OF|OMIT IF UNRESOLVED|TRANSLATION TO VERIFY|DESCRIPTIVE LABEL)/i;
const restrictedKey = /(?:schedule|student|room|section|meeting_time|delivery_mode|faculty_code|qr|barcode|signature|certificate_number|private_(?:path|email)|phone|token|secret|snapshot_hash)/i;
const restrictedValue = /(?:\/Users\/|file:\/\/|[?&](?:token|key|secret)=|sha-?256\s*[:=])/i;

function publicLeakCode(value) {
  let leak = null;
  walk(value, (node) => {
    if (leak) return;
    if (typeof node === "string") {
      if (unresolvedMarker.test(node)) leak = "PRIVACY-UNRESOLVED-MARKER";
      else if (restrictedValue.test(node)) leak = "PRIVACY-RESTRICTED-PUBLIC";
      return;
    }
    if (node && typeof node === "object" && !Array.isArray(node)) {
      for (const key of Object.keys(node)) {
        if (restrictedKey.test(key)) {
          leak = "PRIVACY-RESTRICTED-PUBLIC";
          break;
        }
      }
    }
  });
  return leak;
}

function validateCanonicalPublication(record) {
  const required = ["record_id", "schema_version", "domain", "claim_ids", "sources", "governance", "translation", "public_presentation", "versioning", "data"];
  if (required.some((key) => !(key in record))) return "EXAMPLE-REQUIRED";
  if (record.schema_version !== "1.0.0" || record.domain !== "publication") return "EXAMPLE-DOMAIN";
  const g = record.governance;
  if (!allowedLifecycle(g.verification_status, g.public_disposition)) return "GOV-LIFECYCLE";
  if (g.conflict_state === "active" && (g.verification_status !== "conflict_open" || g.public_disposition !== "suppress")) return "GOV-CONFLICT";
  if (g.public_disposition !== "publish" && g.render_eligibility !== "internal_only") return "GOV-ELIGIBLE-PUBLIC";
  if (g.public_disposition === "publish") {
    const releaseView = { ...g, ...record.public_presentation };
    if (g.render_eligibility !== "public" || !releaseComplete(releaseView)) return "GOV-PUBLISH-MISSING";
    if (!["Public", "Public_after_review"].includes(g.privacy_class) || g.evidence_privacy_class === "Prohibited") return "GOV-PUBLISH-PRIVACY";
    if (!record.sources.some((source) => source.source_role === "authoritative_primary" && source.access_state === "available") || record.sources.some((source) => source.source_role === "unusable" || source.access_state !== "available")) return "GOV-SOURCE-UNAVAILABLE";
  }
  if (["pending", "rejected"].includes(record.translation.status) && g.public_disposition === "publish") return "TRANSLATION-UNRESOLVED-PUBLISH";
  const p = record.data;
  if (!Array.isArray(p.authors) || p.authors.filter((a) => a.is_faisal === true).length !== 1) return "PUBLICATION-ONE-FAISAL";
  if (p.doi != null && normalizeDoi(p.doi) !== p.doi) return "PUBLICATION-DOI-NORMALIZATION";
  if (p.doi == null && p.work_type !== "doctoral_thesis") return "PUBLICATION-DOI-NULL";
  if (!Array.isArray(p.dates) || p.dates.some((d) => !isTypedDate(d.value, d.precision))) return "PUBLICATION-DATE";
  if (p.status === "online_first_with_future_issue_assignment" && !p.dates.some((d) => d.type === "issue")) return "PUBLICATION-FUTURE-ISSUE";
  const publicLeak = publicLeakCode(record.public_presentation);
  return publicLeak;
}

function validateAggregateEmpty(document) {
  const arrays = ["publications", "themes", "theme_publication_relationships", "projects_and_systems", "courses", "teaching_occurrences", "career", "service", "metrics", "profile_links", "availability_states"];
  if (document.schema_version !== "1.0.0" || typeof document.generated_at !== "string") return false;
  return arrays.every((key) => Array.isArray(document[key]));
}

function validateSiteCollection(document) {
  const errors = [];
  const recordArrays = ["publications", "themes", "theme_publication_relationships", "projects_and_systems", "courses", "teaching_occurrences", "career", "service", "metrics", "profile_links"];
  const allRecords = recordArrays.flatMap((key) => document[key] || []);
  const allIds = allRecords.map((record) => record.record_id);
  const publicationIds = new Set((document.publications || []).map((record) => record.record_id));
  const themeIds = new Set((document.themes || []).map((record) => record.record_id));
  const courseIds = new Set((document.courses || []).map((record) => record.record_id));
  const profileIds = new Set((document.profile_links || []).map((record) => record.record_id));
  if (duplicate(allIds)) errors.push("duplicate record ID");
  const dois = (document.publications || []).map((record) => normalizeDoi(record.data?.doi)).filter(Boolean);
  if (duplicate(dois)) errors.push("duplicate DOI");
  for (const record of allRecords) {
    const g = record.governance || {};
    if (!allowedLifecycle(g.verification_status, g.public_disposition)) errors.push(`lifecycle ${record.record_id}`);
    if (g.public_disposition !== "publish" && g.render_eligibility !== "internal_only") errors.push(`render fail-closed ${record.record_id}`);
    if (g.public_disposition === "publish" && (g.render_eligibility !== "public" || !releaseComplete({ ...g, ...record.public_presentation }))) errors.push(`release fields ${record.record_id}`);
    if (["pending", "rejected"].includes(record.translation?.status) && g.public_disposition === "publish") errors.push(`translation ${record.record_id}`);
    if (publicLeakCode(record.public_presentation)) errors.push(`public leak ${record.record_id}`);
    for (const superseded of record.versioning?.supersedes_record_ids || []) if (!allIds.includes(superseded)) errors.push(`supersedes FK ${record.record_id}`);
    if (record.versioning?.superseded_by_record_id && !allIds.includes(record.versioning.superseded_by_record_id)) errors.push(`superseded-by FK ${record.record_id}`);
  }
  for (const record of document.publications || []) {
    const code = validateCanonicalPublication(record);
    if (code) errors.push(`${code} ${record.record_id}`);
    for (const relation of record.data?.version_relationships || []) if (!publicationIds.has(relation.related_record_id)) errors.push(`publication relation FK ${record.record_id}`);
  }
  for (const record of document.theme_publication_relationships || []) {
    if (!themeIds.has(record.data?.theme_id) || !publicationIds.has(record.data?.publication_id)) errors.push(`theme/publication FK ${record.record_id}`);
  }
  for (const record of document.projects_and_systems || []) {
    for (const id of record.data?.related_theme_ids || []) if (!themeIds.has(id)) errors.push(`project/theme FK ${record.record_id}`);
    for (const id of record.data?.related_publication_ids || []) if (!publicationIds.has(id)) errors.push(`project/publication FK ${record.record_id}`);
  }
  for (const record of document.teaching_occurrences || []) if (!courseIds.has(record.data?.course_id)) errors.push(`occurrence/course FK ${record.record_id}`);
  for (const record of document.metrics || []) if (!profileIds.has(record.data?.source_platform_id)) errors.push(`metric/platform FK ${record.record_id}`);
  return [...new Set(errors)];
}

function invalidFixtureCode(test) {
  const payload = test.payload;
  switch (test.expected_check) {
    case "GOV-LIFECYCLE":
      return allowedLifecycle(payload.verification_status, payload.public_disposition) ? null : "GOV-LIFECYCLE";
    case "GOV-ELIGIBLE-PUBLIC":
      return payload.public_disposition !== "publish" && payload.render_eligibility === "public" ? "GOV-ELIGIBLE-PUBLIC" : null;
    case "GOV-PUBLISH-MISSING":
      return payload.public_disposition === "publish" && !releaseComplete(payload) ? "GOV-PUBLISH-MISSING" : null;
    case "TRANSLATION-UNRESOLVED-PUBLISH":
      return ["pending", "rejected"].includes(payload.translation_status) && payload.public_disposition === "publish" ? "TRANSLATION-UNRESOLVED-PUBLISH" : null;
    case "GOV-PUBLISH-PRIVACY":
      return payload.public_disposition === "publish" && !["Public", "Public_after_review"].includes(payload.privacy_class) ? "GOV-PUBLISH-PRIVACY" : null;
    case "GOV-CONFLICT":
      return payload.conflict_state === "active" && (payload.verification_status !== "conflict_open" || payload.public_disposition !== "suppress") ? "GOV-CONFLICT" : null;
    case "GOV-SOURCE-UNAVAILABLE":
      return payload.public_disposition === "publish" && payload.sources.some((source) => source.access_state !== "available" || source.source_role === "unusable") ? "GOV-SOURCE-UNAVAILABLE" : null;
    case "COLLECTION-DUPLICATE-ID":
      return duplicate(payload.records.map((record) => record.record_id)) ? "COLLECTION-DUPLICATE-ID" : null;
    case "COLLECTION-DUPLICATE-DOI":
      return duplicate(payload.records.map((record) => normalizeDoi(record.doi)).filter(Boolean)) ? "COLLECTION-DUPLICATE-DOI" : null;
    case "PUBLICATION-ONE-FAISAL":
      return payload.authors.filter((author) => author.is_faisal === true).length !== 1 ? "PUBLICATION-ONE-FAISAL" : null;
    case "PUBLICATION-FUTURE-ISSUE":
      return payload.status === "online_first_with_future_issue_assignment" && !payload.dates.some((date) => date.type === "issue") ? "PUBLICATION-FUTURE-ISSUE" : null;
    case "COLLECTION-FOREIGN-KEY":
      return !payload.theme_ids.includes(payload.relationship.theme_id) || !payload.publication_ids.includes(payload.relationship.publication_id) ? "COLLECTION-FOREIGN-KEY" : null;
    case "PRIVACY-RESTRICTED-PUBLIC":
    case "PRIVACY-UNRESOLVED-MARKER":
      return publicLeakCode(payload.public_object);
    default:
      return null;
  }
}

function validatePublicationDataset(dataset) {
  const errors = [];
  const expectedTop = ["counting_policy", "discovery_source", "generated_at", "publications", "schema", "schema_version", "subject", "validation_summary"].sort();
  if (JSON.stringify(Object.keys(dataset).sort()) !== JSON.stringify(expectedTop)) errors.push("top-level shape");
  if (dataset.schema !== "https://fbalwy.sa/content/publications/v1" || dataset.schema_version !== "1.0.0") errors.push("schema identity");
  const publications = dataset.publications;
  const ids = publications.map((publication) => publication.stable_id);
  const dois = publications.map((publication) => publication.doi).filter(Boolean);
  if (publications.length !== 27) errors.push("canonical count");
  if (duplicate(ids)) errors.push("duplicate stable ID");
  if (duplicate(dois.map(normalizeDoi))) errors.push("duplicate DOI");
  if (dois.some((doi) => doi !== normalizeDoi(doi))) errors.push("DOI normalization");
  if (publications.filter((publication) => publication.doi == null).length !== 1) errors.push("DOI-less count");
  if (publications.some((publication) => publication.doi == null && publication.type !== "doctoral_thesis")) errors.push("DOI-less non-thesis");
  if (publications.some((publication) => publication.doi != null && publication.doi_url !== `https://doi.org/${publication.doi}`)) errors.push("DOI URL");
  if (publications.some((publication) => !Array.isArray(publication.authors) || publication.authors.filter((author) => author.is_faisal === true).length !== 1)) errors.push("one-Faisal rule");
  if (publications.some((publication) => !Array.isArray(publication.sources) || publication.sources.length === 0)) errors.push("source coverage");
  if (publications.some((publication) => !Array.isArray(publication.dates) || publication.dates.length === 0 || publication.dates.some((date) => !isTypedDate(date.value, date.precision)))) errors.push("typed dates");
  if (publications.some((publication) => publication.status === "online_first_with_future_issue_assignment" && !publication.dates.some((date) => date.type === "issue" && date.value > dataset.generated_at.slice(0, 10)))) errors.push("future issue assignment");
  if (publications.some((publication) => publication.verification_status !== "verified" || publication.public_disposition !== "eligible")) errors.push("source lifecycle");
  if (publications.some((publication) => publication.version_relationships.some((relation) => relation.related_stable_id && !ids.includes(relation.related_stable_id)))) errors.push("version stable foreign key");
  const allClaims = new Set(publications.flatMap((publication) => publication.evidence_claim_ids));
  if (publications.some((publication) => publication.version_relationships.some((relation) => relation.related_candidate_id && !allClaims.has(relation.related_candidate_id)))) errors.push("version candidate foreign key");
  for (let index = 1; index < publications.length; index += 1) {
    const previous = publications[index - 1];
    const current = publications[index];
    if (previous.display_sort_date < current.display_sort_date || (previous.display_sort_date === current.display_sort_date && previous.title.localeCompare(current.title) > 0)) {
      errors.push("sort order");
      break;
    }
  }
  const counts = dataset.counting_policy;
  if (counts.canonical_record_count !== 27
      || counts.registered_included_candidate_count + counts.held_candidate_count + counts.excluded_or_version_linked_candidate_count !== counts.registered_candidate_count
      || counts.discovered_included_candidate_count !== counts.discovered_candidate_count
      || counts.registered_included_candidate_count + counts.discovered_included_candidate_count !== counts.included_candidate_count
      || counts.included_candidate_count + counts.held_candidate_count + counts.excluded_or_version_linked_candidate_count !== dataset.discovery_source.profile_rows_observed) errors.push("count parity");
  const summary = dataset.validation_summary;
  if (summary.primary_source_backed_records !== publications.length || summary.normalized_unique_dois !== dois.length || summary.records_without_doi !== 1 || summary.unique_stable_ids !== ids.length || summary.correction_retraction_checks !== publications.length) errors.push("validation summary parity");
  return errors;
}

// 1. Parse and identify every schema.
const actualSchemaFiles = fs.readdirSync(schemaDir).filter((name) => name.endsWith(".schema.json")).sort();
record("SCHEMA-01", JSON.stringify(actualSchemaFiles) === JSON.stringify(expectedSchemaFiles), `${actualSchemaFiles.length} schema files found`);
const schemas = new Map();
for (const name of actualSchemaFiles) {
  try {
    schemas.set(name, readJson(path.join(schemaDir, name)));
  } catch (error) {
    record("SCHEMA-JSON", false, `${name}: ${error.message}`);
  }
}
record("SCHEMA-02", [...schemas.values()].every((schema) => schema.$schema === "https://json-schema.org/draft/2020-12/schema"), "all schemas declare Draft 2020-12");
const ids = [...schemas.values()].map((schema) => schema.$id);
record("SCHEMA-03", ids.every((id) => typeof id === "string" && id.startsWith("https://fbalwy.sa/schemas/v1/")) && !duplicate(ids), `${ids.length} stable unique $id values`);

let refCount = 0;
const refErrors = [];
for (const [name, schema] of schemas) {
  walk(schema, (node) => {
    if (typeof node.$ref !== "string") return;
    refCount += 1;
    const [filePart, pointerPart = ""] = node.$ref.split("#");
    const targetName = filePart || name;
    const target = schemas.get(targetName);
    if (!target || pointerGet(target, pointerPart ? `#${pointerPart}` : "#") === undefined) refErrors.push(`${name}: ${node.$ref}`);
  });
}
record("SCHEMA-04", refErrors.length === 0, `${refCount} local references resolved${refErrors.length ? `; ${refErrors.join(", ")}` : ""}`);

// 2. Examples.
const validPublication = readJson(path.join(schemaDir, "examples/valid/publication.json"));
const validPublicationError = validateCanonicalPublication(validPublication);
record("EXAMPLE-01", !validPublicationError, validPublicationError || "canonical DOI-less publication example passed");
const validAggregate = readJson(path.join(schemaDir, "examples/valid/site-content-empty.json"));
record("EXAMPLE-02", validateAggregateEmpty(validAggregate), "aggregate empty-state example passed");

// 3. Invalid fixtures must fail for their named reason.
const invalidDir = path.join(schemaDir, "examples/invalid");
const invalidFiles = fs.readdirSync(invalidDir).filter((name) => name.endsWith(".json")).sort();
let invalidCaseCount = 0;
for (const name of invalidFiles) {
  const fixture = readJson(path.join(invalidDir, name));
  for (const test of fixture.cases) {
    invalidCaseCount += 1;
    const actual = invalidFixtureCode(test);
    record(`FIXTURE-${test.case_id}`, actual === test.expected_check, `expected ${test.expected_check}; received ${actual || "pass"}`);
  }
}

// 4. Existing dataset compatibility and collection invariants.
const publicationDataset = readJson(path.join(repoRoot, "content/data/publications.json"));
const compatibilityErrors = validatePublicationDataset(publicationDataset);
record("COMPAT-01", compatibilityErrors.length === 0, compatibilityErrors.length ? compatibilityErrors.join(", ") : "27 records; 26 normalized DOIs; one DOI-less thesis; count, source, author, date, link, and sort checks passed");
record("PUBLIC-RENDER-01", publicationDataset.publications.every((publication) => publication.public_disposition === "eligible"), "all source records remain eligible/internal inputs; none is publish");

const optionalInput = process.argv[2];
if (optionalInput) {
  const inputPath = path.resolve(process.cwd(), optionalInput);
  const inputDocument = readJson(inputPath);
  const inputErrors = validateSiteCollection(inputDocument);
  record("INPUT-COLLECTION", inputErrors.length === 0, inputErrors.length ? inputErrors.join(", ") : `${optionalInput} passed cross-record validation`);
}

const passed = results.filter((result) => result.pass).length;
const failed = results.length - passed;
console.log(`DAT-001 validation: ${passed} passed, ${failed} failed (${results.length} checks; ${invalidCaseCount} invalid fixtures).`);
for (const result of results) console.log(`${result.pass ? "PASS" : "FAIL"} ${result.check} — ${result.detail}`);
if (failures.length) process.exitCode = 1;
