# QA-002 provenance and factual-integrity audit

**Work package:** QA-002 v1  
**Audit date:** 19 August 2026 (Asia/Riyadh)  
**Auditor role:** independent provenance reviewer  
**Result:** **PASS with controlled holds excluded**  
**Release action:** none; this audit does not promote data or the CV and does not approve G5

## 1. Candidate identity and decision

The QA-002 prompt named the original QA-001 CI manifest SHA-256
`1a947c9990ce21a323a90d4bb5c7e36086537c2f57b8bd4afa39ae5690faded3`.
During the audit, QA-003 corrected a compact-target-size defect in the global
CSS and added the matching focused assertion. That advanced the candidate to
`4f6e1f0f097f46c49388a79475c23805eec51a0bfd597b17aba05484e0874e1a`.
QA-004 then corrected skip-link focus behavior, removed server-rendered
`aria-expanded` from the native mobile `details` summary, and removed the
redundant `aria-label` from visible “CV unavailable” text. Its completed full
verification produced the current candidate:

`c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8`

The new manifest remains a non-promotable, non-indexable CI candidate at
`https://ci.invalid`, with 17 artifacts, Node 24.19.0, npm 11.19.0, lockfile
SHA-256 `2ffe29eb5ede049e7325ff00e6a36c5309d068de0c6a3cf5d9e90d59d7cf69c9`,
and OG SHA-256
`213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6`.
The two changed CSS/layout/test surfaces contain no content record, source
URL, claim, selection, lifecycle, metadata description, or discovery value.
This report audits and passes the current fingerprint, not either superseded
fingerprint alone.

No factual blocker was found. The held JNMES candidate, the three linked
registered candidates, the JMIR preprint relationship, unapproved claims, the
CV, and all internal-only records remain outside the public candidate. QA-007
must independently decide any future promotion.

## 2. Scope, evidence hierarchy, and immutable inputs

The audit followed the governance hierarchy: accountable institutional or
publisher/repository primary; DOI-registration record for DOI identity and
relations; protected issuer primary for teaching/service; approved editorial
decision; then implementation binding. Search results and aggregators were not
used to replace an unavailable authoritative source.

| Input | SHA-256 | Audit use |
|---|---|---|
| `docs/EVIDENCE_REGISTRY.md` v2 | `136cb6a2ce5a1ed3871bff04fefc341e2afff7a5fd539665292375888191af80` | 45 protected sources, 179 atomic claims, privacy and lineage controls |
| `docs/brand/IDENTITY_SOURCE_REGISTER.md` | source register read in full | identity/brand inventory and no-logo boundary |
| `content/approved/APPROVED_COPY_MANIFEST.json` | `d3a27bd307b20b556d89ff71cb699935ddd80ace7394bca5f18ca40fc1df5ad1` | 35 approved claims, 20 suppressions, route/module bindings |
| `content/data/publications.json` | `82403376f334b224335d1a15077a62dcaeb4a23cef233b1d1a883b7710c19a85` | 27 canonical work lineages |
| `content/data/site-content.json` | `d09d0afc23cdc98e4e82ed1eee962cf503a07db320d7c65fa8022edad7ebb7db` | internal-only aggregate and provenance lifecycle |
| `docs/PUBLICATION_CONFLICT_LOG.md` | `6e91bdc7b3f013f653da92afa6549df00ca64fcfe1e005e801a817f03c2c17f6` | 31-row disposition and conflicts |
| `docs/PUBLICATION_SELECTION_LOG.md` | `54ec86a4bc12c812f5458af48831d1a55b052deb83dd225caaa77d38e8976ac9` | latest/featured and relationship decisions |
| `docs/CONTENT_GOVERNANCE.md` | `38366ee1a42b95dd54cbe0739f5d76ec8367d3d439228bc217db0c834b75797c` | thresholds, lifecycle and freshness |
| discovery/structured/social/contact records | hashes recorded in the repository | closed metadata, zero-current JSON-LD, OG and email boundary |
| `assets/cv/CV_RELEASE_MANIFEST.md` | `31d7ed3ddb1a03d4d231f218978a7b0ff70e0851c747a119e7480ec112d834df` | reviewed derivative contract |
| `assets/cv/faisal-albalwy-cv.pdf` | `cdceb414a94fa921a12ff975c907793d8523db692597f70ea7c04b69f5074c8f` | five-page candidate CV, internal only |

