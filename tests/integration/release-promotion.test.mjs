import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  QA007_PROMOTED_CONTENT,
  QA007_PROMOTION,
} from "../../src/lib/release/promotion.mjs";

const exactCounts = Object.freeze({
  publications: 27,
  themes: 3,
  theme_publication_relationships: 7,
  courses: 19,
  career: 2,
  service: 10,
  profile_links: 3,
});

test("QA-007 append-only overlay promotes only the closed reviewed inventory", async () => {
  const source = JSON.parse(
    await readFile("content/data/site-content.json", "utf8"),
  );
  for (const [collection, count] of Object.entries(exactCounts)) {
    assert.equal(source[collection].length, count);
    assert.equal(QA007_PROMOTED_CONTENT[collection].length, count);
    assert.ok(
      source[collection].every(
        (record) =>
          record.governance.public_disposition === "eligible" &&
          record.governance.render_eligibility === "internal_only",
      ),
    );
    assert.ok(
      QA007_PROMOTED_CONTENT[collection].every(
        (record) =>
          record.governance.public_disposition === "publish" &&
          record.governance.render_eligibility === "public" &&
          record.governance.approvals.qa === true &&
          record.versioning.history.at(-1)?.event ===
            "qa007_public_release_overlay_applied",
      ),
    );
    assert.deepEqual(
      QA007_PROMOTED_CONTENT[collection].map((record) => record.record_id),
      QA007_PROMOTION.record_ids[collection],
    );
  }
  assert.equal(QA007_PROMOTED_CONTENT.teaching_occurrences.length, 0);
  assert.equal(QA007_PROMOTED_CONTENT.projects_and_systems.length, 0);
  assert.equal(QA007_PROMOTED_CONTENT.metrics.length, 0);
  assert.ok(
    QA007_PROMOTED_CONTENT.theme_publication_relationships.every(
      (record) =>
        record.public_presentation.public_location_ids.join(",") === "R2" &&
        record.public_presentation.public_wording ===
          record.data.editorial_rationale,
    ),
  );
  assert.deepEqual(QA007_PROMOTION.release_controls.allowed_staged_files, [
    "og.png",
    "faisal-albalwy.vcf",
    "robots.txt",
  ]);
  assert.equal(QA007_PROMOTION.release_controls.promotable, false);
  assert.equal(QA007_PROMOTION.release_controls.deployable, false);
});
