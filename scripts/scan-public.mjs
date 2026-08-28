import { lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSitemap, metadataFor } from "../src/lib/discovery/metadata.mjs";
import { parseReleaseEnvironment } from "../src/lib/release/environment.mjs";
import { QA007_PROMOTION } from "../src/lib/release/promotion.mjs";
import { socialMetadataFor } from "../src/lib/discovery/social.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const environment = parseReleaseEnvironment(process.env);
const args = process.argv.slice(2);
const input = args[args.indexOf("--input") + 1];
if (!input)
  throw new Error("Usage: scan-public.mjs --input <directory> [--staging]");
const directory = path.resolve(root, input);
const staging = args.includes("--staging");
const forbiddenPath =
  /(?:^|\/)(?:\.git|\.DS_Store)|\.(?:map|zip|tar|gz|tgz|7z|rar|bak)$/i;
const forbiddenText =
  /(?:\/Users\/|file:\/\/|content\/(?:data|pages|schemas)|docs\/|evidence[_ -]?(?:id|registry)|claim[_ -]?ids?|source[_ -]?ids?|sha-?256|\[(?:VERIFY|SOURCE|AS OF|OMIT IF UNRESOLVED))/i;
const forbiddenMarkup =
  /<form\b|\son[a-z]+\s*=|(?:google-analytics|googletagmanager|analytics\.js|plausible|segment|sentry)/i;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function allFiles(current) {
  const entries = await readdir(current, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const file = path.join(current, entry.name);
    const stat = await lstat(file);
    if (stat.isSymbolicLink())
      throw new Error(`Symlink rejected: ${path.relative(root, file)}`);
    if (stat.isDirectory()) found.push(...(await allFiles(file)));
    else found.push(file);
  }
  return found;
}

const files = await allFiles(directory);
if (staging && files.length > 3)
  throw new Error(
    "Public staging may contain only the approved OG, contact card, and generated robots control.",
  );
const expectedBuildFiles = new Set([
  "404.html",
  "index.html",
  "about/index.html",
  "contact/index.html",
  "leadership-service/index.html",
  "publications/index.html",
  "research/index.html",
  "teaching/index.html",
]);
const publicPaths = new Set([
  "/",
  "/about",
  "/contact",
  "/leadership-service",
  "/publications",
  "/research",
  "/teaching",
]);
const discoveryPathForBuildFile = Object.freeze({
  "index.html": "/",
  "research/index.html": "/research",
  "publications/index.html": "/publications",
  "teaching/index.html": "/teaching",
  "leadership-service/index.html": "/leadership-service",
  "about/index.html": "/about",
  "contact/index.html": "/contact",
  "404.html": "/404.html",
});
const relativeFiles = files.map((file) => path.relative(directory, file));
if (
  staging &&
  (relativeFiles.length !== 3 ||
    !relativeFiles.includes("og.png") ||
    !relativeFiles.includes("faisal-albalwy.vcf") ||
    !relativeFiles.includes("robots.txt"))
)
  throw new Error(
    `Unexpected staged public files: ${relativeFiles.sort().join(", ")}`,
  );
if (input === "dist") {
  const actualHtml = relativeFiles.filter((file) => file.endsWith(".html"));
  if (
    actualHtml.length !== expectedBuildFiles.size ||
    actualHtml.some((file) => !expectedBuildFiles.has(file))
  )
    throw new Error(
      `Unexpected built route set: ${actualHtml.sort().join(", ")}`,
    );
  if (!relativeFiles.includes("sitemap.xml"))
    throw new Error("Deterministic sitemap.xml is missing from dist.");
  const sitemap = await readFile(path.join(directory, "sitemap.xml"), "utf8");
  if (sitemap !== createSitemap(environment))
    throw new Error("Sitemap does not match the active release environment.");

  const sourceCatalogue = JSON.parse(
    await readFile(path.join(root, "content/data/publications.json"), "utf8"),
  );
  const canonicalAggregate = JSON.parse(
    await readFile(path.join(root, "content/data/site-content.json"), "utf8"),
  );
  const decodedOutput = (
    await Promise.all(
      files
        .filter((file) => !/\.png$/i.test(file))
        .map((file) => readFile(file, "utf8")),
    )
  )
    .join("\n")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
  const publicationsHtml = (
    await readFile(path.join(directory, "publications/index.html"), "utf8")
  )
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'");
  for (const record of sourceCatalogue.publications) {
    if (!publicationsHtml.includes(record.title))
      throw new Error(`Promoted publication missing: ${record.stable_id}`);
  }
  if (
    sourceCatalogue.publications.length !== 27 ||
    sourceCatalogue.publications.filter((record) => record.doi).length !== 26 ||
    (publicationsHtml.match(/data-publication-record=/g) ?? []).length !== 27
  )
    throw new Error("Promoted publication inventory is not exactly 27/26 DOI.");
  for (const collection of [
    "themes",
    "courses",
    "career",
    "service",
    "profile_links",
  ]) {
    if (
      canonicalAggregate[collection].length !==
      QA007_PROMOTION.record_ids[collection].length
    )
      throw new Error(`Promoted ${collection} inventory mismatch.`);
  }
  for (const held of [
    "10.14447/jnmes/vol28i4.art7",
    "An Integrated Framework for the Secure Management of Big Data Based on Blockchain in Heterogeneous Platforms",
  ])
    if (decodedOutput.includes(held))
      throw new Error("Held JNMES candidate leaked into dist.");
  if (/teaching occurrence|current CEO|current deputy CEO/i.test(decodedOutput))
    throw new Error(
      "Held occurrence or current-role assertion leaked into dist.",
    );
}
for (const file of files) {
  const relative = path.relative(directory, file);
  if (forbiddenPath.test(relative))
    throw new Error(`Forbidden public file: ${relative}`);
  if (relative === "og.png") {
    const png = await readFile(file);
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
    if (
      !png.subarray(0, 8).equals(signature) ||
      png.readUInt32BE(16) !== 1200 ||
      png.readUInt32BE(20) !== 630
    )
      throw new Error("Approved OG image must be a 1200x630 PNG.");
    continue;
  }
  if (relative === "faisal-albalwy.vcf") {
    const card = await readFile(file, "utf8");
    if (
      card !==
      "BEGIN:VCARD\nVERSION:3.0\nN:Albalwy;Faisal;;Dr.;\nFN:Dr. Faisal Albalwy\nTITLE:Assistant Professor of Cybersecurity\nTEL;TYPE=CELL,VOICE:+966597332195\nEMAIL;TYPE=INTERNET,WORK:fbalwy@taibahu.edu.sa\nURL:https://fbalwy.sa\nEND:VCARD\n"
    )
      throw new Error(
        "Contact-card file does not match its approved public content.",
      );
    continue;
  }
  const text = await readFile(file, "utf8");
  if (forbiddenText.test(text))
    throw new Error(`Private marker or provenance leakage in ${relative}`);
  if (forbiddenMarkup.test(text))
    throw new Error(
      `Forbidden form, inline event, tracker, or telemetry in ${relative}`,
    );
  if (
    /https?:\/\//i.test(text) &&
    !/(?:localhost|(?:local|ci|preview)\.invalid|(?:[a-z0-9-]+\.)?github\.io|fbalwy\.sa|doi\.org|www\.taibahu\.edu\.sa|research\.manchester\.ac\.uk|scholar\.google\.com|orcid\.org|schema\.org|www\.sitemaps\.org|www\.scimagojr\.com|journals\.plos\.org|link\.springer\.com|medinform\.jmir\.org|onlinelibrary\.wiley\.com|papers\.ssrn\.com|peerj\.com|www\.frontiersin\.org|www\.iieta\.org|www\.mdpi\.com|www\.nature\.com|www\.sciencedirect\.com|www\.scirp\.org|www\.techscience\.com)/i.test(
      text,
    )
  )
    throw new Error(`Unexpected external origin in ${relative}`);
  if (relative.endsWith(".html")) {
    if (!/<html\s+lang="en"\s+dir="ltr">/i.test(text))
      throw new Error(`Language/direction missing in ${relative}`);
    if ((text.match(/<h1\b/gi) ?? []).length !== 1)
      throw new Error(`Expected exactly one h1 in ${relative}`);
    const expectedRobots =
      environment.indexable && relative !== "404.html"
        ? "index, follow"
        : "noindex, nofollow, noarchive, nosnippet";
    if (!text.includes(`<meta name="robots" content="${expectedRobots}">`))
      throw new Error(`Robots policy mismatch in ${relative}`);
    if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(text))
      throw new Error(`Discovery description missing in ${relative}`);
    const discoveryPath = discoveryPathForBuildFile[relative];
    if (!discoveryPath)
      throw new Error(`No closed discovery path maps to ${relative}`);
    const metadata = metadataFor(discoveryPath);
    if (!text.includes(`<title>${escapeHtml(metadata.title)}</title>`))
      throw new Error(`Discovery title does not match ${discoveryPath}.`);
    if (
      !text.includes(
        `<meta name="description" content="${escapeHtml(metadata.description)}">`,
      )
    )
      throw new Error(`Discovery description does not match ${discoveryPath}.`);
    const canonical = text.match(/<link rel="canonical" href="([^"]+)">/i)?.[1];
    if (!canonical) throw new Error(`Safe canonical missing in ${relative}`);
    const canonicalUrl = new URL(canonical);
    if (
      canonicalUrl.protocol !== "https:" ||
      canonicalUrl.pathname !== discoveryPath ||
      canonicalUrl.search ||
      canonicalUrl.hash
    )
      throw new Error(`Canonical path mismatch in ${relative}`);
    const social = socialMetadataFor(canonicalUrl.origin, discoveryPath);
    const socialTags = [
      ["property", "og:type", social.openGraphType],
      [
        "property",
        "og:site_name",
        "Faisal Albalwy | Personal academic website",
      ],
      ["property", "og:title", social.title],
      ["property", "og:description", social.description],
      ["property", "og:url", social.url],
      ["property", "og:image", social.image],
      ["property", "og:image:secure_url", social.image],
      ["property", "og:image:type", social.imageType],
      ["property", "og:image:width", String(social.imageWidth)],
      ["property", "og:image:height", String(social.imageHeight)],
      ["property", "og:image:alt", social.imageAlt],
      ["name", "twitter:card", social.twitterCard],
      ["name", "twitter:title", social.title],
      ["name", "twitter:description", social.description],
      ["name", "twitter:image", social.image],
      ["name", "twitter:image:alt", social.imageAlt],
    ];
    for (const [attribute, key, value] of socialTags) {
      const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}">`;
      if (
        text.split(tag).length !== 2 ||
        text.split(`<meta ${attribute}="${key}"`).length !== 2
      )
        throw new Error(`Expected one exact ${key} tag in ${relative}.`);
    }
    if (/<(?:img|picture|source)\b/i.test(text))
      throw new Error(
        `Unexpected image resource or social URL in ${relative}.`,
      );
    if (/<link\s+rel="(?:icon|manifest|apple-touch-icon)"/i.test(text))
      throw new Error(`Blocked favicon or manifest reference in ${relative}`);
    const structured = /<script\s+type="application\/ld\+json"/gi;
    const expectedStructured = !["contact/index.html", "404.html"].includes(
      relative,
    );
    if ((text.match(structured) ?? []).length !== (expectedStructured ? 1 : 0))
      throw new Error(`Structured-data route contract failed in ${relative}.`);
    for (const script of text.matchAll(/<script\b([^>]*)>/gi)) {
      if (/type="application\/ld\+json"/i.test(script[1])) continue;
      if (
        !/type="module"/i.test(script[1]) ||
        !/src="\/_astro\/[^"]+\.js"/i.test(script[1])
      )
        throw new Error(
          `Executable script is not a same-origin module in ${relative}.`,
        );
    }
    for (const href of text.matchAll(/href="(\/[^"]*)"/g)) {
      const pathname = href[1].split(/[?#]/, 1)[0];
      const isFingerprintAsset = /^\/_astro\/[A-Za-z0-9_.-]+\.(?:css|js)$/.test(
        pathname,
      );
      if (
        !publicPaths.has(pathname) &&
        pathname !== "/faisal-albalwy.vcf" &&
        !isFingerprintAsset
      )
        throw new Error(`Unexpected internal link ${href[1]} in ${relative}`);
    }
  }
}
console.log(`Public scan passed for ${files.length} files in ${input}.`);
