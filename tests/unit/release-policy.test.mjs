import assert from "node:assert/strict";
import test from "node:test";
import { parseReleaseEnvironment } from "../../src/lib/release/environment.mjs";
import {
  cacheClass,
  canonicalRedirect,
  expectedStatus,
  isIndexableRoute,
} from "../../src/lib/release/policy.mjs";

test("environment parser is closed and fail-closed by mode", () => {
  assert.deepEqual(parseReleaseEnvironment({}), {
    mode: "local",
    origin: "https://local.invalid",
    sourceDateEpoch: "0",
    gitCommitSha: "uncommitted",
    indexable: false,
    promotable: false,
  });
  assert.equal(
    parseReleaseEnvironment({
      SITE_BUILD_MODE: "ci",
      SITE_ORIGIN: "https://ci.invalid",
      SOURCE_DATE_EPOCH: "10",
      GIT_COMMIT_SHA: "abcdef0",
    }).origin,
    "https://ci.invalid",
  );
  assert.throws(
    () => parseReleaseEnvironment({ PUBLIC_KEY: "no" }),
    /Undeclared/,
  );
  assert.throws(
    () =>
      parseReleaseEnvironment({
        SITE_BUILD_MODE: "preview",
        SITE_ORIGIN: "http://preview.example",
      }),
    /HTTPS/,
  );
  assert.deepEqual(
    parseReleaseEnvironment({
      SITE_BUILD_MODE: "production",
      SITE_ORIGIN: "https://fbalwy.github.io",
    }),
    {
      mode: "production",
      origin: "https://fbalwy.github.io",
      sourceDateEpoch: "0",
      gitCommitSha: "uncommitted",
      indexable: true,
      promotable: true,
    },
  );
  assert.throws(() =>
    parseReleaseEnvironment({
      SITE_BUILD_MODE: "production",
      SITE_ORIGIN: "https://example.org",
    }),
  );
});

test("canonical and cache policy cannot index alternates", () => {
  assert.equal(canonicalRedirect("/about/", "q=private"), "/about");
  assert.equal(canonicalRedirect("/about"), undefined);
  assert.equal(expectedStatus("/404.html"), 404);
  assert.equal(cacheClass("/_astro/app.css"), "fingerprintedAsset");
  assert.equal(cacheClass("/withdrawn-document.txt"), "html");
  assert.equal(isIndexableRoute({ pathname: "/research" }), false);
  assert.equal(
    isIndexableRoute({ pathname: "/research", mode: "production" }),
    true,
  );
  assert.equal(
    isIndexableRoute({ pathname: "/404.html", mode: "production" }),
    false,
  );
});
