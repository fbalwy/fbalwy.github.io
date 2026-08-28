import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseReleaseEnvironment } from "../src/lib/release/environment.mjs";
import { robotsFor } from "../src/lib/discovery/metadata.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const environment = parseReleaseEnvironment(process.env);
const policy = JSON.parse(
  await readFile(path.join(root, "config/release-policy.json"), "utf8"),
);
const staging = path.join(root, ".build/public");
await mkdir(staging, { recursive: true });
const robots = robotsFor(environment);
const expectedRobots = environment.indexable
  ? policy.indexing.productionRobotsTemplate.replace(
      "{origin}",
      environment.origin,
    )
  : policy.indexing.robots;
if (robots !== expectedRobots)
  throw new Error("Discovery robots must match the approved release policy.");
await writeFile(path.join(staging, "robots.txt"), robots);
console.log(
  `Generated conservative ${environment.mode} robots.txt in ignored staging.`,
);
