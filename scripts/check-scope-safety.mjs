import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expected = new Map([
  [
    "AUTONOMOUS_EXECUTION_POLICY.md",
    "71652d6170cec5e7befe0574c15d5a14ad8245a6a2b424a6c13171ed9373f956",
  ],
  [
    "docs/ARCHITECTURE_DECISION.md",
    "9258cdfb891f30e46982698b341fde01891a49ce1da28757c2d9e68eaa696285",
  ],
  [
    "content/schemas/README.md",
    "5ecefff8c0148e0711199141ea327fa11128feffada79a34195d534722de4a69",
  ],
  [
    "content/schemas/validate.mjs",
    "db2ebfb70ae86522550d5d5cafe4c25416429c88ecf1f7c3b95a11e86cd92fb1",
  ],
  [
    "docs/DESIGN_TOKENS.md",
    "bc8ffa8a9b171f176657827be96fb172ed82c679ba4a0970548a9a5b0955692c",
  ],
  [
    "content/brand/tokens.json",
    "b19a05775236ea4d649612e425a9f4b9b06faf2f1d3289c589774f955914f0ab",
  ],
  [
    "docs/brand/WEB_BRAND_SPEC.md",
    "e6d2fd7ec88397bbbf5f585f881aead4ddd830512ba37366bdd6c119e893ea86",
  ],
  [
    "docs/brand/WEB_ASSET_MANIFEST.md",
    "50019bd709d4e47fd888e8dcb50228e6c797bc01f0e2f3ef1444c964133405f7",
  ],
  [
    "docs/INFORMATION_ARCHITECTURE.md",
    "8e32daa99ac46acc7ec12720784b9624169d542461fcd4f03ed540bfff8c57ae",
  ],
  [
    "docs/PROJECT_BRIEF.md",
    "a80aff9d1786e03be187ce967963193fa8707eaefcabf2b00bcc3c40c7657854",
  ],
  [
    "design-concepts/wireframes/index.html",
    "9463a10c6c52b401ced586cc98b81906a978fab1306a1ed58341a9e146c27f68",
  ],
]);
const prettierIgnore = await readFile(
  path.join(root, ".prettierignore"),
  "utf8",
);
for (const required of [
  "content/",
  "docs/",
  "design-concepts/wireframes/",
  "*.md",
  "ACADEMIC_WEBSITE_*.html",
  "AUTONOMOUS_EXECUTION_POLICY.md",
]) {
  if (!prettierIgnore.includes(required))
    throw new Error(`Prettier protection missing: ${required}`);
}
for (const [relative, hash] of expected) {
  const content = await readFile(path.join(root, relative));
  const actual = createHash("sha256").update(content).digest("hex");
  if (actual !== hash)
    throw new Error(`Governed input changed outside TEC-002: ${relative}`);
}
console.log(
  `Scope safety passed: ${expected.size} governed input fingerprints and formatter protections verified.`,
);
