# Module 2 Study Guide: Federal Laws

Nov 17, 2026 · @Leo

## How to use this guide

You are the auditor, and every finding you write needs criteria: the law, policy, standard or directive the agency failed to meet. Module 2 maps where those criteria come from and who is allowed to issue them.

The guide is split into four pomodoros. Read the section, then close it and answer its self-check out loud before your break. The handbook's own questions, with answers, are at the end.

| Pomodoro | Topic | Handbook sections |
| --- | --- | --- |
| 1 | Chain of command | A, part 1 |
| 2 | FISMA and reporting | A, part 2, and B |
| 3 | OMB and DHS | C and D |
| 4 | HHS, GAO and what's new | E, F and G |

For the drills, flashcards and timed final exam, use the interactive page: [Module 2 Case Files](https://claude.ai/artifact/E3nfZKqa34xmn5A91dyMT4).

## Pomodoro 1: Chain of command

**The scenario.** Day one at a new agency, the CIO says OMB, NIST and DHS are "all just guidance." By the end of this pomodoro you can say which law gave which body its power.

**The chain.** The President sets priorities (the President's Management Agenda). Congress passes laws. Each law hands a body a job. That body's output becomes your audit criteria. In 2009 President Obama added two liaisons: the Federal CIO to OMB and the Cybersecurity Coordinator to DHS.

| Law | Gave the job to | The job |
| --- | --- | --- |
| Paperwork Reduction Act (PRA) | OMB | Government-wide information policy; created OIRA; led to Circular A-130 |
| Homeland Security Act (HSA) | DHS | Created DHS and its homeland protection authority |
| HIPAA | HHS | Security standards for health information (the Security Rule) |
| HITECH (in ARRA 2009) | HHS, through OCR | Stronger enforcement and periodic audits |
| Computer Security Act and FISMA | NIST (and NSA) | Standards and guidelines; NIST built the RMF |
| CNSSI No. 1253 | CNSS | Security for national security systems, under CNSS Policy 22 and NSD 42 |

**The laws in order.**

| Date | Law or document | Remember it as |
| --- | --- | --- |
| 1974 | Privacy Act | Oldest; requires a System of Records Notice (SORN) |
| 1980 | Paperwork Reduction Act | Gives OMB policy power |
| 1985 | OMB Circular A-130 | Written to carry out the PRA |
| 1987 | Computer Security Act | First law on computer security; tasked NIST; security plans and training |
| 1996 | Clinger-Cohen Act | ITMRA + Federal Acquisition Reform Act; CPIC; the CIO title |
| Oct 2000 | GISRA | Replaced by FISMA |
| Nov 2002 | Homeland Security Act | FISMA, version 1 |
| Dec 2002 | E-Government Act | FISMA, version 2 (Title III); PIAs in Section 208 |
| Feb 2004 | FIPS 199 | Categorization |
| Mar 2006 | FIPS 200 | Minimum security requirements |
| Dec 2014 | FISMA 2014, FITARA and two cyber acts | The busy month |
| Jul 2016 | A-130 rewritten | Ordered by FISMA 2014 |

**Clinger-Cohen (1996)** requires performance-based management of IT, capital planning and investment control (CPIC), an integrated IT architecture, and gave the agency's senior IRM official the formal title of CIO. **FITARA** (Dec 2014, in the 2015 NDAA) strengthened the CIO's role in CPIC.

**E-Government Act (2002, PL 107-347)** created the Office of E-Gov and a Federal CIO inside OMB, plus the CIO Council. It requires agency IT training programs and annual security reports to Congress. Title III is FISMA. Section 208 requires Privacy Impact Assessments; OMB M-03-22 is the guidance.

**Federal Enterprise Architecture.** An OMB program created to comply with Clinger-Cohen. FEAF v2 (Jan 2013) has 6 reference models. The Business Reference Model supplies the lines of business behind the SP 800-60 information types used in RMF Step 1, Categorize. SP 800-60 still uses the older 39 lines of business in 4 business areas; keep using them until it is revised.

**Self-check before your break**

1. Which law first gave OMB information policy authority?
2. Which law was the first about computer security, and who did it task?
3. Which two acts make up Clinger-Cohen?
4. Which section of the E-Gov Act requires PIAs?
5. Which FEA model feeds SP 800-60?

*Answers: PRA (1980) · Computer Security Act (1987), NIST · ITMRA and the Federal Acquisition Reform Act · Section 208 · the Business Reference Model.*

## Pomodoro 2: FISMA and reporting

**The scenario.** The IG hands you this year's FISMA evaluation. Before you test a control, you need to know what FISMA demands, what changed in 2014, and who reports what, how often.

|  | FISMA 2002 | FISMA 2014 |
| --- | --- | --- |
| Full name | Federal Information Security **Management** Act | Federal Information Security **Modernization** Act |
| Where | Homeland Security Act (Nov 2002) and E-Gov Act Title III (Dec 2002); the law in effect mixes both | PL 113-283, signed 12/18/2014; replaced subchapters II and III |
| Core rule | Agency-wide security program, including contractor systems; annual IG evaluation; report to OMB | Kept the 2002 core |
| What's new | Replaced GISRA | Formal DHS duties; binding operational directives; incident and breach reporting; OMB no longer approves programs annually; A-130 rewrite within a year |

**FISMA 2014's clocks.** Major incident: notify Congress within **7 days**. Data breach: notify Congress within **30 days** and affected people as expeditiously as practicable (the Attorney General, intelligence heads or DHS Secretary may delay notice). An annual major-incident report goes to OMB, DHS, Congress and GAO. Offices of General Counsel must receive incident notices.

**What FISMA told NIST to write.** Categorization standards (FIPS 199), guidelines on information types per category (SP 800-60), and minimum security requirements (FIPS 200). NIST's FISMA Implementation Project adds SP 800-53 (select controls), 800-53A (assess), 800-37 (RMF), 800-137 (monitor) and 800-59 (identify national security systems). NIST's Computer Security Division covers non-national security systems. NIST is part of the **Department of Commerce**.

**CyberScope.** The FISMA reporting system since FY2010, entered with a PIV card through the OMB portal. Three tiers: data feeds from security tools, government-wide security questions, and DHS-led agency interviews (CyberStat, since January 2011). OMB writes the instructions and FAQs; **DHS publishes the metrics**.

| Who | How often | Detail |
| --- | --- | --- |
| CFO Act agencies, data feeds | Monthly | By the 5th calendar day |
| CIOs of larger agencies | Quarterly | Q1 Jan 1–15, Q2 Apr 1–15, Q3 Jul 1–15; no separate Q4 |
| CIOs of smaller agencies | Semi-annually | Since FY18 |
| Small (<6,000 FTE) and micro (<100 FTE) agencies | Annually | Monthly encouraged |
| IGs and SAOPs | Annually | IG metrics use maturity models |
| Annual FISMA report | October 31 | Since FY17 |

Since FY2017, CIO and IG metrics follow the Cybersecurity Framework's five functions. Cross-Agency Priority (CAP) goals come from the GPRA Modernization Act of 2010.

**Policy shifts auditors cite.** With continuous monitoring and ongoing authorization in place, systems no longer need reauthorization every three years. POA&Ms track only weaknesses that will be remediated. The SAOP implements SP 800-53 Appendix J privacy controls and must review each ATO. The agency head signs an agency letter.

**Self-check before your break**

1. Which two acts carried FISMA in 2002?
2. FISMA 2014 formally gave duties to which two bodies?
3. How fast must Congress hear about a major incident? A breach?
4. How often do CFO Act agencies send data feeds, and by which day?
5. Who publishes the FISMA metrics?

*Answers: Homeland Security Act and E-Gov Act · OMB and DHS · 7 days; 30 days · monthly, by the 5th · DHS.*

## Pomodoro 3: OMB and DHS

**The scenario.** Your draft cites "an OMB memo about breaches." Your supervisor sends it back: which memo, and is it still in effect? OMB writes the policy; DHS runs the operation.

**How OMB speaks.** Circulars ("A-" plus a number) are lasting instructions, expected to apply two years or more; the system dates from 1948. Memoranda are numbered M-YY-NN: fiscal year, then sequence. Agencies must follow a memo unless it says otherwise. OMB's Office of E-Government and IT is headed by the Federal CIO; OIRA handles information, statistical and regulatory policy.

**OMB Circular A-130, "Managing Information as a Strategic Resource."** First issued December 1985 to carry out the PRA of 1980. Fully rewritten July 28, 2016, as FISMA 2014 ordered. The main body sets policy, assigns government-wide roles (DHS's are in Section 6b) and defines about 90 terms, including adequate security, federal information system and major information system. Appendix I covers protecting federal information resources, including ongoing authorization. Appendix II covers managing PII. It formalized the OMB/DHS split from M-10-28 (and rescinded that memo) and replaced the term IIF with PII. Laws behind it: Privacy Act, PRA, Computer Security Act, Clinger-Cohen, Government Paperwork Elimination Act (1998), FISMA 2014.

**Roles A-130 requires.** The **SAISO** (most agencies say CISO) runs the agency-wide security program. The **AO** accepts risk and authorizes a system to operate. The **SAOP** owns privacy compliance and privacy risk.

| Memo | Topic | Note |
| --- | --- | --- |
| M-17-12 | Responding to a PII breach | Current; replaced M-07-16 and others |
| M-16-24 | Role of the SAOP | Replaced M-05-08, which created the role |
| M-06-16 | Protecting sensitive agency information | Encryption and logging, after the 2006 VA laptop theft (26.5 million records) |
| M-03-22 | Privacy provisions of the E-Gov Act | PIA guidance |
| M-15-14 | Management and oversight of federal IT | FITARA implementation |
| M-18-12 | Modernizing Government Technology Act | Feb 2018 |
| M-17-09, M-19-03 | High value assets | Managing, then strengthening, the HVA program |
| M-07-18 | Common security configurations in acquisitions | Still in effect |
| M-18-23 | Shifting from low-value to high-value work | Rescinded many old memos |
| M-02-09 | POA&M and GISRA reporting | Replaced M-02-01; don't cite M-02-01 as criteria |

**Privacy law.** The Consolidated Appropriations Act of 2005, Section 522, required a chief privacy officer (now the SAOP), a report to the IG and a biannual third-party review of PII use; the 2008 act made the review "periodic" and allowed it to ride with the FISMA report. The Data Mining Reporting Act of 2007 requires an annual report to Congress on pattern-based data mining.

**Trusted Internet Connections.** Announced November 2007 to consolidate every external connection through an OMB-approved TIC. Twenty agencies became TIC Access Providers, each allowed two locations. DHS runs it, including EINSTEIN 2 intrusion monitoring.

**Secure configurations.** FISMA requires minimally acceptable configurations. FDCC (Windows XP and Vista) was folded into USGCB, created by the CIO Council in FY2010. Scanners check settings with SCAP (SP 800-117 and 800-126).

**DHS under FISMA 2014 §3553(b).** Administers agency security policies for all systems except national security and intelligence systems. Assists OMB, issues binding operational directives, monitors agencies, convenes officials, coordinates government-wide work and runs US-CERT. **Binding operational directives** are compulsory, but not for national security systems or certain DoD and IC systems. Examples: BOD 17-01 (remove Kaspersky), 18-01 (email and web security), 18-02 (high value assets), 19-02 (vulnerability remediation), and Emergency Directive 19-01 (DNS tampering).

**Presidential directives** carry the full force of law and are issued with National Security Council advice. Names by era: PDD (Clinton), NSPD (G. W. Bush), HSPD (Bush and Obama), PSD (Obama), PPD (Obama and Trump). Know HSPD-12 (common ID card, the PIV), PPD-21 (critical infrastructure; revoked HSPD-7) and PPD-41 (cyber incident coordination).

**Self-check before your break**

1. When was A-130 first issued, and when was it rewritten?
2. What's in A-130 Appendix I versus Appendix II?
3. Which memo governs PII breach response?
4. Which systems are exempt from binding operational directives?
5. Which directive created the common federal ID card?

*Answers: Dec 1985; July 28, 2016 · security responsibilities including ongoing authorization; PII · M-17-12 · national security systems and certain DoD and IC systems · HSPD-12.*

## Pomodoro 4: HHS, GAO and what's new

**The scenario.** A hospital asks whether it must follow NIST to satisfy HIPAA. Then GAO's FISCAM appears on your engagement letter.

**HIPAA (1996, PL 104-191).** Title II, Administrative Simplification, directed the Secretary of HHS to set standards for transactions and code sets, privacy, security of electronic PHI and unique identifiers. The Security Rule was published February 20, 2003, with administrative, physical and technical safeguards plus organizational and documentation requirements. NIST SP 800-66 r1 (October 2008) helps implement it, but **HHS does not require NIST**, which leaves a gap. Health information is SP 800-60 type D.14.

**HITECH (part of ARRA 2009).** Strengthened enforcement of the Privacy and Security Rules. Section 13411 requires periodic audits, run by HHS's Office for Civil Rights. It also added EHR adoption incentives, breach notification for unsecured PHI, patients' right to electronic copies of their PHI, and direct liability for business associates such as EHR vendors.

**GAO's FISCAM.** The Federal Information System Controls Audit Manual is a method for auditing IS controls under GAGAS (the Yellow Book). GAO and the PCIE built it; it aligns with the Financial Audit Manual and SP 800-53 and was last updated February 2009. It is **not a standard and cannot be used as criteria** in a Notice of Finding and Recommendation. It is top-down and risk-based, and the **auditor** decides which controls are relevant (under the RMF, the system owner decides with the AO).

| FISCAM piece | What to remember |
| --- | --- |
| Hierarchy | Control categories → critical elements → control activities, then techniques and audit procedures |
| Levels | Entity-wide, system, business process application |
| 5 general control categories | SM security management, AC access controls, CM configuration management, SD segregation of duties, CP contingency planning ("Smart Auditors Can Spot Crooks") |
| Application controls | AS application-level general controls, BP business process (input, processing, output, master data), IN interfaces, DA data management systems |
| Business process objectives | Completeness, accuracy, validity (together, integrity), confidentiality, availability |

**Cybersecurity Framework.** EO 13636 (2013) directed NIST to build a voluntary framework for critical infrastructure. Version 1.0 came out February 12, 2014; version 1.1 (April 2018) added supply chain risk management. Its three parts are the Core, Profiles and Implementation Tiers; the Core holds five functions: Identify, Protect, Detect, Respond, Recover. DHS uses it to structure FISMA metrics.

**Newer laws and orders.** The CISA Act (signed November 16, 2018) created the Cybersecurity and Infrastructure Security Agency within DHS. Others: NIST Small Business Cybersecurity Act (2018), Cybersecurity Act of 2015 (Division N of the 2016 Consolidated Appropriations Act), Cybersecurity Workforce Assessment Act (2015), EO 13800 (agency heads accountable for cyber risk) and EO 13833 (2018, CIO effectiveness).

**NIST updates the book describes.** SP 800-37 r2 adds a **Prepare** step to the RMF and integrates privacy, supply chain risk and the Cybersecurity Framework. SP 800-53 r5 folds privacy controls into the main catalog and makes controls outcome-based. The book calls both drafts; both have since been finalized.

**Book inconsistencies to watch.** FISMA's "S" is Security, not Systems. The Computer Security Act is PL 100-235, not 100-35. A-130 revision years and EO dates differ between the tables and the text. The FY20 reporting memo is called both M-20-01 and M-20-04.

**Self-check before your break**

1. Which law directed HHS to protect electronic health information?
2. Who runs HIPAA audits under HITECH?
3. Can you cite FISCAM as criteria in an NFR?
4. Name FISCAM's five general control categories.
5. What step does SP 800-37 r2 add?

*Answers: HIPAA · HHS's Office for Civil Rights · no · SM, AC, CM, SD, CP · Prepare.*

## Handbook questions with answers

These are the handbook's own questions. Answers checked against the official FITSI answer key; two are corrected (Pre-test 6 and End 10).

| # | Question (short form) | Answer | Why |
| --- | --- | --- | --- |
| Pre-test 1 | Requires capital planning and investment control for IT | Clinger-Cohen Act | Created CPIC |
| Pre-test 2 | Requires agencies to appoint a CIO | Clinger-Cohen Act | Gave the formal CIO title |
| Pre-test 3 | Requires an agency-wide information security program | FISMA 2014 | FISMA's core requirement |
| Pre-test 4 | Requires PIAs for new IT | E-Gov Act, Section 208 | M-03-22 is the guidance |
| Pre-test 5 | Annual IG evaluation of the security program | FISMA 2014 | Or an independent external auditor |
| Pre-test 6 | FISMA 2002 delegated standards for federal systems to | Department of Commerce and Director of OMB | The two FISMA 2002 versions conflict; the key accepts both |
| Pre-test 7 | Established ongoing authorization | A-130, Appendix I | July 2016 rewrite |
| Pre-test 8 | FISMA 2014 assigns duties to (two) | DHS and OMB | Operations and oversight |
| Pre-test 9 | Frequency of CFO Act data feeds | Monthly | By the 5th calendar day |
| Pre-test 10 | Directed HHS to protect electronic health information | HIPAA | 1996, Title II |
| Check A | Gave OMB policy authority | Paperwork Reduction Act | 1980 |
| Check A | Assigned NIST standards and guidelines | FISMA and the Computer Security Act |  |
| Check A | OMB program for identifying business processes | Federal Enterprise Architecture | Its Business Reference Model |
| Check C | Policy framework for information resources management | OMB Circular A-130 |  |
| Check C | Memo on safeguarding against and responding to PII breaches | M-17-12 |  |
| Check C | Initiative for security configuration baselines | USGCB | Replaced FDCC |
| Check C | Reporting tool, and its data feed frequency | CyberScope, monthly |  |
| End 1 | Systems must still be reauthorized every three years (T/F) | False | Ongoing authorization with ISCM |
| End 2 | Protocol for OMB-required vulnerability scanning | SCAP |  |
| End 3 | Post-VA-breach requirements, EXCEPT | Encrypting all server backup tapes | M-06-16 required mobile encryption, two-factor remote access and a 30-minute time-out |
| End 4 | Directive for a standard government-wide ID card | HSPD-12 | The PIV card |
| End 5 | Publishes FISMA reporting metrics annually | DHS |  |
| End 6 | System for submitting FISMA reports | CyberScope | CyberStat is a review session |
| End 7 | List of privacy controls for systems with PII | SP 800-53 r4, Appendix J |  |
| End 8 | Audits private organizations using electronic health systems | HHS | Through OCR, under HITECH |
| End 9 | Memo on PII breaches that replaced earlier memos | M-17-12 |  |
| End 10 | Two officials responsible for controls before authorization | AO and SAOP | AO signs the ATO; SAOP must review it (A-130 App. I) |
| End 11 | FISCAM hierarchy, EXCEPT | Control objectives | Hierarchy is categories, critical elements, activities |
| End 12 | Independence standards FISCAM recommends | Yellow Book | GAGAS |
