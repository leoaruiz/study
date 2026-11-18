# Module 5 Study Guide: Security Assessments

Nov 17, 2026 · @Leo

## How to use this guide

Module 5 is RMF Step 4 through the lens of SP 800-53A: who assesses, how a control is tested, and what the report must say. It's a shorter module, so it fits three pomodoros. Read one section, then answer its self-check from memory.

| Pomodoro | Topic | Handbook section |
| --- | --- | --- |
| 1 | Foundation | A, part 1 |
| 2 | Assessment procedures | A, part 2 |
| 3 | Plan, conduct, report | B and C |

For drills, flashcards and the timed exam, use [Module 5 Case Files](https://claude.ai/artifact/EEggyt3PCLAQbrSj8sh93M).

## Pomodoro 1: Foundation

**The scenario.** You're the security control assessor for a new system. Before touching it, know the Step 4 tasks, who owns them, where assessments happen and how to keep them efficient.

**The core document.** SP 800-53 covers Step 2 (selecting controls); its companion **SP 800-53A** covers Step 4 (assessing them) and supports Step 6. It holds the assessment procedures and objects for every control. **SP 800-115** adds technical testing detail. Every assessment asks whether a control is **implemented correctly, operating as intended and producing the desired outcome**.

| Task | What happens | Primary responsibility |
| --- | --- | --- |
| A-1 | Select the assessor or team | AO or AODR |
| A-2 | Develop, review and approve the assessment plan (SAP) | AO/AODR and the assessor |
| A-3 | Assess the controls | Security control assessor |
| A-4 | Prepare the security assessment report (SAR) | Security control assessor |
| A-5 | Initial remediation and reassessment | System owner or CCP **and** the assessor |
| A-6 | Prepare the POA&M (new to this step in r2) | System owner or CCP |

The pre-test's four-task version: **Prepare → Assess controls → Report → Remediate**.

**Assessments in the SDLC.** Development/Acquisition: design and code reviews, application scanning, regression testing. Operations/Maintenance: ongoing assessments by owners, CCPs, ISSOs, independent assessors, auditors and IGs. Disposal: confirm information is purged. Initiation is the phase **least likely** to need control assessment. **Regression testing** looks for new bugs in existing areas after a change.

**Automation.** **SCAP** improves automated application, verification and reporting of configuration settings. **OCIL**, the Open Checklist Interactive Language, expresses determination statements in a SCAP-compatible format.

**Strategy.** Maximize **common controls** (the pre-test's way to reduce assessment effort), share results across boundaries, and give the organization standard procedures, tools and templates. A repeatable, documented method brings consistency, lower testing risk, faster onboarding and lower cost.

**Assurance case.** A body of evidence organized into an argument demonstrating that a claim about a system is assured. Product assessments are usually done by independent third-party labs; system assessments by developers, owners, assessors, auditors and IGs. Assessors gather evidence; **they never authorize or accept risk**.

**Self-check before your break**

1. Which SP holds the assessment procedures?
2. Who leads A-1, A-3 and A-5?
3. Which SDLC phase is least likely to need assessment?
4. What does OCIL do?
5. What's the best way to reduce assessment effort?

*Answers: SP 800-53A · AO/AODR; assessor; system owner (or CCP) and assessor · Initiation · expresses determination statements for SCAP tools · maximize common controls.*

## Pomodoro 2: Assessment procedures

**The scenario.** Open SP 800-53A to AC-9, Previous Logon Notification. Every procedure is built the same way.

**The sentence to memorize.** An assessment procedure consists of a set of assessment **objectives**, each with an associated set of potential assessment **methods** and assessment **objects**. An assessment objective includes a set of **determination** statements related to the control under assessment.

| Part | Example from AC-9(3) | Role |
| --- | --- | --- |
| Assessment objective | "Determine if…" | What the assessor must decide |
| Determination statements | \[1\] organization defines account parameters; \[2\] defines the time period; \[3\] system notifies the user of changes in that period | Linked to the control text so results trace back to the requirement |
| Methods + objects | Examine policy, design docs, settings, audit records; interview admins and developers; test automated mechanisms | How and against what evidence is gathered |
| Findings | Satisfied (S) or Other than satisfied (O) | The result |

Numbering: AC-9\[1\]…AC-9\[n\] for the base control; AC-9(3)\[1\] is the first objective for AC-9's third enhancement.

**Methods.** **Examine**: reviewing, inspecting, observing, studying or analyzing specifications, mechanisms or activities. **Interview**: discussions with individuals or groups. **Test**: exercising activities or mechanisms under specified conditions to compare actual with expected behavior. "Review" is **not** a method. A single control may need more than one method.

**Objects.** **Specifications** (policies, procedures, plans, designs), **mechanisms** (hardware, software, firmware safeguards), **activities** (protection-related actions that involve people: backups, log reviews, contingency exercises, moving backups offsite) and **individuals**. Account lockout after failed logins is a mechanism, not an activity: no person is involved.

**Depth and coverage.** Depth is rigor and detail; coverage is scope and breadth. Both run **basic, focused, comprehensive** and are set by the organization from its **assurance** requirements.

**Trustworthiness.** Trustworthy systems preserve C, I and A across the full range of threats and operate within defined risk despite disruptions, errors, failures and attacks. Functionality plus assurance equals security capability.

**Self-check before your break**

1. Fill in: objectives, methods, objects, \_\_\_\_ statements.
2. Which is not a method: examine, review, interview, test?
3. Is account lockout an activity or a mechanism?
4. What are the three values of depth and coverage?
5. What determines rigor and scope?

*Answers: determination · review · mechanism · basic, focused, comprehensive · the level of assurance desired.*

## Pomodoro 3: Plan, conduct, report

**The scenario.** Assessment day is three weeks out. Prepare, plan, run it, label every finding, and hand the AO a report that drives the POA&M.

**Preparing to assess.** Understand the organization's operations, the system's architecture and the controls under assessment; identify who owns the common controls; set points of contact; obtain artifacts and prior results to reuse (IG reports, scans, Common Criteria evaluations); meet officials to agree on objectives, rigor and scope (rules of engagement); then develop the plan.

**Selecting assessors.** The two most important factors are **expertise** and **independence**. Independence means impartiality: no real or perceived conflict of interest. The **AO or AODR** sets the required level from the categorization and risk. Independent assessors can come from inside the organization or be contracted.

**Building the security assessment plan (A-2).**

1. Determine which controls and enhancements to include.
2. Select the assessment procedures.
3. Tailor them: methods, objects, depth and coverage.
4. Develop extra procedures for requirements 800-53 doesn't cover.
5. Optimize to cut duplication.
6. Finalize and obtain approval to execute.

**Findings and the SAR (A-3, A-4).** Each determination statement is **Satisfied (S)**, a fully acceptable result, or **Other than satisfied (O)**, a potential anomaly the organization may need to address. The **SAR** documents the **assurance case** and is one of the three documents in the authorization package. An optional assessment summary gives the AO the highlights. Risk determination and acceptance come after, by senior leadership.

**After the report (A-5, A-6).** Prioritize critical systems and the highest-risk deficiencies, remediate, reassess, and update the **SSP (with updated risk assessment), SAR and POA&M**.

**RMF Milestone Checkpoint #4, the auditor's checklist.** Was there a comprehensive plan, reviewed and approved? Was independence considered? Were materials provided and prior results reused? Was the assessment done per the plan, with a SAR? Were the most important weaknesses remediated and reassessed? Were security plans updated?

**Self-check before your break**

1. What are the two key factors in choosing an assessor?
2. Who sets the required independence?
3. Name the six SAP steps.
4. What are the two possible findings?
5. Which documents get updated after the SAR?

*Answers: expertise and independence · the AO or AODR · choose controls, select procedures, tailor, add procedures, optimize, finalize and approve · S and O · SSP with risk assessment, SAR, POA&M.*

## Handbook questions with answers

Answers come from the official FITSI answer key, except Post 10: that page didn't come through in the scan, so its answer is taken from the module text.

| # | Question (short form) | Answer | Why |
| --- | --- | --- | --- |
| Pre 1 | Document with an assessment object for each control | SP 800-53A r4 |  |
| Pre 2 | NOT an activity involving people | Locking accounts after failed logins | Automatic, so a mechanism |
| Pre 3 | NOT an SDLC phase | Innovation |  |
| Pre 4 | Valid assessment method | All of the above | Test, examine, interview |
| Pre 5 | False statement about system assessments | Assessors can authorize risk acceptance | Only the AO accepts risk |
| Pre 6 | Instituted to improve automated assessment | SCAP |  |
| Pre 7 | Order of the four assessment tasks | Prepare, Assess, Report, Remediate |  |
| Pre 8 | Testing whether a change broke unchanged parts | Regression testing |  |
| Pre 9 | More than one method may be needed per control | True |  |
| Pre 10 | Practice that reduces assessment effort | Maximize common controls |  |
| Check A | Task before the assessment; after | Assessment plan; assessment report |  |
| Check A | Testing for new bugs after changes | Regression testing |  |
| Check A | Evidence organized into an argument | Assurance case |  |
| Check A | Fill in the procedure sentence | Objectives; methods; objects; determination |  |
| Post 1 | SP that facilitates control assessments | SP 800-53A |  |
| Post 2 | NOT a testing technique | Review |  |
| Post 3 | Evidence organized into an argument | Assurance case |  |
| Post 4 | Statements that ensure traceability | Determination statements |  |
| Post 5 | Reviewing, inspecting, observing, analyzing | Examine |  |
| Post 6 | Two key factors in choosing an assessor | Independence and expertise |  |
| Post 7 | SDLC phase least likely to need assessment | Initiation |  |
| Post 8 | Rigor and scope set by the level of | Assurance |  |
| Post 9 | Primary responsibility for remediation | Security control assessor and information system owner | AO and CIO support |
| Post 10 | OCIL is used to | Express determination statements in assessment procedures |  |
