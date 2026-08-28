import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "assets/social/og-card.html");
const outputArgument = process.argv.indexOf("--output");
const output =
  outputArgument === -1
    ? path.join(root, "public/og.png")
    : path.resolve(root, process.argv[outputArgument + 1]);
if (outputArgument !== -1 && !process.argv[outputArgument + 1])
  throw new Error("--output requires a path.");

const html = await readFile(source, "utf8");
const prohibited =
  /<(?:img|picture|source|svg|canvas|video|audio|iframe|object|embed)\b|@font-face|\burl\s*\(|https?:|mailto:|data:/i;
if (prohibited.test(html))
  throw new Error(
    "OG source must remain text-only and locally self-contained.",
  );
if (/Alexandria|Tosh/i.test(html))
  throw new Error("Candidate or blocked font found in OG source.");
const expectedStack =
  /font-family:\s*ui-sans-serif,\s*system-ui,\s*-apple-system,\s*BlinkMacSystemFont,\s*"Segoe UI",\s*sans-serif;/;
if (!expectedStack.test(html))
  throw new Error("OG source does not use the governed system-font stack.");
const allowedColors = new Set([
  "#111144",
  "#4056e3",
  "#40e0d0",
  "#ffffff",
  "#ffd1dc",
]);
for (const color of html.match(/#[0-9a-f]{6}/gi) ?? [])
  if (!allowedColors.has(color.toLowerCase()))
    throw new Error(`Unapproved OG color: ${color}`);

await mkdir(path.dirname(output), { recursive: true });
// The repository pins Playwright; this workspace provides the matching browser
// surface through the installed stable Chrome channel rather than a downloaded
// project asset. The accepted renderer version is recorded in provenance.
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
    colorScheme: "light",
    reducedMotion: "reduce",
  });
  const unexpectedRequests = [];
  page.on("request", (request) => {
    if (!request.url().startsWith("file:"))
      unexpectedRequests.push(request.url());
  });
  await page.goto(pathToFileURL(source).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const audit = await page.evaluate(() => {
    const card = document.querySelector("[data-og-card]");
    if (!(card instanceof HTMLElement)) return { error: "card missing" };
    const cardBox = card.getBoundingClientRect();
    const textBoxes = [...document.querySelectorAll("[data-safe-text]")].map(
      (element) => {
        const box = element.getBoundingClientRect();
        return {
          text: element.textContent?.trim(),
          left: box.left,
          top: box.top,
          right: box.right,
          bottom: box.bottom,
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
          scrollHeight: element.scrollHeight,
          clientHeight: element.clientHeight,
        };
      },
    );
    return {
      width: cardBox.width,
      height: cardBox.height,
      bodyScrollWidth: document.body.scrollWidth,
      bodyScrollHeight: document.body.scrollHeight,
      textBoxes,
    };
  });
  if ("error" in audit) throw new Error(audit.error);
  if (
    audit.width !== 1200 ||
    audit.height !== 630 ||
    audit.bodyScrollWidth !== 1200 ||
    audit.bodyScrollHeight !== 630
  )
    throw new Error("OG source does not render at exactly 1200x630.");
  for (const box of audit.textBoxes) {
    if (
      box.left < 96 ||
      box.right > 1104 ||
      box.top < 80 ||
      box.bottom > 550 ||
      box.scrollWidth > box.clientWidth
    )
      throw new Error(
        `OG safe-margin or clipping failure: ${JSON.stringify(box)}`,
      );
  }
  if (unexpectedRequests.length)
    throw new Error(`Unexpected OG source request: ${unexpectedRequests[0]}`);
  await page.locator("[data-og-card]").screenshot({
    path: output,
    animations: "disabled",
    caret: "hide",
    omitBackground: false,
    scale: "css",
  });
} finally {
  await browser.close();
}

console.log(
  `Generated deterministic 1200x630 text-only OG card at ${path.relative(root, output)}.`,
);
