import { readFile } from "node:fs/promises";

const aggregate = JSON.parse(
  await readFile("content/data/site-content.json", "utf8"),
);
const catalogue = JSON.parse(
  await readFile("content/data/publications.json", "utf8"),
);

export const canonicalAggregateRecords = aggregate.publications;
export const sourceCatalogueRecords = catalogue.publications;

export function promotedPublicationRecords() {
  return structuredClone(canonicalAggregateRecords).map((record) => ({
    ...record,
    governance: {
      ...record.governance,
      public_disposition: "publish",
      render_eligibility: "public",
      rights_status: "granted",
      consent_status: "not_applicable",
      approvals: {
        evidence: true,
        privacy: true,
        rights: true,
        editorial: true,
        qa: true,
      },
    },
  }));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderNonEmittedBaseHtml(model) {
  const records = model.records
    .map(
      (record) =>
        `<li><article id="${escapeHtml(record.fragment)}" data-record="${escapeHtml(record.id)}"><h3>${escapeHtml(record.title)}</h3><p>${escapeHtml(record.authors.join(", "))}</p><p>${escapeHtml(record.statusLabel)} · ${escapeHtml(record.displayDate)}</p><p>${escapeHtml(record.typeLabel)} · ${escapeHtml(record.venue)}</p>${record.doi ? `<p>DOI: ${escapeHtml(record.doi)}</p>` : ""}${record.citation ? `<p data-visible-citation>${escapeHtml(record.citation)}</p>` : ""}${record.actions.map((action) => `<a href="${escapeHtml(action.url)}">${escapeHtml(action.label)}</a>`).join("")}</article></li>`,
    )
    .join("");
  return `<main><h1>Publications</h1><div data-publication-controls hidden></div><p data-result-summary>${model.records.length} publications</p><ol>${records}</ol></main>`;
}
