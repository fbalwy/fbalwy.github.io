import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

test("operational state contract is complete, recoverable, and fail-closed", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld009-states-"));
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
        "src/lib/states/contracts.ts",
      ],
      { encoding: "utf8" },
    );
    const states = await import(
      pathToFileURL(path.join(output, "contracts.js")).href
    );
    const expected = [
      "not-found",
      "application-error",
      "data-unavailable",
      "evidence-gap",
      "optional-empty",
      "publication-no-results",
      "publication-partial",
      "publication-unavailable",
      "publication-external",
      "publication-invalid-query",
      "publication-fragment-recovery",
      "offline-after-load",
      "email-unavailable",
      "email-client-unavailable",
      "cv-unavailable",
      "external-failure",
      "noscript",
    ];
    assert.deepEqual(Object.keys(states.OPERATIONAL_STATES), expected);
    for (const id of expected) {
      const state = states.stateFor(id);
      assert.equal(state.id, id);
      assert.ok(state.heading.length > 4);
      assert.ok(state.explanation.length > 10);
      assert.ok([200, 404, 500, 503].includes(state.status));
      if (state.recovery)
        assert.match(state.recovery.href, /^\/(?:$|[a-z-]+$)/);
      assert.doesNotMatch(
        `${state.heading} ${state.explanation}`,
        /\[(?:verify|source)|stack trace|retry loop/i,
      );
    }
    assert.equal(states.stateFor("optional-empty").blocking, false);
    assert.equal(states.stateFor("publication-partial").blocking, false);
    assert.equal(states.stateFor("evidence-gap").blocking, true);
    assert.equal(states.stateFor("application-error").status, 500);
    assert.equal(states.stateFor("not-found").status, 404);
    assert.equal(states.stateFor("cv-unavailable").recovery.href, "/");
    assert.equal(states.stateFor("email-unavailable").recovery.href, "/");
    assert.equal(
      states.stateFor("email-client-unavailable").recovery.href,
      "/contact",
    );
    const shell = await readFile("src/layouts/PreviewLayout.astro", "utf8");
    const operational = await readFile(
      "src/components/states/OperationalState.astro",
      "utf8",
    );
    const missing = await readFile(
      "src/components/states/NotFoundState.astro",
      "utf8",
    );
    const unavailable = await readFile(
      "src/components/states/UnavailableState.astro",
      "utf8",
    );
    assert.match(operational, /data-operational-state/);
    assert.match(operational, /state-recovery/);
    assert.match(missing, /stateFor\("not-found"\)/);
    assert.match(unavailable, /stateFor\("evidence-gap"\)/);
    assert.doesNotMatch(missing, /aria-current/);
    assert.match(shell, /noindex, nofollow, noarchive, nosnippet/);
    assert.match(shell, /<noscript>/);
    assert.match(shell, /native navigation and visible content/);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