All eight approved visitor-copy files, all route components, all content
models, integration guards, non-emitted fixtures, discovery and structured-data
bindings, contact action, and CV contract were inspected. No evidence file,
canonical data file, approved copy, model, fixture, or release artifact was
edited by QA-002.

## 3. Current primary-source observations

All observations below were made on 19 August 2026.

| Source ID/key | Primary URL | Outcome | Fact supported / limit |
|---|---|---|---|
| `taibah-profile` | `https://www.taibahu.edu.sa/en/employees/120` | HTTP 200; canonical redirect; page modified 16 Aug 2026 | Faisal Fahd M Albalwy, Assistant Professor, research-interest scope, exact Scholar and ORCID destinations |
| `taibah-profile` Arabic counterpart | `https://www.taibahu.edu.sa/the-university/about-taibah-university/faculty-members/120` | HTTP 200; modified 16 Aug 2026 | Department of Cybersecurity, Assistant Professor, PhD and exact institutional email `fbalwy@taibahu.edu.sa` |
| `taibah-department-listing` | `https://www.taibahu.edu.sa/en/college-of-computer-science-and-engineering-in-al-madinah-al-munawwarah-/department-of-cybersecurity/faculty-members` | HTTP 200 | Faisal Fahd M Albalwy listed as Assistant Professor within the Department of Cybersecurity page |
| `taibah-root` | `https://www.taibahu.edu.sa/` | HTTP 200 | official university destination |
| `manchester-thesis` | `https://research.manchester.ac.uk/en/studentTheses/a-blockchain-infrastructure-to-support-smart-contracts-based-cons/` | HTTP 200 | exact thesis title, Faisal Albalwy, PhD, The University of Manchester, award 14 Apr 2022 |
| `SRC-LIVE-GS-001` | exact Google Scholar URL in the approved manifest | direct HTTP 200; browser crawler later returned 429 | URL and identity binding remain corroborated by the current Taibah page; 429 is an access restriction, not a contradiction; metrics stay suppressed |
| `SRC-LIVE-ORCID-001` | `https://orcid.org/0000-0002-2342-2156` | HTTP 200 JavaScript shell | exact ORCID destination is independently bound by the current Taibah page and publication identity; the shell was not treated as evidence for extra claims |

The employee page's changed modification date does not contradict any approved
value. It strengthens current rank/profile/email freshness. The approved short
name `Faisal Albalwy` is supported by the Manchester record and all 27
canonical works, while the fuller institutional name is not substituted into
visitor copy.

### DOI, publisher, notice and link outcomes

- Crossref DOI registration: **26/26 HTTP 200**. DOI equality, normalized
  title, and a Faisal/F. Albalwy author identity matched all 26. The PeerJ title
  differs only by deposited `<i>via</i>` markup.
- DOI destinations: **26/26 resolved to the expected publisher/record
  destination**. Final automated responses were 13 HTTP 200, two HTTP 202, and
  11 downstream HTTP 403. A valid DOI redirect followed by publisher bot
  refusal is recorded as source-access restriction, not broken DOI or factual
  contradiction.
- Separate canonical publisher/repository links: 24 configured; eight HTTP
  200, one HTTP 202, and 15 HTTP 403 under the audit client. Three DOI records
  intentionally use the DOI destination alone. Blocked pages were not replaced
  with aggregators.
- Notice/version registration: no update, correction, or retraction relation
  was returned for 25 DOI records. The JMIR DOI retains one registered
  `has-preprint` relation to `10.2196/preprints.27816`; it remains one lineage.
- Known non-blocking depositor differences remain controlled: Crossref reports
  IIETA volume 15 while the publisher controls with volume 30; Crossref reports
  Tech Science Press pages 1–10 while the publisher citation controls with
  article 23. Neither value was silently merged.
