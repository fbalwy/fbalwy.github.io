import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
async function manifest(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const lines = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const file = path.join(directory, entry.name);
    const name = path.join(prefix, entry.name);
    if (entry.isDirectory()) lines.push(...(await manifest(file, name)));
    else
      lines.push(
        `${name}\t${createHash("sha256")
          .update(await readFile(file))
          .digest("hex")}`,
      );
  }
  return lines;
}
function build() {
  execFileSync(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "build"],
    {
      cwd: root,
      stdio: "inherit",
      env: {
        ...process.env,
        SOURCE_DATE_EPOCH: "0",
        TZ: "UTC",
        SITE_BUILD_MODE: "ci",
        SITE_ORIGIN: "https://ci.invalid",
      },
    },
  );
}
build();
const first = (await manifest(dist)).join("\n");
build();
const second = (await manifest(dist)).join("\n");
if (first !== second) throw new Error("Clean-build artifact manifests differ.");
console.log(
  `Reproducibility passed: ${first.split("\n").filter(Boolean).length} artifact hashes match.`,
);
