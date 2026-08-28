import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("skip target and native disclosure remain valid with and without enhancement", async () => {
  const layout = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  const navigation = await readFile("src/scripts/mobile-nav.ts", "utf8");

  assert.match(layout, /href="#main-content"/);
  assert.match(layout, /<main id="main-content" tabindex="-1">/);
  assert.match(
    layout,
    /<details class="mobile-nav">[\s\S]*<summary>Menu<\/summary>/,
  );
  assert.doesNotMatch(layout, /<summary[^>]*aria-(?:expanded|label)/);
  assert.match(navigation, /reflectDisclosureState\(\);/);
  assert.match(navigation, /disclosure\.open \? "Close menu" : "Open menu"/);
  assert.match(navigation, /trigger\.focus\(\)/);
});

test("unavailable text does not attach prohibited ARIA to generic spans", async () => {
  const layout = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  assert.doesNotMatch(
    layout,
    /<span[^>]+aria-label="(?:CV|Email)[^"]*unavailable"/,
  );
  assert.doesNotMatch(layout, /CV unavailable/);
});

test("publication enhancement exposes labels, status, recovery, and keyboard focus contracts", async () => {
  const component = await readFile(
    "src/components/catalogue/PublicationsContent.astro",
    "utf8",
  );
  const client = await readFile("src/client/publication-catalogue.ts", "utf8");

  assert.match(component, /<label for="publication-query">/);
  assert.match(component, /aria-describedby="publication-query-hint"/);
  assert.match(component, /<label for="publication-year">/);
  assert.match(component, /<label for="publication-type">/);
  assert.match(component, /role="status" aria-live="polite"/);
  assert.match(component, /id="publication-catalogue-heading" tabindex="-1"/);
  assert.match(client, /summary\.setAttribute\("aria-live", "polite"\)/);
  assert.match(client, /catalogueHeading\.focus\(\)/);
  assert.match(client, /heading\.focus\(\{ preventScroll: true \}\)/);
  assert.match(client, /button\.setAttribute\([\s\S]*"aria-label"/);
});
