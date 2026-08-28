import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseReleaseEnvironment } from "../src/lib/release/environment.mjs";
import { artifactEntries } from "./lib/release-manifest.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const environment = parseReleaseEnvironment(process.env);
const policy = JSON.parse(
  await readFile(path.join(root, "config/release-policy.json"), "utf8"),
);
const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);
const lock = await readFile(path.join(root, "package-lock.json"));
const artifacts = await artifactEntries(
  path.join(root, "dist"),
  policy.headers.cache,
);
const manifest = {
  schemaVersion: "1.0.0",
  artifactClass: "static-noindex-candidate",
  build: {
    mode: environment.mode,
    origin: environment.origin,
    sourceDateEpoch: environment.sourceDateEpoch,
    gitCommitSha: environment.gitCommitSha,
    promotable: environment.promotable,
    indexable: environment.indexable,
  },
  toolchain: {
    node: packageJson.engines.node,
    npm: packageJson.engines.npm,
    lockfileSha256: createHash("sha256").update(lock).digest("hex"),
  },
  policy: {
    schemaVersion: policy.schemaVersion,
    canonicalPathPolicy: policy.canonicalPathPolicy,
    hostSelection: policy.status,
  },
  artifacts,
};
const output = path.join(
  root,
  ".build/release-manifests/release-manifest.json",
);
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  `Generated deterministic ${environment.mode} release manifest with ${artifacts.length} artifact entries.`,
);
