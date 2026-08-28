import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const routeFiles = [
  "index.astro",
  "research.astro",
  "publications.astro",
  "teaching.astro",
  "leadership-service.astro",
  "about.astro",
  "contact.astro",
];

test("all seven routes consume one integrated decision and keep 404 distinct", async () => {
  assert.deepEqual(
    (await readdir("src/pages"))
      .filter((file) => file.endsWith(".astro"))
      .sort(),
    ["404.astro", ...routeFiles].sort(),
  );
  for (const file of routeFiles) {
    const source = await readFile(path.join("src/pages", file), "utf8");
    assert.match(source, /currentSite/);
  }
  const notFound = await readFile("src/pages/404.astro", "utf8");
  assert.match(notFound, /<PreviewLayout>/);
  assert.doesNotMatch(notFound, /ROUTES\[0\]/);
});

test("actual and promoted site compositions agree across every guarded package", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld008-site-"));
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
        "--rewriteRelativeImportExtensions",
        "--outDir",
        output,
        "src/lib/integration/site.ts",
        "tests/fixtures/integrated-site.fixture.ts",
      ],
      { encoding: "utf8" },
    );
    const { createIntegratedSiteModel, PROFILE_CONTRACTS } = await import(
      pathToFileURL(path.join(output, "src/lib/integration/site.js")).href
    );
    const { promotedIntegratedFixture } = await import(
      pathToFileURL(
        path.join(output, "tests/fixtures/integrated-site.fixture.js"),
      ).href
    );
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const contact = {
      key: "contact.institutional_email",
      routes: ["/contact", "shared-footer"],
      approved: true,
      address: "fbalwy@taibahu.edu.sa",
    };
    const current = createIntegratedSiteModel({
      content: aggregate,
      contact,
    });
    assert.equal(current.public, false);
    assert.equal(current.routes.contact.public, true);
    assert.ok(current.actions.contactHref.startsWith("mailto:"));
    assert.deepEqual(current.actions.profiles, []);
    for (const [route, model] of Object.entries(current.routes))
      if (route !== "contact") assert.equal(model.public, false);

    const promotedContent = promotedIntegratedFixture(aggregate);
    const promoted = createIntegratedSiteModel({
      content: promotedContent,
      contact,
    });
    assert.equal(promoted.public, true);
    assert.ok(Object.values(promoted.routes).every((route) => route.public));
    assert.deepEqual(
      promoted.actions.profiles.map((profile) => profile.href),
      PROFILE_CONTRACTS.map((profile) => profile.href),
    );
    assert.deepEqual(
      promoted.routes.home.themes.map((record) => record.record_id),
      promoted.routes.research.themes.map((theme) => theme.id),
    );
    assert.deepEqual(
      promoted.routes.home.featured.map((record) => record.record_id),
      promoted.routes.publications.featured.map((record) => record.id),
    );
    assert.deepEqual(
      promoted.routes.home.courses.map((record) => record.record_id),
      promoted.routes.teaching.courses.map((record) => record.id),
    );
    const publicationFragments = new Set(
      promoted.routes.publications.records.map(
        (record) => `/publications#${record.fragment}`,
      ),
    );
    for (const related of promoted.routes.research.themes.flatMap(
      (theme) => theme.publications,
    ))
      assert.ok(publicationFragments.has(related.href));

    const partial = structuredClone(promotedContent);
    partial.courses[0].governance.approvals.qa = false;
    const denied = createIntegratedSiteModel({
      content: partial,
      contact,
    });
    assert.equal(denied.public, false);
    assert.ok(
      Object.entries(denied.routes).every(
        ([route, model]) => route === "contact" || !model.public,
      ),
    );
    assert.deepEqual(denied.actions.profiles, []);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});

test("cross-route source links stay inside the closed registry and canonical fragments", async () => {
  const files = [
    "src/layouts/PreviewLayout.astro",
    "src/components/home/HomeContent.astro",
    "src/components/research/ResearchContent.astro",
    "src/components/teaching/TeachingContent.astro",
    "src/components/service/ServiceContent.astro",
    "src/components/about/AboutContent.astro",
    "src/components/catalogue/PublicationsContent.astro",
    "src/components/states/NotFoundState.astro",
  ];
  const source = (
    await Promise.all(files.map((file) => readFile(file, "utf8")))
  ).join("\n");
  const allowed = new Set([
    "/",
    "/research",
    "/publications",
    "/teaching",
    "/leadership-service",
    "/about",
    "/contact",
  ]);
  for (const match of source.matchAll(/href=[{`"']([^`"'}$]+)[`"']/g)) {
    const href = match[1];
    if (!href.startsWith("/")) continue;
    assert.ok(allowed.has(href.split("#", 1)[0]), href);
  }
  assert.doesNotMatch(source, /\/projects?\b|\/error\b|\/cv\b(?!\/faisal)/);
});

test("shared shell has one action contract, complete navigation parity, and token-only route styles", async () => {
  const layout = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  assert.match(layout, /currentSite\.actions\.contactHref/);
  assert.match(layout, /currentSite\.actions\.profiles/);
  assert.match(layout, /contactCurrent/);
  assert.equal((layout.match(/primaryRoutes\.map/g) ?? []).length, 3);
  const tokens = await readFile("src/styles/tokens.css", "utf8");
  const declared = new Set(
    [...tokens.matchAll(/--([a-z0-9-]+):/g)].map((match) => match[1]),
  );
  for (const file of [
    "src/styles/global.css",
    "src/styles/publications.css",
    "src/styles/research.css",
    "src/styles/teaching.css",
    "src/styles/service.css",
  ]) {
    const css = await readFile(file, "utf8");
    for (const match of css.matchAll(/var\(--([a-z0-9-]+)\)/g))
      assert.ok(declared.has(match[1]), `${file}: --${match[1]}`);
  }
});

test("responsive, accessibility, and resource fallbacks remain application-wide", async () => {
  const sourceFiles = [
    ...(await readdir("src/pages")).map((file) => `src/pages/${file}`),
    "src/layouts/PreviewLayout.astro",
    "src/client/publication-catalogue.ts",
    "src/scripts/mobile-nav.ts",
  ];
  const source = (
    await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))
  ).join("\n");
  assert.doesNotMatch(
    source,
    /<form\b|localStorage|sessionStorage|document\.cookie|fetch\(|XMLHttpRequest|sendBeacon|serviceWorker/i,
  );
  assert.doesNotMatch(source, /<img\b|<picture\b|<video\b|<iframe\b/i);
  const global = await readFile("src/styles/global.css", "utf8");
  assert.match(global, /@media \(max-width: 48rem\)/);
  assert.match(global, /@media \(max-width: 30rem\)/);
  assert.match(global, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(global, /@media \(forced-colors: active\)/);
  assert.match(global, /@media print/);
  assert.match(global, /overflow-wrap|flex-wrap/);
  const layout = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  assert.match(layout, /Skip to main content/);
  assert.match(layout, /<main id="main-content" tabindex="-1">/);
  assert.match(layout, /<details class="mobile-nav">/);
  assert.match(layout, /noindex, nofollow, noarchive, nosnippet/);
});
