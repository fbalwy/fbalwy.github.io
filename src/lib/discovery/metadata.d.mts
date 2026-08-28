export type DiscoveryMetadata = Readonly<{
  title: string;
  description: string;
}>;

export const DISCOVERY_METADATA: Readonly<Record<string, DiscoveryMetadata>>;
export const DISCOVERY_HTML_PATHS: readonly string[];
export function metadataFor(pathname: string): DiscoveryMetadata;
export function canonicalFor(origin: string, pathname: string): string;
export function robotsFor(environment: {
  indexable: boolean;
  origin: string;
}): string;
export function createSitemap(environment: {
  indexable: boolean;
  origin: string;
}): string;
