import assert from "node:assert/strict";
import test from "node:test";
import {
  DISCOVERY_HTML_PATHS,
  DISCOVERY_METADATA,
  canonicalFor,
  createSitemap,
  metadataFor,
  robotsFor,
} from "../../src/lib/discovery/metadata.mjs";
import { parseReleaseEnvironment } from "../../src/lib/release/environment.mjs";

const publicHtmlPaths = [
  "/",
  "/research",
  "/publications",
  "/teaching",
  "/leadership-service",
  "/about",
  "/contact",
  "/404.html",
];

test("closed discovery metadata is unique, English, and contains no governed record claim", () => {
  assert.deepEqual(DISCOVERY_HTML_PATHS, publicHtmlPaths);
  const titles = new Set();
  const descriptions = new Set();
  for (const pathname of publicHtmlPaths) {
    const metadata = metadataFor(pathname);
    assert.match(metadata.title, /^[\x20-\x7E]+$/);
    assert.match(metadata.description, /^[\x20-\x7E]+$/);
    assert.ok(titles.add(metadata.title), `duplicate title: ${metadata.title}`);
    assert.ok(
      descriptions.add(metadata.description),
      `duplicate description: ${metadata.description}`,
    );
    assert.doesNotMatch(
      `${metadata.title} ${metadata.description}`,
      /record[_ -]?id|stable[_ -]?id|doi:|eligible|publications\.json|site-content|cv\/faisal|\.woff2|\.svg|\.png/i,
    );
  }
  assert.deepEqual(
    metadataFor("/not-a-route"),
    DISCOVERY_METADATA["/404.html"],
  );
});

test("canonicals are HTTPS, root-relative, and normalize only frozen paths", () => {
  assert.equal(
    canonicalFor("https://ci.invalid", "/about"),
    "https://ci.invalid/about",
  );
  assert.equal(
    canonicalFor("https://local.invalid", "/"),
    "https://local.invalid/",
  );
  for (const invalid of ["/about/", "/about?q=private", "/about#fragment"])
    assert.throws(() => canonicalFor("https://ci.invalid", invalid));
  assert.throws(() => canonicalFor("http://ci.invalid", "/about"));
  assert.throws(() => canonicalFor("https://ci.invalid/preview", "/about"));
});

test("robots and sitemap stay closed outside production and open only for the authorized Pages origin", () => {
  for (const environment of [
    parseReleaseEnvironment({ SITE_BUILD_MODE: "local" }),
    parseReleaseEnvironment({ SITE_BUILD_MODE: "ci" }),
    parseReleaseEnvironment({
      SITE_BUILD_MODE: "preview",
      SITE_ORIGIN: "https://preview.example.edu",
    }),
  ]) {
    assert.equal(robotsFor(environment), "User-agent: *\nDisallow: /\n");
    assert.equal(
      createSitemap(environment),
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n',
    );
  }
  const production = parseReleaseEnvironment({
    SITE_BUILD_MODE: "production",
    SITE_ORIGIN: "https://fbalwy.github.io",
  });
  assert.equal(
    robotsFor(production),
    "User-agent: *\nAllow: /\nSitemap: https://fbalwy.github.io/sitemap.xml\n",
  );
  const sitemap = createSitemap(production);
  assert.match(sitemap, /<loc>https:\/\/fbalwy\.github\.io\/<\/loc>/);
  assert.match(
    sitemap,
    /<loc>https:\/\/fbalwy\.github\.io\/publications<\/loc>/,
  );
  assert.doesNotMatch(sitemap, /404\.html/);
});
