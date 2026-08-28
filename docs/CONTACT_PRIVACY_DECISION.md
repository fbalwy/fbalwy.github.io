# INT-004 Contact and Privacy Decision

**Work package:** INT-004 v1  
**Decision date:** 2026-08-19  
**Decision:** email-only contact, privacy-minimized, no site-side collection or retention  
**Implementation state:** complete; no promotion or publication action

## 1. Decision

The website exposes one verified institutional contact address through one deterministic `mailto` contract:

```text
mailto:fbalwy@taibahu.edu.sa?subject=Academic%20website%20inquiry
```

The address is `fbalwy@taibahu.edu.sa`. It is the only permitted email value and is used only on `/contact` and in the shared footer. The `mailto` contains one fixed, neutral `subject` field and no `cc`, `bcc`, `body`, attachment, tracking value, or hidden value.

No contact form, backend, API, submission endpoint, CAPTCHA, queue, database, CRM, cookie, storage API, telemetry, or alternate contact channel is introduced. A private email, telephone number, physical address, calendar, direct-message account, and copied/alternate recipient remain excluded.

## 2. Evidence and governing inputs

The decision applies the following controlling evidence in order:

1. `docs/CONTENT_GOVERNANCE.md`: institutional email is the only permitted public contact channel; no personal contact, form, analytics, or hidden collection; institutional email freshness is 90 days and before release.
2. `content/approved/contact.md`: the verified institutional address, inquiry guidance, no-response promise, no-form statement, and external mail-provider boundary.
3. `content/approved/site-ui.md` and `content/approved/APPROVED_COPY_MANIFEST.json`: `/contact` and shared-footer locations, one unique allowed institutional email, zero private email/form endpoint, and the approved failure/offline language.
4. `src/lib/integration/current-site.ts` and `src/lib/integration/site.ts`: one integrated contact action consumed by Contact and the shared shell; Contact remains independently available while unpromoted content fails closed.
5. `docs/ENVIRONMENT_RELEASE_STRATEGY.md`: `form-action 'none'`, `connect-src 'none'`, no public environment value, no provider integration, and no production release.
6. `src/lib/states/contracts.ts`, `src/lib/security/public.ts`, and `src/lib/content/public-actions.ts`: operational recovery, exact allowlist, and safe action construction.