- The held JNMES claimed DOI
  `https://doi.org/10.14447/jnmes/vol28i4.art7` returned HTTP 404 and remains
  unregistered. Its former publisher-PDF URL also returned HTTP 404 during this
  audit. These are source failures in addition to the already recorded
  pagination conflict, not evidence resolving it.

## 4. Exact publication-field reconciliation

For every row below, exact title, ordered authors, venue, DOI, sort/display
date, status, article/page fields, Faisal identity flag, external actions and
notice state were compared across the source catalogue and canonical
aggregate. All 27 match; every aggregate record is `verified/eligible`,
`internal_only`, rights not yet approved, and QA approval false.

| Stable ID | Exact title | Ordered authors | Venue | DOI | Sort date / status |
|---|---|---|---|---|---|
| `doi-10-1016-j-eswa-2026-132969` | Hierarchical federated learning with paillier encryption: synergistic approach for secure analytics of sensitive healthcare data | Saeed Iqbal; Xiaopin Zhong; Muhammad Attique Khan; Zongze Wu; Nouf Abdullah Almujally; Weixiang Liu; Faisal Albalwy; Amir Hussain | Expert Systems with Applications | `10.1016/j.eswa.2026.132969` | `2026-12-01` / `online_first_with_future_issue_assignment` |
| `doi-10-3390-systems14040385` | Zero-Knowledge-Based Policy Enforcement for Privacy-Preserving Cross-Institutional Health Data Sharing on Blockchain | Faisal Albalwy | Systems | `10.3390/systems14040385` | `2026-04-02` / `published` |
| `doi-10-32604-cmc-2025-075098` | Bridging AI and Cyber Defense: A Stacked Ensemble Deep Learning Model with Explainable Insights | Faisal Albalwy; Muhannad Almohaimeed | Computers, Materials & Continua | `10.32604/cmc.2025.075098` | `2026-03-12` / `published` |
| `doi-10-1016-j-aej-2025-06-011` | Design and implementation of a decentralized trustless data standardization framework for blockchain interoperability using smart contracts | Abdulrahman Alzahrani; Amin Noaman; Ahmed A.A. Gad-Elrab; Fathy Eassa; Maher Khemakhem; Faisal Albalwy; Hosam Aljihani | Alexandria Engineering Journal | `10.1016/j.aej.2025.06.011` | `2025-10-01` / `published` |
| `doi-10-18280-isi-300510` | Phishing URL Detection Using Deep Learning: A Resilient Approach to Mitigating Emerging Cybersecurity Threats | Muhannad Almohaimeed; Faisal Albalwy; Leinah Algulaiti; Hanan Althubyani | Ingénierie des Systèmes d’Information | `10.18280/isi.300510` | `2025-05-31` / `published` |
| `doi-10-7717-peerj-cs-2914` | Enhancing east-west interface security in heterogeneous SDN via blockchain | Hamad Alrashede; Fathy Eassa; Abdullah Marish Ali; Hosam Aljihani; Faisal Albalwy | PeerJ Computer Science | `10.7717/peerj-cs.2914` | `2025-05-26` / `published` |
| `doi-10-4236-iim-2025-173004` | Developing a Comprehensive Cyber Risk Assessment Framework for Supply Chains: Insights into Third-Party Vulnerabilities and Security Gaps | Muhannad Almohaimeed; Faisal Albalwy; Rawan Alharbi; Aisha Alqarni; Abrar Aljohani | Intelligent Information Management | `10.4236/iim.2025.173004` | `2025-05-21` / `published` |
| `doi-10-4236-ait-2025-152002` | Use of Machine Learning and Deep Learning in Intrusion Detection for IoT | Muhannad Almohaimeed; Rasha Alyoubi; Afnan Aljohani; Mashael Alhaidari; Faisal Albalwy; Fahad Ghabban; Ibrahim Alfadli; Omair Ameerbakhsh | Advances in Internet of Things | `10.4236/ait.2025.152002` | `2025-04-01` / `published` |
| `doi-10-3390-systems13040231` | Advancing Artificial Intelligence of Things Security: Integrating Feature Selection and Deep Learning for Real-Time Intrusion Detection | Faisal Albalwy; Muhannad Almohaimeed | Systems | `10.3390/systems13040231` | `2025-03-28` / `published` |
| `doi-10-54364-aaiml-2025-51193` | A Comprehensive Review of Interoperability Challenges and Applications Beyond Cryptocurrencies | Abdulrahman A. Alzahrani; Amin Y. Noaman; Ahmed A A. Gad-Elrab; Fathy E. Eassa; Maher Khemakhem; Faisal Albalwy; Hosam Aljihani | Advances in Artificial Intelligence and Machine Learning | `10.54364/aaiml.2025.51193` | `2025-03-01` / `published` |
| `doi-10-3390-electronics14050922` | Strategic Network Attack Prevention System Leveraging Sophisticated Query-Based Network Attention Algorithm (QNAA) and Self-Perpetuating Generative Adversarial Network (SPF-GAN) Techniques for Optimal Detection | Tahani Albalawi; Perumal Ganeshkumar; Faisal Albalwy | Electronics | `10.3390/electronics14050922` | `2025-02-26` / `published` |
| `doi-10-1007-978-981-97-7603-0-35` | Blockchain-Enabled Medical Supply Chain Architecture for Rapid Response in Hajj | Faisal Albalwy | Cyber Intelligence and Information Retrieval | `10.1007/978-981-97-7603-0_35` | `2025-01-23` / `published` |
| `doi-10-3390-app142411966` | Enhancing IoT Network Security Using Feature Selection for Intrusion Detection Systems | Muhannad Almohaimeed; Faisal Albalwy | Applied Sciences | `10.3390/app142411966` | `2024-12-20` / `published` |
| `doi-10-3390-electronics13193799` | A Blockchain-Based Security Framework for East-West Interface of SDN | Hamad Alrashede; Fathy Eassa; Abdullah Marish Ali; Faisal Albalwy; Hosam Aljihani | Electronics | `10.3390/electronics13193799` | `2024-09-25` / `published` |
| `doi-10-1016-j-bspc-2024-106313` | Multi-scale GC-T2: Automated region of interest assisted skin cancer detection using multi-scale graph convolution and tri-movement based attention mechanism | Abdulrahman Alqarafi; Arfat Ahmad Khan; Rakesh Kumar Mahendran; Mohammed Al-Sarem; Faisal Albalwy | Biomedical Signal Processing and Control | `10.1016/j.bspc.2024.106313` | `2024-09-01` / `published` |
| `doi-10-1016-j-eswa-2023-123056` | A novel end-to-end deep convolutional neural network based skin lesion classification framework | Razia Sulthana A; Vinay Chamola; Zain Hussain; Faisal Albalwy; Amir Hussain | Expert Systems with Applications | `10.1016/j.eswa.2023.123056` | `2024-07-15` / `published` |
| `doi-10-3389-fcomp-2024-1387354` | Unveiling machine learning strategies and considerations in intrusion detection systems: a comprehensive survey | Ali Hussein Ali; Maha Charfeddine; Boudour Ammar; Bassem Ben Hamed; Faisal Albalwy; Abdulrahman Alqarafi; Amir Hussain | Frontiers in Computer Science | `10.3389/fcomp.2024.1387354` | `2024-06-10` / `published` |
| `doi-10-2139-ssrn-4765808` | Exploring the Potential of Blockchain and Smart Contracts for Enhancing Real Estate Registration in Saudi Arabia | Nouf Faal; Faisal Albalwy | SSRN | `10.2139/ssrn.4765808` | `2024-03-20` / `posted_preprint` |
| `doi-10-1016-j-heliyon-2024-e25958` | Computational ensemble expert system classification for the recognition of bruxism using physiological signals | Pragati Tripathi; M.A. Ansari; Tapan Kumar Gandhi; Faisal Albalwy; Rajat Mehrotra; Deepak Mishra | Heliyon | `10.1016/j.heliyon.2024.e25958` | `2024-02-05` / `published` |
| `doi-10-1016-j-future-2023-09-032` | A scalable and lightweight group authentication framework for Internet of Medical Things using integrated blockchain and fog computing | Norah Alsaeed; Farrukh Nadeem; Faisal Albalwy | Future Generation Computer Systems | `10.1016/j.future.2023.09.032` | `2024-02-01` / `published` |
| `doi-10-1109-access-2024-3518973` | A Blockchain-Based Privacy Protection Model Under Quality Consideration in Spatial Crowdsourcing Platforms | Amal Albilali; Maysoon Abulkhair; Manal Bayousef; Faisal Albalwy | IEEE Access | `10.1109/access.2024.3518973` | `2024-01-01` / `published` |
| `doi-10-3390-computers12060126` | Arabic Sentiment Analysis Based on Word Embeddings and Deep Learning | Nasrin Elhassan; Giuseppe Varone; Rami Ahmed; Mandar Gogate; Kia Dashtipour; Hani Almoamari; Mohammed A. El-Affendi; Bassam Naji Al-Tamimi; Faisal Albalwy; Amir Hussain | Computers | `10.3390/computers12060126` | `2023-06-19` / `published` |
| `doi-10-1371-journal-pone-0280038` | A security testing mechanism for detecting attacks in distributed software applications using blockchain | Abdullah Algarni; Abdulaziz Attaallah; Fathi Eassa; Maher Khemakhem; Kamal Jambi; Hosam Aljihani; Khalid Almarhabi; Faisal Albalwy | PLOS ONE | `10.1371/journal.pone.0280038` | `2023-01-20` / `published` |
| `doi-10-1038-s41397-022-00285-5` | A blockchain-based framework to support pharmacogenetic data sharing | F. Albalwy; J. H. McDermott; W. G. Newman; A. Brass; A. Davies | The Pharmacogenomics Journal | `10.1038/s41397-022-00285-5` | `2022-12-01` / `published` |
| `doi-10-1155-2022-4389729` | Authenticated Wireless Links between a Drone and Sensors Using a Blockchain: Case of Smart Farming | Kahlid S. Alqarni; Faris A. Almalki; Ben Othman Soufiene; Obaid Ali; Faisal Albalwy | Wireless Communications and Mobile Computing | `10.1155/2022/4389729` | `2022-09-05` / `published` |
| `manchester-thesis-2022-albalwy-clinical-genomics` | A BLOCKCHAIN INFRASTRUCTURE TO SUPPORT SMART CONTRACTS-BASED CONSENT MODELS FOR CLINICAL GENOMICS | Faisal Albalwy | The University of Manchester Research Explorer | — | `2022-04-14` / `awarded` |
| `doi-10-2196-27816` | A Blockchain-Based Dynamic Consent Architecture to Support Clinical Genomic Data Sharing (ConsentChain): Proof-of-Concept Study | Faisal Albalwy; Andrew Brass; Angela Davies | JMIR Medical Informatics | `10.2196/27816` | `2021-11-03` / `published` |

