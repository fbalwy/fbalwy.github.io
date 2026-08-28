import assert from "node:assert/strict";
import test from "node:test";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { artifactEntries } from "../../scripts/lib/release-manifest.mjs";
import { simulateImmutableReleaseLifecycle } from "../../scripts/lib/release-simulation.mjs";

test("adapter translation retains strict headers, cache classes, and no trailing slash", async () => {
  execFileSync(process.execPath, ["scripts/generate-release-adapter.mjs"], {
    encoding: "utf8",
  });
  const adapter = JSON.parse(
    await readFile(".build/release-adapters/vercel-static.json", "utf8"),
  );
  assert.equal(adapter.deployable, false);
  assert.equal(adapter.trailingSlash, false);
  assert.equal(adapter.redirects.length, 0);
  const headers = adapter.headers[0].headers;
  assert.match(
    headers.find((header) => header.key === "Content-Security-Policy").value,
    /default-src 'self'/,
  );
  assert.doesNotMatch(
    headers.find((header) => header.key === "Content-Security-Policy").value,
    /unsafe-inline|unsafe-eval|\*/,
  );
});

test("artifact manifest entries are deterministic and local rollback simulation detects tampering", async () => {
  const first = await artifactEntries("dist", {
    html: "no-cache",
    fingerprintedAsset: "immutable",
    stableDownload: "revalidate",
  });
  const second = await artifactEntries("dist", {
    html: "no-cache",
    fingerprintedAsset: "immutable",
    stableDownload: "revalidate",
  });
  assert.deepEqual(first, second);
  const simulation = await simulateImmutableReleaseLifecycle();
  assert.equal(simulation.rollbackUsedExistingRelease, true);
  assert.equal(simulation.firstReleaseUnchanged, true);
  assert.equal(simulation.tamperDetected, true);
  assert.equal(simulation.missingDetected, true);
  assert.deepEqual(simulation.withdrawalPurgeList, ["withdrawn-document.txt"]);
});
