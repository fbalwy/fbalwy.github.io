export type SocialMetadata = Readonly<{
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  imageWidth: 1200;
  imageHeight: 630;
  imageType: "image/png";
  openGraphType: "website";
  twitterCard: "summary_large_image";
}>;

export const SOCIAL_IMAGE_PATH: "/og.png";
export const SOCIAL_IMAGE_WIDTH: 1200;
export const SOCIAL_IMAGE_HEIGHT: 630;
export const SOCIAL_IMAGE_TYPE: "image/png";
export const SOCIAL_IMAGE_ALT: string;
export function socialMetadataFor(
  origin: string,
  pathname: string,
): SocialMetadata;
