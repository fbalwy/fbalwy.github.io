import { createAboutModel } from "../about/model.js";
import {
  approvedContactAction,
  type ContactAvailabilityContract,
} from "../content/public-actions.js";
import { createHomeModel } from "../home/model.js";
import { createPublicationsModel } from "../publications/model.js";
import { createResearchModel } from "../research/model.js";
import { isPublicRenderable } from "../security/public.js";
import { createServiceModel } from "../service/model.js";
import { createTeachingModel } from "../teaching/model.js";

type CanonicalRecord = {
  record_id: string;
  data?: Record<string, unknown>;
  governance?: Record<string, unknown>;
  public_presentation?: Record<string, unknown>;
  translation?: Record<string, unknown>;
  versioning?: Record<string, unknown>;
};

type SiteContent = Readonly<{
  publications: readonly CanonicalRecord[];
  themes: readonly CanonicalRecord[];
  theme_publication_relationships: readonly CanonicalRecord[];
  projects_and_systems: readonly unknown[];
  courses: readonly CanonicalRecord[];
  teaching_occurrences: readonly unknown[];
  career: readonly CanonicalRecord[];
  service: readonly CanonicalRecord[];
  metrics: readonly unknown[];
  profile_links: readonly CanonicalRecord[];
}>;

export const PROFILE_CONTRACTS = [
  {
    id: "profile-google-scholar",
    platform: "google_scholar",
    label: "View on Google Scholar (external)",
    href: "https://scholar.google.com/citations?hl=en&user=zkrWLDAAAAAJ&view_op=list_works&sortby=pubdate",
  },
  {
    id: "profile-orcid",
    platform: "orcid",
    label: "View ORCID record (external)",
    href: "https://orcid.org/0000-0002-2342-2156",
  },
  {
    id: "profile-taibah",
    platform: "taibah_faculty_profile",
    label: "View Taibah University faculty profile (external)",
    href: "https://www.taibahu.edu.sa/en/employees/120",
  },
] as const;

function hasCompleteRelease(record: CanonicalRecord): boolean {
  const approvals = record.governance?.approvals as
    Record<string, unknown> | undefined;
  const locations = record.public_presentation?.public_location_ids;
  const wording = record.public_presentation?.public_wording;
  return (
    isPublicRenderable(record) &&
    record.governance?.conflict_state === "none" &&
    ["granted", "not_applicable"].includes(
      String(record.governance?.rights_status),
    ) &&
    ["granted", "not_applicable"].includes(
      String(record.governance?.consent_status),
    ) &&
    typeof record.governance?.record_owner_id === "string" &&
    record.governance.record_owner_id.trim().length > 0 &&
    approvals?.evidence === true &&
    approvals.privacy === true &&
    approvals.rights === true &&
    approvals.editorial === true &&
    approvals.qa === true &&
    record.translation?.status !== "pending" &&
    record.translation?.status !== "rejected" &&
    record.versioning?.correction_state === "none" &&
    typeof wording === "string" &&
    wording.trim().length > 0 &&
    Array.isArray(locations) &&
    locations.length > 0
  );
}

function createProfileActions(records: readonly CanonicalRecord[]) {
  if (
    records.length !== PROFILE_CONTRACTS.length ||
    records.some(
      (record, index) => record.record_id !== PROFILE_CONTRACTS[index].id,
    )
  )
    return [];
  const actions = records.map((record, index) => {
    const expected = PROFILE_CONTRACTS[index];
    const locations = record.public_presentation?.public_location_ids;
    return hasCompleteRelease(record) &&
      record.data?.platform === expected.platform &&
      record.data?.canonical_url === expected.href &&
      record.data?.label === expected.label &&
      record.data?.external === true &&
      record.data?.same_tab === true &&
      record.data?.identity_match === "verified" &&
      record.data?.access_state === "available" &&
      record.public_presentation?.public_wording === expected.label &&
      record.public_presentation?.action_label === expected.label &&
      Array.isArray(locations) &&
      locations.length === 1 &&
      locations[0] === "R7"
      ? { href: expected.href, label: expected.label }
      : undefined;
  });
  return actions.some((action) => !action)
    ? []
    : (actions as readonly Readonly<{ href: string; label: string }>[]);
}

function allCanonicalRecords(content: SiteContent): readonly CanonicalRecord[] {
  return [
    ...content.publications,
    ...content.themes,
    ...content.theme_publication_relationships,
    ...content.courses,
    ...content.career,
    ...content.service,
    ...content.profile_links,
  ];
}

export function createIntegratedSiteModel(input: {
  content: SiteContent;
  contact: ContactAvailabilityContract;
}) {
  const publications = createPublicationsModel({
    records: input.content.publications,
  });
  const research = createResearchModel({
    themes: input.content.themes,
    bindings: input.content.theme_publication_relationships,
    publications: input.content.publications,
    projects: input.content.projects_and_systems,
  });
  const teaching = createTeachingModel({
    courses: input.content.courses,
    occurrences: input.content.teaching_occurrences,
  });
  const service = createServiceModel({ service: input.content.service });
  const about = createAboutModel({
    career: input.content.career,
    service: input.content.service,
    profiles: input.content.profile_links,
  });
  const home = createHomeModel({
    themes: input.content.themes,
    publications: input.content.publications,
    courses: input.content.courses,
    career: input.content.career,
    service: input.content.service,
    profiles: input.content.profile_links,
  });
  const contactHref = approvedContactAction(input.contact);
  const profileActions = createProfileActions(input.content.profile_links);
  const releaseReady =
    allCanonicalRecords(input.content).every(hasCompleteRelease) &&
    input.content.metrics.length === 0 &&
    home.public &&
    research.public &&
    publications.public &&
    teaching.public &&
    service.public &&
    about.public &&
    profileActions.length === PROFILE_CONTRACTS.length &&
    Boolean(contactHref);

  return Object.freeze({
    public: releaseReady,
    routes: Object.freeze({
      home: Object.freeze({ ...home, public: releaseReady }),
      research: Object.freeze({ ...research, public: releaseReady }),
      publications: Object.freeze({ ...publications, public: releaseReady }),
      teaching: Object.freeze({ ...teaching, public: releaseReady }),
      service: Object.freeze({ ...service, public: releaseReady }),
      about: Object.freeze({ ...about, public: releaseReady }),
      contact: Object.freeze({ public: Boolean(contactHref) }),
    }),
    actions: Object.freeze({
      contactHref,
      profiles: releaseReady ? profileActions : [],
    }),
  });
}
