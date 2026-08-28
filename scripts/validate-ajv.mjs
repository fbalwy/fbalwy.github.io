import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const schemasPath = path.join(root, "content/schemas");
const schemaFiles = [
  "common.schema.json",
  "publication.schema.json",
  "publication-dataset-v1.schema.json",
];
const parse = async (file) => JSON.parse(await readFile(file, "utf8"));
const schemas = await Promise.all(
  schemaFiles.map((name) => parse(path.join(schemasPath, name))),
);
const ajv = new Ajv2020({
  allErrors: true,
  strict: false,
  validateFormats: true,
});
addFormats(ajv);
schemas.forEach((schema) => ajv.addSchema(schema));

const checks = [
  [
    "publication fixture",
    "https://fbalwy.sa/schemas/v1/publication.schema.json",
    path.join(schemasPath, "examples/valid/publication.json"),
  ],
  [
    "source-stage catalogue",
    "https://fbalwy.sa/schemas/v1/publication-dataset-v1.schema.json",
    path.join(root, "content/data/publications.json"),
  ],
];
for (const [label, schemaId, dataPath] of checks) {
  const valid = ajv.getSchema(schemaId)(await parse(dataPath));
  if (!valid)
    throw new Error(
      `Ajv validation failed for ${label}: ${ajv.errorsText(ajv.getSchema(schemaId).errors)}`,
    );
}
console.log(
  `Ajv Draft 2020-12 passed ${checks.length} independent schema checks.`,
);
