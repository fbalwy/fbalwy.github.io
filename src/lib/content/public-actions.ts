import {
  APPROVED_INSTITUTIONAL_EMAIL,
  isPublicRenderable,
  safeInstitutionalMailto,
} from "../security/public.js";

export type PublicActionRecord = {
  governance?: Record<string, unknown>;
  data?: { canonical_url?: string; label?: string };
};

export function publicProfileActions(records: readonly PublicActionRecord[]) {
  return records
    .filter(isPublicRenderable)
    .flatMap((record) =>
      record.data?.canonical_url && record.data.label
        ? [{ href: record.data.canonical_url, label: record.data.label }]
        : [],
    );
}

export type ContactAvailabilityContract = Readonly<{
  key: "contact.institutional_email";
  routes: readonly ["/contact", "shared-footer"];
  approved: true;
  address: string;
}>;

export const APPROVED_CONTACT_CONTRACT: ContactAvailabilityContract = {
  key: "contact.institutional_email",
  routes: ["/contact", "shared-footer"],
  approved: true,
  address: APPROVED_INSTITUTIONAL_EMAIL,
};

export function approvedContactAction(contract: ContactAvailabilityContract) {
  return contract.key === "contact.institutional_email" &&
    contract.approved &&
    contract.routes.length === 2 &&
    contract.routes[0] === "/contact" &&
    contract.routes[1] === "shared-footer"
    ? safeInstitutionalMailto(contract.address)
    : undefined;
}
