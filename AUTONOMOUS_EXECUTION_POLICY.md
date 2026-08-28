# Faisal Albalwy Academic Website — Autonomous Execution Policy

**Status:** Authorized standing instruction  
**Authorized by:** Faisal Albalwy, project owner  
**Authorization date:** 18 August 2026  
**Execution scope:** Phases P1 through P8, ending at Gate G5  
**Excluded scope:** Phase P9, deployment, DNS changes, and post-launch operations

## 1. Standing Authorization

When the project owner gives the start command in Section 8, Codex is authorized to coordinate and execute every dependency-eligible work package from `BRD-001` through `QA-008` without requesting a new prompt or approval between steps. Codex must stop at Gate G5 and must not begin Phase P9.

This policy does not mark any work package complete. A step becomes complete only after its deliverables exist and its acceptance checks pass.

## 2. Execution Loop

For each eligible step, Codex must:

1. Create or revise the step's complete execution prompt and embed its versioned record in the dashboard.
2. Route the work to the exact model and reasoning effort listed in the master plan.
3. Inspect the governing sources and protected files before changing project outputs.
4. Produce the stated deliverables without crossing the step's scope.
5. Run the required validation and record evidence, decisions, tests, and unresolved risks.
6. Mark the step complete only when its acceptance criteria are satisfied.
7. Synchronize the dashboard's embedded execution state, activity history, plan revision, and timestamp.
8. Recalculate dependencies, close an eligible pre-authorized gate, and continue with the next safe step or parallel work group.

Prompt issuance alone never completes a step, satisfies a dependency, or closes a gate.

## 3. Model and Reasoning Routing

The coordinator must use the model and effort specified on each step, including when the route changes between consecutive steps. The current catalogue contains 35 Sol assignments and 32 Terra assignments, with 43 high, 15 xhigh, 8 medium, and 1 low reasoning-effort assignments.

Parallel work is permitted only where the master plan explicitly permits it and where workers own non-overlapping files. Shared schemas, global styles, routing, configuration, and central data files remain under one coordinator.

## 4. Gate Policy

| Gate | Mode           | Rule                                                                                              |
| ---- | -------------- | ------------------------------------------------------------------------------------------------- |
| G0   | Pre-authorized | Close automatically after BRD-009 and the full brand acceptance audit pass.                       |
| G1   | Pre-authorized | Close automatically after STR-002, STR-003, and STR-004 pass.                                     |
| G2   | Pre-authorized | Close automatically after CNT-009 passes and unresolved facts are corrected or suppressed.        |
| G3   | Pre-authorized | Close automatically after DES-005 and its responsive, identity, and accessibility review pass.    |
| G4   | Pre-authorized | Close automatically after BLD-009 and the integrated preview checks pass.                         |
| G5   | Manual stop    | Prepare the release-readiness record, then stop for the project owner's explicit launch decision. |

A pre-authorized gate is not a waiver of quality. If its prerequisites are reopened or invalidated, the gate reopens automatically and downstream work requires revalidation.

## 5. Locked Owner Decisions and Safe Defaults

- The website is English only.
- The official English horizontal Taibah University logo supplied in `ملفات الهوية/الشعار/PDF/الشعار بشكل أفقي باللغة الإنجليزية.pdf` is authorized by the project owner for this personal academic website.
- The university logo is an unmodified affiliation mark; `Faisal Albalwy` remains the primary site nameplate. The logo is not used as a hero focal point, standalone favicon, personal logo, or invented combined lockup.
- Logo use follows the official surface, clear-space, proportion, and color rules. A traceable web derivative may be made from the protected vector master; the master remains unchanged.
- This authorization records the project owner's decision. It does not claim separate legal or institutional clearance from Taibah University.
- Tosh A remains blocked unless explicit public web-embedding rights are found. Alexandria is the licensed fallback.
- Unverified, conflicting, private, or student-identifying facts are suppressed until evidence resolves them.
- The initial contact pathway is institutional email only unless a later verified requirement justifies a form.
- The initial analytics decision is no third-party analytics unless a documented measurement need and privacy review justify one.
- No deployment, production release, custom-domain change, DNS change, or webmaster submission is authorized under this policy.

## 6. Hard-Stop Conditions

Codex may pause before G5 only when it cannot continue safely because of:

- missing essential evidence or credentials with no conservative fallback;
- a destructive or externally consequential action outside P1–P8;
- a material privacy, security, copyright, or licensing risk;
- mutually exclusive owner choices that would substantially change the product and cannot be resolved by the locked defaults above.

The pause report must identify the exact blocked step, checks already performed, safe work completed in parallel, and the smallest decision needed. Ordinary ambiguity, difficult work, a model change, or a quality review is not a reason to return to the owner.

## 7. Completion Boundary

`QA-008` produces an agent-led visitor-journey acceptance and release-readiness record with a known-issue list. It does not represent the owner's production approval. Gate G5 remains open for the owner, and all P9 steps remain locked.

## 8. Reusable Start Command

> Begin the autonomous academic-website run under `AUTONOMOUS_EXECUTION_POLICY.md`. Execute Phases P1 through P8 in dependency order, use each step's specified model and reasoning effort, synchronize the dashboard after every prompt, completion, and gate decision, apply the pre-authorization for Gates G0 through G4, and stop at Gate G5. Do not deploy, change DNS, or begin Phase P9.
