import { copyFile, lstat, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { QA007_PROMOTION } from "../src/lib/release/promotion.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public");
const staging = path.join(root, ".build/public");
const forbiddenNames = /(^\.|~$|\.bak$|\.map$|\.(zip|tar|gz|tgz|7z|rar)$)/i;

async function inspect(directory) {
  let entries = [];
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return;
  }
  for (const entry of entries) {
    const candidate = path.join(directory, entry.name);
    if (forbiddenNames.test(entry.name))
      throw new Error(
        `Forbidden public-source name: ${path.relative(root, candidate)}`,
      );
    const stat = await lstat(candidate);
    if (stat.isSymbolicLink())
      throw new Error(`Symlink rejected: ${path.relative(root, candidate)}`);
    if (stat.isDirectory()) await inspect(candidate);
  }
}

await inspect(source);
await rm(staging, { recursive: true, force: true });
await mkdir(staging, { recursive: true });
await copyFile(path.join(source, "og.png"), path.join(staging, "og.png"));
const staged = ["og.png"];
if (
  staged.some(
    (file) =>
      !QA007_PROMOTION.release_controls.allowed_staged_files.includes(file),
  )
)
  throw new Error("QA-007 staging escaped its closed release allowlist.");
console.log(
  "Public staging contains the approved OG card only; local CV materials and held identity assets remain excluded.",
);