The future record is not described as already issue-published. Its exact
visitor label remains **“Available online; issue assigned for 1 December
2026.”** The latest set is the first five IDs above. The featured set is:
`doi-10-3390-systems14040385`, `doi-10-1016-j-aej-2025-06-011`,
`doi-10-3389-fcomp-2024-1387354`, and `doi-10-2196-27816`.

## 5. Count, duplicate, version and selection reconciliation

| Population or selection | Expected | Observed | Result |
|---|---:|---:|---|
| Registered candidates | 28 | 24 included + 1 held + 3 linked/not counted | PASS |
| Current-Scholar discoveries | 3 | 3 independently publisher/DOI-verified and included | PASS |
| All candidate rows | 31 | 27 included + 1 held + 3 linked/not counted | PASS |
| Canonical work lineages | 27 | 26 DOI + 1 Manchester thesis | PASS |
| Unique stable IDs / duplicate canonical lineages | 27 / 0 | 27 / 0 | PASS |
| Latest / featured | 5 / 4 | exact stable-ID arrays and order match | PASS |
| Themes / bindings | 3 / 7 | 3 / 7, all relationship endpoints exist | PASS |
| Courses / occurrences | 19 / 0 | 19 / 0 | PASS |
| Leadership / reviewer / community | 3 / 5 / 2 | 3 / 5 / 2 | PASS |
| Profiles / institutional emails | 3 / 1 | 3 / 1 | PASS |
| Approved / suppressed claim keys | 35 / 20 | 35 / 20 | PASS |

