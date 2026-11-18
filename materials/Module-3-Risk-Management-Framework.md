# Module 3 Study Guide: Risk Management Framework

Nov 17, 2026 · @Leo

## How to use this guide

Module 3 is the engine room of the exam: every later module builds on the seven RMF steps and the roles that run them. Read one section per pomodoro, then close it and answer its self-check out loud.

| Pomodoro | Topic | Handbook section |
| --- | --- | --- |
| 1 | Risk and SP 800-39 | Intro and A |
| 2 | RMF and the SDLC | B |
| 3 | Roles | C |
| 4 | RMF steps | D |

For drills, flashcards and the timed exam, use [Module 3 Case Files](https://claude.ai/artifact/MY5NLrSVCEDQpGrATMrTUw).

## Pomodoro 1: Risk and SP 800-39

**The scenario.** The agency head asks: "Are we managing risk, or just doing paperwork?" You need NIST's vocabulary, the four-part process and the three tiers.

**Risk** (SP 800-53) is a function of the **adverse impact** if an event happens and the **likelihood** it happens. Three SPs cover the risk-based approach: **SP 800-39** (organization-wide risk management, the flagship FISMA document), **SP 800-37 r2** (the RMF) and **SP 800-30 r1** (conducting risk assessments, Sep 2012). SP 800-39 superseded the original SP 800-30 as the risk management guide.

**The wolf and the sheep.**

| Analogy | Risk factor | Meaning |
| --- | --- | --- |
| Wolf | Threat | Any event that could harm operations, assets, individuals, other organizations or the Nation |
| Sheep | Asset | What you protect |
| Fence | Control | The safeguard |
| Break in the fence | Vulnerability | A weakness a threat source could exploit |
| No shepherd | Predisposing condition | Raises or lowers likelihood, e.g. a hurricane-prone location |

Impact is the magnitude of harm. Likelihood combines the chance a threat is initiated with the chance it causes harm.

**F.A.R.M., the risk management process.** **Frame** sets the context and produces the risk management strategy (assumptions, constraints, risk tolerance, priorities and trade-offs). **Assess** identifies threats and vulnerabilities and estimates likelihood and impact. **Respond** identifies, evaluates, decides on and implements a course of action. **Monitor** verifies compliance, checks that responses still work and spots changes. Information security risk is one part of the agency's broader Enterprise Risk Management program.

**Three tiers.** Tier 1 is the organization (strategic risk: legal, financial, reputational, political, safety, supply chain). Tier 2 is mission and business processes, tied closely to enterprise architecture. Tier 3 is information systems (tactical risk), where controls are selected. Decisions flow down; feedback flows up. Example: the TIC mandate forced architecture redesigns that cost mission projects money.

**Five risk responses.** Accept (within tolerance), Avoid (stop or change the activity), Mitigate (reduce with controls), Share (shift part to a better-qualified organization), Transfer (shift all of it, e.g. GSA shared services).

**Standards harmonization.** SP 800-39 mirrors ISO/IEC 31000, 31010, 27001 and 27005 and AS/NZS ISO 31000:2009, so agencies can meet NIST and ISO with less duplication.

**Self-check before your break**

1. What two factors is risk a function of?
2. Which SP superseded the original SP 800-30?
3. Name the four risk management steps in order.
4. Which tier is mission/business process?
5. What's the difference between sharing and transferring risk?

*Answers: impact and likelihood · SP 800-39 · Frame, Assess, Respond, Monitor · Tier 2 · sharing shifts part, transfer shifts all.*

## Pomodoro 2: RMF and the SDLC

**The scenario.** A program manager plans to "bolt security on after go-live." Show where security belongs in each phase, why the RMF replaced C&A, and how to draw the boundary of what's being authorized.

**From C&A to RMF.** Old Certification & Accreditation was static and checklist-centric, criticized for chasing compliance. The RMF is dynamic: near real-time risk management and ongoing authorization through continuous monitoring. It emphasizes the **selection, implementation, assessment and monitoring of controls** and the authorization of systems. It encourages automation, integrates security into enterprise architecture and the SDLC, links system risk to organization risk through the risk executive (function), and sets accountability for inherited (common) controls. Revision 2 has seven steps; r1 had six.

**Five fundamentals:** organization-wide risk management, the SDLC, system boundaries, control allocation, and roles, with effort matched to the system's importance.

| SDLC phase | Key security activities | RMF steps (r2, new system) |
| --- | --- | --- |
| 1 Initiation | Security planning; categorization (FIPS 199, SP 800-60); business impact assessment (SP 800-34); privacy impact assessment | Prepare, Categorize |
| 2 Development/Acquisition | Risk assessment (SP 800-30); select and document controls (SP 800-53); design security architecture; testing | Select, Implement, Assess begins |
| 3 Implementation/Assessment | Integrate into the environment; assess (SP 800-53A); authorize | Assess, Authorize |
| 4 Operations/Maintenance | Readiness review; configuration management (SP 800-128); continuous monitoring (SP 800-137); reauthorize as required | Monitor |
| 5 Disposal | Transition plan; archive information; sanitize media (SP 800-88); dispose of hardware and software | Monitor task M-7 |

Early integration pays off through cheaper fixes, awareness of **engineering challenges caused by mandatory controls**, reuse of shared services, and timely executive decisions. The book also prints an older table that puts Select in Initiation; the r2 step pages put it in Development/Acquisition.

**System boundaries.** The boundary (same as the authorization boundary) sets the **scope of protection**: the people, processes and technology under your direct control. Set it with categorization, before the security plan. Too big is unwieldy; too small means too many separate systems and higher cost.

**Cloud and net-centric systems.** Dynamic subsystems join or leave over time without a full reassessment if they meet the stated constraints. External subsystems sit outside your control, but FISMA and OMB require providers to meet the same requirements as agencies. When trust is too low, the agency uses compensating controls, accepts more risk, or doesn't use the service.

**FedRAMP** standardizes security assessment, authorization and continuous monitoring for cloud products and services: "do once, use many times," with accredited third party assessment organizations (3PAOs). It's mandatory for low and moderate cloud deployments; the only exception is a private cloud for one organization, fully inside federal facilities.

**Control allocation.** System-specific (one system), common (many systems; inherited by each), hybrid (part of each).

**Self-check before your break**

1. What does the RMF emphasize instead of paperwork?
2. In which SDLC phase are the PIA, BIA and categorization done?
3. In which phase does reauthorization happen?
4. What establishes the scope of protection?
5. At which impact levels is FedRAMP mandatory?

*Answers: selecting, implementing, assessing and monitoring controls · Initiation · Operations/Maintenance · the system boundary · low and moderate.*

## Pomodoro 3: Roles

**The scenario.** Your audit finds a contractor signed an authorization decision "on behalf of" the AO. Is that a finding? Yes, and this section explains why.

**Four roles are inherently governmental** and go to government personnel only: the **Risk Executive (function)**, the **CIO**, the **Senior Information Security Officer** and the **Authorizing Official**. And the one thing an AO can never delegate is **the authorization decision and signing the decision document**.

One person can fill several roles in a small agency, but separation of duties still applies. SDLC roles map across: program manager to system owner, mission owner to AO, system engineers to ISSE.

| Role | What they own | Remember |
| --- | --- | --- |
| Head of Agency (CEO) | Overall responsibility for protecting agency information, including contractor systems; trained staff | Highest-level official |
| Risk Executive (function) | Views system risk organization-wide; risk strategy; forum for all risk sources | A function, can be a council. Government only |
| CIO | Designates the SAISO; policy; resources; FISMA reporting | Government only |
| Information Owner/Steward | Authority over specific information; rules of behavior | May differ from the system owner |
| SAISO / CISO | Carries out the CIO's FISMA duties; heads the security office | Government only |
| Authorizing Official | Accepts risk; approves plans, MOAs/MOUs and POA\&Ms; sets assessor independence; decides when changes need reauthorization | Formerly DAA. Government only |
| AO Designated Representative | Day-to-day authorization work, including the package | Can't make or sign the decision |
| Common Control Provider | Develops, implements, assesses and monitors common controls | Agency-level common controls are authorized by an AO |
| Information System Owner | Life cycle of the system; security plan; access; remediation; assembles the package | Usually the program manager |
| ISSO | Day-to-day operational security of one system | Works closely with the system owner |
| Information Security Architect | Security across the enterprise architecture; allocates controls | Liaison between enterprise architect and ISSE |
| ISSE | Security engineering on the development team | Builds requirements into products |
| Security Control Assessor | Assessment plan (SAP), assessment, severity ratings, report (SAR) | Independence set by the AO |

**Self-check before your break**

1. Name the four government-only roles.
2. What can't the AO delegate?
3. Who assembles the authorization package?
4. Who sets the assessor's independence level?
5. Which role links system-level and organization-level risk?

*Answers: Risk Executive, CIO, SAISO, AO · the authorization decision and its signature · the system owner · the AO · the Risk Executive (function).*

## Pomodoro 4: RMF steps

**The scenario.** You're handed an authorization package: "Did they actually follow the RMF?" Walk every step, its tasks by code, who leads, and what the AO may decide.

The seven steps of SP 800-37 r2: **Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor**. Mnemonic: "People Can Stop Its Attackers And Monitor." Tasks are sequential but iterative, tied to the SDLC, and the effort depends on the system's importance, criticality and categorization. For a **legacy system**, steps 1–3 act as a **gap analysis**; with no gaps and a current authorization, go straight to Monitor.

| Step | Tasks | What to remember |
| --- | --- | --- |
| 0 Prepare (new in r2) | P-1 to P-7 organization level; P-8 to P-18 system level | P-2 strategy incl. risk tolerance · P-5 identify common controls · P-7 org continuous monitoring strategy · P-11 authorization boundary (AO) · P-12 information types (BRM, SP 800-60) · P-15 requirements incl. PIA · P-18 register the system with a unique ID |
| 1 Categorize | C-1 to C-3 | C-1 describe the system · C-2 categorize, record in the security plan · C-3 AO approves (SAOP if PII) |
| 2 Select | S-1 to S-6 | S-1 select from SP 800-53 by impact level · S-2 tailor with justification · S-3 allocate · S-4 document planned implementation · S-5 system monitoring strategy · S-6 AO approves the plan |
| 3 Implement | I-1, I-2 | Implement with enough detail to assess · update to "as-implemented" (a living document) |
| 4 Assess | A-1 to A-6 | A-1 AO picks the assessor · A-2 SAP; AO sets independence · A-3 assess per SP 800-53A · A-4 SAR · A-5 initial remediation · A-6 **POA&M (moved here from Authorize in r2)** |
| 5 Authorize | R-1 to R-5 | R-1 package = **SSP + SAR + POA&M**; SAOP reviews first if privacy info · R-2 risk determination · R-3 risk response · R-4 decision · R-5 report it |
| 6 Monitor | M-1 to M-7 | M-1 changes · M-2 ongoing assessments · M-3 ongoing risk response · M-4 update package · M-5 reporting · M-6 **ongoing authorization** · M-7 **disposal** |

**The authorization decision.** Only the AO can accept risk, and it can't be delegated. The book names two outcomes: **authorization to operate** or **denial**. A reassessment updates the SAR, but the original results are never changed.

**ISCM (SP 800-137)** has six steps: define the strategy, establish the program, implement it, analyze and report, respond, review and update. Tier 1 risk tolerance drives the strategy; data is collected mostly at Tier 3 and rolled up. ISCM is what replaces the every-3-years reauthorization.

**Self-check before your break**

1. Name the seven steps in order.
2. Which task sets the authorization boundary, and who leads it?
3. Where did the POA&M task move in r2?
4. What three documents make up the package?
5. Which SP guides ISCM?

*Answers: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor · P-11, the AO · to Assess (A-6) · SSP, SAR, POA&M · SP 800-137.*

## Handbook questions with answers

Answers checked against the official FITSI answer key; all of them matched. For the SDLC mapping question in Knowledge Check B, the key's answer is: Categorize and Select → Initiation; Implement and Assess → Development/Acquisition; Authorize → Implementation; Monitor → Operation/Maintenance.

| # | Question (short form) | Answer | Why |
| --- | --- | --- | --- |
| Pre 1 | Components of an information system | All of the above | Hardware/software, processes, people |
| Pre 2 | Threats a system faces | All of the above | Environmental, human error, cyber-attack |
| Pre 3 | SDLC phases where security requirements are considered | All four phases | Confirmed by the key |
| Pre 4 | Phase for the PIA, BIA and categorization | Initiation |  |
| Pre 5 | Phase for security reauthorizations | Operations/Maintenance |  |
| Pre 6 | Balancing protection against control cost | Risk management approach |  |
| Pre 7 | Government personnel only | Senior Information Security Officer and Authorizing Official | Also CIO and Risk Executive |
| Pre 8 | Order of the risk management components | Frame, Assess, Respond, Monitor |  |
| Pre 9 | Possible authorization decision outcomes | Authorization to Operate; Not Authorized | Confirmed: only ATO and Not Authorized |
| Pre 10 | Six RMF steps in order | Categorize, Select, Implement, Assess, Authorize, Monitor | r2 adds Prepare |
| Check B | SPs for risk management overview and risk assessment | SP 800-39 and SP 800-30 |  |
| Check B | Four components of risk management | Frame, Assess, Respond, Monitor |  |
| Check B | Example of a Tier 1 risk | Legal, financial, reputational, political, etc. |  |
| Check B | SDLC phase that defines security requirements | Initiation |  |
| Check C | What establishes the scope of protection | System boundaries |  |
| Check C | "Do once, use many times" program | FedRAMP |  |
| Check C | Three control types | System-specific, common, hybrid |  |
| Check C | Role viewing system risk organization-wide | Risk Executive (function) |  |
| Check C | Role for security in enterprise architecture | Information Security Architect |  |
| End 1 | Superseded the original SP 800-30 | SP 800-39 |  |
| End 2 | Links system-level and organization-level risk | Risk Executive (function) |  |
| End 3 | RMF steps 1–3 on legacy systems | Gap analysis |  |
| End 4 | Establishes scope of protection | System boundaries |  |
| End 5 | Factors that influence level of effort | All of the above | Importance, criticality, categorization |
| End 6 | RMF places heavy emphasis on | Selection, implementation and monitoring of controls |  |
| End 7 | Tier 2 addresses risk at | Mission/business process |  |
| End 8 | Early SDLC integration maximizes ROI through | Awareness of engineering challenges caused by mandatory controls |  |
| End 9 | FedRAMP standardizes | Assessment, authorization and continuous monitoring for cloud |  |
| End 10 | SP for ISCM | SP 800-137 |  |
