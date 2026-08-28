import { isPublicRenderable } from "../security/public.js";

export type PublicAvailability = "available" | "empty" | "unavailable";

export function publicAvailability(records: readonly unknown[]): PublicAvailability {
  return records.some(isPublicRenderable) ? "available" : "unavailable";
}

export const skeletonState = {
  availability: "unavailable" as const,
  heading: "Content is being prepared for this preview.",
  explanation: "This preview intentionally contains no unpublished records or private source material."
};
