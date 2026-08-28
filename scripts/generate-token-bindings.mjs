import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "content/brand/tokens.json");
const output = path.join(root, "src/styles/tokens.css");
const tokens = JSON.parse(await readFile(source, "utf8"));
const cssFamilies = new Set([
  "official.color",
  "project.utility-color",
  "derived.contrast",
  "semantic.color",
  "typography",
  "spacing",
  "layout",
  "shape-and-component",
  "icon",
  "chart",
  "motion",
  "forced-colors",
  "print",
]);
const entries = Object.entries(tokens.families)
  .filter(([name]) => cssFamilies.has(name))
  .flatMap(([, family]) => Object.entries(family.tokens))
  .filter(
    ([name]) =>
      !["font.source.alexandria-candidate", "font.license.alexandria"].includes(
        name,
      ),
  );

function cssValue(token) {
  if (token.value === null) return undefined;
  if (Array.isArray(token.value))
    return token.value
      .map((value) => (/\s/.test(value) ? `"${value}"` : value))
      .join(", ");
  if (typeof token.value === "boolean") return token.value ? "1" : "0";
  if (typeof token.value === "number") {
    const cssUnits = new Set(["ch", "em", "ms", "rem"]);
    return cssUnits.has(token.unit)
      ? `${token.value}${token.unit}`
      : String(token.value);
  }
  return token.value;
}

const variables = entries
  .map(([name, token]) => {
    const value = cssValue(token);
    return value === undefined
      ? undefined
      : `  --${name.replaceAll(".", "-")}: ${value};`;
  })
  .filter(Boolean)
  .sort();

await mkdir(path.dirname(output), { recursive: true });
await writeFile(
  output,
  `/* Generated from content/brand/tokens.json; do not edit. */\n:root {\n${variables.join("\n")}\n}\n`,
);
