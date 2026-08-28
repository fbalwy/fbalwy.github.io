import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { readFile } from "node:fs/promises";
import {
  SOCIAL_IMAGE_ALT,
  socialMetadataFor,
} from "../../src/lib/discovery/social.mjs";
import {
  DISCOVERY_HTML_PATHS,
  metadataFor,
} from "../../src/lib/discovery/metadata.mjs";

test("social metadata preserves exact route copy and the closed origin policy", () => {
  for (const pathname of DISCOVERY_HTML_PATHS) {
    const social = socialMetadataFor("https://ci.invalid", pathname);
    const discovery = metadataFor(pathname);
    assert.equal(social.title, discovery.title);
    assert.equal(social.description, discovery.description);
    assert.equal(social.url, `https://ci.invalid${pathname}`);
    assert.equal(social.image, "https://ci.invalid/og.png");
    assert.equal(social.imageAlt, SOCIAL_IMAGE_ALT);
    assert.equal(social.imageWidth, 1200);
    assert.equal(social.imageHeight, 630);
    assert.equal(social.imageType, "image/png");
    assert.equal(social.openGraphType, "website");
    assert.equal(social.twitterCard, "summary_large_image");
  }
  assert.throws(() => socialMetadataFor("http://example.edu", "/"));
  assert.throws(() => socialMetadataFor("https://example.edu/private", "/"));
});

test("PreviewLayout composes social metadata with canonical and JSON-LD contracts", async () => {
  const source = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  for (const key of [
    "og:type",
    "og:site_name",
    "og:title",
    "og:description",
    "og:url",
    "og:image",
    "og:image:secure_url",
    "og:image:type",
    "og:image:width",
    "og:image:height",
    "og:image:alt",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
    "twitter:image:alt",
  ])
    assert.equal(
      [...source.matchAll(new RegExp(`[\"']${key}[\"']`, "g"))].length,
      1,
      key,
    );
  assert.match(source, /socialMetadataFor\(/);
  assert.match(source, /structuredDataForRoute\(/);
  assert.match(source, /<StructuredData document=\{structuredData\}/);
  assert.match(source, /<link rel="canonical" href=\{canonical\}/);
});

test("OG PNG is exact, private-metadata-free, reproducible, and source-governed", () => {
  const output = execFileSync(process.execPath, ["scripts/check-og-card.mjs"], {
    encoding: "utf8",
  });
  assert.match(
    output,
    /1200x630, 32565 bytes, SHA-256 213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6/,
  );
});
