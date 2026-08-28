import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

test("Research model is exact, promotion-ready, and never emits its fixture", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld004-research-"));
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
        "src/lib/research/model.ts",
        "src/lib/security/public.ts",
        "tests/fixtures/research-populated.fixture.ts",
      ],
      { encoding: "utf8" },
    );
    const modelModule = await import(
      pathToFileURL(path.join(output, "src/lib/research/model.js")).href
    );
    const fixtureModule = await import(
      pathToFileURL(
        path.join(output, "tests/fixtures/research-populated.fixture.js"),
      ).href
    );
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const input = {
      themes: aggregate.themes,
      bindings: aggregate.theme_publication_relationships,
      publications: aggregate.publications,
      projects: aggregate.projects_and_systems,
    };
    const current = modelModule.createResearchModel(input);
    assert.equal(current.public, false);
    assert.deepEqual(current.themes, []);
    assert.equal(aggregate.projects_and_systems.length, 0);
    const promotedAggregate = fixtureModule.promotedResearchFixture(aggregate);
    const promoted = modelModule.createResearchModel({
      themes: promotedAggregate.themes,
      bindings: promotedAggregate.theme_publication_relationships,
      publications: promotedAggregate.publications,
      projects: promotedAggregate.projects_and_systems,
    });
    assert.equal(promoted.public, true);
    assert.deepEqual(promoted.modules, modelModule.RESEARCH_MODULE_ORDER);
    assert.deepEqual(
      promoted.themes.map((theme) => theme.id),
      modelModule.RESEARCH_THEME_IDS,
    );
    assert.deepEqual(
      promoted.themes.flatMap((theme) =>
        theme.publications.map((publication) => publication.id),
      ),
      modelModule.RESEARCH_BINDINGS.map(([, publicationId]) => publicationId),
    );
    assert.ok(
      promoted.themes.every((theme) =>
        theme.publications.every(
          (publication) =>
            publication.href === `/publications#publication-${publication.id}`,
        ),
      ),
    );
    assert.match(
      promoted.themes[0].summary,
      /consent, access control, encryption/,
    );
    const denied = (mutate) => {
      const clone = structuredClone(promotedAggregate);
      mutate(clone);
      return modelModule.createResearchModel({
        themes: clone.themes,
        bindings: clone.theme_publication_relationships,
        publications: clone.publications,
        projects: clone.projects_and_systems,
      });
    };
    assert.equal(denied((value) => value.themes.pop()).public, false);
    assert.equal(
      denied((value) => value.themes.push(structuredClone(value.themes[0])))
        .public,
      false,
    );
    assert.equal(
      denied((value) => value.theme_publication_relationships.reverse()).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.theme_publication_relationships[0].data.publication_id =
          "doi-invalid";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.publications.find(
          (record) => record.record_id === "doi-10-2196-27816",
        ).versioning.correction_state = "corrected";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.publications.find(
          (record) => record.record_id === "doi-10-2196-27816",
        ).data.external_actions[0].url = "http://unsafe.invalid";
      }).public,
      false,
    );
    assert.equal(
      denied((value) =>
        value.projects_and_systems.push({ record_id: "project" }),
      ).public,
      false,
    );
    const route = await readFile("src/pages/research.astro", "utf8");
    const component = await readFile(
      "src/components/research/ResearchContent.astro",
      "utf8",
    );
    assert.match(route, /currentSite\.routes\.research/);
    assert.match(component, /Related publications/);
    assert.match(component, /\/publications#publication-catalogue/);
    assert.doesNotMatch(component, /project-/i);
    assert.doesNotMatch(component, /doi-10-/);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
