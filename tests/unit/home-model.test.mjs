import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

test("typed populated Home fixture proves guarded module bindings without emitting a harness", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld002-home-"));
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
        "src/lib/home/model.ts",
        "src/lib/security/public.ts",
        "tests/fixtures/home-populated.fixture.ts",
      ],
      { encoding: "utf8" },
    );
    const {
      createHomeModel,
      HOME_MODULE_ORDER,
      FEATURED_PUBLICATION_IDS,
      THEME_IDS,
    } = await import(
      pathToFileURL(path.join(output, "src/lib/home/model.js")).href
    );
    const { populatedHomeFixture } = await import(
      pathToFileURL(
        path.join(output, "tests/fixtures/home-populated.fixture.js"),
      ).href
    );
    const model = createHomeModel(populatedHomeFixture);
    assert.deepEqual(model.modules, HOME_MODULE_ORDER);
    assert.deepEqual(
      model.themes.map((item) => item.record_id),
      THEME_IDS,
    );
    assert.deepEqual(
      model.featured.map((item) => item.record_id),
      FEATURED_PUBLICATION_IDS,
    );
    assert.equal(model.public, true);
    assert.equal(Object.hasOwn(model.featured[0], "title"), false);
    const component = await readFile(
      "src/components/home/HomeContent.astro",
      "utf8",
    );
    assert.match(component, /publication\.data\?\.title/);
    assert.doesNotMatch(component, /doi-10-|Systems|JMIR/);
    assert.doesNotMatch(component, /Download CV|CV unavailable/);
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const currentModel = createHomeModel({
      themes: aggregate.themes,
      publications: aggregate.publications,
      courses: aggregate.courses,
      career: aggregate.career,
      service: aggregate.service,
      profiles: aggregate.profile_links,
    });
    assert.equal(aggregate.themes.length, 3);
    assert.equal(aggregate.publications.length, 27);
    assert.equal(currentModel.public, false);
    assert.deepEqual(currentModel.themes, []);
    assert.deepEqual(currentModel.featured, []);
    assert.deepEqual(currentModel.courses, []);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
