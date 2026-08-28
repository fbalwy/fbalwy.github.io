import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const origin = "https://example.edu";
const publicPaths = [
  "/",
  "/research",
  "/publications",
  "/teaching",
  "/leadership-service",
  "/about",
];

async function compiled() {
  const output = await mkdtemp(path.join(os.tmpdir(), "int002-jsonld-"));
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
      "--rewriteRelativeImportExtensions",
      "--outDir",
      output,
      "src/lib/structured-data/model.ts",
      "src/lib/integration/site.ts",
      "tests/fixtures/integrated-site.fixture.ts",
    ],
    { encoding: "utf8" },
  );
  const discoveryOutput = path.join(output, "src/lib/discovery");
  await mkdir(discoveryOutput, { recursive: true });
  await copyFile(
    "src/lib/discovery/metadata.mjs",
    path.join(discoveryOutput, "metadata.mjs"),
  );
  return output;
}

function releaseDecision() {
  return {
    contact: {
      key: "contact.institutional_email",
      routes: ["/contact", "shared-footer"],
      approved: true,
      address: "fbalwy@taibahu.edu.sa",
    },
  };
}

test("current aggregate emits no structured data and promoted fixture emits exact bounded route entities", async () => {
  const output = await compiled();
  try {
    const { createIntegratedSiteModel } = await import(
      pathToFileURL(path.join(output, "src/lib/integration/site.js")).href
    );
    const { promotedIntegratedFixture } = await import(
      pathToFileURL(
        path.join(output, "tests/fixtures/integrated-site.fixture.js"),
      ).href
    );
    const {
      structuredDataForRoute,
      validateStructuredDocument,
      serializeStructuredDocument,
    } = await import(
      pathToFileURL(path.join(output, "src/lib/structured-data/model.js")).href
    );
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const decision = releaseDecision();
    const current = createIntegratedSiteModel({
      content: aggregate,
      contact: decision.contact,
    });
    for (const pathname of [...publicPaths, "/contact", "/404.html"])
      assert.equal(
        structuredDataForRoute({ site: current, origin, pathname }),
        undefined,
      );

    const promoted = createIntegratedSiteModel({
      content: promotedIntegratedFixture(aggregate),
      ...decision,
    });
    assert.equal(promoted.public, true);
    const documents = publicPaths.map((pathname) => {
      const document = structuredDataForRoute({
        site: promoted,
        origin,
        pathname,
      });
      assert.ok(
        document,
        `${pathname}: ${JSON.stringify({
          sitePublic: promoted.public,
          profiles: promoted.actions.profiles.length,
          publications: promoted.routes.publications.records.length,
          routes: Object.fromEntries(
            Object.entries(promoted.routes).map(([key, route]) => [
              key,
              route.public,
            ]),
          ),
        })}`,
      );
      assert.equal(validateStructuredDocument(document), true, pathname);
      assert.doesNotMatch(
        serializeStructuredDocument(document),
        /source_id|claim_id|eligible|internal_only|faisal-albalwy-cv|mailto:/i,
      );
      return document;
    });
    assert.equal(documents[0]["@graph"][0]["@type"], "Person");
    assert.equal(documents[0]["@graph"][1]["@type"], "ProfilePage");
    const publicationList = documents[2]["@graph"][0].mainEntity;
    assert.equal(publicationList.numberOfItems, 27);
    const articles = publicationList.itemListElement.map((item) => item.item);
    assert.equal(new Set(articles.map((item) => item["@id"])).size, 27);
    assert.ok(
      articles.every((item) =>
        item.author.some((author) => author["@id"] === `${origin}/#person`),
      ),
    );
    assert.ok(
      !articles.some(
        (item) => "datePublished" in item || "publicationDate" in item,
      ),
    );
    assert.equal(
      structuredDataForRoute({ site: promoted, origin, pathname: "/contact" }),
      undefined,
    );
    assert.equal(
      structuredDataForRoute({ site: promoted, origin, pathname: "/404.html" }),
      undefined,
    );

    const invalid = structuredClone(documents[0]);
    invalid["@graph"][0].email = "blocked@example.edu";
    assert.equal(validateStructuredDocument(invalid), false);
    assert.equal(
      structuredDataForRoute({
        site: { ...promoted, public: false },
        origin,
        pathname: "/",
      }),
      undefined,
    );
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