The three registered linked rows remain exact: `CLM-PUB-000019` → Frontiers
duplicate, `CLM-PUB-000020` → Springer conference/in-press lineage, and
`CLM-PUB-000028` → JMIR duplicate. The JMIR preprint is a linked version, not a
fourth registered linked candidate. The Manchester thesis, JMIR article, and
Pharmacogenomics Journal article remain distinct authoritative work types.

## 6. Claim and lifecycle matrix

| Claim group | Exact approved value(s) | Primary provenance | Lifecycle result |
|---|---|---|---|
| Identity | `Faisal Albalwy`; “Assistant Professor of Cybersecurity and researcher focused on trustworthy digital systems” | Taibah current pages + Manchester + canonical publications | approved copy; canonical records still internal only |
| Appointment/affiliation | `Assistant Professor`; `Department of Cybersecurity`; `Taibah University`; `https://www.taibahu.edu.sa/`; exact personal-site/non-official-site notice | current Taibah employee, Arabic employee and department pages; co-branding rules | current values confirmed; no start date or endorsement inferred |
| Contact | `fbalwy@taibahu.edu.sa`; exact encoded mailto subject `Academic website inquiry`; no form/analytics | current Arabic Taibah employee page; contact governance | one email; contact action public independently; no site-side inquiry collection |
| Profiles | exact Scholar URL; `https://orcid.org/0000-0002-2342-2156`; `https://www.taibahu.edu.sa/en/employees/120` | current Taibah outgoing links and profile page | three internal profile records remain non-emitted until complete release |
| Doctorate | `PhD, The University of Manchester`; `2022-04-14`; exact uppercase thesis title | Manchester Research Explorer | confirmed; no other degree published |
| Research | Privacy-preserving health-data sharing; Blockchain security and interoperability; Machine learning for cyber-threat detection | seven publisher-primary publication relationships | 3 themes/7 bindings; no project, system, funding or impact claim |
| Publications | 27 lineages; exact latest five; exact featured four; exact future-issue wording | publishers, DOI registry, Manchester, conflict/selection logs | verified/eligible/internal-only; no record promoted |
| Teaching | the 19 exact titles listed below | `SRC-TCH-001`–`SRC-TCH-010`, approved translation review | titles only; zero occurrences/timetable/student values |
| Leadership | one-year Deputy CEO term in 2023; one-year CEO term in 2024; one-year CEO renewal in 2025 | protected appointing-authority decisions | historical terms only; no current status/duties/outcomes |
| Peer review | IEEE reviewer, 12–14 Feb 2026; MDPI 45 during 2025–2026 (later certificate 14 Aug 2026); ESWA 22 Oct 2023–Jul 2025; FGCS 28 Nov 2023–Jun 2025; JISA five Apr–May 2025 | `SRC-COM-003`–`SRC-COM-008` issuer records | five source-specific records; values never summed; later MDPI certificate controls |
| Community | drug-harms awareness contribution, 8–13 Jul 2023; blockchain technology and entrepreneurship workshop presentation contribution, 9–10 Aug 2023 | `SRC-COM-001/002/009/010` lineages | two privacy-safe lineages; no hours/ID/signature/QR |
| CV | `CV unavailable` in current site | asset/CV contracts | derivative remains `internal_only`; no public file or download claim |
| Privacy | no form; no third-party analytics | governance, source scan, generated candidate | confirmed; no hidden collection or tracking |

