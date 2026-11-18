# Module 6 Study Guide: Authorization

Nov 17, 2026 · @Leo

Module 6 is RMF Step 5 and fits two pomodoros. For drills, flashcards and the timed exam, use [Module 6 Case Files](https://claude.ai/artifact/CRQ4BeaD4YjFJ1b89xLSJr).

## Pomodoro 1: Tasks and decisions

**The scenario.** You're auditing a system's ATO. Check the package had the right three documents, only the AO decided, the SAOP reviewed it, and the decision document says what it must.

| Task | What happens | Who |
| --- | --- | --- |
| R-1 | Assemble the package and submit it to the AO | System owner or CCP |
| R-2 | Analyze and determine risk, with SAISO and risk executive input | AO or AODR |
| R-3 | Choose and implement a risk response; explicit acceptance can't be delegated | AO |
| R-4 | Issue the decision; the owner acknowledges and implements the terms | AO |
| R-5 | Report the decision and significant deficiencies | AO or AODR |

Heads-up: the knowledge-check answer key says the first Authorize task is "prepare a POA&M." That's the r1 order; in r2 the POA&M is A-6 and R-1 is the package. Know both.

**The package: SSP + SAR + POA&M.** The **SSP** (owner or CCP) gives requirements and controls in place or planned, with the risk assessment, PIA, interconnection agreements, contingency plan, CM plan, IR plan and monitoring strategy as appendices or references. The **SAR** (assessor) gives results and recommended fixes. The **POA&M** should hold a **robust set of actual weaknesses**, with resources, milestones and scheduled completion dates. Common controls are **included or referenced**. The owner or CCP submits it. Update it when events happen: scans, new threats, post-breach findings, changed mission, system or environment changes.

**Two decisions only.** **Authorization to operate**: risk is acceptable; operate for a set period under terms and conditions. **Denial**: risk is unacceptable and can't be fixed right away; the system isn't placed into operation, and a running system is **halted**. Grounds for denial: the AO finds the risk unacceptable, or the SAOP doesn't approve. PII alone isn't grounds.

**Interim terms.** **IATT** (interim authorization to test): live environment and live data, for testing only, for a set time. **IATO** (interim authorization to operate): still used by some agencies but **not recognized by OMB** (FAQ #33, M-14-04).

**SAOP review.** Required before any ATO (M-14-04; A-130 Appendix I), even when the system has no PII. The SAOP reviews; the AO is the only required approver. The AO can delegate everything except **the decision and its signature**.

**Decision document.** Three mandatory elements: **authorization decision, terms and conditions, termination date**, plus risk executive input (if provided) and SAOP review (if PII). Under ongoing authorization the termination date may be dropped; the AO instead periodically affirms that continued operation is acceptable.

**Self-check before your break**

1. Name the three package documents.
2. What are the only two decisions?
3. What happens to a running system on denial?
4. IATT or IATO: which does OMB not recognize?
5. Name the decision document's three mandatory elements.

*Answers: SSP, SAR, POA&M · ATO, denial · it's halted · IATO · decision, terms and conditions, termination date.*

## Pomodoro 2: Ongoing authorization, reauthorization, type and approaches

**The scenario.** The agency is moving systems to ongoing authorization, deploying one workstation build everywhere, and using another agency's cloud ATO. Which rules apply?

**Ongoing authorization timeline.** OMB **M-14-03** (Nov 2013, continuous monitoring) → NIST supplemental guidance on ongoing authorization (June 2014) → formalized in **A-130** (July 2016), which ended mandatory 3-year reauthorization; NIST's supplement was then canceled. The goal: the AO always knows the current security state and which RMF step to re-execute if risk rises.

**A-130's two conditions** before a system can go ongoing: (1) an initial ATO from a complete, **zero-base review**, with the system in operations/maintenance; (2) an **ISCM program** monitoring all implemented controls at the right rigor and frequency.

**Reauthorization** is **time-driven** (the termination date arrives) or **event-driven** (a significant change). Under ongoing authorization, time-driven reauthorization may not be needed. If you do reauthorize, target only the affected controls and reuse prior results.

| Significant change to the system | Significant change to the environment |
| --- | --- |
| New or upgraded OS, middleware or application | Moving to a new facility |
| Changed ports, protocols or services | New core missions or business functions |
| New or upgraded hardware platform | Credible threat intelligence that you're targeted |
| Changed cryptographic modules or services | New or changed laws, directives or policies |
| Changed security controls |  |

A **new AO is not a trigger**: they review the current package, accept the documented risk and sign a new decision document.

**Type authorization.** An official decision to employ **identical copies** of a system or subsystem in specified environments, e.g. a standard financial system worldwide or a common workstation build. One package covers the archetype plus installation and configuration requirements; site-specific inherited controls (physical, personnel) are authorized separately.

**Three approaches.** **Single**: one senior official responsible and accountable. **Joint**: multiple AOs with a shared interest collaborate on categorization, controls, assessment plan, POA&M and monitoring, and document their agreement. **Leveraged**: an agency accepts another (owning) agency's package; if information is insufficient it **negotiates with the owning organization**, issues its own decision document, and needs the owner's continuous monitoring updates. FedRAMP is an example; DoD calls it reciprocity.

**RMF Milestone Checkpoint #5.** Is there a POA&M reflecting organizational priorities? A complete package? Did the AO's decision reflect the organization's risk strategy? Was the decision conveyed to owners and common control providers?

**Self-check before your break**

1. What are A-130's two conditions for ongoing authorization?
2. What are the two reauthorization drivers?
3. Does a new AO trigger reauthorization?
4. What's a type authorization?
5. In a leveraged authorization with missing information, what's usually done?

*Answers: initial ATO from a zero-base review and an ISCM program · time and event · no · one decision for identical copies in specified environments · negotiate with the owning organization.*

## Handbook questions with answers

All answers come from the official FITSI answer key.

| # | Question (short form) | Answer | Note |
| --- | --- | --- | --- |
| Pre 1 | Authorization approaches | Single, joint, leveraged |  |
| Pre 2 | Mandatory elements of the decision document | Authorization decision / terms & conditions / termination date |  |
| Pre 3 | Results of assessing control implementation | SAR |  |
| Pre 4 | Contents of the authorization package | SSP, SAR, POA&M |  |
| Pre 5 | Operate with live data for testing | IATT |  |
| Pre 6 | Review required before an ATO (2015 guidance) | SAOP |  |
| Pre 7 | Robust set of actual weaknesses | POA&M |  |
| Pre 8 | AO can delegate the decision to the AODR | False |  |
| Pre 9 | Running system on denial | Immediately halted |  |
| Pre 10 | Not recognized by OMB | IATO |  |
| Check A | First task in the Authorization step | Prepare a POA&M | r1 order; in r2 it's A-6 |
| Check A | Document with assessment results for the AO | SAR |  |
| Check A | Package contents | SSP, SAR, POA&M |  |
| Check A | Decision document contents | Decision, terms & conditions, termination date |  |
| Post 1 | Two decision types | Authorize / denial |  |
| Post 2 | NOT a key AO document | IATO |  |
| Post 3 | Grounds for denial | SAOP fails to approve; AO finds risk unacceptable |  |
| Post 4 | Reauthorization drivers | Time and event |  |
| Post 5 | Identical copies in specified environments | Type |  |
| Post 6 | Specific dates for remediation | POA&M |  |
| Post 7 | Common controls in the package | Include or reference their package |  |
| Post 8 | Most likely reauthorization triggers | New server OS; new facility; possibly 3 years since ATO | New AO isn't a trigger |
| Post 9 | Who submits packages | Common control provider and system owner |  |
| Post 10 | Leveraged, insufficient info | Negotiate with the owning organization |  |
