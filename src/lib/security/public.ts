const markerPattern =
  /\[(?:VERIFY|SOURCE|AS OF|OMIT IF UNRESOLVED|TRANSLATION TO VERIFY|DESCRIPTIVE LABEL)/i;

export function isPublicRenderable(record: unknown): boolean {
  if (!record || typeof record !== "object") return false;
  const governance = (record as { governance?: Record<string, unknown> })
    .governance;
  return (
    governance?.verification_status === "verified" &&
    governance.public_disposition === "publish" &&
    governance.render_eligibility === "public"
  );
}

export function isSafePublicUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.search &&
      !url.hash
    );
  } catch {
    return false;
  }
}

export const APPROVED_INSTITUTIONAL_EMAIL = "fbalwy@taibahu.edu.sa";
export const APPROVED_CONTACT_SUBJECT = "Academic website inquiry";

export function safeInstitutionalMailto(
  address: string | undefined,
): string | undefined {
  if (address !== APPROVED_INSTITUTIONAL_EMAIL) return undefined;
  return `mailto:${APPROVED_INSTITUTIONAL_EMAIL}?subject=${encodeURIComponent(APPROVED_CONTACT_SUBJECT)}`;
}

export function containsPublicMarker(value: string): boolean {
  return markerPattern.test(value);
}
