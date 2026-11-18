# Module 4 Study Guide: Gap Analysis

Nov 17, 2026 · @Leo

## How to use this guide

Module 4 covers RMF steps 1 to 3 in depth. For a new system, they set the requirements; for a legacy system or an outside provider, they reveal the **gap** between the controls in place and the controls needed. Read one section per pomodoro, then answer its self-check from memory.

| Pomodoro | Topic | Handbook section |
| --- | --- | --- |
| 1 | Categorize | A |
| 2 | Adjustments, special information, documentation | A.1, A.2 |
| 3 | FIPS 200 and SP 800-53 fundamentals | B.1, B.2 |
| 4 | Select, tailor and implement | B.3, C |

For drills, flashcards and the timed exam, use [Module 4 Case Files](https://claude.ai/artifact/7c9o7rS4jfzNGJ5ccbCdHV).

## Pomodoro 1: Categorize

**The scenario.** A system is rated Low because it "only holds budget data." Check how its information types were identified, what levels they got, and whether the high water mark was applied.

**RMF Step 1 tasks.** C-1 describe the system (name, unique ID, owner and AO, location, purpose, information types, boundary, laws, architecture, hardware). C-2 categorize it and record the result in the security plan. C-3 review and approve. Related Prepare tasks: P-6 prioritize same-impact systems (after categorization), P-8 mission focus, P-18 register the system in the inventory (moved to Prepare in r2).

**FIPS 199 (Feb 2004)** is the first mandatory FISMA standard. It sets categories for both information and systems based on potential impact. Categories are used **with threat and vulnerability information** to assess risk.

**The three objectives.** Confidentiality: preserving authorized restrictions on access and disclosure, including privacy and proprietary information. Integrity: guarding against improper modification or destruction, including non-repudiation and authenticity. Availability: timely and reliable access to and use of information.

| Level | Key word | What it means |
| --- | --- | --- |
| Low | Limited | Functions still performed but noticeably less effective; minor damage, loss or harm |
| Moderate | Serious | Significant degradation, damage, financial loss or harm; no loss of life |
| High | Severe or catastrophic | Can't perform primary functions; major loss; loss of life or life-threatening injury |

**SP 800-60's four steps.** 1 Identify information types, using the OMB Business Reference Model (4 business areas, 39 lines of business). 2 Select provisional impact levels from SP 800-60 Volume II (Appendix C for management and support types, Appendix D for mission types). 3 Review, adjust and finalize, documenting every change. 4 Assign the system security category. Mission-based types come from services for citizens and mode of delivery; management and support types come from support delivery of services and management of government resources.

Notation: SC = {(confidentiality, impact), (integrity, impact), (availability, impact)}.

**High water mark.** A Low system has all three objectives Low. A Moderate system has at least one Moderate and nothing higher. A High system has at least one High. Example: budget data {L, M, L} plus personnel data {M, M, L} makes a {M, M, L} system, so Moderate.

**Self-check before your break**

1. Name the three Step 1 tasks.
2. What key word goes with each impact level?
3. What's the first step in assigning impact levels?
4. How many business areas and lines of business does the BRM have?
5. {(C, Low), (I, Low), (A, High)}: what's the system level?

*Answers: describe, categorize, review and approve · limited, serious, severe or catastrophic · identify information types · 4 and 39 · High.*

## Pomodoro 2: Adjustments, special information, documentation

**The scenario.** The provisional levels say Low, but the system holds 2 million SSNs and feeds the payroll network. What justifies raising the rating, and what has to be written down?

| Adjustment factor | When it applies |
| --- | --- |
| Aggregation | Harmless pieces become sensitive together. One of the two most common raisers |
| Critical system functionality | Low-impact data whose compromise opens connected or dependent systems. The other common raiser |
| Extenuating circumstances | Public visibility, many dependent systems, replacement cost; e.g. BIA says recover in 4–8 hours but availability was rated lower |
| Public information integrity | Usually Low; at least Moderate for large fraudulent transactions or an intelligence site's page |
| Catastrophic loss of availability | May justify High, based on cost and criticality |
| Large supporting systems | Networks and GSS take the high water mark of the systems they support |
| Critical infrastructure | Follow PPD-21 (replaced HSPD-7); do an interdependency analysis |
| Privacy information | A special factor on confidentiality |
| Trade secrets | At least Moderate confidentiality |

Ratings can change over a life cycle: contract information is Moderate confidentiality during the contract and Low after; policy drafts are more sensitive than retired policy. Document every adjustment and its rationale.

**National security systems.** SP 800-59 defines NSS: intelligence, cryptologic activities, command and control of forces, weapon system equipment, or critical to military or intelligence missions. FISMA 2014 gives NSS to the Secretary of Defense and the DNI. **CNSSI 1253**, SP 800-53's companion, doesn't use the high water mark (C, I and A stay separate, 9 combinations), allows risk-based adjustment, adds control profiles and expects reciprocity.

**HIPAA (SP 800-66 r1, Oct 2008).** Covered entities: healthcare providers, health plans, clearinghouses, Medicare prescription drug card sponsors, and some agencies (HHS, VA). Six Security Rule sections: general rules, administrative, physical and technical safeguards, organizational requirements, and policies/procedures/documentation. Every standard is required; implementation specifications are required or **addressable** (assess, decide, document). NIST guidance is helpful, not mandatory.

**PII (SP 800-122, Apr 2010).** Identify all PII, minimize it, and rate it by the **PII confidentiality impact level**, which differs from FIPS 199's. Six factors: ability to identify, quantity (raise only), data field sensitivity, context of use, obligations to protect, access and location. Safeguards: policies, training, de-identification, access enforcement, mobile limits, transmission encryption, auditing.

**FIPPs.** From the NSTIC (2011); A-130 (2016) lists nine: access and amendment, accountability, authority, minimization, quality and integrity, individual participation, purpose specification and use limitation, security, transparency. **Privacy control families** (800-53 r4 Appendix J, led by the SAOP): AP, AR, DI, DM, IP, SE, TR, UL.

**Documentation.** The SSP follows **SP 800-18 r1** (2006): system name and ID, categorization, rules of behavior, boundary, control selection, plus the research, decisions, rationale and approvals behind the category. Reuse categorization for the BIA, CPIC and EA, system design, contingency planning and interconnection agreements.

**Self-check before your break**

1. Which two factors most often raise a system's rating?
2. What does CNSSI 1253 do instead of the high water mark?
3. What's an addressable HIPAA specification?
4. Which SP covers PII, and is its impact level the same as FIPS 199's?
5. Which SP guides the SSP?

*Answers: aggregation and critical system functionality · keeps C, I and A separate · one you assess, decide on and document · SP 800-122; no · SP 800-18 r1.*

## Pomodoro 3: FIPS 200 and SP 800-53 fundamentals

**The scenario.** The system has its category. What's the floor, and what catalog supplies it?

**FIPS 200 (Mar 2006)** is the second mandatory FISMA standard: minimum security requirements in **17 areas**, met with SP 800-53 controls. The path: categorize with FIPS 199, derive the impact level, apply the matching tailored baseline (Low, Moderate or High). A baseline control that doesn't apply isn't removed; it's marked **not applicable** in the SSP with a justification.

**SP 800-53 r4** has **18 families** with two-letter IDs. Seventeen match FIPS 200; the 18th, **PM Program Management**, works at the organization level and isn't tied to any baseline.

| ID | Family | ID | Family |
| --- | --- | --- | --- |
| AC | Access Control | MP | Media Protection |
| AT | Awareness and Training | PE | Physical and Environmental Protection |
| AU | Audit and Accountability | PL | Planning |
| CA | Security Assessment and Authorization | PS | Personnel Security |
| CM | Configuration Management | RA | Risk Assessment |
| CP | Contingency Planning | SA | System and Services Acquisition |
| IA | Identification and Authentication | SC | System and Communications Protection |
| IR | Incident Response | SI | System and Information Integrity |
| MA | Maintenance | PM | Program Management |

**Control anatomy.** IDs are family plus number (CP-9 is the ninth CP control). Each control has five parts: control, supplemental guidance, enhancements, references, and priority and baseline allocation.

**Control types.** Common, system-specific, hybrid. **Inherited is not a fourth type**: all common controls and the common part of a hybrid are inherited. Good common-control candidates: contingency planning, incident response, training, personnel security, physical and environmental, intrusion detection. Hybrid example: IR-1 with the policy common and procedures system-specific.

**Trustworthiness = functionality + assurance.** Functionality is the features and mechanisms in place. Assurance is confidence they're implemented correctly, operating as intended and producing the desired outcome. Functionality-focused: PE-3, IA-2, SC-13, AC-2. Assurance-focused: CA-2, SA-17, CM-3. Both: RA-5, SC-3, AC-25.

**External services** are used by, but not part of, your systems. The challenges: define them, describe how they're protected, and obtain assurance the risk is acceptable. The catalog itself is revised for experience, changing requirements, new threats and new technologies, through public review.

**Self-check before your break**

1. How many areas in FIPS 200, and families in 800-53 r4?
2. Which family isn't in a baseline?
3. Is "inherited" a control type?
4. What two components make a system trustworthy?
5. What happens to a baseline control that doesn't apply?

*Answers: 17 and 18 · PM · no · functionality and assurance · it's marked N/A with justification, not removed.*

## Pomodoro 4: Select, tailor and implement

**The scenario.** An SSP removed six moderate-baseline controls with no explanation. Tailoring or a finding? Every tailoring decision and its rationale must be in the SSP and approved with it, so unexplained removals are a finding.

**The selection process (four steps, in order).** 1 Select the initial baseline (Low, Moderate, High) from SP 800-53 **Appendix D**. 2 Tailor it, including overlays. 3 Document the decisions and rationale (its own step since r4). 4 Apply it to **new** systems (requirements definition perspective) or **legacy** systems and outside providers (gap analysis perspective). The baseline is a starting point; supplements will likely be needed.

**Tailoring, task S-2 (six steps).** 1 Identify and designate common controls. 2 Apply scoping considerations. 3 Select compensating controls if needed. 4 Assign organization-defined parameter values. 5 Supplement the baseline. 6 Provide additional specification information.

| Scoping consideration | Example |
| --- | --- |
| Allocation and placement | Controls apply only to components that provide that capability |
| Operational/environmental | Mobility, single-user systems, no connectivity, limited-function devices, non-persistence, public access |
| Security objective | A control supporting only C, I or A may drop to a lower baseline if it matches FIPS 199, is backed by a risk assessment, and doesn't weaken protection |
| Technology | Wireless, crypto or PKI controls apply only if that technology is used |
| Mission requirements | No AC-11 session lock or SC-10 disconnect on an air traffic controller console |

**Compensating controls** are used in lieu of a recommended control, only if: chosen from 800-53 (or elsewhere if none fits), with rationale for equivalence and for why the baseline control couldn't be used, and the organization **assesses and formally accepts the risk**.

**Organization-defined parameters** fill in assignment and selection statements; stricter values in law or policy win.

**Supplementing the baseline.** Advanced persistent threat (CM-5(4), SC-26/27/29/30, SC-25/34, SC-7(13)); cross-domain (AC-4 enhancements); mobility (AC-7(2)); highly sensitive information (AC-3(3), AC-3(4), AC-16, IA-4(4), MA-5(4)); application-layer security; legacy components (**SA-22**).

**Overlays** (new in 800-53 r4, template in **Appendix I**) are fully specified, pre-tailored control sets for a mission, environment or technology. They **complement, not replace**, the baseline, reduce ad hoc tailoring, and can be tailored further with AO approval.

**Implementation (Step 3).** I-1 implement the controls; I-2 update the SSP to the as-implemented state. Primary responsibility: the **information system owner** or **common control provider**; support from the information owner, ISSO and ISSE. Use 800-53 supplemental guidance and family-specific SPs (e.g. SP 800-34 r1 for contingency planning), and apply mandatory configurations such as USGCB. The SSP is a living document; reference external documents for common controls.

**Self-check before your break**

1. Name the four steps of control selection.
2. Name the six tailoring steps.
3. What three conditions allow a compensating control?
4. Do overlays replace baselines?
5. Who has primary responsibility for implementing controls?

*Answers: baseline, tailor, document, apply to new or legacy · common, scoping, compensating, parameters, supplement, specification · source, rationale, formal risk acceptance · no, they complement them · the system owner (or common control provider).*

## Handbook questions with answers

Answers checked against the official FITSI answer key; three are corrected (Pre 7, End 5 and Check B.1).

| # | Question (short form) | Answer | Why |
| --- | --- | --- | --- |
| Pre 1 | Three security objectives under FISMA | Confidentiality, Integrity, Availability |  |
| Pre 2 | Systems FIPS 199 applies to | Unclassified and financial systems | Confirmed; FIPS 199 excludes classified/NSS |
| Pre 3 | Where controls are documented | System security plan |  |
| Pre 4 | Order of the RMF | Categorize, Select, Implement, Assess, Authorize, Monitor | Prepare comes first in r2 |
| Pre 5 | Minimum security requirements after categorization | FIPS 200 |  |
| Pre 6 | Three levels of potential impact | Low, Moderate, High |  |
| Pre 7 | Privacy addressed by the standard control catalog | True | Since r4, SP 800-53 includes privacy controls in Appendix J |
| Pre 8 | NOT a type of control | Derived |  |
| Pre 9 | When to use gap analysis | Legacy systems | Also outside providers |
| Pre 10 | Primary responsibility for implementing SSP controls | Information system owner | Or common control provider |
| Check A | Three Step 1 tasks | Describe, categorize, review and approve |  |
| Check A | Categories are used with | Threat and vulnerability information |  |
| Check A | First step to assign impact levels | Identify information types |  |
| Check A | Key words for Low / Moderate / High | Limited / serious / severe or catastrophic |  |
| Check A.1 | Basis for information types | OMB Business Reference Model |  |
| Check A.1 | BRM business areas and lines of business | 4 and 39 |  |
| Check A.1 | NIST document listing types and provisional levels | SP 800-60 |  |
| Check A.1 | Reasons to adjust provisional levels | Aggregation, critical functionality, extenuating circumstances, etc. |  |
| Check A.1 | SP for protecting PII | SP 800-122 |  |
| Check B.1 | 800-37 r2 change in control selection | Process cut from 9 to 6 steps and/or 3-year reauthorization replaced by ongoing authorization |  |
| Check B.1 | Families and IDs | 18 families, two-character IDs |  |
| Check B.1 | FIPS 200 baselines are based on | The FIPS 199 impact level |  |
| Check B.3 | Baselines are defined by | The system's impact level |  |
| Check B.3 | Inheritable controls | Common controls |  |
| Check B.3 | Two components of trustworthiness | Functionality and assurance |  |
| Check B.3 | Control used in lieu of a recommended one | Compensating control |  |
| End 1 | First step to assign impact levels | Identify information type |  |
| End 2 | Inheritable controls | Common controls |  |
| End 3 | Used in lieu of a recommended control | Compensating control |  |
| End 4 | Basis for information types | Business Reference Model |  |
| End 5 | Factors driving level of effort | System importance and criticality | Impact level feeds criticality but isn't the primary driver |
| End 6 | Purposes of overlays | Pre-tailoring for specific situations; reduce ad hoc tailoring |  |
| End 7 | Types and provisional levels | SP 800-60 |  |
| End 8 | Protecting PII | SP 800-122 |  |
| End 9 | Three Categorize tasks | Describe, categorize, review and approve |  |
