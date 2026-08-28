import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("route registry is closed at seven HTML routes", async () => {
  const registry = await readFile("src/lib/routes/registry.ts", "utf8");
  assert.match(registry, /id: "R1"[\s\S]*id: "R7"/);
  assert.equal((registry.match(/html: true/g) ?? []).length, 7);
  assert.doesNotMatch(registry, /\/cv\//);
});

test("public rendering requires the complete publish lifecycle", async () => {
  const guard = await readFile("src/lib/security/public.ts", "utf8");
  assert.match(guard, /verification_status === "verified"/);
  assert.match(guard, /public_disposition === "publish"/);
  assert.match(guard, /render_eligibility === "public"/);
});

test("publication query contract has only four allowed keys", async () => {
  const registry = await readFile("src/lib/routes/registry.ts", "utf8");
  assert.match(registry, /\["q", "year", "type", "theme"\]/);
});

test("token bindings retain CSS units and emit non-CSS numeric units safely", async () => {
  const tokens = await readFile("src/styles/tokens.css", "utf8");
  assert.match(tokens, /--layout-prose-max: 68ch;/);
  assert.match(tokens, /--font-weight-body: 400;/);
  assert.match(tokens, /--font-line-height-body: 1\.6;/);
  assert.match(tokens, /--contrast-navy-on-white: 17\.6844;/);
});

test("preview shell preserves frozen navigation, footer, and accessible mobile actions", async () => {
  const layout = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  const mobileScript = await readFile("src/scripts/mobile-nav.ts", "utf8");
  assert.match(
    layout,
    /const primaryRouteIds = \["R2", "R3", "R4", "R5", "R6"\]/,
  );
  assert.doesNotMatch(layout, /ROUTES\.filter\([^)]*html/);
  assert.match(layout, /aria-label="Actions"/);
  assert.match(layout, /Institutional affiliation: Taibah University/);
  assert.match(layout, /Taibah University website \(external\)/);
  assert.match(layout, /Personal academic website/);
  assert.match(layout, /© 2026 Faisal Albalwy/);
  assert.match(layout, /Site last updated 19 August 2026/);
  assert.match(layout, /Academic profiles unavailable/);
  assert.match(
    layout,
    /This site does not use third-party analytics, tracking, or contact forms\./,
  );
  assert.match(layout, /<main id="main-content" tabindex="-1">/);
  assert.match(layout, /<summary>Menu<\/summary>/);
  assert.doesNotMatch(layout, /aria-label="CV unavailable"/);
  assert.doesNotMatch(layout, /<summary[^>]*aria-expanded/);
  assert.match(mobileScript, /reflectDisclosureState\(\)/);
  assert.match(mobileScript, /aria-expanded/);
  assert.match(mobileScript, /event\.key !== "Escape"/);
  assert.match(mobileScript, /trigger\.focus\(\)/);
  const global = await readFile("src/styles/global.css", "utf8");
  for (const selector of [
    ".skip-link",
    ".nameplate a",
    ".affiliation a",
    ".contact-page a",
    ".site-footer a",
    ".mobile-nav nav a",
  ]) {
    const start = global.indexOf(selector);
    assert.notEqual(start, -1, `${selector} target rule exists`);
    assert.match(
      global.slice(start, start + 260),
      /min-block-size: var\(--component-target-default\);/,
      `${selector} uses the approved default target`,
    );
  }
});

test("Home binds its approved models behind the public one-page guard", async () => {
  const model = await readFile("src/lib/home/model.ts", "utf8");
  const page = await readFile("src/pages/index.astro", "utf8");
  const integration = await readFile("src/lib/integration/site.ts", "utf8");
  assert.match(model, /"identity",[\s\S]*"contact"/);
  assert.match(model, /doi-10-3390-systems14040385/);
  assert.match(model, /doi-10-2196-27816/);
  assert.match(model, /theme-machine-learning-for-cyber-threat-detection/);
  assert.match(model, /isPublicRenderable/);
  assert.match(page, /currentSite\.routes\.home/);
  assert.match(integration, /themes: input\.content\.themes/);
  assert.match(integration, /publications: input\.content\.publications/);
  assert.match(integration, /courses: input\.content\.courses/);
  assert.match(integration, /profiles: input\.content\.profile_links/);
  assert.match(page, /home\.public \? \(/);
  assert.match(page, /<AcademicOnePage \/>/);
});

test("one-page presentation uses source-specific journal performance and the revised service sections", async () => {
  const page = await readFile(
    "src/components/one-page/AcademicOnePage.astro",
    "utf8",
  );
  const metric = await readFile(
    "src/components/one-page/PublicationMetric.astro",
    "utf8",
  );
  const metrics = JSON.parse(
    await readFile("content/data/journal-metrics.json", "utf8"),
  );
  const sync = await readFile("scripts/sync-orcid-publications.mjs", "utf8");

  assert.match(page, /PublicationMetric/);
  assert.match(
    page,
    /hiddenPublicationTypes = new Set\(\["preprint", "doctoral-thesis"\]\)/,
  );
  assert.match(page, />Work experience</);
  assert.match(page, />University committee service</);
  assert.match(page, />Scholarly peer review</);
  assert.doesNotMatch(
    page,
    /PublicationQrLink|Academic Services|Technology leadership|Community engagement/,
  );
  assert.match(metric, /best quartile/);
  assert.match(metric, /publication-metric__source-line/);
  assert.doesNotMatch(
    metric,
    /publication-metric__sources|No verified rank|Not listed|Book chapter/,
  );
  assert.equal(metrics.schema_version, "2.0.0");
  assert.equal(metrics.journals.length, 21);
  assert.equal(
    metrics.journals.filter((entry) => entry.status === "verified_current")
      .length,
    18,
  );
  assert.equal(
    metrics.journals.filter((entry) => entry.status === "unverified").length,
    2,
  );
  const systems = metrics.journals.find((entry) => entry.venue === "Systems");
  assert.equal(systems.rankings[0].source, "JCR");
  assert.equal(systems.rankings[0].quartile, "Q1");
  assert.deepEqual(
    systems.rankings.map((ranking) => [ranking.source, ranking.quartile]),
    [
      ["JCR", "Q1"],
      ["CiteScore", "Q1"],
      ["SJR", "Q2"],
    ],
  );
  const aaiml = metrics.journals.find((entry) =>
    entry.venue.startsWith("Advances in Artificial Intelligence"),
  );
  assert.equal(aaiml.rankings[0].source, "CiteScore");
  assert.equal(aaiml.rankings[0].quartile, "Q3");
  assert.match(page, /one best verified quartile/);
  assert.match(sync, /peer-reviews/);
  assert.match(sync, /peer_reviews: peerReviews/);
});

test("Contact is mail-only", async () => {
  const contact = await readFile("src/pages/contact.astro", "utf8");
  const actions = await readFile("src/lib/content/public-actions.ts", "utf8");
  assert.match(contact, /Email Faisal Albalwy/);
  assert.doesNotMatch(contact, /<form\b/i);
  assert.match(actions, /safeInstitutionalMailto/);
  assert.match(actions, /isPublicRenderable/);
});
