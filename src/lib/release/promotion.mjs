import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../..",
);
const overlayPath = path.join(root, "content/release/qa-007-promotion.json");
const overlay = JSON.parse(readFileSync(overlayPath, "utf8"));
const sourceContent = JSON.parse(
  readFileSync(path.join(root, "content/data/site-content.json"), "utf8"),
);
const collections = [
  "publications",
  "themes",
  "theme_publication_relationships",
  "courses",
  "career",
  "service",
  "profile_links",
];

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function assertExact(condition, message) {
  if (!condition) throw new Error(`QA-007 promotion rejected: ${message}`);
}

assertExact(overlay.schema_version === "1.0.0", "unsupported overlay schema");
assertExact(
  overlay.decision_id === "QA-007-v1-local-release-candidate" &&
    overlay.state === "approved_local_noindex_release_candidate",
  "decision identity or state mismatch",
);
assertExact(
  overlay.release_controls?.indexing ===
    "noindex, nofollow, noarchive, nosnippet" &&
    overlay.release_controls?.promotable === false &&
    overlay.release_controls?.deployable === false,
  "release boundary is not fail closed",
);

for (const [relative, expected] of Object.entries(
  overlay.source_fingerprints,
)) {
  const bytes = readFileSync(path.join(root, relative));
  assertExact(sha256(bytes) === expected, `${relative} fingerprint mismatch`);
}

for (const collection of collections) {
  const actual = sourceContent[collection].map((record) => record.record_id);
  const approved = overlay.record_ids[collection];
  assertExact(
    Array.isArray(approved) &&
      JSON.stringify(actual) === JSON.stringify(approved) &&
      new Set(approved).size === approved.length,
    `${collection} inventory mismatch`,
  );
}
assertExact(
  sourceContent.projects_and_systems.length === 0 &&
    sourceContent.teaching_occurrences.length === 0 &&
    sourceContent.metrics.length === 0,
  "held projects, occurrences, or metrics entered the aggregate",
);

const governance = overlay.governance_append;
assertExact(
  governance.public_disposition === "publish" &&
    governance.render_eligibility === "public" &&
    governance.rights_status === "granted" &&
    governance.consent_status === "not_applicable" &&
    Object.values(governance.approvals).every((value) => value === true),
  "promotion approvals are incomplete",
);

function promoteRecord(record, collection) {
  const history = Array.isArray(record.versioning?.history)
    ? record.versioning.history
    : [];
  const presentation = { ...record.public_presentation };
  if (collection === "theme_publication_relationships") {
    assertExact(
      typeof record.data?.editorial_rationale === "string" &&
        record.data.editorial_rationale.trim().length > 0,
      `${record.record_id} lacks approved relationship rationale`,
    );
    presentation.public_wording = record.data.editorial_rationale;
    presentation.public_location_ids = ["R2"];
  }
  return {
    ...record,
    governance: { ...record.governance, ...governance },
    public_presentation: presentation,
    versioning: {
      ...record.versioning,
      correction_state: "none",
      history: [
        ...history,
        {
          at: overlay.decision_at,
          actor_role: "qa_release_reviewer",
          event: "qa007_public_release_overlay_applied",
          reason: overlay.decision_id,
        },
      ],
    },
  };
}

export const QA007_PROMOTION = Object.freeze(overlay);
export const QA007_PROMOTED_CONTENT = Object.freeze({
  ...sourceContent,
  ...Object.fromEntries(
    collections.map((collection) => [
      collection,
      Object.freeze(
        sourceContent[collection].map((record) =>
          Object.freeze(promoteRecord(record, collection)),
        ),
      ),
    ]),
  ),
});
