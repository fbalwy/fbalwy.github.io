import path from "node:path";
import { fileURLToPath } from "node:url";
import { runNoAnalyticsAudit } from "./lib/no-analytics.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const result = await runNoAnalyticsAudit(root, [
  ".build/public",
  ".build/release-adapters",
  ".build/release-manifests",
  "dist",
]);
const generatedFiles = result.generated.reduce(
  (total, directory) => total + directory.files,
  0,
);

console.log(
  `No-analytics audit passed: ${result.sourceFiles} source/build/release files, ${result.dependencies} dependency identities, and ${generatedFiles} generated/public resources; decision disabled and future exception controls complete.`,
);
