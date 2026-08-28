import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  auditDependencies,
  auditGeneratedDirectory,
  auditSourceSurfaces,
  runNoAnalyticsAudit,
  validateAnalyticsPolicy,
} from "../../scripts/lib/no-analytics.mjs";

test("no-analytics decision audits current source, dependencies, release controls, and output", async () => {
  const result = await runNoAnalyticsAudit(process.cwd(), [
    ".build/public",
    ".build/release-adapters",
    ".build/release-manifests",
    "dist",
  ]);
  assert.ok(result.sourceFiles > 40);
  assert.ok(result.dependencies > 200);
  assert.ok(result.generated.some((entry) => entry.directory === "dist"));
  assert.ok(result.generated.every((entry) => entry.files > 0));
});

test("future exception policy fails closed unless every approval control remains exact", async () => {
  const policy = JSON.parse(
    await readFile("config/analytics-policy.json", "utf8"),
  );
  assert.equal(validateAnalyticsPolicy(policy), true);

  const enabled = structuredClone(policy);
  enabled.collection.telemetry = true;
  assert.throws(
    () => validateAnalyticsPolicy(enabled),
    /telemetry must be false/,
  );

  const incomplete = structuredClone(policy);
  incomplete.futureException.requiredControls.pop();
  assert.throws(
    () => validateAnalyticsPolicy(incomplete),
    /exact governed set/,
  );

  const silentlyAuthorized = structuredClone(policy);
  silentlyAuthorized.futureException.implementationAuthorized = true;
  assert.throws(
    () => validateAnalyticsPolicy(silentlyAuthorized),
    /prohibited and owner-controlled/,
  );
});

test("audits reject telemetry dependencies, browser collection, remote resources, and tracking queries", async () => {
  const temporary = await mkdtemp(path.join(os.tmpdir(), "int005-negative-"));
  try {
    await mkdir(path.join(temporary, "src"), { recursive: true });
    await mkdir(path.join(temporary, "scripts"), { recursive: true });
    await mkdir(path.join(temporary, "public"), { recursive: true });
    await mkdir(path.join(temporary, "config"), { recursive: true });
    await writeFile(
      path.join(temporary, "astro.config.mjs"),
      "export default {};\n",
    );
    await writeFile(
      path.join(temporary, "package.json"),
      JSON.stringify({ dependencies: {}, devDependencies: {} }),
    );
    await writeFile(
      path.join(temporary, "package-lock.json"),
      JSON.stringify({ packages: { "": {} } }),
    );
    await writeFile(
      path.join(temporary, "config/release-policy.json"),
      JSON.stringify({
        headers: {
          security: {
            "Content-Security-Policy":
              "connect-src 'none'; worker-src 'none'; form-action 'none'",
            "Permissions-Policy": "browsing-topics=()",
          },
        },
      }),
    );
    await writeFile(
      path.join(temporary, "config/analytics-policy.json"),
      await readFile("config/analytics-policy.json", "utf8"),
    );
    await writeFile(
      path.join(temporary, "src/client.js"),
      "navigator.sendBeacon('/collect', 'x');\n",
    );
    await assert.rejects(() => auditSourceSurfaces(temporary), /sendBeacon/);

    await writeFile(path.join(temporary, "src/client.js"), "export {};\n");
    const packageJson = JSON.parse(
      await readFile(path.join(temporary, "package.json"), "utf8"),
    );
    packageJson.devDependencies["@sentry/browser"] = "1.0.0";
    await writeFile(
      path.join(temporary, "package.json"),
      JSON.stringify(packageJson),
    );
    await assert.rejects(() => auditDependencies(temporary), /dependency/);

    const output = path.join(temporary, "output");
    await mkdir(output);
    await writeFile(
      path.join(output, "index.html"),
      '<img src="https://tracker.invalid/pixel.gif" alt="">',
    );
    await assert.rejects(
      () => auditGeneratedDirectory(output),
      /Third-party runtime resource/,
    );
    await writeFile(
      path.join(output, "index.html"),
      '<a href="/?utm_source=hidden">Home</a>',
    );
    await assert.rejects(
      () => auditGeneratedDirectory(output),
      /Tracking query mutation/,
    );
  } finally {
    await rm(temporary, { recursive: true });
  }
});
