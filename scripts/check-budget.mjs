import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { brotliCompressSync } from "node:zlib";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
async function allFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? allFiles(path.join(directory, entry.name))
          : [path.join(directory, entry.name)],
      ),
    )
  ).flat();
}
const files = await allFiles(dist);
const data = await Promise.all(
  files.map(async (file) => [file, await readFile(file)]),
);
const compressed = (predicate) =>
  data
    .filter(([file]) => predicate(file))
    .reduce(
      (total, [, content]) => total + brotliCompressSync(content).byteLength,
      0,
    );
const htmlLimit = 100 * 1024;
for (const [file, content] of data.filter(([file]) => file.endsWith(".html")))
  if (brotliCompressSync(content).byteLength > htmlLimit)
    throw new Error(`HTML budget exceeded: ${path.relative(root, file)}`);
const css = compressed((file) => file.endsWith(".css"));
const js = compressed((file) => file.endsWith(".js"));
if (css > 35 * 1024) throw new Error(`CSS budget exceeded: ${css}`);
if (js > 15 * 1024) throw new Error(`JavaScript budget exceeded: ${js}`);
const imageAssets = data
  .filter(([file]) => /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(file))
  .map(([file]) => path.relative(dist, file));
if (
  imageAssets.length !== 1 ||
  imageAssets[0] !== "og.png" ||
  data
    .filter(([file]) => file.endsWith(".html"))
    .some(([, content]) =>
      /<(?:img|picture|source)\b/i.test(content.toString()),
    )
)
  throw new Error(
    "Only the metadata-only og.png asset is permitted; pages remain zero-image.",
  );
console.log(
  `Budget baseline passed: ${data.length} files; CSS ${css}B Brotli; JS ${js}B Brotli.`,
);