Independent current-source confirmation on 2026-08-19 found the same address on the official Taibah University faculty record for Faisal Albalwy. The official record reported a last-modified date of 2026-03-04. Source: [Taibah University faculty record](https://www.taibahu.edu.sa/the-university/about-taibah-university/faculty-members/120).

This observation confirms the approved value; it does not alter G2 content, promote the claim, or waive the required before-release freshness check.

## 3. Data-flow and boundary decision

| Stage | What happens | Site collection/retention | Controlling party |
| --- | --- | --- | --- |
| Contact page load | Static HTML, CSS, and local behavior are loaded | No inquiry exists; no inquiry data is collected or retained | Static site |
| Email action | A user activates the `mailto` link | The site sends no request and receives no message content | Visitor browser/operating system |
| Draft | The configured email application receives the fixed recipient and subject | No site copy; no site storage; no hidden field | Visitor email application |
| Send/delivery | The visitor chooses whether to send | Outside the static site's boundary | Sending and receiving mail providers |
| Retention/deletion | Providers may retain or delete mail under their own terms | The site has no inquiry record to retain or delete | Visitor and mail providers |

The site cannot confirm that an email application opened, a message was sent, delivered, read, or answered. It therefore makes no delivery, response-time, availability, acceptance, supervision, funding, meeting, partnership, participation, or endorsement promise.

A future host may generate ordinary HTTP access logs independently of this static artifact. Those logs do not contain inquiry content, are not configured here, and require separate host, retention, access, region, security, and privacy approval before any production deployment. This record does not claim that a future infrastructure provider stores no request metadata.

## 4. Retention and consent applicability

- **Site-side inquiry collection:** none.
- **Site-side inquiry retention:** none; there is no form payload, message, queue, or inquiry record.
- **Email-provider retention:** outside the static site's boundary and controlled by the visitor's email application and the sending/receiving providers under their own terms.
- **Site consent control:** the site does not request or record contact consent because it receives no inquiry data. The visitor decides whether to leave the site boundary and send an email.
- **Provider consent or other legal basis:** not asserted by this site. Provider terms and applicable obligations remain external.
- **Sensitive material:** the Contact page instructs visitors not to send passwords, identity numbers, student records, health data, or other sensitive or confidential material.

These statements describe the implemented technical boundary. They are not a legal conclusion about a visitor's email provider or a future hosting provider.

## 5. Anti-spam decision and residual risk

The email-only route minimizes attack surface by having no publicly callable form endpoint, submission API, CAPTCHA provider, autoresponder, mail relay, queue, webhook, CRM, or server-side parser. There is no open redirect, user-controlled mailto field, recipient override, header injection path, automatically populated body, or click telemetry.

The public institutional address can still be harvested and may receive unsolicited or malicious mail. That risk cannot be eliminated while keeping the approved address visible and accessible. Obfuscation, JavaScript reconstruction, copy-to-clipboard behavior, CAPTCHA, and a third-party form were rejected because they would reduce accessibility or introduce new collection, dependencies, or privacy claims. Inbox filtering, attachment scanning, sender authentication, and abuse handling belong to the institutional mail service, outside this static site.

Reopen and fail closed on an account change, bounce, owner withdrawal, freshness failure, or evidence conflict. Remove the address and both mailto locations rather than substituting a private or alternate channel.

## 6. Recovery behavior

| Condition | Visitor behavior | Result |
| --- | --- | --- |
| Approved address available | Link opens the configured email application with fixed recipient and subject | Email-only path available |
| Address unavailable/withdrawn | No mailto is rendered; the page shows “Institutional email unavailable” and a Home recovery | Fail closed; no private substitute |
| Email application does not open | The visible institutional address can be entered manually in a trusted email application | No automatic send, copied recipient, or alternate route |
| Offline after load | A polite status explains that drafting may remain possible but delivery depends on the email application/provider reconnecting | Loaded guidance and visible address remain available |
| JavaScript disabled | Native navigation, the complete Contact copy, visible address, mailto, privacy boundary, and no-script notice remain available | Core contact path remains useful |
| External mail failure | The site cannot detect or diagnose delivery; it makes no success claim | Retry through the visitor's provider; no mirror or fallback address |

The dedicated `email-client-unavailable` state exists for deterministic downstream rendering but is not falsely auto-triggered: browsers do not provide a reliable, privacy-safe signal that a desktop or webmail client accepted a `mailto` action.

## 7. Implementation and deterministic enforcement

INT-004 changed only the contact/privacy surface and focused enforcement:

- `src/lib/security/public.ts`: exact address and subject allowlist; deterministic percent-encoded `mailto`; fail-closed rejection of casing changes, alternate same-domain accounts, non-institutional accounts, query/header injection, and missing input.
- `src/lib/content/public-actions.ts`: the governed contact contract consumes the shared approved address constant.
- `src/pages/contact.astro`: complete privacy, retention, consent, delivery, safe-content, offline, and unavailable-client guidance; no form control.
- `src/scripts/contact-email.ts`: local-only online/offline status reflection; no request or storage.
- `src/lib/states/contracts.ts`: corrected unavailable-address recovery and explicit email-client-unavailable contract.
- `src/layouts/PreviewLayout.astro`: the footer preserves the approved no-form/no-tracking statement and adds the same no-collection/external-mail boundary without changing INT-001 metadata or canonical logic.
- `tests/integration/contact-privacy.test.mjs` and `tests/unit/operational-states.test.mjs`: executable contract, injection, source-boundary, copy, route, and state assertions.
- `scripts/check-contact-privacy.mjs`: post-build source/dist scan, invoked by `npm run contact:check` after the build in the full pinned verification chain.

The scanner requires one unique email value, the one exact mailto target, full boundary copy, no contact controls, no alternate `tel:`/`sms:` action, and no source/dist form, submission/storage/cookie/service-worker/tracker primitive.

## 8. Validation results

### Automated

- Focused contact/state tests: **4/4 PASS**.
- Exact mailto parsing: protocol `mailto:`, pathname equal to the one approved address, query keys exactly `subject`, decoded subject exactly `Academic website inquiry`.
- Rejected values: uppercase variant, alternate Taibah account, private-domain account, query injection, CRLF/BCC injection, and missing value.
- Contact privacy scanner: **PASS** on source and generated `dist`.
- Email inventory: **1 unique address**, `fbalwy@taibahu.edu.sa`; both rendered mailto links use the same exact target.
- Contact controls: **0** forms, inputs, textareas, selects, or buttons.
- Site-side collection primitives: **0** form, `fetch`, XHR, beacon, cookie, IndexedDB, local/session storage, service worker, analytics, or tracker matches.

### Browser

- Chromium desktop: complete heading hierarchy and privacy/delivery copy, one h1, one main/header/footer, named navigation, two identical mailto links, correct `aria-describedby`, visible focus outline, and no horizontal overflow.
- Exact 390 × 844 CSS px: `clientWidth=scrollWidth=390`, one h1, two exact mailto links, zero contact form controls.
- Exact 320 CSS px with 200% root text: `clientWidth=scrollWidth=320`; address and content remain visible.
- Offline transition: the polite `role=status` message becomes visible offline and hides again online without a network submission.
- JavaScript disabled at 390 CSS px: one h1, complete privacy copy, two exact mailto links, no-script notice, zero form controls, and no overflow.
- Runtime storage: no cookies, localStorage entries, or sessionStorage entries.
- Requests: only the local Contact document and local fingerprinted stylesheet. The browser's implicit `/favicon.ico` probe may report 404; the governing identity/discovery decision explicitly requires no custom favicon, so no asset or dependency is added.

## 9. Limitations and handoff

- The static site cannot observe whether the operating system has a mail client, whether a provider accepts a draft, or whether a message is delivered, read, filtered, rejected, or answered.
- The static site cannot enforce provider retention, deletion, security, region, or anti-spam controls.
- A visible public email address retains harvesting and unsolicited-mail risk.
- Browser checks validate the local generated artifact only; they do not select or test a production host.
- The official email requires its governed 90-day and before-release freshness review. A bounce, account change, owner withdrawal, or source conflict withdraws the action.

**QA-006 handoff:** independently rescan privacy leakage, contact destinations, generated HTML/JavaScript, source maps, request/storage behavior, CSP `form-action`/`connect-src`, future host-log boundaries, and withdrawal behavior. Review the wording as technical disclosure, not legal advice.

**QA-007 handoff:** rerun the complete release candidate, verify both mailto locations and unavailable/offline/no-script recovery, confirm the institutional email freshness immediately before release, and reject any alternate channel, hidden parameter, form endpoint, or unsupported delivery claim.

INT-004 performed no QA phase, promotion, deployment, DNS change, production publication, gate action, or P9 work.
