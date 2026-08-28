import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

test("Teaching model releases only the exact privacy-safe 19-course catalogue", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld006-teaching-"));
  try {
    execFileSync(
      process.execPath,
      [
        "node_modules/typescript/bin/tsc",
        "--target",
        "esnext",
        "--ignoreConfig",
        "--module",
        "nodenext",
        "--moduleResolution",
        "nodenext",
        "--outDir",
        output,
        "src/lib/teaching/model.ts",
        "src/lib/security/public.ts",
        "tests/fixtures/teaching-populated.fixture.ts",
      ],
      { encoding: "utf8" },
    );
    const teaching = await import(
      pathToFileURL(path.join(output, "src/lib/teaching/model.js")).href
    );
    const fixture = await import(
      pathToFileURL(
        path.join(output, "tests/fixtures/teaching-populated.fixture.js"),
      ).href
    );
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const current = teaching.createTeachingModel({
      courses: aggregate.courses,
      occurrences: aggregate.teaching_occurrences,
    });
    assert.equal(aggregate.courses.length, 19);
    assert.equal(aggregate.teaching_occurrences.length, 0);
    assert.equal(current.public, false);
    assert.deepEqual(current.courses, []);
    const promotedAggregate = fixture.promotedTeachingFixture(aggregate);
    const promoted = teaching.createTeachingModel({
      courses: promotedAggregate.courses,
      occurrences: promotedAggregate.teaching_occurrences,
    });
    assert.equal(promoted.public, true);
    assert.deepEqual(promoted.modules, teaching.TEACHING_MODULE_ORDER);
    assert.deepEqual(
      promoted.courses.map((course) => course.id),
      teaching.COURSE_IDS,
    );
    assert.deepEqual(
      promoted.courses.map((course) => course.title),
      teaching.COURSE_TITLES,
    );
    const denied = (mutate) => {
      const clone = structuredClone(promotedAggregate);
      mutate(clone);
      return teaching.createTeachingModel({
        courses: clone.courses,
        occurrences: clone.teaching_occurrences,
      });
    };
    assert.equal(denied((value) => value.courses.pop()).public, false);
    assert.equal(
      denied((value) => value.courses.push(structuredClone(value.courses[0])))
        .public,
      false,
    );
    assert.equal(denied((value) => value.courses.reverse()).public, false);
    assert.equal(
      denied((value) => {
        value.courses[0].data.official_title = "Corrupt course";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.courses[0].governance.render_eligibility = "internal_only";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.courses[0].public_presentation.public_location_ids = ["R1"];
      }).public,
      false,
    );
    assert.equal(
      denied((value) =>
        value.teaching_occurrences.push({ course_id: "course-01" }),
      ).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.courses[0].data.term_label = "private";
      }).public,
      false,
    );
    const component = await readFile(
      "src/components/teaching/TeachingContent.astro",
      "utf8",
    );
    const route = await readFile("src/pages/teaching.astro", "utf8");
    assert.match(route, /currentSite\.routes\.teaching/);
    assert.match(component, /model\.courses\.map/);
    assert.doesNotMatch(
      component,
      /term_label|academic_year|course_id|room_number|enrolment_count|supervision_record/i,
    );
    assert.doesNotMatch(
      component,
      /Algorithms and Data Structures|Cryptography/,
    );
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
