import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSitemap } from "../src/lib/discovery/metadata.mjs";
import { parseReleaseEnvironment } from "../src/lib/release/environment.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const environment = parseReleaseEnvironment(process.env);
const dist = path.join(root, "dist");

await mkdir(dist, { recursive: true });
await writeFile(path.join(dist, "sitemap.xml"), createSitemap(environment));
console.log(`Generated deterministic ${environment.mode} sitemap.`);
