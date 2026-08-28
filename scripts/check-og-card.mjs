import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_PATH,
  SOCIAL_IMAGE_TYPE,
  SOCIAL_IMAGE_WIDTH,
  socialMetadataFor,
} from "../src/lib/discovery/social.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "assets/social/og-card.html");
const provenancePath = path.join(root, "assets/social/og-card.provenance.json");
const outputPath = path.join(root, "public/og.png");
const [source, provenanceText, output] = await Promise.all([
  readFile(sourcePath, "utf8"),
  readFile(provenancePath, "utf8"),
  readFile(outputPath),
]);
const provenance = JSON.parse(provenanceText);
const digest = (value) => createHash("sha256").update(value).digest("hex");

if (digest(source) !== provenance.sourceSha256)
  throw new Error("OG source hash differs from recorded provenance.");
if (
  digest(output) !== provenance.outputSha256 ||
  output.byteLength !== provenance.outputBytes
)
  throw new Error("OG output hash or byte count differs from provenance.");
if (output.byteLength > provenance.sizeBudgetBytes)
  throw new Error("OG output exceeds its 150 KiB size budget.");

const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
if (!output.subarray(0, 8).equals(signature))
  throw new Error("OG output is not a PNG.");
if (
  output.readUInt32BE(16) !== SOCIAL_IMAGE_WIDTH ||
  output.readUInt32BE(20) !== SOCIAL_IMAGE_HEIGHT ||
  output[24] !== 8 ||
  output[25] !== 2
)
  throw new Error("OG PNG must be 1200x630, 8-bit RGB.");
const chunks = [];
let offset = 8;
while (offset < output.length) {
  const length = output.readUInt32BE(offset);
  const type = output.toString("ascii", offset + 4, offset + 8);
  chunks.push(type);
  offset += length + 12;
}
if (
  offset !== output.length ||
  chunks[0] !== "IHDR" ||
  chunks.at(-1) !== "IEND" ||
  chunks.some((chunk) => !["IHDR", "IDAT", "IEND"].includes(chunk))
)
  throw new Error("OG PNG contains metadata or an unexpected PNG chunk.");

const exactCopy = [
  "Personal academic website",
  "Academic profile",
  "Faisal Albalwy",
  "Institutional affiliation: Taibah University",
];
for (const text of exactCopy)
  if (!source.includes(text)) throw new Error(`OG copy missing: ${text}`);
if (
  /<(?:img|picture|source|svg|canvas|video|audio|iframe|object|embed)\b|@font-face|\burl\s*\(|https?:|mailto:|data:|Alexandria|Tosh|logo|portrait|publication|citation|metric|official website/i.test(
    source,
  )
)
  throw new Error("OG source contains a blocked asset, font, or claim.");
const allowedColors = new Set([
  "#111144",
  "#4056e3",
  "#40e0d0",
  "#ffffff",
  "#ffd1dc",
]);
for (const color of source.match(/#[0-9a-f]{6}/gi) ?? [])
  if (!allowedColors.has(color.toLowerCase()))
    throw new Error(`Unapproved OG color: ${color}`);
if (
  !/font-family:\s*ui-sans-serif,\s*system-ui,\s*-apple-system,\s*BlinkMacSystemFont,\s*"Segoe UI",\s*sans-serif;/.test(
    source,
  )
)
  throw new Error("OG source does not use the approved system-font stack.");

function luminance(hex) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4),
    );
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}
function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
for (const [foreground, minimum] of [
  ["#ffffff", 4.5],
  ["#40e0d0", 4.5],
  ["#ffd1dc", 4.5],
  ["#4056e3", 3],
])
  if (contrast(foreground, "#111144") < minimum)
    throw new Error(`OG contrast failure for ${foreground}.`);

if (
  SOCIAL_IMAGE_PATH !== "/og.png" ||
  SOCIAL_IMAGE_TYPE !== "image/png" ||
  !SOCIAL_IMAGE_ALT.startsWith("Text-only card for Faisal Albalwy")
)
  throw new Error("Social image contract is incomplete.");
for (const origin of [
  "https://local.invalid",
  "https://ci.invalid",
  "https://preview.example.edu",
]) {
  const social = socialMetadataFor(origin, "/research");
  if (
    social.url !== `${origin}/research` ||
    social.image !== `${origin}/og.png` ||
    social.imageWidth !== 1200 ||
    social.imageHeight !== 630 ||
    social.openGraphType !== "website" ||
    social.twitterCard !== "summary_large_image"
  )
    throw new Error(`Social URL or metadata policy failed for ${origin}.`);
}
for (const invalid of [
  "http://example.edu",
  "https://user@example.edu",
  "https://example.edu/path",
])
  try {
    socialMetadataFor(invalid, "/");
    throw new Error(`Unsafe social origin accepted: ${invalid}`);
  } catch (error) {
    if (error.message.startsWith("Unsafe social origin accepted")) throw error;
  }

const temporary = await mkdtemp(path.join(os.tmpdir(), "int003-og-"));
try {
  const regenerated = path.join(temporary, "og.png");
  execFileSync(
    process.execPath,
    ["scripts/generate-og-card.mjs", "--output", regenerated],
    { cwd: root, stdio: "pipe" },
  );
  if (!output.equals(await readFile(regenerated)))
    throw new Error(
      "OG regeneration differs byte-for-byte from public/og.png.",
    );
} finally {
  await rm(temporary, { recursive: true, force: true });
}

console.log(
  `OG card check passed: ${SOCIAL_IMAGE_WIDTH}x${SOCIAL_IMAGE_HEIGHT}, ${output.byteLength} bytes, SHA-256 ${digest(output)}.`,
);
