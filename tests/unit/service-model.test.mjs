import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

test("Leadership and Service is exact, historical, and non-additive", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld007-service-"));
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
        "src/lib/service/model.ts",
        "src/lib/security/public.ts",
        "tests/fixtures/service-populated.fixture.ts",
      ],
      { encoding: "utf8" },
    );
    const service = await import(
      pathToFileURL(path.join(output, "src/lib/service/model.js")).href
    );
    const fixture = await import(
      pathToFileURL(
        path.join(output, "tests/fixtures/service-populated.fixture.js"),
      ).href
    );
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const current = service.createServiceModel({ service: aggregate.service });
    assert.equal(aggregate.service.length, 10);
    assert.equal(current.public, false);
    assert.deepEqual(current.leadership, []);
    const promotedAggregate = fixture.promotedServiceFixture(aggregate);
    const promoted = service.createServiceModel({
      service: promotedAggregate.service,
    });
    assert.equal(promoted.public, true);
    assert.deepEqual(promoted.modules, service.SERVICE_MODULE_ORDER);
    assert.deepEqual(
      [...promoted.leadership, ...promoted.reviews, ...promoted.community].map(
        (record) => record.id,
      ),
      service.SERVICE_IDS,
    );
    assert.deepEqual(
      [
        promoted.leadership.length,
        promoted.reviews.length,
        promoted.community.length,
      ],
      [3, 5, 2],
    );
    assert.match(promoted.leadership[0].wording, /In 2023/);
    assert.match(promoted.reviews[1].wording, /45 reviews/);
    assert.match(promoted.community[1].wording, /blockchain technology/);
    assert.equal(Object.hasOwn(promoted, "totalReviews"), false);
    const denied = (mutate) => {
      const clone = structuredClone(promotedAggregate);
      mutate(clone);
      return service.createServiceModel({ service: clone.service });
    };
    assert.equal(denied((value) => value.service.pop()).public, false);
    assert.equal(
      denied((value) => value.service.push(structuredClone(value.service[0])))
        .public,
      false,
    );
    assert.equal(denied((value) => value.service.reverse()).public, false);
    assert.equal(
      denied((value) => {
        value.service[0].data.status = "current";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[0].public_presentation.public_wording = "Altered wording";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[0].data.period.open_ended = true;
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[0].data.period.end = "2024";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[3].data.category = "membership";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[4].data.issuer_metric.aggregation_policy = "additive";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[0].data.outcome = "unsupported";
      }).public,
      false,
    );
    assert.equal(
      denied((value) => {
        value.service[0].governance.render_eligibility = "internal_only";
      }).public,
      false,
    );
    const route = await readFile("src/pages/leadership-service.astro", "utf8");
    const component = await readFile(
      "src/components/service/ServiceContent.astro",
      "utf8",
    );
    assert.match(route, /currentSite\.routes\.service/);
    assert.match(component, /non-additive/);
    assert.match(component, /\/contact/);
    assert.doesNotMatch(
      component,
      /totalReviews|reduce\(|certificate|service-deputy-ceo-2023/,
    );
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