Exact teaching titles: Algorithms and Data Structures; Compiler Construction;
Computer Programming; Computer Security; Computer Skills; Cryptography;
Cybersecurity Design Principles; Cybersecurity Fundamentals; Field Training;
Graduation Project I; Graduation Project II; Information Technology Systems
Components; Introduction to Computing; Programming I; Research Project;
Research Seminar; Selected Topics; Software Engineering; Theory of
Computation.

Every governed aggregate record remains `public_disposition=eligible` and
`render_eligibility=internal_only`; evidence/editorial/privacy approvals are
present where governed, while rights approval, QA approval and accountable
public record-owner identity remain deliberately incomplete. No QA-002 action
changes these states.

## 7. Route, module and visitor-copy trace

| Route | Included factual modules | Omitted/held modules | Provenance result |
|---|---|---|---|
| `/` | identity, three themes, featured four, teaching/service snapshots, doctorate/CV state, contact, affiliation notice | project/system stories | all stable-ID and claim-key bindings map to approved facts |
| `/research` | descriptor, three themes, seven evidence bindings, complete-catalogue and inquiry paths | emerging directions, funded projects, systems | publisher abstracts support the limited theme narratives; no impact/deployment inference |
| `/publications` | purpose, featured four, latest five, 27-record catalogue, controls/actions/states/freshness | theme catalogue filter | exact canonical IDs/order and future status; held and linked rows absent |
| `/teaching` | 19 unique titles, privacy boundary, related routes/inquiry | approach/assessment, supervision/student projects | schedule-backed titles only; zero occurrence records |
| `/leadership-service` | 3 historical terms, 5 separate review records, 2 community records | committee service, extra talks, development/memberships | protected primary values minimized and non-additive |
| `/about` | biography, doctorate/thesis, current appointment, selected leadership, CV unavailable, affiliation | recognition and other degrees/history | all approved; no current leadership extrapolation |
| `/contact` | inquiry guidance, one institutional email, three profile destinations, affiliation/privacy | location and alternate channels | email-only; no response, availability or delivery promise |

