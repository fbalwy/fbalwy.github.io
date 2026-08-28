import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseReleaseEnvironment } from "../src/lib/release/environment.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const environment = parseReleaseEnvironment(process.env);
const policy = JSON.parse(
  await readFile(path.join(root, "config/release-policy.json"), "utf8"),
);
const securityHeaders = Object.entries(policy.headers.security).map(
  ([key, value]) => ({ key, value }),
);
const adapter = {
  adapterFormat: "vercel-static-v1",
  generatedFor: environment.mode,
  deployable: false,
  outputDirectory: "dist",
  cleanUrls: true,
  trailingSlash: false,
  headers: [
    {
      source: "/(.*)",
      headers: [
        ...securityHeaders,
        { key: "X-Robots-Tag", value: policy.indexing.tec003Default },
        { key: "Cache-Control", value: policy.headers.cache.html },
      ],
    },
    {
      source: "/_astro/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: policy.headers.cache.fingerprintedAsset,
        },
      ],
    },
    {
      source: "/og.png",
      headers: [
        {
          key: "Cache-Control",
          value: policy.headers.cache.stableSocialImage,
        },
      ],
    },
  ],
  redirects: [],
  notes:
    "Generated in ignored .build only. It is a local conformance translation, not selected provider configuration or deployment authority.",
};
const output = path.join(root, ".build/release-adapters/vercel-static.json");
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(adapter, null, 2)}\n`);
console.log(
  `Generated non-deployable adapter translation for ${environment.mode}.`,
);
