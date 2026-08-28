import { defineConfig } from "astro/config";
import { parseReleaseEnvironment } from "./src/lib/release/environment.mjs";

const releaseEnvironment = parseReleaseEnvironment(process.env);

export default defineConfig({
  site: releaseEnvironment.origin,
  output: "static",
  trailingSlash: "never",
  publicDir: ".build/public",
  build: { inlineStylesheets: "never", sourcemap: false },
  vite: {
    build: { target: "es2022", sourcemap: false, assetsInlineLimit: 0 },
  },
});