The manifest reconciles **7 routes**, **56 route modules** (**44 include, 12
omit**), and **7 included shared-interface modules**. The shared header/footer,
404, operational states, publication controls and nine metadata descriptions
use only approved identity, navigation, privacy, discovery and recovery copy.

## 8. Model, fixture and current-dist boundary

Targeted record-level reconciliation established:

- source catalogue IDs and aggregate publication IDs are identical in the same
  27-record order;
- every copied publication field and ordered author identity flag matches;
- latest, featured, course, service, profile and relationship arrays contain no
  unknown, duplicate or orphan ID;
- `metrics` and `projects_and_systems` are empty; teaching occurrences are
  empty;
- the non-emitted promotion fixtures clone the approved aggregate and modify
  lifecycle/approval fields only. The sole relationship wording fallback is
  generic (“Approved theme-publication relationship”) and adds no personal,
  institutional or research fact;
- model guards require verified + publish + public + rights/consent + named
  owner + all approvals + reviewed translation + no correction. The current
  aggregate cannot pass that conjunction.

The current `dist/` contains zero canonical stable IDs, zero DOI strings, zero
publication titles, zero course titles, zero service-record wordings, zero held
JNMES values, zero JSON-LD blocks, and no CV. Research/teaching/service/about/
publications bodies render the approved evidence-gap state. Closed discovery
metadata and the independently approved shared identity/contact shell are not
record emission and do not consume the internal aggregate. Contact exposes
only the one separately governed institutional mail action.

## 9. Metadata, structured data, OG and CV coverage

- Metadata: eight route/404 title-description records are closed constants and
  equal approved `site-ui.md` copy. Canonical/OG URLs use the CI sentinel origin;
  robots are `noindex, nofollow, noarchive, nosnippet`; sitemap is empty.
- Structured data: the component is wired but its model fails closed because
  the integrated site is not public. Current generated JSON-LD count is zero.
- OG: `public/og.png` is 1200×630, 32,565 bytes, text-only, and has SHA-256
  `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6`.
  Its text hierarchy is Faisal Albalwy → Personal academic website →
  Institutional affiliation: Taibah University. No logo, portrait, candidate
  font, endorsement or substantive record appears.
