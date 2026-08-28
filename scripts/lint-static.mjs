import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const forbidden = [
  [
    /from\s+["'](?:react|preact|vue|svelte|tailwindcss)["']/,
    "client framework or Tailwind import",
  ],
  [/<form\b/i, "form element"],
  [/PUBLIC_[A-Z0-9_]+/, "public environment value"],
  [
    /https?:\/\/(?!fbalwy\.sa|localhost|(?:local|ci|preview)\.invalid|www\.taibahu\.edu\.sa|scholar\.google\.com|orcid\.org|doi\.org|www\.scopus\.com|www\.webofscience\.com|www\.researchgate\.net|www\.scimagojr\.com|research\.manchester\.ac\.uk)/i,
    "unapproved external origin",
  ],
  [/content\/pages\//, "governed authoring source import"],
  [
    /content\/data\/publications\.json/,
    "source-stage publication catalogue import",
  ],
];

async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) =>
      entry.isDirectory()
        ? filesAt(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    ),
  );
  return nested.flat();
}

const files = await filesAt(path.join(root, "src"));
for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const [pattern, label] of forbidden)
    if (
      pattern.test(content) &&
      !(
        label === "governed source import" &&
        [
          "src/pages/index.astro",
          "src/pages/research.astro",
          "src/pages/teaching.astro",
          "src/pages/leadership-service.astro",
        ].includes(path.relative(root, file)) &&
        content.includes(
          'import siteContent from "../../content/data/site-content.json"',
        )
      )
    )
      throw new Error(`${label} in ${path.relative(root, file)}`);
}
console.log(`Static boundary lint passed for ${files.length} source files.`);
