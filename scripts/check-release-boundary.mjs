import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
for (const forbidden of [
  "vercel.json",
  "netlify.toml",
  "wrangler.toml",
  "firebase.json",
  ".vercel",
  ".netlify",
  ".cloudflare",
]) {
  try {
    await access(path.join(root, forbidden));
    throw new Error(
      `Forbidden deploy-capable provider configuration present: ${forbidden}`,
    );
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
const workflowDirectory = path.join(root, ".github/workflows");
const workflowFiles = await readdir(workflowDirectory);
if (workflowFiles.length !== 1 || workflowFiles[0] !== "deploy.yml")
  throw new Error("Only the reviewed GitHub Pages workflow is authorized.");
const workflow = await readFile(
  path.join(workflowDirectory, "deploy.yml"),
  "utf8",
);
for (const required of [
  "actions/checkout@v7",
  "withastro/action@v6",
  "actions/deploy-pages@v5",
  "pages: write",
  "id-token: write",
  "SITE_BUILD_MODE: production",
])
  if (!workflow.includes(required))
    throw new Error(`GitHub Pages workflow is missing: ${required}`);
if (/pull_request_target|self-hosted|secrets\.|write-all/i.test(workflow))
  throw new Error("GitHub Pages workflow contains an unsafe trigger or grant.");
const packageJson = await readFile(path.join(root, "package.json"), "utf8");
if (/(?:vercel|netlify|wrangler|firebase|deploy)/i.test(packageJson))
  throw new Error("Deploy-capable package or script found in package.json.");
const output = await readdir(path.join(root, ".build/release-adapters"));
if (!output.includes("vercel-static.json"))
  throw new Error("Expected ignored local adapter translation is missing.");
console.log(
  "Release boundary passed: only the reviewed GitHub Pages workflow is enabled.",
);
