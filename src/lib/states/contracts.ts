export type OperationalStateId =
  | "not-found"
  | "application-error"
  | "data-unavailable"
  | "evidence-gap"
  | "optional-empty"
  | "publication-no-results"
  | "publication-partial"
  | "publication-unavailable"
  | "publication-external"
  | "publication-invalid-query"
  | "publication-fragment-recovery"
  | "offline-after-load"
  | "email-unavailable"
  | "email-client-unavailable"
  | "cv-unavailable"
  | "external-failure"
  | "noscript";

export type OperationalState = Readonly<{
  id: OperationalStateId;
  heading: string;
  explanation: string;
  recovery?: Readonly<{ href: string; label: string }>;
  status: 200 | 404 | 500 | 503;
  blocking: boolean;
}>;

const home = { href: "/", label: "Return to homepage" } as const;
const publications = {
  href: "/publications",
  label: "View publications",
} as const;
const contact = { href: "/contact", label: "Contact" } as const;

export const OPERATIONAL_STATES: Readonly<
  Record<OperationalStateId, OperationalState>
> = {
  "not-found": {
    id: "not-found",
    heading: "Page not found",
    explanation: "The page you requested could not be found.",
    recovery: home,
    status: 404,
    blocking: true,
  },
  "application-error": {
    id: "application-error",
    heading: "This page could not be loaded",
    explanation: "A site error prevented this page from loading.",
    recovery: home,
    status: 500,
    blocking: true,
  },
  "data-unavailable": {
    id: "data-unavailable",
    heading: "Content is temporarily unavailable.",
    explanation:
      "This preview intentionally contains no unpublished records or private source material.",
    recovery: home,
    status: 503,
    blocking: true,
  },
  "evidence-gap": {
    id: "evidence-gap",
    heading: "Content is being prepared for this preview.",
    explanation:
      "This preview intentionally contains no unpublished records or private source material.",
    recovery: home,
    status: 503,
    blocking: true,
  },
  "optional-empty": {
    id: "optional-empty",
    heading: "No additional details are available.",
    explanation: "The available verified content remains visible.",
    status: 200,
    blocking: false,
  },
  "publication-no-results": {
    id: "publication-no-results",
    heading: "No publications match these filters.",
    explanation:
      "Change the search or filters, or clear them to return to the complete catalogue.",
    recovery: publications,
    status: 200,
    blocking: false,
  },
  "publication-partial": {
    id: "publication-partial",
    heading: "Some publication details are unavailable.",
    explanation:
      "Available verified fields remain visible. Missing optional fields are omitted and can be checked at the linked canonical source.",
    recovery: publications,
    status: 200,
    blocking: false,
  },
  "publication-unavailable": {
    id: "publication-unavailable",
    heading: "Publications could not be loaded.",
    explanation:
      "The catalogue data is temporarily unavailable. Try again or use an approved scholarly profile.",
    recovery: publications,
    status: 503,
    blocking: true,
  },
  "publication-external": {
    id: "publication-external",
    heading: "The external source is currently unavailable.",
    explanation:
      "The verified local record remains available. Try the canonical destination again later.",
    recovery: publications,
    status: 503,
    blocking: false,
  },
  "publication-invalid-query": {
    id: "publication-invalid-query",
    heading: "Unsupported publication filters were removed.",
    explanation: "Use the available search and filters to continue.",
    recovery: publications,
    status: 200,
    blocking: false,
  },
  "publication-fragment-recovery": {
    id: "publication-fragment-recovery",
    heading: "The requested publication record is unavailable.",
    explanation:
      "Browse the complete catalogue to find available verified records.",
    recovery: publications,
    status: 200,
    blocking: false,
  },
  "offline-after-load": {
    id: "offline-after-load",
    heading: "You are offline.",
    explanation:
      "Content already loaded remains available, but external sources and enhanced actions may not work until the connection returns.",
    status: 503,
    blocking: false,
  },
  "email-unavailable": {
    id: "email-unavailable",
    heading: "Institutional email unavailable.",
    explanation:
      "The approved institutional address is not available. No private or alternate contact method is provided.",
    recovery: home,
    status: 503,
    blocking: false,
  },
  "email-client-unavailable": {
    id: "email-client-unavailable",
    heading: "Email application did not open.",
    explanation:
      "Use the visible institutional address in an email application you trust. This site cannot send the message or confirm delivery.",
    recovery: contact,
    status: 503,
    blocking: false,
  },
  "cv-unavailable": {
    id: "cv-unavailable",
    heading: "CV unavailable",
    explanation: "No public English CV download is currently available.",
    recovery: home,
    status: 404,
    blocking: true,
  },
  "external-failure": {
    id: "external-failure",
    heading: "The external source is currently unavailable.",
    explanation:
      "The verified local record remains available. Try the canonical destination again later.",
    recovery: home,
    status: 503,
    blocking: false,
  },
  noscript: {
    id: "noscript",
    heading: "Enhanced controls are unavailable.",
    explanation:
      "The page remains available with native navigation and visible content.",
    status: 200,
    blocking: false,
  },
};

export function stateFor(id: OperationalStateId): OperationalState {
  return OPERATIONAL_STATES[id];
}