- CV: HTML and PDF hashes exactly match the release manifest. `pdfinfo`,
  ExifTool and qpdf confirm five tagged A4 pages, language `en`, intentional
  title/subject/author/producer fields, deterministic 19 Aug 2026 timestamps,
  no encryption, no form, no JavaScript, and no syntax/stream error. Extracted
  text and all five rendered pages were reviewed: 27 publications, 19 course
  titles, 3+5+2 service records, one email and three profiles reconcile; long
  records and links do not clip or split incorrectly; no internal ID, private
  path, phone, address, student/timetable value, signature, QR, protected image
  or hidden claim is present. The file remains outside `public/` and `dist/`.

## 10. Suppressions and controlled holds

All 20 deterministic suppressions remain absent: other degrees; appointment
history dates; current leadership status; emerging research directions;
funded projects; research systems; publication theme filter; teaching approach;
teaching assessment; supervision records; supervision availability; university
committee service; extra talks; professional development; professional
memberships; recognition; contact location; CV download; other profiles; and
funding/impact metrics.

The following controlled holds are specifically excluded from this PASS:

1. JNMES `CLM-PUB-000002`: unresolved DOI, pagination and stable-source
   conflict; current claimed DOI and PDF URL both return 404. Owner:
   publication curator. QA-007 disposition: remain excluded unless a corrected
   publisher landing page and registered DOI resolve every field.
2. Three registered linked/not-counted rows and the JMIR preprint: remain
   relationships, never independent count items. Owner: publication curator.
3. Profile metrics 625/11/11 and all other platform metrics: source snapshots
   only, not public claims. Owner: content owner/technical link reviewer.
4. Protected schedules, decisions and certificates: facts are minimized into
   approved text; originals, filenames, hashes, signatures, QR and personal
   data remain non-public. Owner: privacy/rights reviewers.
5. CV: factually reconciled but rights/QA/release transition remains pending.
   Owner: QA-007/release authority.
6. Production origin, indexing, sitemap population, hosting logs and live
   crawler behavior: no decision in this package. Owner: later release gates.

## 11. Findings, remediation and QA-007 disposition

| Severity | Finding | Treatment / owner | QA-007 disposition |
|---|---|---|---|
| Blocker | None | — | may proceed only after all other QA prerequisites |
| Controlled hold | JNMES conflict and now-unavailable source URLs | publication curator; no edit | exclude |
| Controlled hold | candidate records and CV lack public lifecycle approvals | accountable owner, rights reviewer, QA-007 | fail closed until append-only promotion |
| Informational | Scholar browser crawler 429; ORCID JavaScript shell; several publisher 403 responses | technical link reviewer; source failure recorded, no aggregator substitution | repeat before release; contradiction threshold unchanged |
| Informational | IIETA and Tech Science depositor fields differ from publisher VOR | publication curator; existing publisher-control decision retained | recheck, do not silently merge |
| Remediated outside QA-002 | compact target size, skip-link focus, mobile-details ARIA and redundant CV-label defects changed the candidate fingerprint twice | QA-003/QA-004; CSS/layout/test only | use current manifest fingerprint |
| Remediated audit support | one integration assertion still expected `<main id="main-content">` after QA-004 correctly added `tabindex="-1"` | QA-002 updated the assertion to require the exact focusable main target; no application/content change | targeted rerun 45/45 and full-suite rerun 56/56 |

## 12. Validation result

The deterministic reconciliation passed every asserted join/count/lifecycle and
generated-output boundary. The focused provenance/model/integration run passed
45/45 tests. After the one stale integration assertion was corrected, the full
pinned verification chain ran against the final report and current candidate
under Node 24.19.0/npm 11.19.0 and passed 56/56 tests. It covered format, lint,
Astro (0 errors, 0 warnings, 0 hints), TypeScript, schemas, build,
security/privacy/analytics/contact/structured/social/release scans, zero high
dependency vulnerabilities, 269 package licences, budgets, reproducibility of
all 17 artifacts, and manifest regeneration. The final manifest fingerprint
remained
`c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8`.

**QA-002 final decision: PASS with controlled holds explicitly excluded.**
This decision completes QA-002 only. It does not begin QA-007, promote data or
the CV, deploy, change DNS, publish production, approve G5, or begin P9.
