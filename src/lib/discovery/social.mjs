import { canonicalFor, metadataFor } from "./metadata.mjs";

export const SOCIAL_IMAGE_PATH = "/og.png";
export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;
export const SOCIAL_IMAGE_TYPE = "image/png";
export const SOCIAL_IMAGE_ALT =
  "Text-only card for Faisal Albalwy. Personal academic website. Institutional affiliation: Taibah University.";

/**
 * Social metadata follows the same closed path and HTTPS-origin policy as the
 * canonical discovery contract. Local and CI builds therefore use their safe
 * sentinels; preview builds use their explicit approved preview origin; and the
 * release environment continues to reject production until authorization.
 */
export function socialMetadataFor(origin, pathname) {
  const metadata = metadataFor(pathname);
  const url = canonicalFor(origin, pathname);
  const image = new URL(SOCIAL_IMAGE_PATH, url).href;
  return Object.freeze({
    title: metadata.title,
    description: metadata.description,
    url,
    image,
    imageAlt: SOCIAL_IMAGE_ALT,
    imageWidth: SOCIAL_IMAGE_WIDTH,
    imageHeight: SOCIAL_IMAGE_HEIGHT,
    imageType: SOCIAL_IMAGE_TYPE,
    openGraphType: "website",
    twitterCard: "summary_large_image",
  });
}
