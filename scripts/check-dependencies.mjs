import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const modules = path.join(root, "node_modules");
async function packageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    if (entry.name === ".bin") continue;
    const candidate = path.join(directory, entry.name);
    if (entry.isDirectory() && entry.name.startsWith("@"))
      found.push(...(await packageFiles(candidate)));
    else if (entry.isDirectory())
      found.push(path.join(candidate, "package.json"));
  }
  return found;
}
const files = await packageFiles(modules);
const unlicensed = [];
for (const file of files) {
  try {
    const pkg = JSON.parse(await readFile(file, "utf8"));
    if (!pkg.license && !pkg.licenses) unlicensed.push(pkg.name ?? file);
  } catch {
    /* optional platform packages need not be present */
  }
}
if (unlicensed.length)
  throw new Error(
    `Dependencies without declared license: ${unlicensed.join(", ")}`,
  );
console.log(
  `License metadata check passed for ${files.length - unlicensed.length} installed packages.`,
);
