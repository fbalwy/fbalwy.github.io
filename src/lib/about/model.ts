import { isPublicRenderable, isSafePublicUrl } from "../security/public.js";

export const ABOUT_MODULE_ORDER = [
  "short-biography",
  "extended-context",
  "role-affiliation",
  "career",
  "education",
  "recognition",
  "academic-context",
  "cv-context",
  "related-routes",
] as const;
export const ABOUT_CAREER_IDS = [
  "career-assistant-professor-taibah",
  "career-phd-manchester",
] as const;
export const ABOUT_SERVICE_IDS = [
  "service-deputy-ceo-2023",
  "service-ceo-2024",
  "service-ceo-renewal-2025",
] as const;
type CanonicalRecord = {
  record_id: string;
  governance?: Record<string, unknown>;
  data?: {
    canonical_url?: string | null;
    title?: string | null;
    label?: string | null;
    access_state?: string | null;
    organisation?: string | null;
    role?: string | null;
    activity?: string | null;
  };
  public_presentation?: {
    public_location_ids?: string[];
    public_wording?: string | null;
  };
};
const required = (
  records: readonly CanonicalRecord[],
  ids: readonly string[],
) => {
  if (
    ids.some(
      (id) => records.filter((record) => record.record_id === id).length !== 1,
    )
  )
    return [];
  return ids
    .map((id) => records.find((record) => record.record_id === id))
    .filter(
      (record): record is CanonicalRecord =>
        Boolean(record) && isPublicRenderable(record),
    );
};
export function createAboutModel(input: {
  career: readonly CanonicalRecord[];
  service: readonly CanonicalRecord[];
  profiles: readonly CanonicalRecord[];
}) {
  const career = required(input.career, ABOUT_CAREER_IDS).filter(
    (record) =>
      record.public_presentation?.public_location_ids?.includes("R6") &&
      Boolean(record.public_presentation?.public_wording),
  );
  const service = required(input.service, ABOUT_SERVICE_IDS).filter(
    (record) =>
      record.public_presentation?.public_location_ids?.includes("R5") &&
      Boolean(record.public_presentation?.public_wording?.trim()) &&
      Boolean(record.data?.activity?.trim()),
  );
  const profiles = input.profiles.filter(
    (record) =>
      record.record_id === "profile-taibah" &&
      isPublicRenderable(record) &&
      isSafePublicUrl(String(record.data?.canonical_url ?? "")) &&
      Boolean(record.data?.label?.trim()) &&
      record.data?.access_state === "available" &&
      record.public_presentation?.public_location_ids?.includes("R7") &&
      Boolean(record.public_presentation?.public_wording?.trim()),
  );
  const profile = profiles.length === 1 ? profiles[0] : undefined;
  return {
    modules: ABOUT_MODULE_ORDER,
    career,
    service,
    profile: profile
      ? {
          href: String(profile.data?.canonical_url).trim(),
          label: String(profile.data?.label).trim(),
        }
      : undefined,
    appointment: career[0]?.public_presentation?.public_wording,
    phd: career[1]?.public_presentation?.public_wording,
    leadership: service.map((record) => record.data?.activity).filter(Boolean),
    public: career.length === 2 && service.length === 3 && Boolean(profile),
  };
}
