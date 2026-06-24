# FedRAMP Consolidated Rules for 2026

> This datafile contains the Consolidated Rules for FedRAMP in structured machine-readable text. It includes definitions, requirements, recommendations, and key security indicators.

- **Version:** 2026.06.24.01
- **Last updated:** 2026-06-24
- **Source:** FedRAMP/rules `fedramp-consolidated-rules.json`

This is a human-readable rendering of FedRAMP's machine-readable rules datafile. It reorganizes the JSON into prose without changing the substance of any rule. Where the original wording carries legal/compliance weight (rule statements, definitions), it is reproduced faithfully.

---

## How this document is organized

FedRAMP's rules are split into four datasets, each with a three-letter prefix. Every individual item has an ID of the form `PREFIX-SUBSET-XXX` (for requirements) or `PREFIX-XXX` (for definitions, indicators, and controls).

| Dataset | Prefix | What it is |
|---|---|---|
| **Definitions** | `FRD` | Precise meanings for terms used across the rules. When a defined term appears in a rule, the definition is binding. |
| **Requirements** | `FRR` | The actual rules, grouped into topical *families* (e.g. Vulnerability Detection and Response). Each family is split into *subsets* by who the rule applies to. |
| **Key Security Indicators** | `KSI` | Outcome-based security objectives a provider must be able to demonstrate, each mapped to NIST 800-53 controls. |
| **Control parameters** | `CTL` | FedRAMP-specific parameter values and guidance applied on top of NIST SP 800-53 controls. |

### Requirement "force" keywords (RFC 2119 style)

Each requirement carries a *force* that tells you how binding it is:

- **MUST** — mandatory.
- **MUST NOT** — prohibited.
- **SHOULD** — strongly recommended; deviation needs justification.
- **SHOULD NOT** — strongly discouraged.
- **MAY** — optional / permitted.

### Provider Certification Classes

Many rules vary by the provider's **Certification Class** (A, B, C, D). Class A is the lightest-touch / most automated tier and Class D the most rigorous; where a rule says *"varies by class"* below, the per-class wording is listed out.

### Applicability dimensions

Subsets and rules are scoped along four axes:

- **types** — authorization program: `20x` (FedRAMP 20x) and/or `Rev5` (Rev 5 baseline).
- **paths** — `Program` (FedRAMP-managed) and/or `Agency` (agency-sponsored).
- **classes** — which Certification Classes (A–D) the rule reaches.
- **affects** — the responsible party (Provider, FedRAMP, Agencies, Assessor, etc.).

---

## At a glance

- **75** definitions (FRD)
- **228** requirements (FRR) across **17** families
- **46** key security indicators (KSI) across **10** families
- **79** control parameter/guidance entries (CTL) across **14** families

Requirement force breakdown: MUST (153), SHOULD (74), MAY (34), MUST NOT (12), SHOULD NOT (6).

### Requirement families (FRR)

| Code | Family | Rules |
|---|---|---|
| `AFC` | Addressing FedRAMP Communication | 16 |
| `AGU` | Agency Use of FedRAMP Certified Cloud Services | 20 |
| `CCM` | Collaborative Continuous Monitoring | 21 |
| `CDS` | Certification Data Sharing | 20 |
| `CMU` | Cryptographic Module Use | 3 |
| `CPO` | Certification Package Overview | 2 |
| `FRC` | FedRAMP Certification | 21 |
| `IEC` | Incident Evaluation and Communication | 8 |
| `IVV` | Independent Verification and Validation | 15 |
| `MAS` | Minimum Assessment Scope | 5 |
| `MKT` | Marketplace Listing | 12 |
| `REC` | FedRAMP Recognition of Independent Assessment Services | 16 |
| `SCG` | Secure Configuration Guide | 9 |
| `SCN` | Significant Change Notification | 17 |
| `SDR` | Security Decision Record | 2 |
| `VDR` | Vulnerability Detection and Response | 16 |
| `VER` | Vulnerability Evaluation and Reporting | 25 |

### Key Security Indicator families (KSI)

| Code | Family | Indicators |
|---|---|---|
| `CED` | Cybersecurity Education | 1 |
| `CMT` | Change Management | 4 |
| `CNA` | Cloud Native Architecture | 8 |
| `IAM` | Identity and Access Management | 6 |
| `INR` | Incident Response | 3 |
| `MLA` | Monitoring, Logging, and Auditing | 5 |
| `PIY` | Policy and Inventory | 5 |
| `RPL` | Recovery Planning | 4 |
| `SCR` | Supply Chain Risk | 2 |
| `SVC` | Service Configuration | 8 |

---

## Default evidence artifacts

Unless a rule specifies its own artifacts, these default evidence expectations apply.

**For requirements (FRR):**

1. Explanation of how the rule is followed, or an explanation of the reason and resulting risk to customers for not following the rule.
2. Verification that the implementation is appropriate for the rule, or that the reason for not implementing is accepted by a senior official.
3. Validation that the implementation is in place and working as intended, or that the reason for not implementing is accepted by a senior official.
4. Independent verification.
5. Independent validation.

**For key security indicators (KSI):**

1. Explanation of measures (and their objectives) that demonstrate the Key Security Indicator, or an explanation of the reason and resulting risk to customers for not having measures available for that Key Security Indicator.
2. Explanation of the cycle for any measures that are implemented persistently (if applicable).
3. Verification that the measures demonstrate the Key Security Indicator, or that the reason for not having them is accepted.
4. Verification that the automation in place is accurate and sufficient to demonstrate appropriate measures for the Key Security Indicator, or that automation is not necessary for each measure.
5. Validation that the measures are accurately produced and are in place and working as intended, or that the reason for not having them is valid.

---

## FRD — FedRAMP Definitions

*FedRAMP Definitions establish a shared understanding for terms when the plain-language meaning is not precise enough to support consistent use across the rules. When a defined term appears in a rule, the definition is a critical part of that rule and must be followed precisely, even if the term is commonly used differently elsewhere; when no definition exists, the plain-language meaning is expected.*

### All Affected Parties  `FRD-AAP`

All federal entities whose interests are affected directly or are likely to be affected directly in the event of a vulnerability or incident related to federal customer data. This always includes FedRAMP and directly impacted federal customer agencies.

**Tag:** Stakeholder  
**Also written:** all affected parties

### Accepted Vulnerability  `FRD-ACV`

A vulnerability that the provider does not intend to fully mitigate or remediate, OR that has not or will not be fully mitigated or remediated within the maximum overdue period in FedRAMP Vulnerability Detection and Response rules.

**Tag:** Vulnerability  
**Also written:** accepted vulnerability, accepted vulnerabilities

### Adaptive Change  `FRD-ADP`

A type of significant change that does not routinely recur and does not introduce substantive potential security risks that need to be assessed in depth.

**Tag:** Significant Changes  
**Also written:** adaptive, adaptive change, adaptive changes

### Advisor  `FRD-ADV`

An entity that helps a provider understand, prepare for, or maintain FedRAMP Certification without replacing the provider's responsibility or the assessor's independence.

**Tag:** Stakeholder  
**Also written:** advisor, advisors

### Agency  `FRD-AGY`

Has the meaning given in 44 U.S. Code § 3502 (1), which is "any executive department, military department, Government corporation, Government controlled corporation, or other establishment in the executive branch of the Government (including the Executive Office of the President), or any independent regulatory agency, but does not include—(A) the Government Accountability Office; (B) Federal Election Commission; (C) the governments of the District of Columbia and of the territories and possessions of the United States, and their various subdivisions; or (D) Government-owned contractor-operated facilities, including laboratories engaged in national defense research and production activities."

**Tag:** Stakeholder  
**Also written:** agency, agencies

### All Necessary Assessors  `FRD-ANA`

All entities who participate in the FedRAMP assessment of a cloud service offering in the context of a FedRAMP Certification. This always includes FedRAMP and any FedRAMP Recognized independent assessor contracted by a provider to perform a FedRAMP assessment.

**Tag:** Stakeholder  
**Also written:** all necessary assessors

### All Necessary Parties  `FRD-ANP`

All entities whose interests are affected directly by activity related to a specific cloud service offering in the context of FedRAMP Certifications. This always includes FedRAMP and any agency customer who is using the cloud service offering, but may include additional parties depending on agreements made by the cloud service provider (such as consultants or independent assessors). Potential agency customers or third-party cloud service providers should also be included in most cases but this is not a mandatory requirement under FedRAMP because the cloud service provider may choose who they wish to do business with.

**Tag:** Stakeholder  
**Also written:** all necessary parties

### Artifacts  `FRD-ART`

Security-related materials that supply information regarding or evidence of functions, policies, decisions, procedures, operations, or other such activities, for the purposes of obtaining and maintaining a FedRAMP Certification. All such artifacts are considered FedRAMP Certification Data and are included in the FedRAMP Certification Package.

**Tag:** Certification  
**Also written:** artifact, artifacts

### Assessor  `FRD-ASR`

An assessor that performs assessment, verification, or validation activities for a cloud service offering seeking to obtain or maintain FedRAMP Certification; FedRAMP is the final assessor for FedRAMP Certification, but FedRAMP Recognized independent assessment services are typically also utilized.

**Tag:** Stakeholder  
**Also written:** assessor, assessors

### Certification Class Change  `FRD-CCC`

A type of significant change that is likely to change the FedRAMP Certification class for the entire cloud service offering (e.g. from Class B to Class C or from Class D to Class C).

**Tag:** Significant Changes  
**Also written:** certification class change, certification class changes

### Certification Class  `FRD-CCL`

The category of assurance that a cloud service offering supplies to federal government customers following FedRAMP Practices, increasing from minimal assurance at Class A to significant assurance at Class D; currently available categories are Class A, B, C, or D.

**Tag:** Certification  
**Also written:** Certification Class, Certification Classes

### Certification Profile  `FRD-CPF`

The combination of a FedRAMP Certification Type (Rev5 or 20x), FedRAMP Certification Path (Program or Agency), and FedRAMP Certification Class (A, B, C, or D) for a cloud service offering.

**Tag:** Certification  
**Also written:** Certification Profile, Certification Profiles

### Certification Path  `FRD-CPH`

The underlying source of the FedRAMP Certification, either from a federal agency sponsored authorization to operate or directly from FedRAMP itself. The agency path is a legacy path that is only available for FedRAMP Rev5 and still requires review and approval from FedRAMP.

**Tag:** Certification  
**Also written:** Certification Path, Certification Paths

### Certification Data  `FRD-CRD`

The collective information required by FedRAMP for initial and ongoing FedRAMP Certification of a cloud service offering, including the FedRAMP Certification Package.

**Tag:** Certification  
**Also written:** certification data

### Certification Package  `FRD-CRP`

Has meaning from 44 USC § 3607 (b)(8) given to "authorization package", which is "the essential information that can be used by an agency to determine whether to authorize the operation of an information system or the use of a designated set of common controls for all cloud computing products and services [certified] by FedRAMP."

**Tag:** Certification  
**Also written:** certification package, certification packages

### Cloud Service Offering  `FRD-CSO`

A specific, packaged cloud computing product or service supplied by a cloud service provider for use by customers, that is the subject of a FedRAMP Certification.

**Also written:** cloud service offering, cloud service offerings

### Certification Type  `FRD-CTY`

The form of assurance that a cloud service offering supplies to federal government customers following FedRAMP Practices, either Rev5 or 20x. Rev5 follows a legacy approach based primarily on documented plans while 20x follows a modern approach based primarily on measured outcomes.

**Tag:** Certification  
**Also written:** Certification Type, Certification Types

### Debilitating Customer Effect  `FRD-DCE`

An unwanted customer effect that interrupts use of the cloud service for most users or compromises the integrity or confidentiality of most federal customer data. If the adverse customer effect is unknown then it should be treated as if it is debilitating until proven otherwise.

**Tag:** Customer Effect  
**Also written:** debilitating customer effect, debilitating customer effects

### Disruptive Customer Effect  `FRD-DCF`

An unwanted customer effect that interrupts use of the cloud service for many users for less than 24 hours, or that compromises the integrity or confidentiality of large amounts or many types of federal customer data.

**Tag:** Customer Effect  
**Also written:** disruptive customer effect, disruptive customer effects

### Drift  `FRD-DFT`

Changes to information resources that cause deviations from the intended and assessed state; common forms of drift include changes to configurations, deployed software, privileges, running processes, and availability.

**Also written:** drift, drifts, drifting

### Deterministic Telemetry  `FRD-DTM`

Verifiable data collected directly from an authoritative source that represents a factual and reproducible observation of the attributes of a system such as the system's state, configuration, or behavior.

**Also written:** deterministic telemetry

### Federal Customer Data  `FRD-FCD`

All electronic information, content, and materials that an agency or its authorized users upload, store, or otherwise supply to a cloud service for processing or storage. This does NOT include account information, service metadata, analytics, telemetry, or other similar metadata generated by the cloud service provider.

**Also written:** federal customer data

### FedRAMP Certification Report  `FRD-FCR`

A report that is produced by FedRAMP documenting the results of a FedRAMP Certification assessment. This report is typically produced after the initial FedRAMP Certification assessment on the Program Certification Path and updated as necessary during ongoing FedRAMP Certification, but may be produced at any time by FedRAMP as part of ongoing FedRAMP Certification activities for any cloud service offering (such as corrective action). Cloud service offerings must include these reports in their FedRAMP Certification Package.

**Tag:** Certification  
**Also written:** FedRAMP Certification Report, FedRAMP certification report, certification report

### FedRAMP Certified  `FRD-FCT`

The status of a cloud service offering that has received FedRAMP Certification and meets the legal requirement to be FedRAMP authorized.

**Tag:** Certification  
**Also written:** FedRAMP Certified, FedRAMP certified, certified, FedRAMP authorized, FedRAMP Authorized, authorized

### FedRAMP Independent Assessment  `FRD-FIN`

An independent verification and validation assessment, performed by a FedRAMP Recognized independent assessment service or FedRAMP following FedRAMP rules. These assessments are typically first performed to obtain an initial FedRAMP Certification then repeated on an annual basis to maintain FedRAMP Certification.

**Also written:** FedRAMP independent assessment, FedRAMP independent assessments

### Final Incident Report (FIR)  `FRD-FIR`

A final report after recovery from an incident that is supplied by FedRAMP Certified cloud service providers to FedRAMP and agency customers, following FedRAMP Incident Evaluation and Response rules.

**Tag:** Incident  
**Also written:** final incident report, final incident reports, FIR, FIRs

### Fully Mitigated Vulnerability  `FRD-FMV`

A vulnerability where the likelihood of exploitation or Potential Agency Impact N-rating has been reduced from the original evaluation until either are negligible, but the vulnerability is still detected.

**Tag:** Vulnerability  
**Also written:** fully mitigated vulnerability, fully mitigated vulnerabilities, fully mitigate vulnerabilities

### FedRAMP Practices  `FRD-FPR`

The security measures, safeguards, precautions, procedures, activities, policies, capabilities, mechanisms, etc. that are expected to be in place by FedRAMP to demonstrate that information resources are properly protected, expressed in FedRAMP 20x Key Security Indicators or FedRAMP Rev5 Controls and supplemented by FedRAMP rules.

**Also written:** FedRAMP Practice, FedRAMP Practices

### False Positive Vulnerability  `FRD-FPV`

A detected vulnerability that is not actually present in an exploitable state in the information resource

**Tag:** Vulnerability  
**Also written:** false positive vulnerability, false positive vulnerabilities

### FedRAMP Recognized  `FRD-FRA`

The status of independent assessment services that are recognized by FedRAMP to perform assessment activities on behalf of FedRAMP for cloud service offerings seeking to obtain or maintain FedRAMP Certification.

**Also written:** FedRAMP Recognized, FedRAMP Recognition

### FedRAMP Reportable Incident  `FRD-FRI`

An incident that affects the confidentiality or integrity of federal customer data or is likely to affect the confidentiality or integrity of federal customer data.

**Tag:** Incident  
**Also written:** FedRAMP Reportable Incident, FedRAMP Reportable Incidents

### FedRAMP Security Inbox  `FRD-FSI`

An email address that follows the FedRAMP Security Inbox rules.

**Also written:** security inbox, security inboxes, FSI

### Handle  `FRD-HAN`

Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.

**Also written:** handle, handles, handled, handling

### Initial FedRAMP Assessment  `FRD-IFA`

The first full assessment of a cloud service offering obtaining FedRAMP Certification, coordinated by the provider with all necessary assessors, that results in a FedRAMP Certification.

**Tag:** Assessment  
**Also written:** initial FedRAMP assessment, IFRA

### Initial Incident Report (IIR)  `FRD-IIR`

An initial report about an incident that is supplied by FedRAMP Certified cloud service providers to FedRAMP and agency customers, following FedRAMP FedRAMP Incident Evaluation and Response rules.

**Tag:** Incident  
**Also written:** initial incident report, initial incident reports, IIR, IIRs

### Initial Certification  `FRD-INC`

The first FedRAMP Certification of a cloud service offering based on the applicable FedRAMP Practices.

**Tag:** Certification  
**Also written:** initial certification, initial certifications

### Incident  `FRD-INT`

Has the meaning given in 44 USC § 3552 (b)(2) which is "an occurrence that (A) actually or imminently jeopardizes, without lawful authority, the integrity, confidentiality, or availability of information or an information system; or (B) constitutes a violation or imminent threat of violation of law, security policies, security procedures, or acceptable use policies."

**Tag:** Incident  
**Also written:** incident, incidents

### Information Resource  `FRD-IRS`

Has the meaning from 44 USC § 3502 (6): "information and related resources, such as personnel, equipment, funds, and information technology." This includes any aspect of the cloud service offering, both technical and managerial, including everything that makes up the business of the offering from non-machine-based information resources like organizational policies, procedures, employees, etc. to machine-based information resources like hardware, software, cloud services, code, etc.

**Tag:** Information Resource  
**Also written:** information resource, information resources

### Internet-Reachable Vulnerability (IRV)  `FRD-IRV`

A vulnerability in a machine-based information resource that might be exploited or otherwise triggered by a payload originating from a source on the public internet.

**Tag:** Vulnerability  
**Also written:** internet-reachable vulnerability, internet-reachable vulnerabilities, IRV, IRVs, NIRV, NIRVs

### Known Exploited Vulnerability (KEV)  `FRD-KEV`

Has the meaning given in CISA Binding Operational Directive 26-04, which is any vulnerability identified in CISA's Known Exploited Vulnerabilities catalog.

**Tag:** Vulnerability  
**Also written:** known exploited vulnerability, known exploited vulnerabilities, KEV, KEVs

### Likely Exploitable Vulnerability (LEV)  `FRD-LEV`

A vulnerability that is not fully mitigated AND is reachable by a likely threat actor; AND a likely threat actor with knowledge of the vulnerability would likely gain unauthorized access, cause harm, disrupt operations, or otherwise have an undesired adverse impact within the cloud service offering by exploiting the vulnerability.

**Tag:** Vulnerability  
**Also written:** likely exploitable vulnerability, likely exploitable vulnerabilities, LEV, LEVs, NLEV, NLEVs

### Likely  `FRD-LKY`

A reasonable degree of probability based on context.

**Also written:** likely, likelihood

### Machine-Based (Information Resources)  `FRD-MBI`

Any information technology information resource—including systems, processes, software, hardware, services, cloud-native capabilities, and any other such capability, component, or resource—that relies primarily on mechanical or electronic devices (i.e. computers) for operation.

**Tag:** Information Resource  
**Also written:** machine-based, machine based

### Minimal Customer Effect  `FRD-MCE`

An unwanted customer effect that is only noticeable by some users. This includes minor inconveniences such as reduced performance.

**Tag:** Customer Effect  
**Also written:** minimal customer effect, minimal customer effects

### Machine-Generated  `FRD-MGN`

Automatically produced by a computer process, application, or other mechanism without the intervention or manipulation of a human during production.

**Also written:** machine-generated

### Machine-Readable  `FRD-MRD`

Has the meaning from 44 U.S. Code § 3502 (18) which is "the term "machine-readable", when used with respect to data, means data in a format that can be easily processed by a computer without human intervention while ensuring no semantic meaning is lost"

**Also written:** machine-readable

### Narrow Customer Effect  `FRD-NCE`

An unwanted customer effect that interrupts use of the cloud service for some users for less than 12 hours, or that compromises the integrity or confidentiality of an extremely limited amount and type of federal customer data.

**Tag:** Customer Effect  
**Also written:** narrow customer effect, narrow customer effects

### Ongoing Certification Report (OCR)  `FRD-OCR`

A regular report that is supplied by FedRAMP Certified cloud service providers to agency customers, following FedRAMP Collaborative Continuous Monitoring rules.

**Also written:** ongoing certification report, OCR, OCRs

### Overdue Vulnerability  `FRD-ODV`

A vulnerability that the provider intends to fully mitigate or remediate but has not or will not do so within the time frames recommended or required by FedRAMP.

**Tag:** Vulnerability  
**Also written:** overdue vulnerability, overdue vulnerabilities

### Ongoing Incident Report (OIR)  `FRD-OIR`

A recurring report about an ongoing incident that is supplied by FedRAMP Certified cloud service providers to FedRAMP and agency customers, following the FedRAMP Incident Evaluation and Response rules.

**Tag:** Incident  
**Also written:** ongoing incident report, ongoing incident reports, OIR, OIRs

### Ongoing Certification  `FRD-ONC`

The continued FedRAMP Certification of a cloud service offering based on the applicable FedRAMP Practices.

**Tag:** Certification  
**Also written:** ongoing certification, ongoing certifications

### Privileged Account  `FRD-PAC`

An account with elevated privileges that enables administrative functions over some aspect of the cloud service offering that may affect the confidentiality, integrity, or availability of information beyond those given to normal users; levels of privilege may vary wildly.

**Tag:** Accounts  
**Also written:** privileged account, privileged accounts

### Potential Agency Impact  `FRD-PAI`

The estimated cumulative effect of unauthorized access, disruption, harm, or other adverse impacts to all agencies using the cloud service that are likely to result from security incidents or the exploitation of vulnerabilities in the cloud service offering; as estimated following appropriate FedRAMP rules to calculate the Potential Agency Impact N-rating (PAIN).

**Also written:** potential agency impact, potential agency impacts, PAIN, Potential Agency Impact N-rating

### Persistently  `FRD-PER`

Occurring in a firm, steady way that is repeated over a long period of time in spite of obstacles or difficulties. Persistent activities may vary between actors, may occur irregularly, and may include interruptions or waiting periods between cycles. These attributes of persistent activities should be intentional, understood, and documented; the status of persistent activities will always be known.

**Also written:** persistently, persistent

### Persistent FedRAMP Assessment  `FRD-PFA`

Follow-on assessments of a cloud service offering focused on Key Security Indicators, coordinated by the provider with all necessary assessors, to maintain FedRAMP Certification or change its FedRAMP Certification class.

**Tag:** Assessment  
**Also written:** persistent FedRAMP assessment, PFRA

### Partially Mitigated Vulnerability  `FRD-PMV`

A vulnerability where the likelihood or Potential Agency Impact N-rating has been reduced from the original evaluation but the risk of exploitation still exists and the vulnerability is still detected.

**Tag:** Vulnerability  
**Also written:** partially mitigated vulnerability, partially mitigated vulnerabilities, partially mitigate vulnerabilities

### Promptly  `FRD-PRO`

Without unnecessary delay.

**Also written:** promptly, prompt

### Provider  `FRD-PRV`

The cloud service provider responsible for a cloud service offering in the context of FedRAMP Certification.

**Tag:** Stakeholder  
**Also written:** provider, providers, cloud service provider, cloud service providers

### Quarterly Review  `FRD-QTR`

A regular synchronous meeting hosted by a FedRAMP Certified cloud service provider for agency customers, following FedRAMP Collaborative Continuous Monitoring rules.

**Tag:** Certification  
**Also written:** quarterly review, quarterly reviews

### Regularly  `FRD-RGL`

Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different activities.

**Also written:** regularly, regular

### Remediated Vulnerability  `FRD-RMV`

A vulnerability that has been neutralized or eliminated and is no longer detected.

**Tag:** Vulnerability  
**Also written:** remediated vulnerability, remediated vulnerabilities, remediate vulnerabilities

### Responsibly  `FRD-RSP`

In a way that shows that you have good judgment and the ability to act correctly and make decisions on your own.

**Also written:** responsibly

### Routine Recurring Change  `FRD-RTR`

The type of significant change that regularly and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.

**Tag:** Significant Changes  
**Also written:** routine recurring, routine recurring change, routine recurring changes

### Security Category  `FRD-SCT`

Has the meaning from NIST FIPS 199, which is "The characterization of information or an information system based on an assessment of the potential impact that a loss of confidentiality, integrity, or availability of such information or information system would have on organizational operations, organizational assets, or individuals." Security categories are often referred to as "impact levels" and include Low, Moderate, and High.

**Also written:** security category, security categories, impact level, impact levels

### Security Decision Record (SDR)  `FRD-SDR`

A persistently maintained, verified, and validated record of the security decisions made by a provider over the lifecycle of a cloud service offering. The Security Decision Record replaces the traditional System Security Plan and documents how applicable FedRAMP Practices are addressed, including implementation rationale, resulting customer risk, assessment findings, and supporting artifacts.

**Also written:** security decision record, security decision records, SDR

### Significant Change  `FRD-SGC`

Has the meaning given in NIST SP 800-37 Rev. 2 which is "a change that is likely to substantively affect the security or privacy posture of a system."

**Tag:** Significant Changes  
**Also written:** significant change, significant changes

### Top-Level Administrative Account  `FRD-TLA`

The most privileged account with the highest level of access within a cloud service offering for a customer organization, typically with complete control over all aspects of the cloud service offering, including managing resources, users, access, privileges, and the account itself.

**Tag:** Accounts  
**Also written:** top-level administrative account, top-level administrative accounts

### Third-Party Information Resource  `FRD-TPR`

Any information resource that is not entirely included in the Minimum Assessment Scope for the cloud service offering obtaining FedRAMP Certification.

**Tag:** Information Resource  
**Also written:** third-party information resource, third-party information resources

### Trust Center  `FRD-TRC`

A secure repository or service used by cloud service providers to store and share FedRAMP Certification Data. Trust centers are the complete and definitive source for FedRAMP Certification Data and must follow the FedRAMP Certification Data Sharing rules to be FedRAMP-compatible.

**Also written:** trust center, trust centers

### Transformative Change  `FRD-TRF`

The type of significant change that introduces substantive potential security risks that are likely to affect existing risk determinations and must be assessed in depth.

**Tag:** Significant Changes  
**Also written:** transformative, transformative change, transformative changes

### Vulnerability Detection  `FRD-VLD`

The systematic process of discovering and identifying security vulnerabilities in information resources through assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, supply chain monitoring, and other capabilities. This process includes the initial discovery of a vulnerability's existence and the determination of affected information resources within a cloud service offering.

**Tag:** Vulnerability  
**Also written:** vulnerability detection, detect vulnerabilities, detect, detection, detected

### Validation  `FRD-VLN`

Confirmation through objective evidence that implemented security capabilities and related certification data are suitable for their intended FedRAMP Certification use and support the expected security outcomes for a cloud service offering.

**Also written:** validation, validate, validated

### Vulnerability Response  `FRD-VLR`

The systematic process of tracking, evaluating, mitigating, monitoring, remediating, assessing exploitation, reporting, and otherwise managing detected vulnerabilities.

**Tag:** Vulnerability  
**Also written:** vulnerability response, respond to vulnerabilities, respond, response, responded

### Verification  `FRD-VRF`

Confirmation through objective evidence that specified FedRAMP Practices have been fulfilled for a cloud service offering.

**Also written:** verification, verify, verified

### Vulnerability  `FRD-VUL`

Has the meaning given to "security vulnerability" in 6 USC § 650 (25), which is "any attribute of hardware, software, process, or procedure that could enable or facilitate the defeat of [...] management, operational, and technical controls used to protect against an unauthorized effort to adversely affect the confidentiality, integrity, and availability of an information system or its information." This includes gaps in Rev5 Controls and 20x Key Security Indicators, software vulnerabilities, misconfigurations, exposures, weak credentials, insecure services, and all other such potential weaknesses in protection (intentional or unintentional).

**Tag:** Vulnerability  
**Also written:** vulnerability, vulnerabilities

---

## FRR — FedRAMP Requirements

Each family below opens with its purpose and effective dates, then lists every rule. Rule IDs follow the pattern `FAMILY-SUBSET-CODE`.

### AFC — Addressing FedRAMP Communication

*The Addressing FedRAMP Communication rules (formerly FedRAMP Security Inbox) ensure FedRAMP can reliably contact the security and compliance staff responsible for every FedRAMP-authorized cloud service offering. These rules also set expectations for urgent communications, response time testing, and routing important messages separately from general support or customer service channels.*

**Effective:** status: required; Consolidated Rules for 2026; obtain by 2026-01-05; maintain by 2026-01-05; grace until 2026-07-01.

**Subsets in this family:**

- **FRP** — FedRAMP Responsibilities: These rules apply to FedRAMP when communicating with cloud service providers.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: FedRAMP
- **CSO** — General Provider Responsibilities: These rules apply to providers with any type of FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset FRP — FedRAMP Responsibilities

##### Verified Emails  `AFC-FRP-VRE`

*Affects: FedRAMP*

FedRAMP MUST send messages to cloud service providers using an official @fedramp.gov or @gsa.gov email address with properly configured Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication Reporting and Conformance (DMARC) email authentication.

**Force:** MUST

> **Note:** Anyone at GSA can send email from @fedramp.gov or @gsa.gov - FedRAMP team members will typically have "FedRAMP" or "F20B" in their name but this is not universal or enforceable. The nature of government enterprise IT services makes it difficult for FedRAMP to isolate FedRAMP-specific team members with enforceable identifiers.

**Defined terms used:** Provider

---

##### Criticality Designators  `AFC-FRP-CDS`

*Affects: FedRAMP*

FedRAMP MUST convey the criticality of the message in the subject line, IF the message requires an elevated reaction, using one of the following designators:

- **Emergency:** There is a potential incident or crisis such that FedRAMP requires an extremely urgent reaction; emergency messages will contain aggressive timeframes for reaction and failure to meet these timeframes will result in corrective action.
- **Emergency Test:** FedRAMP requires an extremely urgent reaction to confirm the functionality and effectiveness of the FedRAMP Security Inbox; emergency test messages will contain aggressive timeframes for reaction and failure to meet these timeframes will result in corrective action.
- **Important:** There is an important issue that FedRAMP requires the cloud service provider to address; important messages will contain reasonable timeframes for reaction and failure to meet these timeframes may result in corrective action.

**Force:** MUST

> **Note:** Messages sent by FedRAMP without one of these designators are considered general communications and do not require an elevated reaction; these may be resolved in the normal course of business by the cloud service provider.

**Defined terms used:** FedRAMP Security Inbox, Incident, Provider

---

##### Use FedRAMP_Security Email in Emergencies  `AFC-FRP-UFS`

*Affects: FedRAMP*

FedRAMP MUST send Emergency and Emergency Test designated messages from <fedramp_security@gsa.gov> OR <fedramp_security@fedramp.gov>.

**Force:** MUST

---

##### Public Notice of Emergency Tests  `AFC-FRP-PNT`

*Affects: FedRAMP*

FedRAMP MUST post a public notice at least 10 business days in advance of sending an Emergency Test message; such notices MUST include explanation of the likely expected actions and timeframes for the Emergency Test message.

**Force:** MUST · **Timeframe:** 10 bizdays

> **Note:** Public notice may include blog posts, social media posts, announcements during Community Updates, or e-blasts.
> **Note:** As this process matures, additional confirmed options may become available.

**Notification:**

- to Everyone, via web, FedRAMP Public Notices — <https://www.fedramp.gov/notices>

**Defined terms used:** Likely

---

##### Required Actions  `AFC-FRP-RQA`

*Affects: FedRAMP*

FedRAMP MUST clearly specify the required actions in the body of messages that require an elevated reaction.

**Force:** MUST

---

##### Elevated Reaction Timeframes  `AFC-FRP-ERT`

*Affects: FedRAMP*

FedRAMP MUST clearly specify the expected timeframe for completing required actions in the body of messages that require an elevated reaction; timeframes for actions will vary depending on the situation but the default timeframes to provide an estimated resolution time for Emergency and Emergency Test designated messages will be as follows:

- **Class D:** within 12 hours
- **Class C:** by 3:00 p.m. Eastern Time on the 2nd business day
- **Class B:** by 3:00 p.m. Eastern Time on the 3rd business day
- **Class A:** by 3:00 p.m. Eastern Time on the 5th business day

**Force:** MUST

> **Note:** FedRAMP Class D Certified cloud service providers are expected to address Emergency messages (including tests) from FedRAMP with a reaction time appropriate to operating a service where failure to react rapidly might have a severe or debilitating customer effect on the U.S. Government; some Emergency messages may require faster reaction and all such messages should be addressed as quickly as possible.

**Defined terms used:** Debilitating Customer Effect, FedRAMP Certified, Provider

---

##### Explain Corrective Actions  `AFC-FRP-COR`

*Affects: FedRAMP*

FedRAMP MUST clearly specify the corrective actions that will result from failure to complete the required actions in the body of messages that require an elevated reaction; such actions may vary from negative ratings in the FedRAMP Marketplace to suspension of FedRAMP Certification depending on the severity of the event.

**Force:** MUST

---

##### Reaction Metrics  `AFC-FRP-RPM`

*Affects: FedRAMP*

FedRAMP MAY track and publicly share the time required by cloud service providers to take the actions specified in messages that require an elevated reaction.

**Force:** MAY

**Defined terms used:** Provider

---

#### Subset CSO — General Provider Responsibilities

##### Maintain a FedRAMP Security Inbox  `AFC-CSO-INB`

*Affects: Providers*

Providers MUST establish and maintain an email address to receive messages from FedRAMP; this inbox is a FedRAMP Security Inbox (FSI).

**Force:** MUST

> **Note:** Unless otherwise notified, FedRAMP will use the listed Security Email on the Marketplace for these notifications.
> **Note:** If a provider establishes a new inbox in reaction to this guidance that is different from the Security Email then they must follow the AFC-CSO-NOC (Notification of Changes) rules to notify FedRAMP.

> ⚠️ **Danger:** Be careful using a personal email tied to an individual for this inbox due to the significant risk to future communications after a change in personnel!

**Evidence artifacts (all):**

- Email address to receive messages from FedRAMP

**Related rules:** `AFC-CSO-NOC`
**Defined terms used:** FedRAMP Security Inbox, Provider

---

##### Notification of Changes  `AFC-CSO-NOC`

*Affects: Providers*

Providers MUST immediately notify FedRAMP of any changes to the email address for their FedRAMP Security Inbox.

**Force:** MUST

**Notification:**

- to FedRAMP, via form, [CSP] Notification of Changes — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51829466938011>

**Evidence artifacts (all):**

- Process, manual or automated, to notify FedRAMP of changes in the FedRAMP Security Inbox

**Defined terms used:** FedRAMP Security Inbox, Provider

---

##### Trust @fedramp.gov and @gsa.gov  `AFC-CSO-TFG`

*Affects: Providers*

Providers MUST treat any email originating from an @fedramp.gov or @gsa.gov email address as if it was sent from FedRAMP by default; if such a message is confirmed to originate from someone other than FedRAMP then the FedRAMP Security Inbox rules no longer apply.

**Force:** MUST

**Evidence artifacts (all):**

- Configuration settings for FSI mailbox
- Automated validation to check FSI mailbox configuration

**Defined terms used:** FedRAMP Security Inbox, Provider

---

##### Receive Email Without Disruption  `AFC-CSO-RCV`

*Affects: Providers*

Providers MUST receive and react to email messages from FedRAMP without disruption and without requiring additional actions from FedRAMP.

**Force:** MUST

> **Note:** This requirement is intended to prevent cloud service providers from requiring FedRAMP to complete a CAPTCHA, log into a customer portal, or otherwise take service-specific actions that might prevent the security team from receiving the message.

**Defined terms used:** Provider

---

##### Complete Required Actions  `AFC-CSO-CRA`

*Affects: Providers*

Providers MUST complete the required actions in Emergency or Emergency Test designated messages sent by FedRAMP within the timeframe included in the message.

**Force:** MUST

> **Note:** Timeframes may vary by FedRAMP Certification class.

**Defined terms used:** Certification Class, Provider

---

##### Emergency Message Routing  `AFC-CSO-EMR`

*Affects: Providers*

Providers MUST route Emergency designated messages sent by FedRAMP to a senior security official for their awareness.

**Force:** MUST

> **Note:** Senior security officials are determined by the provider.

**Evidence artifacts (all):**

- Configuration settings for FSI mailbox
- Automated validation to check FSI mailbox configuration

**Defined terms used:** Provider

---

##### Important Message Actions  `AFC-CSO-IMA`

*Affects: Providers*

Providers SHOULD complete the required actions in Important designated messages sent by FedRAMP within the timeframe specified in the message.

**Force:** SHOULD

> **Note:** Timeframes may vary by FedRAMP Certification class.

**Defined terms used:** Certification Class, Provider

---

##### Acknowledge Receipt  `AFC-CSO-ACK`

*Affects: Providers*

Providers SHOULD promptly and automatically acknowledge the receipt of messages received from FedRAMP in their FedRAMP Security Inbox.

**Force:** SHOULD

**Defined terms used:** FedRAMP Security Inbox, Promptly, Provider

---

### AGU — Agency Use of FedRAMP Certified Cloud Services

*The Agency Use rules summarize the many demands made on agencies by the FedRAMP Authorization Act and OMB Memorandum M-24-15 in a simple, clear, easy-to-follow set of FedRAMP-style rules. These rules align agency policies, authorization letters, machine-readable tools, secure configuration review, continuous monitoring, and communication with FedRAMP so certifications can be reused consistently across government.*

**Effective:** status: required; Consolidated Rules for 2026; obtain by 2026-07-04; maintain by 2026-07-04; grace until 2026-07-04.

**Subsets in this family:**

- **AGC** — General Agency Responsibilities: These rules apply to agencies based on the FedRAMP Authorization Act, OMB M-24-15, and related FedRAMP policies.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A, B, C, D; affects: Agencies
- **USE** — Use of FedRAMP Certifications: These rules apply when agencies use FedRAMP Certifications to make agency authorization decisions.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A, B, C, D; affects: Agencies
- **SPN** — Agency Sponsored Certifications: These rules apply when an agency sponsors a FedRAMP Rev5 Certification after completing an agency authorization.
  - *Applies to* — types: Rev5; paths: Agency; classes: B, C, D; affects: Agencies

#### Subset AGC — General Agency Responsibilities

##### Agency Internal Policies  `AGU-AGC-AIP`

*Affects: Agencies*

Agencies MUST maintain agency-wide policy that aligns with the requirements in OMB Memorandum M-24-15.

**Force:** MUST

**Defined terms used:** Agency

---

##### Notify FedRAMP After Authorization  `AGU-AGC-NAA`

*Affects: Agencies*

Agencies MUST notify FedRAMP upon authorizing the use of a cloud service within the scope of FedRAMP, supplying at least the following information:

- A copy of the agency's Authorization to Operate letter for the information system leveraging the cloud service, following agency policy and templates.
- All other supplemental information requested in the Submit an ATO Letter form by FedRAMP.

**Force:** MUST

**Notification:**

- to FedRAMP, via form, Submit an ATO Letter — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51447926193691>

**Defined terms used:** Agency

---

##### Governance, Risk, and Compliance Tools  `AGU-AGC-GRC`

*Affects: Agencies*

Agencies MUST ensure that internal governance, risk, compliance, and inventory tools can produce and ingest machine-readable artifacts using formats identified by FedRAMP, including at least:

- Open Security Controls Assessment Language (OSCAL)
- JSON

**Force:** MUST

**Defined terms used:** Agency, Artifacts, Machine-Readable

---

##### Notify Additional Information Requests  `AGU-AGC-NAI`

*Affects: Agencies*

Agencies MUST notify FedRAMP after requesting any additional information or materials from a FedRAMP Certified cloud service offering beyond those required by FedRAMP.

**Force:** MUST

> **Note:** Agencies are expected to notify FedRAMP under OMB Memorandum M-24-15 section IV (a).

**Notification:**

- to FedRAMP, via form, [For Agencies] Additional Information, Security Requirements, or Certification Change, or After Request Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51822364715035>

**Defined terms used:** Agency, Cloud Service Offering, FedRAMP Certified

---

##### No Additional Security Requirements  `AGU-AGC-NAR`

*Affects: Agencies*

Agencies MUST NOT require additional information or materials from FedRAMP Certified cloud service offerings beyond those required by FedRAMP UNLESS the head of the agency or an authorized delegate determines there is a demonstrable need and notifies FedRAMP; this does not apply to seeking clarification or asking general questions about FedRAMP Certification Data.

**Force:** MUST NOT

> **Note:** This is related to the Presumption of Adequacy for a FedRAMP Certification and notification is mandated by OMB Memorandum M-24-15 section IV (a).

**Notification:**

- to FedRAMP, via email, <info@fedramp.gov> — <info@fedramp.gov>

**Defined terms used:** Agency, Certification Data, Cloud Service Offering, FedRAMP Certified

---

##### No Certification Type or Path Preferences  `AGU-AGC-TPP`

*Affects: Agencies*

Agencies MUST NOT require cloud service offerings to obtain or maintain a specific FedRAMP Certification Type or FedRAMP Certification Path, UNLESS the head of the agency or an authorized delegate determines there is a demonstrable need and notifies FedRAMP.

**Force:** MUST NOT

> **Note:** This is related to the Presumption of Adequacy for a FedRAMP Certification and notification is mandated by OMB Memorandum M-24-15 section IV (a).

**Notification:**

- to FedRAMP, via email, <info@fedramp.gov> — <info@fedramp.gov>

**Defined terms used:** Agency, Certification Path, Certification Type, Cloud Service Offering, FedRAMP Certified

---

##### FedRAMP Working Groups  `AGU-AGC-WKG`

*Affects: Agencies*

Agencies SHOULD participate in FedRAMP working groups, communities of practice, and stakeholder engagements to supply feedback and align practices across government.

**Force:** SHOULD

**Defined terms used:** Agency

---

##### Agency Liaison Program  `AGU-AGC-LIA`

*Affects: Agencies*

Agencies SHOULD assign at least 1 federal employee to be an active participant in the FedRAMP Agency Liaison program.

**Force:** SHOULD

**Reference:** [Agency Liaison Program](https://www.fedramp.gov/preview/2026/agencies/support/liaisons)
**Defined terms used:** Agency

---

##### Shared FedRAMP Inbox  `AGU-AGC-SIN`

*Affects: Agencies*

Agencies SHOULD establish and maintain a dedicated shared FedRAMP agency inbox to serve as the official point of contact for communications between FedRAMP and the agency.

**Force:** SHOULD

> **Note:** A shared FedRAMP agency inbox may follow an agency-specific format such as <agency-fedramp@agency.gov>.

**Defined terms used:** Agency

---

#### Subset USE — Use of FedRAMP Certifications

##### Authorization Before Use  `AGU-USE-ABU`

*Affects: Agencies*

Agencies MUST complete the Authorization to Operate process for federal information systems that use FedRAMP Certified cloud service offerings.

**Force:** MUST

> **Note:** FedRAMP provides technical assistance to help agencies navigate this process.

**Reference:** [Using a FedRAMP Certified Cloud Service Offering](https://fedramp.gov/preview/2026/agencies/use)
**Defined terms used:** Agency, Cloud Service Offering, FedRAMP Certified

---

##### Resolve Certification Package Conflicts  `AGU-USE-RCF`

*Affects: Agencies*

Agencies MUST collaborate with FedRAMP when discrepancies or conflicts arise between agency-specific security determinations and the FedRAMP Certification Package.

**Force:** MUST

**Defined terms used:** Agency, Certification Package

---

##### Review Secure Configuration Guides  `AGU-USE-RSG`

*Affects: Agencies*

Agencies MUST review the Secure Configuration Guides supplied by Providers and configure relevant security settings.

**Force:** MUST

**Defined terms used:** Agency, Provider

---

##### Accept FedRAMP Rules  `AGU-USE-AFR`

*Affects: Agencies*

Agencies MUST allow FedRAMP Certified cloud service offerings to follow FedRAMP rules.

**Force:** MUST

**Defined terms used:** Agency, Cloud Service Offering, FedRAMP Certified

---

##### Notify FedRAMP of Monitoring Concerns  `AGU-USE-NFC`

*Affects: Agencies*

Agencies MUST notify FedRAMP if information presented in an Ongoing Certification Report, Quarterly Review, or other FedRAMP Certification Data causes significant concerns for the authorizing official that would likely result in rescission of their Authorization to Operate.

**Force:** MUST

> **Note:** Agencies are expected to notify FedRAMP under OMB Memorandum M-24-15 section IV (a).

**Notification:**

- to FedRAMP, via form, Report Concerns on Ongoing Certifications — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51821301979547>

**Defined terms used:** Agency, Certification Data, FedRAMP Certification Report, Likely, Ongoing Certification, Ongoing Certification Report (OCR), Quarterly Review

---

##### Review Ongoing Certification Reports  `AGU-USE-ROR`

*Affects: Agencies*

Agencies SHOULD review each Ongoing Certification Report to understand how changes to the cloud service offering may impact the risk tolerance documented in the agency Authorization to Operate for the federal information system that includes the cloud service offering in its boundary.

**Force:** SHOULD

> **Note:** This agency review supports agency responsibilities under 44 USC § 35, OMB Circular A-130, FIPS-200, and OMB Memorandum M-24-15.

**Defined terms used:** Agency, Cloud Service Offering, FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR)

---

##### Designate Senior Official  `AGU-USE-DSO`

*Affects: Agencies*

Agencies SHOULD designate a federal senior information security official to review Ongoing Certification Reports and represent the agency at Quarterly Reviews for cloud service offerings included in agency information systems.

**Force:** SHOULD

**Defined terms used:** Agency, Cloud Service Offering, Ongoing Certification, Quarterly Review

---

##### Notify Provider of Concerns  `AGU-USE-NPC`

*Affects: Agencies*

Agencies SHOULD formally notify the cloud service provider if information presented in an Ongoing Certification Report, Quarterly Review, or other FedRAMP Certification Data causes significant concerns for the authorizing official that would likely result in rescission of their Authorization to Operate.

**Force:** SHOULD

**Notification:**

- to Provider, via varies, The provider's security contact email or form. — varies by provider

**Defined terms used:** Agency, Certification Data, FedRAMP Certification Report, Likely, Ongoing Certification, Ongoing Certification Report (OCR), Provider, Quarterly Review

---

##### Review All Information Resources  `AGU-USE-RIR`

*Affects: Agencies*

Agencies SHOULD consider third-party information resources used by the cloud service offering during initial and ongoing authorization activities.

**Force:** SHOULD

**Defined terms used:** Agency, Cloud Service Offering, Information Resource, Third-Party Information Resource

---

##### Using FedRAMP Class A Certifications  `AGU-USE-CLA`

*Affects: Agencies*

Agencies SHOULD NOT authorize the use of a FedRAMP Class A Certified cloud service offering for more than 12 months UNLESS the cloud service offering is actively seeking a FedRAMP Class B, C, or D Certification.

**Force:** SHOULD NOT

**Defined terms used:** Agency, Cloud Service Offering, FedRAMP Certified

---

#### Subset SPN — Agency Sponsored Certifications

##### Most Recent Consolidated Rules  `AGU-SPN-MRC`

*Affects: Agencies*

Agencies MUST follow the most recent FedRAMP Consolidated Rules when initiating agency-sponsored FedRAMP Certification.

**Force:** MUST

**Defined terms used:** Agency

---

### CCM — Collaborative Continuous Monitoring

*The Collaborative Continuous Monitoring rules help agencies use shared, current authorization information from providers as part of each agency's own Information Security Continuous Monitoring strategy. These rules reduce unnecessary manual burden by encouraging automated monitoring and review while allowing each agency to make its own risk-based decisions about ongoing authorization.*

**Subsets in this family:**

- **AGM** — Agency Guidance: These rules for agencies apply to all agencies using a FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Agencies
- **OCR** — Ongoing Certification Reports: These rules for Ongoing Certification Reports apply to providers with any type of FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **QTR** — Quarterly Reviews: These rules for Quarterly Reviews apply to providers with any type of FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset AGM — Agency Guidance

##### Review Ongoing Reports  `CCM-AGM-ROR`

*Affects: Agencies*

Agencies MUST review each Ongoing Certification Report to understand how changes to the cloud service offering may impact the previously agreed-upon risk tolerance documented in the agency's Authorization to Operate of a federal information system that includes the cloud service offering in its boundary.

**Force:** MUST

> **Note:** This is required by 44 USC § 35, OMB A-130, FIPS-200, and M-24-15.

**Defined terms used:** Agency, Cloud Service Offering, FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR)

---

##### Notify FedRAMP After Requests  `CCM-AGM-NFA`

*Affects: Agencies*

Agencies MUST notify FedRAMP after requesting any additional information or materials from a cloud service provider beyond those FedRAMP requires by sending an email to <info@fedramp.gov>.

**Force:** MUST

> **Note:** Agencies are required to notify FedRAMP by OMB Memorandum M-24-15 section IV (a).

**Notification:**

- to FedRAMP, via form, [For Agencies] Additional Information, Security Requirements, or Certification Change, or After Request Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51822364715035>

**Defined terms used:** Agency, Provider

---

##### No Additional Requirements  `CCM-AGM-NAR`

*Affects: Agencies*

Agencies MUST NOT place additional security requirements on cloud service providers beyond those required by FedRAMP UNLESS the head of the agency or an authorized delegate makes a determination that there is a demonstrable need for such; this does not apply to seeking clarification or asking general questions about FedRAMP Certification Data.

**Force:** MUST NOT

> **Note:** This is a statutory requirement in 44 USC § 3613 (e) related to the Presumption of Adequacy for a FedRAMP Certification.

**Notification:**

- to FedRAMP, via form, [For Agencies] Additional Information, Security Requirements, or Certification Change, or After Request Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51822364715035>

**Defined terms used:** Agency, Certification Data, FedRAMP Certified, Provider

---

##### Consider Security Category  `CCM-AGM-CSC`

*Affects: Agencies*

Agencies SHOULD consider the Security Category noted in their Authorization to Operate of the federal information system that includes the cloud service offering in its boundary and assign appropriate information security resources for reviewing Ongoing Certification Reports, attending Quarterly Reviews, and other ongoing FedRAMP Certification Data.

**Force:** SHOULD

**Defined terms used:** Agency, Certification Data, Cloud Service Offering, Ongoing Certification, Quarterly Review, Security Category

---

#### Subset OCR — Ongoing Certification Reports

##### Report Availability  `CCM-OCR-AVL`

*Affects: Providers*

Providers MUST supply an Ongoing Certification Report to all necessary parties every 3 months, covering the entire period since the previous summary, in a consistent format that is human readable; this report MUST include high-level summaries of at least the following information:

- Changes to FedRAMP Certification Data
- Planned changes to FedRAMP Certification Data during at least the next 3 months
- Accepted vulnerabilities
- Transformative changes
- Updated recommendations or best practices for security, configuration, usage, or similar aspects of the cloud service offering
- A list of all agencies that are directly using the product
- FedRAMP Reportable Incidents or an attestation that no such incidents occurred
- Lessons learned and changes planned or made as a result of FedRAMP Reportable Incidents (if such occurred)

**Force:** MUST

**Evidence artifacts (all):**

- Most recent Ongoing Certification Report. If the report is not available, the provider MUST provide a sample report that includes all required information.
- How the report will be delivered

**Schema:** [FedRAMP Ongoing Certification Report (CCM-OCR-AVL)](https://fedramp.gov/schemas/fedramp-ongoing-certification-report-schema-2026-06-24.json)
**Defined terms used:** Accepted Vulnerability, Agency, All Necessary Parties, Certification Data, Cloud Service Offering, FedRAMP Certification Report, FedRAMP Reportable Incident, Incident, Ongoing Certification, Ongoing Certification Report (OCR), Provider, Transformative Change, Vulnerability

---

##### Next Report Date  `CCM-OCR-NRD`

*Affects: Providers*

Providers MUST supply the target date for their next Ongoing Certification Report with other public FedRAMP Certification Data.

**Force:** MUST

**Defined terms used:** Certification Data, FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR), Provider

---

##### Feedback Mechanism  `CCM-OCR-FBM`

*Affects: Providers*

Providers MUST supply an asynchronous mechanism for all necessary parties to provide feedback or ask questions about each Ongoing Certification Report.

**Force:** MUST

> **Note:** This could be email by default but providers are encouraged to consider something more interactive as appropriate.

**Evidence artifacts (all):**

- How to access the feedback mechanism.

**Defined terms used:** All Necessary Parties, FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR), Provider

---

##### Anonymized Feedback Summary  `CCM-OCR-AFS`

*Affects: Providers*

Providers MUST supply an anonymized and desensitized summary of the feedback, questions, and answers about each Ongoing Certification Report as an addendum to the Ongoing Certification Report OR in the next Ongoing Certification Report.

**Force:** MUST

> **Note:** This is intended to encourage sharing of information and decrease the burden on the cloud service provider - providing this summary will reduce duplicate questions from agencies and ensure FedRAMP has access to this information. It is generally in the provider's interest to update this addendum frequently throughout the quarter.

**Evidence artifacts (all):**

- How the summary will be delivered

**Defined terms used:** Agency, FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR), Provider

---

##### Limit Sensitive Information  `CCM-OCR-LSI`

*Affects: Providers*

Providers MUST NOT irresponsibly disclose sensitive information in an Ongoing Certification Report that would likely have an adverse effect on the cloud service offering.

**Force:** MUST NOT

**Defined terms used:** Cloud Service Offering, FedRAMP Certification Report, Likely, Ongoing Certification, Ongoing Certification Report (OCR), Provider

---

##### Spread Out Reports  `CCM-OCR-SOR`

*Affects: Providers*

Providers SHOULD establish a regular 3 month cycle for Ongoing Certification Reports that is spread out from the beginning, middle, or end of each quarter.

**Force:** SHOULD

> **Note:** This recommendation is intended to discourage hundreds of cloud service providers from releasing their Ongoing Certification Reports during the first or last week of each quarter because that is the easiest way for a single provider to track this deliverable; the result would overwhelm agencies with many cloud services. Widely used cloud service providers are encouraged to work with their customers to identify ideal timeframes for this cycle.

**Defined terms used:** Agency, Ongoing Certification, Provider, Regularly

---

##### Responsible Public Certification Report Sharing  `CCM-OCR-RPS`

*Affects: Providers*

Providers MAY responsibly supply some or all of the information an Ongoing Certification Report to the public or other parties if the provider determines doing so will NOT likely have an adverse effect on the cloud service offering.

**Force:** MAY

**Defined terms used:** Cloud Service Offering, FedRAMP Certification Report, Likely, Ongoing Certification, Ongoing Certification Report (OCR), Provider, Responsibly

---

#### Subset QTR — Quarterly Reviews

##### Quarterly Review Meeting  `CCM-QTR-MTG`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Certification Reports that the provider determines are of the most relevance to agencies.
  - *(force MAY; within 3 months)*
- **Class B** — Providers with Class B Certifications SHOULD host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Certification Reports that the provider determines are of the most relevance to agencies.
  - *(force SHOULD; within 3 months)*
- **Class C** — Providers with Class C Certifications MUST host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Certification Reports that the provider determines are of the most relevance to agencies.
  - *(force MUST; within 3 months)*
- **Class D** — Providers with Class D Certifications MUST host a synchronous Quarterly Review every 3 months, open to all necessary parties, to review aspects of the most recent Ongoing Certification Reports that the provider determines are of the most relevance to agencies.
  - *(force MUST; within 3 months)*

**Defined terms used:** Agency, All Necessary Parties, Ongoing Certification, Provider, Quarterly Review

---

##### Meeting Registration Info  `CCM-QTR-REG`

*Affects: Providers*

Providers MUST supply either a registration link or a downloadable calendar file with meeting information for Quarterly Reviews to all necessary parties.

**Force:** MUST

**Evidence artifacts (all):**

- URL to the registration page or calendar file.

**Defined terms used:** All Necessary Parties, Provider, Quarterly Review

---

##### Next Review Date  `CCM-QTR-NRD`

*Affects: Providers*

Providers MUST publicly supply the target date for their next Quarterly Review with other public FedRAMP Certification Data.

**Force:** MUST

**Defined terms used:** Certification Data, Provider, Quarterly Review

---

##### No Irresponsible Disclosure  `CCM-QTR-NID`

*Affects: Providers*

Providers MUST NOT irresponsibly disclose sensitive information in a Quarterly Review that would likely have an adverse effect on the cloud service offering.

**Force:** MUST NOT

**Defined terms used:** Cloud Service Offering, Likely, Provider, Quarterly Review

---

##### Schedule Around Reports  `CCM-QTR-SAR`

*Affects: Providers*

Providers SHOULD regularly schedule Quarterly Reviews to occur at least 3 business days after releasing an Ongoing Certification Report AND within 10 business days of such release.

**Force:** SHOULD

**Defined terms used:** FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR), Provider, Quarterly Review, Regularly

---

##### Additional Content  `CCM-QTR-ACT`

*Affects: Providers*

Providers SHOULD supply additional information in Quarterly Reviews that the provider determines is of interest, use, or otherwise relevant to agencies.

**Force:** SHOULD

**Defined terms used:** Agency, Provider, Quarterly Review

---

##### Record/Transcribe Reviews  `CCM-QTR-RTR`

*Affects: Providers*

Providers SHOULD record or transcribe Quarterly Reviews and supply them to all necessary parties.

**Force:** SHOULD

**Defined terms used:** All Necessary Parties, Provider, Quarterly Review

---

##### Restrict Third Parties  `CCM-QTR-RTP`

*Affects: Providers*

Providers SHOULD NOT invite third parties to attend Quarterly Reviews intended for agencies unless they have specific relevance.

**Force:** SHOULD NOT

> **Note:** This is because agencies are less likely to actively participate in meetings with third parties; the cloud service provider's independent assessor should be considered relevant by default.

**Defined terms used:** Agency, Assessor, Likely, Provider, Quarterly Review

---

##### Share Recordings Responsibly  `CCM-QTR-SRR`

*Affects: Providers*

Providers MAY responsibly supply recordings or transcriptions of Quarterly Reviews to the public or other parties ONLY if the provider removes all agency information (comments, questions, names, etc.) AND determines doing so will NOT likely have an adverse effect on the cloud service offering.

**Force:** MAY

**Defined terms used:** Agency, Cloud Service Offering, Likely, Provider, Quarterly Review, Responsibly

---

##### Share Content Responsibly  `CCM-QTR-SCR`

*Affects: Providers*

Providers MAY responsibly supply content prepared for a Quarterly Review to the public or other parties if the provider determines doing so will NOT likely have an adverse effect on the cloud service offering.

**Force:** MAY

**Defined terms used:** Cloud Service Offering, Likely, Provider, Quarterly Review, Responsibly

---

### CDS — Certification Data Sharing

*The Certification Data Sharing rules allow providers to store and share FedRAMP Certification Data through the platform they choose as long as it follows FedRAMP rules for access, accuracy, and transparency. This helps customers and the public review consistent, current security and compliance information while recognizing that the information usually remains the provider's intellectual property and is not federal information.*

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to providers for FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **TRC** — FedRAMP-Compatible Trust Centers: These rules apply to trust centers that are FedRAMP-compatible.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **UTC** — Using a Trust Center: These rules apply to providers that are using a FedRAMP-compatible trust center instead of USDA Connect; they DO NOT apply to providers using USDA Connect.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### Public Information  `CDS-CSO-PUB`

*Affects: Providers*

Providers MUST publicly share up-to-date information about the cloud service offering in both human-readable and JSON formats, including at least the following information that is available and applicable:

- FedRAMP ID
- Service Model
- Deployment Model
- Business Category
- UEI Number
- Sales Contact Information
- Security Contact Information
- Product Website Link
- Link to Product Logo
- Overall Service Description
- Detailed list of specific services and their security categories (see CDS-CSO-SVC (Public Service List) (Service List))
- Link to Secure Configuration Guidance
- Overview of documentation supplied by the provider for the cloud service offering
- Link to Trust Center landing page that includes instructions on accessing information in the trust center
- Next Ongoing Certification Report date (see CCM-OCR-NRD (Next Report Date))
- Current FedRAMP Recognized independent assessment service

**Force:** MUST

> **Note:** Generally, this information should be available on a public webpage or publicly shared in a FedRAMP-compatible trust center.

**Evidence artifacts (all):**

- URL to the human-readable data.
- URL to the machine-readable data.

**Schema:** [FedRAMP Certification Overview Package (FRC-CSO-PKG)](https://fedramp.gov/schemas/fedramp-certification-overview-package-schema-2026-06-24.json)
**Related rules:** `CDS-CSO-SVC`, `CCM-OCR-NRD`
**Defined terms used:** Cloud Service Offering, FedRAMP Certification Report, FedRAMP Recognized, Ongoing Certification, Ongoing Certification Report (OCR), Provider, Security Category, Trust Center

---

##### Public Service List  `CDS-CSO-SVC`

*Affects: Providers*

Providers MUST publicly share a detailed list of specific services and their security categories that are included in the cloud service offering using clear feature or service names that align with standard public marketing materials; this list MUST be complete enough for a potential customer to determine which services are and are not included in the FedRAMP Minimum Assessment Scope without requesting access to underlying FedRAMP Certification Data.

**Force:** MUST

**Evidence artifacts (all):**

- URL to the human-readable data.
- URL to the machine-readable data (if applicable).

**Schema:** [FedRAMP Certification Overview Package (FRC-CSO-PKG)](https://fedramp.gov/schemas/fedramp-certification-overview-package-schema-2026-06-24.json)
**Defined terms used:** Certification Data, Cloud Service Offering, Provider, Security Category

---

##### Always Include FedRAMP ID  `CDS-CSO-FID`

*Affects: Providers*

Providers MUST always include the FedRAMP ID of the related cloud service offering in all FedRAMP Certification Data once assigned, including all reports, notifications, and other communication that results from FedRAMP rules.

**Force:** MUST

> **Note:** The FedRAMP ID is supplied by FedRAMP after a cloud service offering is registered to be listed on the FedRAMP Marketplace - providers will need to use a placeholder until the FedRAMP ID is assigned.
> **Note:** Many providers have multiple cloud service offerings or use internal names that don't align to public materials; using the FedRAMP ID ensures we can easily align the communication with a specific cloud service offering.

**Defined terms used:** Certification Data, Cloud Service Offering, Provider

---

##### FedRAMP Certification Reports  `CDS-CSO-FRC`

*Affects: Providers*

Providers MUST include FedRAMP Certification Reports with their FedRAMP Certification Data without inappropriate modifications, and make such reports available within 2 weeks of receiving the materials from FedRAMP.

**Force:** MUST · **Timeframe:** 2 weeks

> **Note:** FedRAMP provides Certification Reports for all cloud service offerings following the Program Certification path as part of the initial and ongoing FedRAMP Certification process, and may provide Certification Reports for cloud service offerings following the Agency Certification path.

**Defined terms used:** Agency, Certification Data, Certification Path, Cloud Service Offering, Provider

---

##### Availability Reporting  `CDS-CSO-AVR`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD maintain a web service, available to all necessary parties, that indicates current and historical availability of core services within the cloud service offering over at least the past 30 days, including availability incidents, in both human-readable and machine-readable formats; this service SHOULD be available even if the primary cloud service offering is unavailable.
  - *(force SHOULD)*
- **Class B** — Providers with Class B Certifications MUST maintain a web service, available to all necessary parties, that indicates current and historical availability of core services within the cloud service offering over at least the past 30 days, including availability incidents, in both human-readable and machine-readable formats; this service MUST be available even if the primary cloud service offering is unavailable.
  - *(force MUST)*
- **Class C** — Providers with Class C Certifications MUST maintain a web service, available to all necessary parties, that indicates current and historical availability of core services within the cloud service offering over at least the past 30 days, including availability incidents, in both human-readable and machine-readable formats; this service MUST be available even if the primary cloud service offering is unavailable.
  - *(force MUST)*
- **Class D** — Providers with Class D Certifications MUST maintain a web service, available to all necessary parties, that indicates current and historical availability of core services within the cloud service offering over at least the past 30 days, including availability incidents, in both human-readable and machine-readable formats; this service MUST be available even if the primary cloud service offering is unavailable.
  - *(force MUST)*

**Defined terms used:** All Necessary Parties, Cloud Service Offering, Incident, Machine-Readable, Provider

---

##### Use Trust Centers  `CDS-CSO-UTC`

*Affects: Providers*

Providers MUST use a FedRAMP-compatible trust center to store and share FedRAMP Certification Data with all necessary parties.

**Force:** MUST

> **Note:** Rules for FedRAMP-Compatible Trust Centers are explained in the Certification Data Sharing Rules under the FedRAMP-Compatible Trust Centers section (id: CDS-TRC).

**Schema:** [FedRAMP Certification Overview Package (FRC-CSO-PKG)](https://fedramp.gov/schemas/fedramp-certification-overview-package-schema-2026-06-24.json)
**Defined terms used:** All Necessary Parties, Certification Data, Provider, Trust Center

---

##### Consistency Between Formats  `CDS-CSO-CBF`

*Affects: Providers*

Providers MUST use automation to ensure information remains consistent between human-readable and machine-readable formats when FedRAMP Certification Data is provided in both formats.

**Force:** MUST

**Defined terms used:** Certification Data, Machine-Readable, Provider

---

##### Responsible Information Sharing  `CDS-CSO-RIS`

*Affects: Providers*

Providers MUST provide sufficient information in FedRAMP Certification Data to support agency authorization decisions but SHOULD NOT include sensitive information that would likely enable a threat actor to gain unauthorized access, cause harm, disrupt operations, or otherwise have a negative adverse impact on the cloud service offering.

**Force:** MUST

> **Note:** This is not a license to exclude accurate risk information, but specifics that would likely lead to compromise should be abstracted. A breach of confidentiality with FedRAMP Certification Data should be anticipated by a secure cloud service provider.

**Examples:**

- {'id': 'Tips on sensitive information in FedRAMP Certification Data', 'key_tests': ['Passwords, API keys, access credentials, etc.', 'Excessive detail about methodology that exposes weaknesses', 'Personally identifiable information about employees'], 'examples': ['DON\'T: "In an emergency, an administrator with physical access to a system can log in using "secretadmin" with the password "pleasewutno""', 'DO: "In an emergency, administrators with physical access can log in directly."', 'DON\'T: "All backup MFA credentials are stored in a SuperSafe Series 9000 safe in the CEOs office."', 'DO: "All backup MFA credentials are stored in a UL Class 350 safe in a secure location with limited access."', 'DON\'T: "During an incident, the incident response team lead by Jim Smith (555-0505) will open a channel at the conference line (555-0101 #97808 passcode 99731)..."', 'DO: "During an incident, the incident response team will coordinate over secure channels."']}

**Defined terms used:** Agency, Certification Data, Cloud Service Offering, Likely, Provider

---

##### Include Relevant Policies  `CDS-CSO-IRP`

*Affects: Providers*

Providers MUST supply all relevant policies and procedures in the FedRAMP Certification Data, including a human-readable and machine-readable reference that explains at least the following about each included policy and procedure:

- Name of policy or procedure
- Name of file, document, web page, etc.
- Brief summary of policy or procedure
- Word count of document
- Current version
- Date of last update
- Related FedRAMP Practices (if applicable)

**Force:** MUST

**Evidence artifacts (all):**

- Explanation of how to access this information.

**Defined terms used:** Certification Data, FedRAMP Practices, Machine-Readable, Provider

---

##### Historical FedRAMP Certification Data  `CDS-CSO-HAD`

*Affects: Providers*

Providers MUST supply snapshots of FedRAMP Certification Data aligned to Ongoing Certification Reports to all necessary parties; these snapshots MUST be available for the duration of FedRAMP Certification.

**Force:** MUST

> **Note:** Historical snapshots do not need to be reconstructed for periods before the provider's first Ongoing Certification Report, but should be maintained for all subsequent Ongoing Certification Reports.

**Evidence artifacts (all):**

- Explanation of how to access this information.

**Defined terms used:** All Necessary Parties, Certification Data, FedRAMP Certification Report, Ongoing Certification, Ongoing Certification Report (OCR), Provider

---

##### Per-Service Certification Materials  `CDS-CSO-PSM`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY supply per-service FedRAMP Certification materials.
  - *(force MAY)*
- **Class B** — Providers with Class B Certifications MAY supply per-service FedRAMP Certification materials.
  - *(force MAY)*
- **Class C** — Providers with Class C Certifications MAY supply per-service FedRAMP Certification materials.
  - *(force MAY)*
- **Class D** — Providers with Class D Certifications MUST supply per-service FedRAMP Certification materials.
  - *(force MUST)*

> **Note:** Providers determine what they consider to be separate services, based on maximizing the customer experience for agencies who may only adopt some services and not others.
> **Note:** Providers are encouraged to provide a single comprehensive set of materials for all shared aspects of the service offering and only provide separate materials for unique aspects of each service to minimize the burden on providers and agencies.

**Defined terms used:** Agency, Provider

---

##### Responsible Public Package Sharing  `CDS-CSO-RPS`

*Affects: Providers*

Providers MAY responsibly share some or all of the information in a FedRAMP Certification Package publicly or with other parties if the provider determines doing so will NOT likely have an adverse effect on the cloud service offering.

**Force:** MAY

**Evidence artifacts (all):**

- Explanation of if and how this information is shared with other parties.

**Defined terms used:** Certification Package, Cloud Service Offering, Likely, Provider, Responsibly

---

#### Subset TRC — FedRAMP-Compatible Trust Centers

##### Uninterrupted Sharing  `CDS-TRC-USH`

*Affects: Providers*

Trust centers MUST share FedRAMP Certification Data with all necessary parties without interruption.

**Force:** MUST

> **Note:** "Without interruption" means that parties should not have to request manual approval each time they need to access FedRAMP Certification Data or go through a complicated process. The preferred way of ensuring access without interruption is to use on-demand just-in-time access provisioning.

**Defined terms used:** All Necessary Parties, Certification Data, Trust Center

---

##### Programmatic Access  `CDS-TRC-PAC`

*Affects: Providers*

Trust centers MUST provide documented programmatic access to all FedRAMP Certification Data, including programmatic access to human-readable materials.

**Force:** MUST

**Evidence artifacts (all):**

- URL to the documentation for programmatic access.

**Defined terms used:** Certification Data, Trust Center

---

##### Agency Access Inventory  `CDS-TRC-AAI`

*Affects: Providers*

Trust centers MUST maintain an inventory and history of federal agency users or systems with access to FedRAMP Certification Data and MUST make this information available to FedRAMP upon request.

**Force:** MUST

**Evidence artifacts (all):**

- Explanation of how FedRAMP can obtain this information.

**Defined terms used:** Agency, Certification Data, Trust Center

---

##### Access Logging  `CDS-TRC-ACL`

*Affects: Providers*

Trust centers MUST log access to FedRAMP Certification Data and store summaries of access for at least six months; such information, as it pertains to specific parties, SHOULD be made available upon request by those parties.

**Force:** MUST

**Evidence artifacts (all):**

- Explanation of how the appropriate parties can obtain this log information.

**Defined terms used:** Certification Data, Trust Center

---

##### Human and Machine-Readable Certification Data  `CDS-TRC-HMR`

*Affects: Providers*

Trust centers SHOULD make FedRAMP Certification Data available to view and download in both human-readable and machine-readable formats.

**Force:** SHOULD

**Defined terms used:** Certification Data, Machine-Readable, Trust Center

---

##### Self-Service Access Management  `CDS-TRC-SSM`

*Affects: Providers*

Trust centers SHOULD include features that encourage all necessary parties to provision and manage access to FedRAMP Certification Data for their users and services directly.

**Force:** SHOULD

**Evidence artifacts (all):**

- URL or explanation how to access documentation of these features and capabilities.

**Defined terms used:** All Necessary Parties, Certification Data, Trust Center

---

#### Subset UTC — Using a Trust Center

##### Agency Access Denial  `CDS-UTC-AAD`

*Affects: Providers*

Providers MUST notify FedRAMP within 5 business days of denying an agency access request for FedRAMP Certification Data.

**Force:** MUST · **Timeframe:** 5 bizdays

**Notification:**

- to FedRAMP, via form, [CSP] Agency Access Denial — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51829826617243>

**Defined terms used:** Agency, Certification Data, Provider

---

##### Agency Access  `CDS-UTC-AGA`

*Affects: Providers*

Providers SHOULD supply access to the FedRAMP Certification Package with agencies upon request.

**Force:** SHOULD

**Evidence artifacts (all):**

- URL or explanation of how to request these materials.
- Explanation of how the provider decides whether or not to share these materials or other related policies.

**Defined terms used:** Agency, Certification Package, Provider

---

### CMU — Cryptographic Module Use

*The Cryptographic Module Use rules clarify how providers should select and use cryptographic modules. These rules allow risk-based decisions for some services while still encouraging validated cryptographic modules whenever they are technically feasible and reasonable.*

**Subsets in this family:**

- **CSO** — Cloud Service Provider Responsibilities: These rules apply to providers for FedRAMP Certifications.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — Cloud Service Provider Responsibilities

##### Cryptographic Module Documentation  `CMU-CSO-CMD`

*Affects: Providers*

Providers MUST document the cryptographic modules used in each service (or groups of services that use the same modules) where cryptographic services are used to protect federal customer data, including whether these modules are validated under the NIST Cryptographic Module Validation Program or are update streams of such modules.

**Force:** MUST

**Evidence artifacts (all):**

- List of cryptographic modules including whether these modules are validated under the NIST Cryptographic Module Validation Program or are update streams of such modules.

**Defined terms used:** Federal Customer Data, Provider, Validation

---

##### Using Validated Cryptographic Modules  `CMU-CSO-UVM`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.
  - *(force MAY)*
- **Class B** — Providers with Class B Certifications MAY use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.
  - *(force MAY)*
- **Class C** — Providers with Class C Certifications SHOULD use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.
  - *(force SHOULD)*
- **Class D** — Providers with Class D Certifications MUST use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when using cryptographic services to protect federal customer data.
  - *(force MUST)*

**Defined terms used:** Federal Customer Data, Provider, Validation

---

##### Configuration of Agency Tenants  `CMU-CSO-CAT`

*Affects: Providers*

Providers SHOULD configure agency tenants by default to use cryptographic services that use cryptographic modules or update streams of cryptographic modules with active validations under the NIST Cryptographic Module Validation Program when such modules are available.

**Force:** SHOULD

**Evidence artifacts (all):**

- List of cryptographic modules used by default including whether these modules are validated under the NIST Cryptographic Module Validation Program or are update streams of such modules.

**Defined terms used:** Agency, Provider, Validation

---

### CPO — Certification Package Overview

*The Certification Package Overview rules outline the expectations for a simple overview of the cloud service offering that must be included within a FedRAMP Certification Package. This overview replaces the historically required base System Security Plan for FedRAMP Rev5 and is intended to provide a clear, concise, and consistent summary of the offering and the information included in the package to help customers understand the offering at a high level.*

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to providers for FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### Overview of the Cloud Service Offering  `CPO-CSO-OVR`

*Affects: Providers*

Providers MUST supply a Certification Package Overview within their FedRAMP Certification Package, in both human-readable and JSON formats, that includes at least all of the information required by the following rules:

- Certification Package Overview: CPO-CSO-MTD (Certification Package Overview Metadata)
- Certification Data Sharing: CDS-CSO-PUB (Public Information)
- Certification Data Sharing: CDS-CSO-SVC (Public Service List)
- Certification Data Sharing: CDS-CSO-IRP (Include Relevant Policies)
- Minimum Assessment Scope: MAS-CSO-IIR (Identify Information Resources)
- Minimum Assessment Scope: MAS-CSO-FLO (Information Flows and Security Categories)
- Minimum Assessment Scope: MAS-CSO-TPR (Third-Party Information Resources)
- Using Cryptographic Modules: CMU-CSO-CMD (Cryptographic Module Documentation)
- Independent Verification and Validation: IVV-CSO-ICP (Inclusion in Certification Package)

**Force:** MUST

> **Note:** For FedRAMP Rev5, the Certification Package Overview replaces the historically required System Security Plan (not including appendices).
> **Note:** This list of rules may not apply to all FedRAMP Certification Classes or Types - if a rule does not apply then the information is not required.

**Schema:** [FedRAMP Certification Package Overview Schema](https://fedramp.gov/schemas/fedramp-certification-package-overview-schema-v2026.06.06.01.json)
**Related rules:** `CPO-CSO-MTD`, `CDS-CSO-PUB`, `CDS-CSO-SVC`, `MAS-CSO-IIR`, `MAS-CSO-FLO`, `MAS-CSO-TPR`, `CMU-CSO-CMD`, `CDS-CSO-IRP`, `IVV-CSO-ICP`
**Defined terms used:** Certification Class, Certification Data, Certification Package, Information Resource, Initial Incident Report (IIR), Provider, Security Category, Third-Party Information Resource, Validation, Verification

---

##### Certification Package Overview Metadata  `CPO-CSO-MTD`

*Affects: Providers*

Providers MUST also include the following basic metadata in their Certification Package Overview:

- Name, title, and contact information of official that is responsible and accountable for the FedRAMP Certification Package
- Version
- Date and time of last update
- Source of update

**Force:** MUST

**Defined terms used:** Certification Package, Provider

---

### FRC — FedRAMP Certification

*This ruleset explains how cloud service offerings obtain and maintain FedRAMP Certification across certification classes and paths.*

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to cloud service providers obtaining and maintaining any FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A, B, C, D; affects: Providers
- **CLA** — FedRAMP Class A Certification Rules: These are specific rules that apply to providers seeking FedRAMP Class A Certifications.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A; affects: Providers
- **APP** — Applying for FedRAMP Certification: These rules apply to cloud service providers who have met all other relevant rules and are ready to apply for any FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A, B, C, D; affects: Providers
- **APS** — Applying for FedRAMP Certification with an Agency Sponsor: These rules apply to cloud service providers with an Agency Sponsor who have met all other relevant rules and are ready to apply for any FedRAMP Certification.
  - *Applies to* — types: Rev5; paths: Agency; classes: B, C, D; affects: Providers
- **CCL** — Changing Certification Class: These rules apply to cloud service providers when changing their FedRAMP Certification Class.
  - *Applies to* — types: Rev5; paths: Agency; classes: A, B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### FedRAMP Certification Profile  `FRC-CSO-FCP`

*Affects: Providers*

Providers MUST identify a target FedRAMP Certification Profile and apply all relevant FedRAMP Practices to the cloud service offering.

**Force:** MUST

> **Note:** Information resources (including third-party information resources) MAY vary by security category as appropriate to the type of information handled by or impacted by the information resource.

**Defined terms used:** Certification Profile, Cloud Service Offering, FedRAMP Practices, Handle, Information Resource, Provider, Security Category, Third-Party Information Resource

---

##### FedRAMP Certification Package  `FRC-CSO-PKG`

*Affects: Providers*

Providers seeking a Class B Certification MUST supply a complete FedRAMP Certification Package to FedRAMP for initial certification; the FedRAMP Certification Package MUST include at least the following information:

- A Certification Package Overview
- A Security Decision Record
- A real or example Ongoing Certification Report following CCM-OCR-AVL (Report Availability)

**Force:** MUST

**Schema:** [FedRAMP Certification Overview Package (FRC-CSO-PKG)](https://fedramp.gov/schemas/fedramp-certification-overview-package-schema-2026-06-24.json)
**Related rules:** `CCM-OCR-AVL`
**Defined terms used:** Certification Package, FedRAMP Certification Report, Initial Certification, Ongoing Certification, Ongoing Certification Report (OCR), Provider, Security Decision Record (SDR)

---

##### FedRAMP JSON Schemas  `FRC-CSO-JSN`

*Affects: Providers*

Providers MUST supply machine-readable information in JSON documents that are valid against the corresponding JSON schema when a rule contains a FedRAMP JSON schema, UNLESS otherwise specified in the rule.

**Force:** MUST

> **Note:** FedRAMP JSON schemas are designed to be lightweight and flexible to establish a minimum set of structured information while allowing providers to improve on the format and structure of the information as needed to meet their needs and the needs of their customers.

**Defined terms used:** Machine-Readable, Provider

---

##### Maintain Responsibility and Accountability  `FRC-CSO-MRA`

*Affects: Providers*

Providers MUST maintain responsibility and accountability for the accuracy and completeness of all information in the FedRAMP Certification Package, especially when they engage a third party (such as an independent assessor, advisory service, or external tools) to supply information on their behalf.

**Force:** MUST

**Defined terms used:** Assessor, Certification Package, Provider

---

##### Pick One Program Certification Type  `FRC-CSO-POP`

*Affects: Providers*

Providers MUST NOT seek both FedRAMP Rev5 Program Certification and FedRAMP 20x Program Certification for the same cloud service offering; pick one type.

**Force:** MUST NOT

> **Note:** This rule does not prevent a provider from seeking and maintaining a FedRAMP Rev5 Agency Certification and a FedRAMP 20x Program Certification for the same cloud service offering, however, doing so is strongly discouraged due to the increased complexity and risk of confusion for all parties.

**Defined terms used:** Agency, Cloud Service Offering, Provider

---

#### Subset CLA — FedRAMP Class A Certification Rules

##### Approved Alternative Security Frameworks  `FRC-CLA-ASF`

*Affects: Providers*

Providers seeking a FedRAMP Class A Certification MUST have completed a certification or equivalent process, including an independent assessment if applicable, from one of the following alternative security frameworks within the past 12 months:

- FedRAMP Rev5 (including FedRAMP Ready) at any historical Impact Level
- SOC 2 Type II
- GovRAMP at any Impact Level

**Force:** MUST

**Defined terms used:** Provider, Security Category

---

##### External Assessment Materials  `FRC-CLA-EAM`

*Affects: Providers*

Providers seeking a FedRAMP Class A Certification MUST supply the following materials from their alternative security framework assessment to all necessary parties:

- SOC 2 Type II: Complete report, bridge or gap letter (if applicable), verified audit engagement documentation, estimated schedule for upcoming report, supplemental compliance evidence (if applicable)
- FedRAMP Ready: Readiness Assessment Report, Security Assessment Plan, and any other materials required by FedRAMP.
- GovRAMP: Readiness Assessment Report, Security Assessment Plan, and any other materials required by GovRAMP.

**Force:** MUST

**Defined terms used:** All Necessary Parties, Provider, Verification

---

##### Mandatory FedRAMP Rules for Class A  `FRC-CLA-MFR`

*Affects: Providers*

Providers seeking a Class A FedRAMP Certification MUST address all rules in this FedRAMP Class A Certification subset (FRC-CLA) AND the following additional FedRAMP Class Arules; the appropriate artifacts or information mapping for all rules MUST be supplied in the FedRAMP Certification Package.

- FedRAMP Certification: FRC-CSO-PKG (FedRAMP Certification Package)
- FedRAMP Certification: FRC-CSO-JSN (FedRAMP JSON Schemas)
- FedRAMP Certification: FRC-CSO-POP (Pick One Program Certification Type)
- Minimum Assessment Scope: MAS-CSO-IIR (Identify Information Resources)
- Certification Data Sharing: CDS-CSO-PUB (Public Information)
- Certification Data Sharing: CDS-CSO-UTC (Use Trust Centers)
- Certification Data Sharing: CDS-UTC-AAD (Agency Access Denial)
- Certification Data Sharing: CDS-CSO-AVR (Availability Reporting)
- Addressing FedRAMP Communication: AFC-CSO-INB (Maintain a FedRAMP Security Inbox)
- Addressing FedRAMP Communication: AFC-CSO-RCV (Receive Email Without Disruption)
- Addressing FedRAMP Communication: AFC-CSO-CRA (Complete Required Actions)
- Incident Evaluation and Communication: IEC-CSO-EFR (Evaluate FedRAMP Reportability)
- Incident Evaluation and Communication: IEC-CSO-FIR (Final Incident Report)
- Vulnerability Detection and Response: VDR-CSO-DET (Vulnerability Detection)
- Collaborative Continuous Monitoring: CCM-OCR-AVL (Report Availability)
- Collaborative Continuous Monitoring: CCM-OCR-NRD (Next Report Date)
- Independent Verification and Validation: IVV-CSX-AIA (Annual Independent Assessments for 20x)
- Independent Verification and Validation: IVV-CSF-AIA (Annual Independent Assessments for Rev5)
- Key Security Indicators: KSI-CMT-LMC (Logging Changes)
- Key Security Indicators: KSI-CNA-RNT (Restricting Network Traffic)
- Key Security Indicators: KSI-CED-RAT (Reviewing All Training)
- Key Security Indicators: KSI-IAM-AAM (Automating Account Management)
- Key Security Indicators: KSI-IAM-APM (Adopting Passwordless Methods)
- Key Security Indicators: KSI-INR-RIR (Reviewing Incident Response Procedures)
- Key Security Indicators: KSI-SVC-SIN (Securing Information)

**Force:** MUST

> **Note:** Some of these specific FedRAMP rules may not have similar counterparts in external frameworks and providers will need to implement new processes to follow these rules.
> **Note:** In general, for each of these FedRAMP requirements, providers should include a sufficiently detailed summary that reviewers will not need to dig into the related security framework materials to understand the related decisions - just saying "see SOC 2 report" is not particularly helpful.
> **Note:** Information about how the provider addresses the included Key Security Indicators are required for both Rev5 and 20x Class A Certifications.

**Related rules:** `FRC-CSO-POP`, `MAS-CSO-IIR`, `CDS-CSO-PUB`, `CDS-CSO-UTC`, `CDS-UTC-AAD`, `AFC-CSO-INB`, `AFC-CSO-RCV`, `AFC-CSO-CRA`, `IEC-CSO-EFR`, `IEC-CSO-FIR`, `VDR-CSO-DET`, `CCM-OCR-AVL`, `CCM-OCR-NRD`, `IVV-CSX-AIA`, `IVV-CSF-AIA`, `FRC-CSO-PKG`, `FRC-CSO-JSN`, `KSI-CMT-LMC`, `KSI-CNA-RNT`, `KSI-CED-RAT`, `KSI-IAM-AAM`, `KSI-INR-RIR`, `KSI-SVC-SIN`, `KSI-IAM-APM`, `CDS-CSO-AVR`
**Defined terms used:** Agency, Artifacts, Certification Data, Certification Package, Certification Type, FedRAMP Security Inbox, Final Incident Report (FIR), Incident, Information Resource, Initial Incident Report (IIR), Ongoing Certification Report (OCR), Provider, Trust Center, Validation, Verification, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Recommended FedRAMP Rules for Class A  `FRC-CLA-RFR`

*Affects: Providers*

Providers seeking a Class A FedRAMP Certification SHOULD address the following additional recommended FedRAMP Class A rules (if applicable):

- Certification Data Sharing: CDS-CSO-AVR (Availability Reporting)
- Certification Package Overview: CPO-CSF-CPM (Certification Package Maintenance for Rev5)
- Certification Package Overview: CPO-CSX-CPM (Certification Package Maintenance for 20x)
- Incident Evaluation and Communication: IEC-CSO-IIR (Initial Incident Report)
- Incident Evaluation and Communication: IEC-CSO-OIR (Ongoing Incident Reports)
- Vulnerability Detection and Response: VDR-TFR-MVX (Persistent Machine Verification and Validation for 20x)
- Vulnerability Detection and Response: VDR-TFR-PCD (Persistently Complete Detection)
- Vulnerability Detection and Response: VDR-TFR-PDD (Persistent Drift Detection)
- Vulnerability Detection and Response: VDR-TFR-PSD (Persistent Sample Detection)
- Vulnerability Detection and Response: VDR-TFR-PVR (Mitigation and Remediation Expectations)
- Vulnerability Evaluation and Reporting: VER-TFR-EVU (Evaluate Vulnerabilities Quickly)

**Force:** SHOULD

**Related rules:** `CDS-CSO-AVR`, `CPO-CSF-CPM`, `CPO-CSX-CPM`, `IEC-CSO-IIR`, `IEC-CSO-OIR`, `VDR-TFR-MVX`, `VDR-TFR-PCD`, `VDR-TFR-PDD`, `VDR-TFR-PSD`, `VDR-TFR-PVR`, `VER-TFR-EVU`
**Defined terms used:** Certification Data, Certification Package, Drift, Incident, Initial Incident Report (IIR), Ongoing Incident Report (OIR), Persistently, Provider, Validation, Verification, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Address Optional FedRAMP Rules for Class A  `FRC-CLA-OFR`

*Affects: Providers*

Providers seeking a Class A FedRAMP Certification MAY address the following additional optional FedRAMP Class A rules (if applicable):

- Collaborative Continuous Monitoring: CCM-QTR-MTG (Quarterly Review Meeting)
- Certification Data Sharing: CDS-CSO-PSM (Per-Service Certification Materials)
- Cryptographic Module Use: CMU-CSO-UVM (Using Validated Cryptographic Modules)
- FedRAMP Certification: FRC-APP-FIA (Fresh Independent Assessment)
- Independent Verification and Validation: IVV-CSO-FIA (FedRAMP Independent Assessments)
- Security Decision Record: SDR-CSX-KMT (Key Security Indicator Metrics)
- Vulnerability Evaluation and Reporting: VER-TFR-IRI (Internet-Reachable Incidents)
- Vulnerability Evaluation and Reporting: VER-TFR-MRH (Historical Activity)
- Vulnerability Evaluation and Reporting: VER-TFR-NRI (Non-Internet-Reachable Incidents)

**Force:** MAY

**Related rules:** `CCM-QTR-MTG`, `CDS-CSO-PSM`, `CMU-CSO-UVM`, `FRC-APP-FIA`, `IVV-CSO-FIA`, `SDR-CSX-KMT`, `VER-TFR-IRI`, `VER-TFR-MRH`, `VER-TFR-NRI`
**Defined terms used:** Certification Data, FedRAMP Independent Assessment, Incident, Provider, Quarterly Review, Security Decision Record (SDR), Validation, Verification, Vulnerability

---

##### Optional Independent Verification and Validation  `FRC-CLA-IVV`

*Affects: Providers*

Providers seeking a FedRAMP Class A Certification MAY have the FedRAMP Certification Package independently verified and validated by a FedRAMP Recognized assessor before submission to FedRAMP.

**Force:** MAY

**Defined terms used:** Assessor, Certification Package, FedRAMP Recognized, Provider, Validation, Verification

---

#### Subset APP — Applying for FedRAMP Certification

##### Marketplace Listing First  `FRC-APP-MLF`

*Affects: Providers*

Providers MUST be listed in the FedRAMP Marketplace before applying for FedRAMP Certification, including:

- FedRAMP Marketplace: MKT-CSO-MLR (Marketplace Listing Requirements),
- FedRAMP Marketplace: MKT-CSO-PML (Provider Marketplace Listing Requests)
- FedRAMP Marketplace: MKT-IIP-AGU (Agency Use Cases)
- FedRAMP Marketplace: MKT-IIP-DCP (Demonstrating Continuous Progress)

**Force:** MUST

**Related rules:** `MKT-CSO-MLR`, `MKT-CSO-PML`, `MKT-IIP-AGU`, `MKT-IIP-DCP`
**Defined terms used:** Agency, Provider

---

##### Applying for FedRAMP Certification  `FRC-APP-AFC`

*Affects: Providers*

Providers MUST complete the FedRAMP Certification Application Form in full to request an initial assessment by FedRAMP.

**Force:** MUST

**Notification:**

- to FedRAMP, via form, [For CSPs] FedRAMP Certification Application Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51137131584283>

**Defined terms used:** Provider

---

##### Fresh FedRAMP Certification Package  `FRC-APP-FCP`

*Affects: Providers*

Providers MUST supply a fresh initial FedRAMP Certification Package that shows the current status of the cloud service offering as verified and validated by the provider within the previous 7 days.

**Force:** MUST

**Defined terms used:** Certification Package, Cloud Service Offering, Provider, Validation, Verification

---

##### Fresh Independent Assessment  `FRC-APP-FIA`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers seeking Class A Certification MAY supply a fresh initial FedRAMP independent assessment that was completed by a FedRAMP Recognized independent assessment service within the previous 3 months.
  - *(force MAY; within 3 months)*
- **Class B** — Providers seeking Class B Certification MUST supply a fresh initial FedRAMP independent assessment that was completed by a FedRAMP Recognized independent assessment service within the previous 3 months.
  - *(force MUST; within 3 months)*
- **Class C** — Providers seeking Class C Certification MUST supply a fresh initial FedRAMP independent assessment that was completed by a FedRAMP Recognized independent assessment service within the previous 3 months.
  - *(force MUST; within 3 months)*
- **Class D** — Providers seeking Class D Certification MUST supply a fresh initial FedRAMP independent assessment that was completed by a FedRAMP Recognized independent assessment service within the previous 3 months.
  - *(force MUST; within 3 months)*

**Defined terms used:** FedRAMP Independent Assessment, FedRAMP Recognized, Provider

---

##### No Third-Party Applicants  `FRC-APP-NTP`

*Affects: Providers*

Providers MUST NOT use a third party to apply for a FedRAMP Certification on their behalf; this includes independent assessment services.

**Force:** MUST NOT

> **Note:** FedRAMP previously allowed independent assessment services to submit applications on behalf of providers, but this caused confusion about who was responsible for the application and the information in it. Providers should apply directly to ensure clear accountability.
> **Note:** Providers may use third parties to help them prepare their application and assessment materials for submission.

**Defined terms used:** Provider

---

##### Updating Stale Assessments  `FRC-APP-USA`

*Affects: Providers*

Providers MAY freshen a stale initial independent verification and validation assessment by having a FedRAMP Recognized independent assessment service review any changes between the original assessment and the current status of the cloud service offering in place of a full re-assessment, UNLESS the stale assessment is more than 9 months old.

**Force:** MAY

**Defined terms used:** Cloud Service Offering, FedRAMP Recognized, Provider, Validation, Verification

---

#### Subset APS — Applying for FedRAMP Certification with an Agency Sponsor

##### Agency Authorization to Operate  `FRC-APS-ATO`

*Affects: Providers*

Providers seeking a FedRAMP Rev5 Agency Certification MUST have completed the Authorization to Operate (ATO) process with their agency sponsor for the cloud service offering, concluding with a formal signed ATO letter that the agency has sent over official government channels to FedRAMP.

**Force:** MUST

**Defined terms used:** Agency, Cloud Service Offering, Provider

---

#### Subset CCL — Changing Certification Class

##### Upgrading Certification Class  `FRC-CCL-UCC`

*Affects: Providers*

Providers MUST apply for a new FedRAMP Certification to upgrade their Certification Class; all applicable requirements MUST be met in advance.

**Force:** MUST

> **Note:** Upgrade paths include moving from A to B, C, or D; B to C or D; and C to D.
> **Note:** The preferred path is to incrementally update the implementation and assurance commitments within the current Certification Class until the provider has met all requirements for the target Certification Class, then apply for the new Certification Class.

**Defined terms used:** Certification Class, Provider

---

##### Downgrading Certification Class  `FRC-CCL-DCC`

*Affects: Providers*

Providers MUST apply for a new FedRAMP Certification to downgrade their Certification Class.

**Force:** MUST

> **Note:** Downgrade paths include moving from D to C, B, or A; C to B or A; or B to A.
> **Note:** FRC-CCL-DNP (Downgrade Notification Period) applies - please DO NOT downgrade Certification Class with providing advance notification to all necessary parties!

**Related rules:** `FRC-CCL-DNP`
**Defined terms used:** All Necessary Parties, Certification Class, Provider

---

##### Downgrade Notification Period  `FRC-CCL-DNP`

*Affects: Providers*

Providers SHOULD notify all necessary parties at least 120 days in advance of an intended downgrade or cancellation of FedRAMP Certification.

**Force:** SHOULD

> **Note:** Downgrading or canceling FedRAMP Certification will have severe negative consequences for the provider and their agency customers and should only be done after careful consideration and planning... but if it must be done, notify all necessary parties as soon as possible.

**Defined terms used:** Agency, All Necessary Parties, Provider

---

### IEC — Incident Evaluation and Communication

*The Incident Evaluation and Communication rules explain how providers must communicate incident information to FedRAMP and government customers when they are affected by an incident or likely to be affected by an incident.*

**Subsets in this family:**

- **FRP** — FedRAMP Responsibilities: These rules apply to FedRAMP.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: FedRAMP
- **CSO** — General Provider Responsibilities: These rules apply to providers with FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset FRP — FedRAMP Responsibilities

##### Ongoing Review  `IEC-FRP-ORV`

*Affects: FedRAMP*

FedRAMP MUST periodically review FedRAMP Incident Evaluation and Response implementation with providers based on lack of reporting or other information.

**Force:** MUST

**Corrective actions:**

- FedRAMP will request a Corrective Action Plan when a provider is unaware of the rules or has failed to implement proper procedures.
- FedRAMP will grant a 3 month grace period to implement proper procedures pending remediation and possible revocation of FedRAMP Certification.

**Defined terms used:** Incident, Provider, Vulnerability Response

---

#### Subset CSO — General Provider Responsibilities

##### Evaluate FedRAMP Reportability  `IEC-CSO-EFR`

*Affects: Providers*

Providers MUST promptly evaluate incidents to determine if they affect confidentiality or integrity of federal customer data or are likely to affect confidentiality or integrity of federal customer data; such incidents are FedRAMP Reportable Incidents and must be reported following the FedRAMP Incident Evaluation and Response rules.

**Force:** MUST

**Evidence artifacts (all):**

- An incident log showing an example of one or more incidents being evaluated including the reason for the determination. The log can be from real incidents, simulated incidents, or a combination of sources.

**Defined terms used:** FedRAMP Reportable Incident, Federal Customer Data, Incident, Likely, Promptly, Provider, Vulnerability Response

---

##### Default PAIN Rating  `IEC-CSO-DPR`

*Affects: Providers*

Providers MUST treat FedRAMP Reportable Incidents as if they have a Potential Agency Impact N-rating (PAIN) of 5 UNLESS they promptly estimate the PAIN rating following the rule in IEC-CSO-EFI (Estimate Federal Impact).

**Force:** MUST

**Related rules:** `IEC-CSO-EFI`
**Defined terms used:** Agency, FedRAMP Reportable Incident, Incident, Potential Agency Impact, Promptly, Provider

---

##### Initial Incident Report  `IEC-CSO-IIR`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD responsibly notify all affected parties after identifying FedRAMP Reportable Incidents by providing an Initial Incident Report with as much of the following information that is available at the time of reporting and/or the current relevant status for each item:
  - *(force SHOULD)*
    - Contact information for the federal incident response coordinator
    - Provider's internally assigned tracking identifier
    - Description of the incident
    - Timeline of the incident, including start time, time and source of detection, time of completed FedRAMP Reportable Incident evaluation, and other major incident milestones determined by the provider
    - Historically and currently estimated Potential Agency Impact N-rating (PAIN) of the incident, including an explanation of the evaluation following the requirements in IEC-CSO-EFI (Estimate Federal Impact) (if applicable)
    - Functional impact to federal agency customers (include impact to confidentiality and/or integrity and the impacted federal customer data types)
    - Estimated recovery plan, milestones, and timelines
    - List of likely affected customer agencies
- **Class B** — Providers with Class B Certifications MUST responsibly notify all affected parties after identifying FedRAMP Reportable Incidents by providing an Initial Incident Report with as much of the following information that is available at the time of reporting and/or the current relevant status for each item:
  - *(force MUST)*
    - Contact information for the federal incident response coordinator.
    - Provider's internally assigned tracking identifier
    - Description of the incident
    - Timeline of the incident, including start time, time and source of detection, time of completed FedRAMP Reportable Incident evaluation, and other major incident milestones determined by the provider
    - Historically and currently estimated Potential Agency Impact N-rating (PAIN) of the incident, including an explanation of the evaluation following the requirements in IEC-CSO-EFI (Estimate Federal Impact) (if applicable)
    - Functional impact to federal agency customers (include impact to confidentiality and/or integrity and the impacted federal customer data types)
    - Estimated recovery plan, milestones, and timelines
    - List of likely affected customer agencies
- **Class C** — Providers with Class C Certifications MUST responsibly notify all affected parties after identifying FedRAMP Reportable Incidents by providing an Initial Incident Report with as much of the following information that is available at the time of reporting and/or the current relevant status for each item:
  - *(force MUST)*
    - Contact information for the federal incident response coordinator.
    - Provider's internally assigned tracking identifier
    - Description of the incident
    - Timeline of the incident, including start time, time and source of detection, time of completed FedRAMP Reportable Incident evaluation, and other major incident milestones determined by the provider
    - Historically and currently estimated Potential Agency Impact N-rating (PAIN) of the incident, including an explanation of the evaluation following the requirements in IEC-CSO-EFI (Estimate Federal Impact) (if applicable)
    - Functional impact to federal agency customers (include impact to confidentiality and/or integrity and the impacted federal customer data types)
    - Estimated recovery plan, milestones, and timelines
    - List of likely affected customer agencies
- **Class D** — Providers with Class D Certifications MUST responsibly notify all affected parties after identifying FedRAMP Reportable Incidents by providing an Initial Incident Report with as much of the following information that is available at the time of reporting and/or the current relevant status for each item:
  - *(force MUST)*
    - Contact information for the federal incident response coordinator.
    - Provider's internally assigned tracking identifier
    - Description of the incident
    - Timeline of the incident, including start time, time and source of detection, time of completed FedRAMP Reportable Incident evaluation, and other major incident milestones determined by the provider
    - Historically and currently estimated Potential Agency Impact N-rating (PAIN) of the incident, including an explanation of the evaluation following the requirements in IEC-CSO-EFI (Estimate Federal Impact) (if applicable)
    - Functional impact to federal agency customers (include impact to confidentiality and/or integrity and the impacted federal customer data types)
    - Estimated recovery plan, milestones, and timelines
    - List of likely affected customer agencies

**Notification:**

- to FedRAMP, via email, FedRAMP Security Team — <fedramp_security@fedramp.gov>
- to Agency Customers, via varies, Follow agency-specific incident reporting procedures — varies by agency
- to All Necessary Parties, via update, Provider's Trust Center or USDA Connect — trust center

**Schema:** [FedRAMP Incident Report (IEC-CSO-IIR / IEC-CSO-OIR / IEC-CSO-FIR)](https://fedramp.gov/schemas/fedramp-incident-report-schema-2026-06-24.json)
**Related rules:** `IEC-CSO-EFI`
**Defined terms used:** All Affected Parties, FedRAMP Reportable Incident, Incident, Initial Incident Report (IIR), Provider, Responsibly

---

##### Ongoing Incident Reports  `IEC-CSO-OIR`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD responsibly notify all affected parties of ongoing activity as new information becomes available during incident response for FedRAMP Reportable Incidents, including updates (or lack of updates) to all previously reported information and as much of the the following additional information that is available and/or the current relevant status for each item:
  - *(force SHOULD)*
    - Observed incident activity
    - Indicators of compromise
    - Related Common Vulnerabilities and Exposures (CVE) identifier (if applicable)
    - Root cause
    - Response and recovery activities
- **Class B** — Providers with Class B Certifications MUST responsibly notify all affected parties of ongoing activity as new information becomes available during incident response for FedRAMP Reportable Incidents, including updates (or lack of updates) to all previously reported information and as much of the the following additional information that is available and/or the current relevant status for each item:
  - *(force MUST)*
    - Observed incident activity
    - Indicators of compromise
    - Related Common Vulnerabilities and Exposures (CVE) identifier, if applicable
    - Root cause
    - Response and recovery activities
- **Class C** — Providers with Class C Certifications MUST responsibly notify all affected parties of ongoing activity as new information becomes available during incident response for FedRAMP Reportable Incidents, including updates (or lack of updates) to all previously reported information and as much of the the following additional information that is available and/or the current relevant status for each item:
  - *(force MUST)*
    - Observed incident activity
    - Indicators of compromise
    - Related Common Vulnerabilities and Exposures (CVE) identifier, if applicable
    - Root cause
    - Response and recovery activities
- **Class D** — Providers with Class D Certifications MUST responsibly notify all affected parties of ongoing activity as new information becomes available during incident response for FedRAMP Reportable Incidents, including updates (or lack of updates) to all previously reported information and as much of the the following additional information that is available and/or the current relevant status for each item:
  - *(force MUST)*
    - Observed incident activity
    - Indicators of compromise
    - Related Common Vulnerabilities and Exposures (CVE) identifier, if applicable
    - Root cause
    - Response and recovery activities

**Notification:**

- to FedRAMP, via email, FedRAMP Security Team — <fedramp_security@fedramp.gov>
- to Agency Customers, via varies, Follow agency-specific incident reporting procedures — varies by agency
- to All Necessary Parties, via update, Provider's Trust Center or USDA Connect — trust center

**Schema:** [FedRAMP Incident Report (IEC-CSO-IIR / IEC-CSO-OIR / IEC-CSO-FIR)](https://fedramp.gov/schemas/fedramp-incident-report-schema-2026-06-24.json)
**Defined terms used:** All Affected Parties, FedRAMP Reportable Incident, Incident, Provider, Responsibly, Vulnerability Response

---

##### Final Incident Report  `IEC-CSO-FIR`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MUST responsibly notify all affected parties by providing a Final Incident Report once the incident has been resolved and recovery is complete, including final updates to all previously reported information.
  - *(force MUST)*
- **Class B** — Providers with Class B Certifications MUST responsibly notify all affected parties by providing a Final Incident Report once the incident has been resolved and recovery is complete, including final updates to all previously reported information.
  - *(force MUST)*
- **Class C** — Providers with Class C Certifications MUST responsibly notify all affected parties by providing a Final Incident Report once the incident has been resolved and recovery is complete, including final updates to all previously reported information.
  - *(force MUST)*
- **Class D** — Providers with Class D Certifications MUST responsibly notify all affected parties by providing a Final Incident Report once the incident has been resolved and recovery is complete, including final updates to all previously reported information.
  - *(force MUST)*

**Notification:**

- to FedRAMP, via email, FedRAMP Security Team — <fedramp_security@fedramp.gov>
- to Agency Customers, via varies, Follow agency-specific incident reporting procedures — varies by agency
- to All Necessary Parties, via update, Provider's Trust Center or USDA Connect — trust center

**Schema:** [FedRAMP Incident Report (IEC-CSO-IIR / IEC-CSO-OIR / IEC-CSO-FIR)](https://fedramp.gov/schemas/fedramp-incident-report-schema-2026-06-24.json)
**Defined terms used:** All Affected Parties, Final Incident Report (FIR), Incident, Provider, Responsibly

---

##### Estimate Federal Impact  `IEC-CSO-EFI`

*Affects: Providers*

Providers SHOULD promptly estimate the likely adverse impact of an incident on agency customers to assign a Potential Agency Impact N-rating; this step is called Incident Rating.

- **N1** for a likely minimal customer effect on 1 or more agencies.
- **N2** for a likely narrow customer effect on 1 or more agencies.
- **N3** for a likely disruptive customer effect on 1 agency.
- **N4** for a likely debilitating customer effect on 1 agency or a likely disruptive customer effect on more than 1 agency.
- **N5** for a likely debilitating customer effect on more than 1 agency.

**Force:** SHOULD

> **Note:** All incidents must be assigned a default PAIN-5 as required by IEC-CSO-DPR (Default PAIN Rating) if this step is not completed.

**Evidence artifacts (all):**

- An incident log showing an example of one or more incidents being evaluated including the reason for the determination. The log can be from real incidents, simulated incidents, or a combination of sources.

**Schema:** [FedRAMP Incident Report (IEC-CSO-IIR / IEC-CSO-OIR / IEC-CSO-FIR)](https://fedramp.gov/schemas/fedramp-incident-report-schema-2026-06-24.json)
**Related rules:** `IEC-CSO-DPR`
**Defined terms used:** Agency, Debilitating Customer Effect, Disruptive Customer Effect, Incident, Likely, Minimal Customer Effect, Narrow Customer Effect, Potential Agency Impact, Promptly, Provider

---

##### Automated Incident Reporting  `IEC-CSO-AIR`

*Affects: Providers*

Providers SHOULD use automation to minimize human intervention in the process of reporting FedRAMP Reportable Incidents to all affected parties.

**Force:** SHOULD

> ⚠️ **Danger:** Modern cloud services should not be reporting incidents by hand-crafting emails!

**Defined terms used:** All Affected Parties, FedRAMP Reportable Incident, Incident, Provider

---

### IVV — Independent Verification and Validation

*This ruleset explains the expectations for independent verification and validation assessments.*

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to cloud service providers obtaining and maintaining any FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **IAS** — General Independent Assessor Responsibilities: These rules apply to independent assessment services supporting all FedRAMP Certification types.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Assessors

#### Subset CSO — General Provider Responsibilities

##### FedRAMP Independent Assessments  `IVV-CSO-FIA`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY persistently complete an independent verification and validation assessment of all applicable FedRAMP rules with a FedRAMP Recognized independent assessment service OR FedRAMP at least once per year; this is a FedRAMP independent assessment.
  - *(force MAY; within 1 years)*
- **Class B** — Providers with Class B Certifications MUST persistently complete an independent verification and validation assessment of all applicable FedRAMP rules with a FedRAMP Recognized independent assessment service OR FedRAMP at least once per year; this is a FedRAMP independent assessment.
  - *(force MUST; within 1 years)*
- **Class C** — Providers with Class C Certifications MUST persistently complete an independent verification and validation assessment of all applicable FedRAMP rules with a FedRAMP Recognized independent assessment service OR FedRAMP at least once per year; this is a FedRAMP independent assessment.
  - *(force MUST; within 1 years)*
- **Class D** — Providers with Class D Certifications MUST persistently complete an independent verification and validation assessment of all applicable FedRAMP rules with a FedRAMP Recognized independent assessment service OR FedRAMP at least once per year; this is a FedRAMP independent assessment.
  - *(force MUST; within 1 years)*

> **Note:** The first such completed assessment is typically called an "initial assessment" while following assessments are called "annual assessments."
> **Note:** The specific requirements for independent verification and validation assessments are documented by the FedRAMP Certification Class and Type.
> **Note:** The option for assessment by FedRAMP directly is limited to cloud services that are explicitly prioritized by FedRAMP, in consultation with the FedRAMP Board and the federal Chief Information Officers Council; this is *extremely* rare.
> **Note:** FedRAMP Recognized independent assessment services are listed on the FedRAMP Marketplace.

**Defined terms used:** Certification Class, FedRAMP Independent Assessment, FedRAMP Recognized, Persistently, Provider, Validation, Verification

---

##### Supply Evidence of Implementation  `IVV-CSO-SEI`

*Affects: Providers*

Providers MUST supply evidence to all necessary assessors of the implementation of the measures that have been documented to meet FedRAMP Practices; this evidence is the result of verification.

**Force:** MUST

> **Note:** For example, if the documentation says that firewall rules are used to block traffic then the cloud service provider would verify that firewall rules are in place to block traffic and supply that evidence to assessors (preferably by allowing them to see how firewall configurations are deployed from a source of truth).

**Defined terms used:** All Necessary Assessors, Assessor, FedRAMP Practices, Provider, Verification

---

##### Supply Evidence of Effectiveness  `IVV-CSO-SEE`

*Affects: Providers*

Providers MUST supply evidence to all necessary assessors of the effectiveness of the measures that have been implemented to meet FedRAMP Practices; this evidence is the result of validation.

**Force:** MUST

> **Note:** For example, after verifying that firewalls are configured to block traffic following IVV-CSO-SEI (Supply Evidence of Implementation), the provider would validate that traffic is actually being blocked and supply evidence of that validation to assessors (such as by allowing them to see metrics on the traffic that is blocked vs not).

**Related rules:** `IVV-CSO-SEI`
**Defined terms used:** All Necessary Assessors, Assessor, FedRAMP Practices, Provider, Validation

---

##### Inclusion in Certification Package  `IVV-CSO-ICP`

*Affects: Providers*

Providers MUST supply the results of FedRAMP independent assessments in their FedRAMP Certification Package without inappropriate modification.

**Force:** MUST

> **Note:** Inappropriate modification in this context means changing the underlying intent/etc. of the content provided by the independent assessment service - the content itself may be modified for presentation, formatting, etc. as needed.
> **Note:** This rule is related to IVV-IAS-VIP (Verify Inclusion in Certification Package).

**Related rules:** `IVV-IAS-VIP`
**Defined terms used:** Certification Package, FedRAMP Independent Assessment, Provider, Verification

---

##### Document Use of Representative Samples  `IVV-CSO-DUS`

*Affects: Providers*

Providers MUST document and explain the use of representative samples during verification and validation when using representative samples as allowed by IVV-CSO-USR (Use Representative Samples).

**Force:** MUST

**Related rules:** `IVV-CSO-USR`
**Defined terms used:** Provider, Validation, Verification

---

##### Supply Technical Explanations  `IVV-CSO-STE`

*Affects: Providers*

Providers SHOULD supply all necessary assessors with technical explanations, demonstrations, and other relevant supporting information about the technical capabilities they employ to address FedRAMP rules; this SHOULD be supplied as necessary to ensure the assessor can effectively complete verification and validation.

**Force:** SHOULD

**Defined terms used:** All Necessary Assessors, Assessor, Provider, Validation, Verification

---

##### Use Representative Samples  `IVV-CSO-USR`

*Affects: Providers*

Providers MAY use representative samples as appropriate during verification and validation.

**Force:** MAY

> **Note:** Many modern cloud services using effective automation do not need to use representative sampling and are capable of persistently verifying and validating the majority of their security measures automatically.

**Defined terms used:** Persistently, Provider, Validation, Verification

---

##### Receiving Assessor Advice  `IVV-CSO-RAA`

*Affects: Providers*

Providers MAY ask for and accept advice from their assessor during assessment regarding techniques and procedures that will improve their security posture or the effectiveness, clarity, and accuracy of their verification, validation and reporting procedures, UNLESS doing so is likely to compromise the objectivity and integrity of the assessment.

**Force:** MAY

**Defined terms used:** Assessor, Likely, Provider, Validation, Verification

---

#### Subset IAS — General Independent Assessor Responsibilities

##### Verify Implementation  `IVV-IAS-VIM`

*Affects: Assessors*

Assessors MUST verify that the measures implemented by the cloud service offering matches the measures they documented to meet FedRAMP Practices.

**Force:** MUST

> **Note:** This requires reviewing the actual measures themselves at a technical level, such as reviewing underlying code as appropriate; don't simply review documentation or screenshots.

**Defined terms used:** Assessor, Cloud Service Offering, FedRAMP Practices, Verification

---

##### Validate Effectiveness  `IVV-IAS-VEF`

*Affects: Assessors*

Assessors MUST validate the effectiveness of the implemented measures to ensure they have the intended outcome for meeting FedRAMP Practices.

**Force:** MUST

> **Note:** This requires reviewing the actual measures themselves at a technical level, such as reviewing underlying code as appropriate; don't simply review documentation or screenshots.

**Defined terms used:** Assessor, FedRAMP Practices, Validation

---

##### Assessment Summary  `IVV-IAS-SUM`

*Affects: Assessors*

Assessors MUST supply the provider with a high-level summary of their assessment process and findings for each FedRAMP Practice; this summary will be included by the provider in the FedRAMP Security Decision Record for the cloud service offering.

**Force:** MUST

> **Note:** FedRAMP does not require a separate Security Assessment Plan or Security Assessment Report for FedRAMP 20x or FedRAMP Rev5 Certifications; this information is expected to be included in the Security Decision Record by the cloud service provider.

**Defined terms used:** Assessor, Cloud Service Offering, FedRAMP Practices, Provider, Security Decision Record (SDR)

---

##### Overall Summary of Assessment  `IVV-IAS-OSA`

*Affects: Assessors*

Assessors MUST supply the provider with an overall summary of the verification and validation assessment results, including any resulting failures or areas of dispute; this summary will be included by the provider in the FedRAMP Certification Package Overview for the cloud service offering.

**Force:** MUST

> **Note:** FedRAMP does not supply a template for this summary and encourages independent assessment services to optimize for the best customer experience in the creation of these materials.

**Defined terms used:** Assessor, Certification Package, Cloud Service Offering, Provider, Validation, Verification

---

##### Verify Inclusion in Certification Package  `IVV-IAS-VIP`

*Affects: Assessors*

Assessors MUST verify that information supplied during a FedRAMP independent assessment is included in the FedRAMP Certification Package by the provider without inappropriate modification.

**Force:** MUST

> **Note:** This rule is related to IVV-CSO-ICP (Inclusion in Certification Package).

**Related rules:** `IVV-CSO-ICP`
**Defined terms used:** Assessor, Certification Package, FedRAMP Independent Assessment, Provider, Verification

---

##### Engage Provider Experts  `IVV-IAS-EPX`

*Affects: Assessors*

Assessors SHOULD engage provider experts in discussion to understand the decisions made by the provider and inform expert qualitative assessment, and SHOULD perform independent research to test such information as part of the expert qualitative assessment process.

**Force:** SHOULD

**Defined terms used:** Assessor, Provider

---

##### Sharing Advice  `IVV-IAS-SHA`

*Affects: Assessors*

Assessors MAY share advice with providers they are assessing about techniques and procedures that will improve the provider's security posture or the effectiveness, clarity, and accuracy of their verification, validation and reporting procedures, UNLESS doing so is likely to compromise the objectivity and integrity of the assessment.

**Force:** MAY

**Defined terms used:** Assessor, Likely, Provider, Validation, Verification

---

### MAS — Minimum Assessment Scope

*The Minimum Assessment Scope rules help providers define assessment boundaries narrowly enough to avoid unnecessary review of components that do not affect the offering's security. These rules still ensure the assessment includes the resources and connections needed to understand the offering's confidentiality, integrity, and availability.*

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to providers for any type of FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### Identify Information Resources  `MAS-CSO-IIR`

*Affects: Providers*

Providers MUST identify a set of information resources to assess for FedRAMP Certification that includes all information resources that are likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability of federal customer data handled by the cloud service offering; this set of information resources is the cloud service offering.

**Force:** MUST

> **Note:** Certain categories of cloud computing products and services are specified as entirely outside the scope of FedRAMP by the Director of the Office of Management and Budget. All such products and services are therefore not included in the cloud service offering for FedRAMP. For more, see <https://fedramp.gov/scope>.
> **Note:** Software produced by cloud service providers that is delivered separately for installation on agency systems and not operated in a shared responsibility model (typically including agents, application clients, mobile applications, etc. that are not fully managed by the cloud service provider) is not a cloud computing product or service and is entirely outside the scope of FedRAMP under the FedRAMP Certification Act. All such software is therefore not included in the cloud service offering for FedRAMP. For more, see <https://fedramp.gov/scope>.
> **Note:** All aspects of the cloud service offering are determined and maintained by the cloud service provider in accordance with related FedRAMP Certification rules and documented by the cloud service provider in their FedRAMP Certification Package.

**Evidence artifacts (all):**

- A machine readable output containing all required data of the components of the cloud service offering that are likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability of federal customer data handled by the cloud service offering.
- A human readable explanation of how the machine readable output is derived.
- The code for the automated process used to generate the machine readable output.

**Defined terms used:** Agency, Certification Package, Cloud Service Offering, Federal Customer Data, Handle, Information Resource, Likely, Provider

---

##### Information Flows and Security Categories  `MAS-CSO-FLO`

*Affects: Providers*

Providers MUST clearly identify, document, and explain information flows and security categories for ALL information resources or sets of information resources in the cloud service offering.

**Force:** MUST

> **Note:** Information resources (including third-party information resources) MAY vary by security category as appropriate to the type of information handled by or impacted by the information resource.

**Evidence artifacts (all):**

- A machine readable output containing all required data of the permitted connections between components of the cloud service offering that are likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability of federal customer data handled by the cloud service offering.
- A human readable explanation of how the machine readable output is derived.
- The code for the automated process used to generate the machine readable output.

**Defined terms used:** Cloud Service Offering, Handle, Information Resource, Provider, Security Category, Third-Party Information Resource

---

##### Third-Party Information Resources  `MAS-CSO-TPR`

*Affects: Providers*

Providers MUST address the potential impact to federal customer data from third-party information resources used by the cloud service offering, ONLY IF MAS-CSO-IIR (Identify Information Resources) APPLIES, by documenting the following information about each applicable third-party information resource:

- General usage and configuration
- Explanation or justification for use
- Mitigation measures in place to reduce the potential impact to federal customer data
- Compensating controls in place to reduce the potential impact to federal customer data

**Force:** MUST

**Evidence artifacts (all):**

- A machine readable output containing all required data of the third-party information resources of the cloud service offering that are likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability of federal customer data handled by the cloud service offering.
- A human readable explanation of how the machine readable output is derived.
- The code for the automated process used to generate the machine readable output.

**Schema:** [FedRAMP Certification Overview Package (FRC-CSO-PKG)](https://fedramp.gov/schemas/fedramp-certification-overview-package-schema-2026-06-24.json)
**Related rules:** `MAS-CSO-IIR`
**Defined terms used:** Cloud Service Offering, Federal Customer Data, Information Resource, Initial Incident Report (IIR), Provider, Third-Party Information Resource

---

##### Metadata Inclusion  `MAS-CSO-MDI`

*Affects: Providers*

Providers MUST include metadata (including metadata about federal customer data) in the Minimum Assessment Scope ONLY IF MAS-CSO-IIR (Identify Information Resources) APPLIES.

**Force:** MUST

**Evidence artifacts (all):**

- A machine readable output containing all required data of the metadata collected or maintained by the cloud service offering that are likely to handle federal customer data or likely to impact the confidentiality, integrity, or availability of federal customer data handled by the cloud service offering.
- A human readable explanation of how the machine readable output is derived.
- The code for the automated process used to generate the machine readable output.

**Related rules:** `MAS-CSO-IIR`
**Defined terms used:** Federal Customer Data, Information Resource, Initial Incident Report (IIR), Provider

---

##### Supplemental Information  `MAS-CSO-SUP`

*Affects: Providers*

Providers MAY include additional materials about other information resources that are not part of the cloud service offering in a FedRAMP Certification Package supplement; these resources will not be FedRAMP Certified and MUST be clearly marked and separated from the cloud service offering.

**Force:** MAY

> **Note:** This is intended to allow inclusion of things like security materials for apps, supplemental marketing collateral, and other information that is not part of the cloud service offering but may be useful to agencies.

**Defined terms used:** Agency, Certification Package, Cloud Service Offering, FedRAMP Certified, Information Resource, Provider

---

### MKT — Marketplace Listing

*The Marketplace Listing rules define how FedRAMP decides which cloud service offerings, assessors, and advisors may be listed in the FedRAMP Marketplace. These rules help agencies and other customers rely on the Marketplace as a consistent source of eligible services and supporting organizations, while requiring listed organizations to supply accurate, accessible, and machine-readable information.*

**Effective:** status: required; Consolidated Rules for 2026; obtain by 2026-07-04; maintain by 2026-07-04; grace until 2026-07-04.

**Subsets in this family:**

- **FRP** — FedRAMP Responsibilities: These rules apply to FedRAMP activities related to the FedRAMP Marketplace.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A, B, C, D; affects: FedRAMP
- **CSO** — General Provider Responsibilities: These rules apply to providers seeking a listing in the FedRAMP Marketplace.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: A, B, C, D; affects: Providers
- **IAS** — General Assessor Responsibilities: These rules apply to independent assessment services seeking a listing in the FedRAMP Marketplace.
  - *Applies to* — affects: Assessors
- **CAS** — General Advisor Responsibilities: These rules apply to consulting and advisory services seeking a listing in the FedRAMP Marketplace.
  - *Applies to* — affects: Advisors
- **IIP** — Provider Responsibilities for Initial Implementation Phase Listings: FedRAMP allows cloud service providers that are actively preparing to obtain a FedRAMP Certification to apply for listing in the FedRAMP Marketplace. All cloud service providers must obtain a Initial Implementation Phase Marketplace Listing before they can apply for FedRAMP Certification. These rules apply to providers seeking a Initial Implementation Phase listing in the FedRAMP Marketplace.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; affects: Providers

#### Subset FRP — FedRAMP Responsibilities

##### Scope of FedRAMP  `MKT-FRP-SOF`

*Affects: FedRAMP*

FedRAMP MUST NOT list cloud service offerings in the Marketplace or perform any FedRAMP Certification activities unless it determines the cloud service offering is within the scope of FedRAMP.

**Force:** MUST NOT

**Reference:** [Scope of FedRAMP](https://fedramp.gov/scope)
**Defined terms used:** Cloud Service Offering

---

#### Subset CSO — General Provider Responsibilities

##### Marketplace Listing Requirements  `MKT-CSO-MLR`

*Affects: Providers*

Providers MUST address at least these FedRAMP rules to apply for a new FedRAMP Marketplace listing OR to request updates to an existing listing:

- Certification Data Sharing: CDS-CSO-PUB (Public Information)

**Force:** MUST

**Related rules:** `CDS-CSO-PUB`
**Defined terms used:** Certification Data, Provider

---

##### Provider Marketplace Listing Requests  `MKT-CSO-PML`

*Affects: Providers*

Providers MUST notify FedRAMP using the FedRAMP Marketplace Providing Listing Request Form to request a listing in the FedRAMP Marketplace.

**Force:** MUST

> **Note:** FedRAMP does not accept applications for a FedRAMP Marketplace Listing via email!

**Notification:**

- to FedRAMP, via form, FedRAMP Marketplace Provider Listing Request Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=50939227168027>

**Defined terms used:** Provider

---

#### Subset IAS — General Assessor Responsibilities

##### Only FedRAMP Recognized Assessors  `MKT-IAS-OFR`

*Affects: Assessors*

Assessors MUST obtain and maintain FedRAMP Recognition to be listed in the FedRAMP Marketplace.

**Force:** MUST

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Website Requirements for Assessors  `MKT-IAS-WEB`

*Affects: Assessors*

Assessors MUST have an appropriate web site that publicly supplies at least the following information in human-readable and JSON formats:

- General description of the independent assessment service
- Contact information
- Types of independent services offered
- Optional: Positive attestations from customers or customer references

**Force:** MUST

**Evidence artifacts (all):**

- URL to the human-readable data.
- URL to the machine-readable data.

**Schema:** [FedRAMP Assessor Information Schema](https://fedramp.gov/schemas/fedramp-assessor-information-schema-v2026.06.06.01.json)
**Defined terms used:** Assessor

---

##### Listing Requests for Assessors  `MKT-IAS-LRQ`

*Affects: Assessors*

Assessors MUST complete the Assessor Listing Request Form to request listing in the FedRAMP Marketplace.

**Force:** MUST

**Notification:**

- to FedRAMP, via form, [For Assessors/Advisors] Marketplace Listing Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=52060327520795>

**Defined terms used:** Assessor

---

#### Subset CAS — General Advisor Responsibilities

##### Website Requirements for Advisors  `MKT-CAS-WEB`

*Affects: Advisors*

Advisors MUST have an appropriate web site that publicly supplies at least the following information in consistent machine-readable and human-readable formats:

- General description of the consulting or advisory service
- Contact information
- Types of consulting or advisory services offered
- Optional: Positive attestations from customers or customer references

**Force:** MUST

**Evidence artifacts (all):**

- URL to the human-readable data.
- URL to the machine-readable data.

**Schema:** [FedRAMP Advisory Service Information Schema](https://fedramp.gov/schemas/fedramp-advisor-information-schema-v2026.06.06.01.json)
**Defined terms used:** Advisor, Machine-Readable

---

##### Listing Requests for Advisors  `MKT-CAS-LRQ`

*Affects: Advisors*

Advisors MUST complete the Advisor Listing Request Form to request listing in the FedRAMP Marketplace.

**Force:** MUST

**Notification:**

- to FedRAMP, via form, [For Assessors/Advisors] Marketplace Listing Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=52060327520795>

**Defined terms used:** Advisor

---

##### Advisor Responses to FedRAMP  `MKT-CAS-RFR`

*Affects: Advisors*

Advisors MUST reply to all requests from @fedramp.gov or @gsa.gov email addresses sent to the contact information provided in their advisor listing within 5 business days.

**Force:** MUST

**Corrective actions:**

- If an advisor fails to respond to a request within 5 business days, FedRAMP will send a follow-up email.
- If an advisor fails to respond to the follow-up email within 5 business days, FedRAMP will remove their listing from the Marketplace.
- Advisors removed from the Marketplace for failure to respond to FedRAMP will not be eligible for listing for at least 6 months unless there are extenuating circumstances.

**Defined terms used:** Advisor

---

#### Subset IIP — Provider Responsibilities for Initial Implementation Phase Listings

##### Agency Use Cases  `MKT-IIP-AGU`

*Affects: Providers*

Providers MUST demonstrate that a cloud service offering is intended for one of the following use cases:

- Direct Use: The product will be used directly by agency customers for integration into a federal information system that falls within the scope of 44 USC § 3506 and will receive an agency Authorization to Operate.
- Indirect Use: The product will be included as a third-party information resource in other cloud service offerings that are directly used by agency customers.

**Force:** MUST

> **Note:** FedRAMP will not list products or services that are outside the explicit statutory scope of FedRAMP; See MKT-FRP-SOF (Scope of FedRAMP).
> **Note:** Services used by private companies to meet other compliance requirements (such as CMMC) that do not also meet one of the above use cases are outside the scope of FedRAMP.

**Related rules:** `MKT-FRP-SOF`
**Defined terms used:** Agency, Cloud Service Offering, Information Resource, Provider, Third-Party Information Resource

---

##### Demonstrating Continuous Progress  `MKT-IIP-DCP`

*Affects: Providers*

Providers MUST demonstrate continuous progress towards a FedRAMP Certification, documented in their Trust Center or website and updated at least quarterly; progress is measured by the provider against documented goals and milestones.

**Force:** MUST

> **Note:** This is an opportunity for a business to showcase its goals and progress, and should be seen as a marketing and customer experience challenge instead of a compliance challenge.

**Defined terms used:** Provider, Trust Center

---

##### Deadline for Assessment  `MKT-IIP-DLA`

*Affects: Providers*

Providers MUST demonstrate that an assessment for a FedRAMP Certification Class B, C, or D has been scheduled within 2 years of initial listing in the Initial Implementation Phase.

**Force:** MUST

**Corrective actions:**

- If a provider fails to schedule an assessment for a FedRAMP Certification Class B, C, or D within 2 years of initial listing in the Initial Implementation Phase, FedRAMP will remove their listing from the Marketplace until they provide evidence of a scheduled assessment.

**Defined terms used:** Certification Class, Provider

---

### REC — FedRAMP Recognition of Independent Assessment Services

*The FedRAMP Recognition of independent assessment services rules explain the requirements for assessors to obtain and maintain FedRAMP Recognition in order to support the FedRAMP Certification process.*

**Effective:** status: required; Consolidated Rules for 2026; obtain by 2026-07-04; maintain by 2026-07-04; grace until 2026-07-04.

**Subsets in this family:**

- **FRP** — FedRAMP Responsibilities: These rules apply to FedRAMP when evaluating independent assessment services for initial or ongoing FedRAMP Recognition.
  - *Applies to* — affects: FedRAMP
- **IAS** — General Independent Assessor Responsibilities: These rules apply to independent assessment services seeking to obtain or maintain FedRAMP Recognition.
  - *Applies to* — affects: Assessors

#### Subset FRP — FedRAMP Responsibilities

##### Foreign Ownership Collection  `REC-FRP-FOC`

*Affects: FedRAMP*

FedRAMP MUST maintain a process to collect foreign ownership, control, or influence declarations from FedRAMP Recognized assessors and updates to those declarations.

**Force:** MUST

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Recognized Assessors Only  `REC-FRP-RAO`

*Affects: FedRAMP*

FedRAMP MUST NOT accept verification, validation, or other attestations from independent assessors who are not FedRAMP Recognized.

**Force:** MUST NOT

**Defined terms used:** Assessor, FedRAMP Recognized, Validation, Verification

---

##### Double Revocation Disqualification  `REC-FRP-DRD`

*Affects: FedRAMP*

FedRAMP MUST NOT restore FedRAMP Recognition for an assessor after FedRAMP has revoked that assessor's FedRAMP Recognition 2 times.

**Force:** MUST NOT

**Defined terms used:** Assessor, FedRAMP Recognized

---

#### Subset IAS — General Independent Assessor Responsibilities

##### A2LA Accreditation  `REC-IAS-ACC`

*Affects: Assessors*

Assessors MUST obtain and maintain accreditation through the American Association for Laboratory Accreditation (A2LA) Cybersecurity Inspection Body Program to qualify for FedRAMP Recognition.

**Force:** MUST

> **Note:** FedRAMP will remove FedRAMP Recognition immediately after the American Association for Laboratory Accreditation notifies FedRAMP that an assessor's accreditation has lapsed.

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Actually Do Assessments  `REC-IAS-ADA`

*Affects: Assessors*

Assessors MUST complete at least 2 initial or ongoing assessments for Class B, C, or D FedRAMP Certifications every 2 years to maintain FedRAMP Recognition.

**Force:** MUST · **Timeframe:** 2 years

> **Note:** For a newly FedRAMP Recognized Assessor, this rule applies beginning on the initial date of FedRAMP Recognition if that date is later than 2026-06-01.

**Corrective actions:**

- FedRAMP will notify assessors when they are within 6 months of losing FedRAMP Recognition under this rule and request a corrective action plan.
- Assessors whose corrective action plan is not accepted will lose FedRAMP Recognition and must supply an alternative corrective action plan to move toward renewed FedRAMP Recognition.

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Policy and Standards Compliance  `REC-IAS-PSC`

*Affects: Assessors*

Assessors MUST maintain compliance with the latest American Association for Laboratory Accreditation (A2LA) R311 - Specific Requirements - Federal Risk and Authorization Management Program to maintain FedRAMP Recognition.

**Force:** MUST

**Reference:** [A2LA Public Documents](https://portal.a2la.org/documents/)
**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Annual Surveillance Assessment  `REC-IAS-ANR`

*Affects: Assessors*

Assessors MUST achieve a favorable annual surveillance assessment by the American Association for Laboratory Accreditation (A2LA) to maintain FedRAMP Recognition.

**Force:** MUST · **Timeframe:** 1 years

**Corrective actions:**

- Assessors have 75 days to complete corrective actions for nonconformances identified by the American Association for Laboratory Accreditation (A2LA)during a surveillance assessment. If an assessor exceeds the 75 day resolution timeframe, A2LA will supply FedRAMP with a narrative of the assessor's current status, the assessor will be designated as in Remediation in the FedRAMP Marketplace, and the assessor must supply a corrective action plan to FedRAMP.

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Full A2LA Reassessment  `REC-IAS-RAS`

*Affects: Assessors*

Assessors MUST achieve a favorable full reassessment by the American Association for Laboratory Accreditation (A2LA) at least once every 2 years to maintain FedRAMP Recognition.

**Force:** MUST · **Timeframe:** 2 years

**Corrective actions:**

- Assessors have 75 days to complete corrective actions for nonconformances identified by the American Association for Laboratory Accreditation during a reassessment. If an assessor exceeds the 75 day resolution timeframe, the American Association for Laboratory Accreditation will supply FedRAMP with a narrative of the assessor's current status, the assessor will be designated as In Remediation in the FedRAMP Marketplace, and the assessor must supply a corrective action plan to FedRAMP.

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Re-entry after Revocation  `REC-IAS-RAR`

*Affects: Assessors*

Assessors MUST satisfy all American Association for Laboratory Accreditation (A2LA) re-entry conditions before regaining FedRAMP Recognition after revocation.

**Force:** MUST

> **Note:** A revocation may require extended time in revoked status while the assessor demonstrates acceptable performance in the A2LA Cybersecurity Inspection Body Program before seeking FedRAMP Recognition again.

**Defined terms used:** Assessor, FedRAMP Recognized

---

##### Roles and Qualifications  `REC-IAS-RQU`

*Affects: Assessors*

Assessors MUST staff FedRAMP assessments with all roles required by the American Association for Laboratory Accreditation (A2LA) R311, including personnel who meet the qualifications for each role, unless FedRAMP publishes a specific exception for a limited pilot or other explicitly scoped process.

**Force:** MUST

**Corrective actions:**

- FedRAMP may require a consultation meeting, corrective action plan, or revocation for failure to comply.

**Defined terms used:** Assessor

---

##### Annual Foreign Interest Reports  `REC-IAS-AFI`

*Affects: Assessors*

Assessors MUST report information relating to any foreign interest, foreign influence, or foreign control of the independent assessment service to FedRAMP annually.

**Force:** MUST · **Timeframe:** 1 years

**Notification:**

- to FedRAMP, via form, FedRAMP Foreign Ownership, Control, or Influence Declaration Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=52006681154587>

**Defined terms used:** Assessor

---

##### Changes in Foreign Interest  `REC-IAS-CFI`

*Affects: Assessors*

Assessors MUST report updated information relating to any foreign interest, foreign influence, or foreign control of the independent assessment service within 48 hours of any change in foreign ownership or control.

**Force:** MUST · **Timeframe:** 48 hours

**Notification:**

- to FedRAMP, via form, FedRAMP Foreign Ownership, Control, or Influence Declaration Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=52006681154587>

**Defined terms used:** Assessor

---

##### Performance Standards  `REC-IAS-PST`

*Affects: Assessors*

Assessors MUST meet FedRAMP performance standards for assessor deliverables to support independent, risk-based reviews by FedRAMP and federal agencies, including at least:

- Complete Assessment Packages: Supplies complete and thoroughly prepared documents on the first submission.
- Deliverable Quality: Ensures documentation content is clear, complete, concise, and consistent.
- Deliverable Format: Follows applicable FedRAMP rules.
- Timeliness and Responsiveness: Delivers documents on time according to the schedule agreed to by the federal government, provider, and assessor.
- Testing Accuracy and Completeness: Ensures accurate and complete testing of a cloud service offering in accordance with ISO 17020 and FedRAMP security rules.
- Assessment Integrity: Submits independent assessments of provider security implementations that are not influenced by provider demands.
- Chain of Custody: Preserves the integrity and chain of custody of assessor-authored documents and provider-supplied evidence used in FedRAMP assessments.

**Force:** MUST

**Defined terms used:** Agency, Assessor, Cloud Service Offering, Provider

---

##### Corrective Action Plan  `REC-IAS-CAP`

*Affects: Assessors*

Assessors MUST supply a corrective action plan when FedRAMP requires one for performance standards deficiencies or organizational risks.

**Force:** MUST

**Defined terms used:** Assessor

---

##### Invalid Deliverables  `REC-IAS-INV`

*Affects: Assessors*

Assessors MUST treat deliverables prepared, performed, or submitted by personnel who do not meet required role qualifications as invalid for FedRAMP purposes.

**Force:** MUST

**Defined terms used:** Assessor

---

##### Advisory Separation  `REC-IAS-SEP`

*Affects: Assessors*

Assessors MUST NOT perform a FedRAMP independent assessment of the same cloud service offering within 2 years after supplying advisory or consulting services for that offering, unless FedRAMP publishes a specific exception for a limited pilot or other explicitly scoped process.

**Force:** MUST NOT · **Timeframe:** 2 years

**Corrective actions:**

- FedRAMP may require a consultation meeting, corrective action plan, or revocation for failure to comply.

**Defined terms used:** Assessor, Cloud Service Offering, FedRAMP Independent Assessment

---

### SCG — Secure Configuration Guide

*The Secure Configuration Guide rules help agencies and other customers understand how to configure a cloud service offering securely. These rules require providers to clearly explain the security impact of common settings so customers can make informed configuration choices.*

**Effective:** status: required; Consolidated Rules for 2026; obtain by 2026-03-01; maintain by 2026-03-01; grace until 2026-07-01.

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to providers with FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **ENH** — Enhanced Capabilities: These recommendations apply to providers with FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### Recommended Secure Configuration  `SCG-CSO-RSC`

*Affects: Providers*

Providers MUST create, maintain, and make available recommendations for securely configuring their cloud services (the Secure Configuration Guide) that includes at least the following information:

- Required: Instructions on how to securely access, configure, operate, and decommission top-level administrative accounts that control enterprise access to the entire cloud service offering.
- Required: Explanations of security-related settings that can be operated only by top-level administrative accounts and their security implications.
- Recommended: Explanations of security-related settings that can be operated only by privileged accounts and their security implications.

**Force:** MUST

> **Note:** These rules refer to this guidance as a Secure Configuration Guide but cloud service providers may make this guidance available in various appropriate forms that provide the best customer experience.
> **Note:** This guidance should explain how top-level administrative accounts and privileged accounts are named and referred to in the cloud service offering.

**Evidence artifacts (all):**

- URL to the human-readable data.
- URL to the machine-readable data.

**Schema:** [FedRAMP Certification Overview Package (FRC-CSO-PKG)](https://fedramp.gov/schemas/fedramp-certification-overview-package-schema-2026-06-24.json)
**Defined terms used:** Cloud Service Offering, Privileged Account, Provider, Top-Level Administrative Account

---

##### Use Instructions  `SCG-CSO-AUP`

*Affects: Providers*

Providers MUST include instructions in the FedRAMP Certification Package that explain how to obtain and use the Secure Configuration Guide.

**Force:** MUST

> **Note:** These instructions may appear in a variety of ways; it is up to the provider to do so in the most appropriate and effective ways for their specific customer needs.

**Evidence artifacts (all):**

- URL or explanation of how to request these materials.
- Explanation of how the provider decides whether or not to share these materials or other related policies.

**Defined terms used:** Certification Package, Provider

---

##### Public Secure Configuration Guidance  `SCG-CSO-PUB`

*Affects: Providers*

Providers SHOULD make the Secure Configuration Guide available publicly.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Provider

---

##### Secure Defaults  `SCG-CSO-SDF`

*Affects: Providers*

Providers SHOULD set all settings to their recommended secure defaults for top-level administrative accounts and privileged accounts when initially provisioned.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Privileged Account, Provider, Top-Level Administrative Account

---

#### Subset ENH — Enhanced Capabilities

##### Comparison Capability  `SCG-ENH-CMP`

*Affects: Providers*

Providers SHOULD offer the capability to compare all current settings for top-level administrative accounts and privileged accounts to the recommended secure defaults.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Privileged Account, Provider, Top-Level Administrative Account

---

##### Export Capability  `SCG-ENH-EXP`

*Affects: Providers*

Providers SHOULD offer the capability to export all security settings in a machine-readable format.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Machine-Readable, Provider

---

##### API Capability  `SCG-ENH-API`

*Affects: Providers*

Providers SHOULD offer the capability to view and adjust security settings via an API or similar capability.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Provider

---

##### Machine-Readable Guidance  `SCG-ENH-MRG`

*Affects: Providers*

Providers SHOULD also provide the Secure Configuration Guide in a machine-readable format that can be used by customers or third-party tools to compare against current settings.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Machine-Readable, Provider

---

##### Versioning and Release History  `SCG-ENH-VRH`

*Affects: Providers*

Providers SHOULD provide versioning and a release history for recommended secure default settings for top-level administrative accounts and privileged accounts as they are adjusted over time.

**Force:** SHOULD

**Evidence artifacts (all):**

- Explanation of how to access this information
- or explanation why this functionality is not available

**Defined terms used:** Privileged Account, Provider, Top-Level Administrative Account

---

### SCN — Significant Change Notification

*The Significant Change Notification rules supply a simple framework allowing providers to make significant changes to their own products while keeping agency customers in the loop. These rules organize significant changes into clear categories so agencies can understand the expected risk and make authorization decisions accordingly.*

**Subsets in this family:**

- **FRP** — FedRAMP Responsibilities: These rules apply to FedRAMP.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: FedRAMP
- **CSO** — General Provider Responsibilities: These rules apply to providers with FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **ADP** — Adaptive Changes: These rules apply to all adaptive significant changes.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **RTR** — Routine Recurring Changes: These rules apply to all routine recurring significant changes.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **TRF** — Transformative Changes: These rules apply to all transformative significant changes.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset FRP — FedRAMP Responsibilities

##### Corrective Action Plan Conditions  `SCN-FRP-CAP`

*Affects: FedRAMP*

FedRAMP MAY require providers to delay significant changes beyond the standard Significant Change Notification period and/or submit significant changes for approval in advance as a condition of a formal FedRAMP Corrective Action Plan or other agreement.

**Force:** MAY

> **Note:** The circumstances and conditions of such a Corrective Action Plan will vary and be documented in the Correcive Action Plan.

**Defined terms used:** Provider, Significant Change

---

#### Subset CSO — General Provider Responsibilities

##### Evaluate Changes  `SCN-CSO-EVA`

*Affects: Providers*

Providers MUST evaluate all potential significant changes to determine the type of significant change and follow the appropriate Significant Change Notification rules.

- Is it a significant change? --> Continue evaluation and follow the Significant Change Notification rules.
- If it is, is it an FedRAMP Certification class change?  --> This requires a new assessment and cannot be done under the Significant Change Notification rules.
- If it is not, is it a routine recurring change? --> Follow the Routine Recurring Change rules (SCN-RTR Routine Recurring Changes).
- If it is not, is it a transformative change? --> Follow the Transformative Change rules (SCN-TRF Transformative Changes).
- If it is not, then it is an adaptive change --> Follow the Adaptive Change rules (SCN-ADP Adaptive Changes).

**Force:** MUST

**Evidence artifacts (all):**

- Evidence of signifincat change evaluation including a description fo the change, the determined type, and an explanation for the decision. At least one example must be provided for each type of change. Real examples are prefered but the provider may use fictitious examples as long as the example provides evidence of the decision making process.

**Schema:** [FedRAMP Significant Change Notification (SCN-CSO-INF)](https://fedramp.gov/schemas/fedramp-significant-change-notification-schema-2026-06-24.json)
**Defined terms used:** Adaptive Change, Certification Class, Certification Class Change, Provider, Routine Recurring Change, Significant Change, Transformative Change

---

##### Maintain Audit Records  `SCN-CSO-MAR`

*Affects: Providers*

Providers MUST maintain auditable records of the significant change evaluation activities required by SCN-CSO-EVA (Evaluate Changes) and make them available to FedRAMP as requested.

**Force:** MUST

> **Note:** These audit records must be available to FedRAMP on request; these records do not need to be included in the FedRAMP Certification Package by default and do not need to be emailed to FedRAMP continuously.

**Evidence artifacts (all):**

- Explanation of how FedRAMP can obtain this information.

**Related rules:** `SCN-CSO-EVA`
**Defined terms used:** Certification Package, Provider, Significant Change

---

##### Required Information  `SCN-CSO-INF`

*Affects: Providers*

Providers MUST include at least the following information in Significant Change Notifications:

- Service Offering FedRAMP ID
- Assessor Name (if applicable)
- Related Vulnerability (if applicable)
- Significant Change type and explanation of categorization
- Short description of change
- Reason for change
- Summary of customer impact, including changes to services and customer configuration responsibilities
- Plan and timeline for the change, including for the verification, assessment, and/or validation of impacted Key Security Indicators or Rev5 Controls
- Copy of the business or security impact analysis
- Name and title of approver

**Force:** MUST

> **Note:** Structure of the information may vary depending on how the provider tracks this internally.

**Evidence artifacts (all):**

- A recent Significant Change Notification or sample Significant Change Notification

**Schema:** [FedRAMP Significant Change Notification (SCN-CSO-INF)](https://fedramp.gov/schemas/fedramp-significant-change-notification-schema-2026-06-24.json)
**Defined terms used:** Assessor, Provider, Significant Change, Validation, Verification, Vulnerability

---

##### Historical Notifications  `SCN-CSO-HIS`

*Affects: Providers*

Providers MUST keep 12 months of historical Significant Change Notifications available with their FedRAMP Certification Data.

**Force:** MUST

**Evidence artifacts (all):**

- Explanation of how FedRAMP can obtain this information.

**Defined terms used:** Certification Data, Provider, Significant Change

---

##### Human and Machine-Readable Notifications  `SCN-CSO-HRM`

*Affects: Providers*

Providers MUST make ALL Significant Change Notifications and related audit records available in human-readable and JSON formats.

**Force:** MUST

**Evidence artifacts (all):**

- URL or explanation of how to request these materials.
- Explanation of how the provider decides whether or not to share these materials or other related policies.

**Schema:** [FedRAMP Significant Change Notifications Schema](https://fedramp.gov/schemas/fedramp-significant-change-notifications-schema-v2026.06.06.01.json)
**Defined terms used:** Provider, Significant Change

---

##### Additional Relevant Information  `SCN-CSO-ARI`

*Affects: Providers*

Providers MAY include additional relevant information in Significant Change Notifications.

**Force:** MAY

> **Note:** This allows providers to convey whatever additional information they think is relevant without worrying about negative consequences from not following an exact template.

**Defined terms used:** Provider, Significant Change

---

##### Notification Mechanisms  `SCN-CSO-NOM`

*Affects: Providers*

Providers MAY notify necessary parties in a variety of ways as long as the mechanism for notification is clearly documented in the FedRAMP Certification Package and easily accessible.

**Force:** MAY

> **Note:** The sharing mechanism should be designed based on the needs of the provider and their customers and may vary between providers.
> **Note:** The default sharing mechanism for most providers during the SCN beta was to send an email to agency customers and upload a copy of the notification to the provider's secure sharing location.

**Evidence artifacts (all):**

- Current list of available notification mechanisms

**Defined terms used:** Agency, Certification Package, Provider

---

##### Emergency Changes  `SCN-CSO-EMG`

*Affects: Providers*

Providers MAY execute significant changes (including transformative changes) during an emergency or incident without following the Significant Change Notification rules in advance. In such emergencies, providers MUST follow all relevant procedures, notify all necessary parties, retroactively provide all Significant Change Notification materials, and complete appropriate assessment after the incident.

**Force:** MAY

> **Note:** Procedures for emergency changes should be documented in the FedRAMP Certification Package.

**Defined terms used:** All Necessary Parties, Certification Package, Incident, Provider, Significant Change, Transformative Change

---

#### Subset ADP — Adaptive Changes

##### Notification Requirements  `SCN-ADP-NTF`

*Affects: Providers*

Providers MUST notify all necessary parties within 10 business days after finishing adaptive changes, also including the following information:

- Summary of any new risks identified and/or vulnerabilities resulting from the change (if applicable)

**Force:** MUST · **Timeframe:** 10 bizdays

> **Note:** Activities that match the adaptive significant change type are a frequent and normal part of iteratively improving a service by deploying new functionality or modifying existing functionality in a way that is typically transparent to customers and does not introduce significant new security risks.
> **Note:** In general, most changes that do not happen regularly will be adaptive changes. This change type deliberately covers a wide range of activities in a way that requires assessment and consideration.

**Notification:**

- to All Necessary Parties, via update, FedRAMP Certification Data — FedRAMP Certification Data

**Evidence artifacts (all):**

- At least the most recent SCN notification including the date it was sent and the date the change was applied. Additional examples may be provided. If no SCN notifications have been sent then this artifact is not required.

**Examples:**

- {'id': 'Tips on adaptive changes', 'key_tests': ['Requires minimal changes to security plans or procedures', 'Requires some careful planning and project management to implement, but does not rise to the level of planning required for transformative changes', 'Requires verification of existing functionality and secure configuration after implementation'], 'examples': ['Updates to operating systems, containers, virtual machines, software or libraries with known breaking changes, complex steps, or service disruption', 'Deploying larger than normal incremental feature improvements in code or libraries that are the work of multiple weeks of development efforts but are not considered a major new service', 'Changing cryptographic modules where the new module meets the same standards and characteristics of the former', 'Replacing a like-for-like component where some security plan or procedure adjustments are required (e.g., scanning tool or managed database swap)', 'Adding models to existing approved AI services without exposing federal customer data to new services']}

**Defined terms used:** Adaptive Change, All Necessary Parties, Provider, Regularly, Significant Change, Vulnerability

---

#### Subset RTR — Routine Recurring Changes

##### No Notification Requirements  `SCN-RTR-NNR`

*Affects: Providers*

Providers SHOULD NOT make formal Significant Change Notifications for routine recurring changes; this type of change is exempted from notification requirements.

**Force:** SHOULD NOT

> **Note:** Activities that match the routine recurring significant change type are performed regularly and routinely by cloud service providers to address flaws or vulnerabilities, address incidents, and generally perform the typical maintenance and service delivery changes expected during day-to-day operations.
> **Note:** These changes leverage mature processes and capabilities to identify, mitigate, and remediate risks as part of the change. They are often entirely automated and may occur without human intervention, even though they have an impact on security of the service.
> **Note:** If the activity does not occur regularly and routinely then it cannot be a significant change of this type (e.g., replacing all physical firewalls to remediate a vulnerability is obviously not regular or routine).

**Examples:**

- {'id': 'Tips on ongoing operations', 'key_tests': ['Routine care and feeding by staff during normal duties', 'No major impact to service availability', 'Does not require executive approval'], 'examples': ['Provisioning or deprovisioning capacity to support service elasticity', 'Changing or tuning performance configurations for instances or services', 'Updating and maintaining operational handling of information flows and protection across physical and logical networks (e.g., updating firewall rules)', 'Generating or refreshing API or access tokens']}
- {'id': 'Tips on vulnerability management', 'key_tests': ['Minor, incremental patching or updates', 'Significant refactoring or migration process NOT required', 'No breaking changes'], 'examples': ['Updating security service or endpoint signatures', 'Routine patching of devices, operating systems, software or libraries', 'Updating and deploying code that applies normal fixes and improvements as part of a regular development cycle', 'Vulnerability remediation activity that simply replaces a known-bad component(s) with a better version of the exact same thing, running in the exact same way with no changes to processes']}

**Defined terms used:** Incident, Provider, Regularly, Routine Recurring Change, Significant Change, Vulnerability

---

#### Subset TRF — Transformative Changes

##### Notification of Initial Plans  `SCN-TRF-NIP`

*Affects: Providers*

Providers MUST notify all necessary parties of initial plans for transformative changes at least 30 business days before starting transformative changes, including a summary of any likely security impacts or changes in risk.

**Force:** MUST · **Timeframe:** 30 bizdays

**Notification:**

- to All Necessary Parties, via update, FedRAMP Certification Data — FedRAMP Certification Data

**Evidence artifacts (all):**

- At least the most recent initial SCN notification for a transformative change including the date it was sent and the date the change was applied. Additional examples may be provided. If no transformative SCN notifications have been sent then this artifact is not required.

**Defined terms used:** All Necessary Parties, Likely, Provider, Transformative Change

---

##### Notification of Final Plans  `SCN-TRF-NFP`

*Affects: Providers*

Providers MUST notify all necessary parties of final plans for transformative changes at least 10 business days before starting transformative changes, including updates to all previously sent information.

**Force:** MUST · **Timeframe:** 10 bizdays

**Notification:**

- to All Necessary Parties, via update, FedRAMP Certification Data — FedRAMP Certification Data

**Evidence artifacts (all):**

- At least the most recent final SCN notification for a transformative change including the date it was sent and the date the change was applied. Additional examples may be provided. If no transformative SCN notifications have been sent then this artifact is not required.

**Defined terms used:** All Necessary Parties, Provider, Transformative Change

---

##### Notification After Finishing  `SCN-TRF-NAF`

*Affects: Providers*

Providers MUST notify all necessary parties within 5 business days after finishing transformative changes, including updates to all previously sent information.

**Force:** MUST · **Timeframe:** 5 bizdays

**Notification:**

- to All Necessary Parties, via update, FedRAMP Certification Data — FedRAMP Certification Data

**Evidence artifacts (all):**

- At least the most recent post deployment SCN notification for a transformative change including the date it was sent and the date the change was applied. Additional examples may be provided. If no transformative SCN notifications have been sent then this artifact is not required.

**Defined terms used:** All Necessary Parties, Provider, Transformative Change

---

##### Notification After Verification  `SCN-TRF-NAV`

*Affects: Providers*

Providers MUST notify all necessary parties within 5 business days after completing the verification, assessment, and/or validation of transformative changes, also including the following information:

- Updates to all previously sent information
- Summary of any new risks identified and/or vulnerabilities resulting from the change (if applicable)
- Copy of the security assessment report (if applicable)

**Force:** MUST · **Timeframe:** 5 bizdays

**Notification:**

- to All Necessary Parties, via update, FedRAMP Certification Data — FedRAMP Certification Data

**Evidence artifacts (all):**

- At least the most recent after verification SCN notification for a transformative change including the date it was sent and the date the change was applied. Additional examples may be provided. If no transformative SCN notifications have been sent then this artifact is not required.

**Defined terms used:** All Necessary Parties, Provider, Transformative Change, Validation, Verification, Vulnerability

---

##### Update Documentation  `SCN-TRF-UPD`

*Affects: Providers*

Providers MUST publish updated service documentation and other materials to reflect transformative changes within 30 business days after finishing transformative changes.

**Force:** MUST · **Timeframe:** 30 bizdays

> **Note:** This requirement is focused on service documentation like user guides, information listed in the marketplace, and other such materials; it does not require updating the system security plan or FedRAMP Certification Package.

**Evidence artifacts (all):**

- Date of the most recent transformative change and the date of the corresponding documentation update. If no documentation updates were required as the result of this change, explain how this was determined.

**Defined terms used:** Certification Package, Provider, Transformative Change

---

##### Third-Party Review  `SCN-TRF-TPR`

*Affects: Providers*

Providers SHOULD engage a third-party assessor to review the scope and impact of the planned change before starting transformative changes if human validation is necessary; such reviews SHOULD be limited to security decisions that require human validation.

**Force:** SHOULD

> **Note:** Activities that match the transformative significant change type are rare for a cloud service offering, adjusted for the size, scale, and complexity of the service. Small cloud service offerings may go years without transformative changes, while hyperscale providers may release multiple transformative changes per year.

**Evidence artifacts (all):**

- Third Party assesment report OR explanation why a third party assessor was not engaged

**Examples:**

- {'id': 'Tips on transformative changes', 'key_tests': ['Alters the service risk profile or require new or significantly different actions to address customer responsibilities', 'Requires significant new design, development and testing with discrete associated project planning, budget, marketing, etc.', 'Requires extensive updates to security assessments, documentation, and how a large number of security requirements are met and validated'], 'examples': ['The addition, removal, or replacement of a critical third party service that handles a significant portion of information (e.g., IaaS change)', 'Increasing the security categorization of a service within the offering that actively handles federal customer data (does NOT include impact change of entire offering - see FedRAMP Certification class change)', 'Replacement of underlying management planes or paradigm shift in workload orchestration (e.g., bare-metal servers or virtual machines to containers, migration to kubernetes)', 'Datacenter migration where large amounts of federal customer data is moved across boundaries different from normal day-to-day operations', 'Adding a new AI-based capability that impacts federal customer data in a different way than existing services or capabilities (such as integrating a new third-party service or training on federal customer data)']}

**Defined terms used:** Assessor, Cloud Service Offering, Provider, Significant Change, Transformative Change, Validation

---

### SDR — Security Decision Record

*The Security Decision Record replaced a traditional System Security Plan with a persistently maintained, verified, and validated record of the security decisions made by the cloud service provider over the lifecycle of their cloud service offering.*

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to providers for FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### FedRAMP Rules  `SDR-CSO-FRR`

*Affects: Providers*

Providers MUST supply a Security Decision Record, in both human-readable and JSON formats, that includes at least all of the following information for each applicable FedRAMP rule:

- Explanation of how the rule is followed, or an explanation of the reason and resulting risk to customers for not following the rule.
- Verification that the implementation is appropriate for the rule, or that the reason for not implementing is accepted by a senior official.
- Validation that the implementation is in place and working as intended, or that the reason for not implementing is accepted by a senior official.
- Independent verification.
- Independent validation.
- Any responses or clarifications to the comments in the independent verification or validation.
- Rule-specific artifacts (if applicable).

**Force:** MUST

**Schema:** [FedRAMP Security Decision Record Schema](https://fedramp.gov/schemas/fedramp-security-decision-record-schema-v2026.06.06.01.json)
**Defined terms used:** Artifacts, Provider, Security Decision Record (SDR), Validation, Verification

---

##### Security Decision Record Metadata  `SDR-CSO-MTD`

*Affects: Providers*

Providers MUST also include the following basic metadata in their Security Decision Record:

- Version
- Date and time of last update
- Source of update

**Force:** MUST

**Defined terms used:** Provider, Security Decision Record (SDR)

---

### VDR — Vulnerability Detection and Response

*The Vulnerability Detection and Response rules require providers to continuously identify, analyze, prioritize, mitigate, and remediate vulnerabilities and related exposures through automated systems. These rules give providers flexibility in implementation while ensuring agencies receive the information needed to support ongoing authorization decisions.*

**Effective:** status: required; Mandated by CISA BOD 26-04; obtain by 2026-12-07; maintain by 2026-12-07; grace until 2027-03-07.

**Subsets in this family:**

- **CSO** — General Provider Responsibilities: These rules apply to all providers with FedRAMP Certifications of any type.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **TFR** — Timeframes: These rules apply to timeframes for vulnerability detection and response.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset CSO — General Provider Responsibilities

##### Vulnerability Detection  `VDR-CSO-DET`

*Affects: Providers*

Providers MUST systematically, persistently, and promptly discover and identify vulnerabilities within their cloud service offering using appropriate techniques such as assessment, scanning, threat intelligence, vulnerability disclosure mechanisms, bug bounties, penetration testing, incident response, automated control testing, supply chain monitoring, and other relevant capabilities; this process is called vulnerability detection. Vulnerability detection includes persistently verifying and validating that information resources and processes are operating as intended and documented for FedRAMP Practices.

**Force:** MUST

> **Note:** FedRAMP's vulnerability detection (and response) rules are intended to set modern expectations for maintaining the security of a cloud service. Historical FedRAMP guidance on vulnerability scanning or continuous monitoring generally focused only on CVE-type vulnerabilities while leaving other types of vulnerabilities and exposures unaddressed.
> **Note:** Providers are encouraged to leverage their existing holistic security review, architecture review, and similar processes to meet these requirements. FedRAMP strongly discourages providers from implementing separate vulnerability detection and response processes for FedRAMP reporting that are operated by independent compliance branches unless these processes are consuming data directly from the areas of the cloud service that actively maintain it.

> ⚠️ **Danger:** Vulnerability Detection and Response includes all efforts to identify weaknesses in a system and is NOT limited to traditional vulnerability scanning or testing. An out-of-date control statement in the Security Decision Record is a vulnerability that must be detected and remediated just like any other vulnerability.

**Defined terms used:** Cloud Service Offering, FedRAMP Practices, Incident, Information Resource, Persistently, Promptly, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Vulnerability Response  `VDR-CSO-RES`

*Affects: Providers*

Providers MUST systematically, persistently, and promptly track, evaluate, monitor, mitigate, remediate, assess exploitation of, report, and otherwise manage all detected vulnerabilities within their cloud service offering; this process is called vulnerability response.

**Force:** MUST

> **Note:** If it is not possible to fully mitigate vulnerabilities or remediate vulnerabilities, providers SHOULD instead partially mitigate vulnerabilities promptly, progressively, and persistently.
> **Note:** FedRAMP does not use the terms "mitigation" and "remediation" interchangeably. Mitigation is the process of reducing the risk and impact of a vulnerability through partial mitigation and even full mitigation; remediation is the process of entirely eliminating the vulnerability. A fully mitigated vulnerability will still exist (with negligible risk) until it has been remediated. This separation is based on the plain language definitions of these words.
> **Note:** Please refer to FedRAMP Definitions for strict interpretation in the FedRAMP context.

**Defined terms used:** Cloud Service Offering, Fully Mitigated Vulnerability, Partially Mitigated Vulnerability, Persistently, Promptly, Provider, Remediated Vulnerability, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Failures Are Vulnerabilities  `VDR-CSO-FAV`

*Affects: Providers*

Providers MUST treat problems or failures with their vulnerability detection and response processes as vulnerabilities.

**Force:** MUST

**Defined terms used:** Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Design For Resilience  `VDR-CSO-DFR`

*Affects: Providers*

Providers SHOULD make design and architecture decisions for their cloud service offering that mitigate the risk of vulnerabilities by default AND decrease the risk and complexity of vulnerability detection and response.

**Force:** SHOULD

**Defined terms used:** Cloud Service Offering, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Automate Detection  `VDR-CSO-ADT`

*Affects: Providers*

Providers SHOULD use automated services to improve and streamline vulnerability detection and response.

**Force:** SHOULD

**Defined terms used:** Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Detect After Changes  `VDR-CSO-DAC`

*Affects: Providers*

Providers SHOULD automatically perform vulnerability detection on representative samples of new or significantly changed information resources.

**Force:** SHOULD

**Defined terms used:** Information Resource, Provider, Vulnerability, Vulnerability Detection

---

##### Maintain Security  `VDR-CSO-MSP`

*Affects: Providers*

Providers SHOULD NOT weaken the security of information resources to facilitate vulnerability scanning, detection, or assessment activities.

**Force:** SHOULD NOT

**Defined terms used:** Information Resource, Provider, Vulnerability, Vulnerability Detection

---

##### Avoid KEVs  `VDR-CSO-AKE`

*Affects: Providers*

Providers SHOULD NOT deploy or otherwise activate new machine-based information resources with Known Exploited Vulnerabilities.

**Force:** SHOULD NOT

**Defined terms used:** Information Resource, Known Exploited Vulnerability (KEV), Machine-Based (Information Resources), Provider, Vulnerability

---

##### Sampling  `VDR-CSO-SIR`

*Affects: Providers*

Providers MAY sample effectively identical information resources, especially machine-based information resources, when performing vulnerability detection UNLESS doing so would decrease the efficiency or effectiveness of vulnerability detection.

**Force:** MAY

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Provider, Vulnerability, Vulnerability Detection

---

#### Subset TFR — Timeframes

##### Non-Machine Verification and Validation  `VDR-TFR-NMV`

*Affects: Providers*

Providers MUST verify and validate the status of non-machine-based information resources at least once every 3 months.

**Force:** MUST

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Provider, Validation, Verification

---

##### Persistent Drift Detection  `VDR-TFR-PDD`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD persistently perform vulnerability detection on all information resources that are likely to drift, at least once every 3 months.
  - *(force SHOULD; within 3 months)*
- **Class B** — Providers with Class B Certifications SHOULD persistently perform vulnerability detection on all information resources that are likely to drift, at least once every month.
  - *(force SHOULD; within 1 months)*
- **Class C** — Providers with Class C Certifications SHOULD persistently perform vulnerability detection on all information resources that are likely to drift, at least once every 14 days.
  - *(force SHOULD; within 14 days)*
- **Class D** — Providers with Class D Certifications SHOULD persistently perform vulnerability detection on all information resources that are likely to drift, at least once every 7 days.
  - *(force SHOULD; within 7 days)*

**Defined terms used:** Drift, Information Resource, Likely, Persistently, Provider, Vulnerability, Vulnerability Detection

---

##### Persistently Complete Detection  `VDR-TFR-PCD`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD persistently perform vulnerability detection on all information resources that are NOT likely to drift, at least once every 6 months.
  - *(force SHOULD; within 6 months)*
- **Class B** — Providers with Class B Certifications SHOULD persistently perform vulnerability detection on all information resources that are NOT likely to drift, at least once every 6 months.
  - *(force SHOULD; within 6 months)*
- **Class C** — Providers with Class C Certifications SHOULD persistently perform vulnerability detection on all information resources that are NOT likely to drift, at least once every month.
  - *(force SHOULD; within 1 months)*
- **Class D** — Providers with Class D Certifications SHOULD persistently perform vulnerability detection on all information resources that are NOT likely to drift, at least once every month.
  - *(force SHOULD; within 1 months)*

**Defined terms used:** Drift, Information Resource, Likely, Persistently, Provider, Vulnerability, Vulnerability Detection

---

##### Mitigation and Remediation Expectations  `VDR-TFR-PVR`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD partially mitigate vulnerabilities, fully mitigate vulnerabilities, or remediate vulnerabilities to a lower potential agency impact within the timeframes from evaluation shown below, factoring for the current Potential Agency Impact N-rating, internet reachability, and likely exploitability.
  - *(force SHOULD)*
- **Class B** — Providers with Class B Certifications SHOULD partially mitigate vulnerabilities, fully mitigate vulnerabilities, or remediate vulnerabilities to a lower potential agency impact within the timeframes from evaluation shown below, factoring for the current Potential Agency Impact N-rating, internet reachability, and likely exploitability:
  - *(force SHOULD)*
- **Class C** — Providers with Class C Certifications SHOULD partially mitigate vulnerabilities, fully mitigate vulnerabilities, or remediate vulnerabilities to a lower Potential Agency Impact N-rating within the timeframes from evaluation shown below, factoring for the current Potential Agency Impact N-rating, internet reachability, and likely exploitability:
  - *(force SHOULD)*
- **Class D** — Providers with Class D Certifications SHOULD partially mitigate vulnerabilities, fully mitigate vulnerabilities, or remediate vulnerabilities to a lower Potential Agency Impact N-rating within the maximum timeframes from evaluation shown below, factoring for the current Potential Agency Impact N-rating, internet reachability, and likely exploitability:
  - *(force SHOULD)*

**Defined terms used:** Agency, Fully Mitigated Vulnerability, Likely, Partially Mitigated Vulnerability, Potential Agency Impact, Provider, Remediated Vulnerability, Vulnerability

---

##### Remaining Vulnerabilities  `VDR-TFR-RMN`

*Affects: Providers*

Providers SHOULD mitigate or remediate remaining vulnerabilities during routine operations as determined necessary by the provider.

**Force:** SHOULD

**Defined terms used:** Provider, Vulnerability

---

##### Remediate KEVs  `VDR-TFR-KEV`

*Affects: Providers*

Providers SHOULD remediate Known Exploited Vulnerabilities according to the due dates in the CISA Known Exploited Vulnerabilities Catalog (even if the vulnerability has been fully mitigated) as required by CISA Binding Operational Directive (BOD) 26-04 or any successor guidance from CISA.

**Force:** SHOULD

**Reference:** [CISA BOD 26-04](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk)
**Defined terms used:** Known Exploited Vulnerability (KEV), Provider, Vulnerability

---

##### Persistent Sample Detection  `VDR-TFR-PSD`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD persistently perform vulnerability detection on representative samples of similar machine-based information resources, at least once every 14 days.
  - *(force SHOULD; within 14 days)*
- **Class B** — Providers with Class B Certifications SHOULD persistently perform vulnerability detection on representative samples of similar machine-based information resources, at least once every 7 days.
  - *(force SHOULD; within 7 days)*
- **Class C** — Providers with Class C Certifications SHOULD persistently perform vulnerability detection on representative samples of similar machine-based information resources, at least once every 3 days.
  - *(force SHOULD; within 3 days)*
- **Class D** — Providers with Class D Certifications SHOULD persistently perform vulnerability detection on representative samples of similar machine-based information resources, at least once per day.
  - *(force SHOULD; within 1 days)*

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently, Provider, Vulnerability, Vulnerability Detection

---

### VER — Vulnerability Evaluation and Reporting

*The Vulnerability Evaluation and Reporting rules require cloud service providers to determine when vulnerabilities are likely to impact federal customers and report the status of such vulnerabilities to all necessary parties.*

**Effective:** status: required; Mandated by CISA BOD 26-04; obtain by 2026-12-07; maintain by 2026-12-07; grace until 2027-03-07.

**Subsets in this family:**

- **FRP** — FedRAMP Responsibilities: These rules apply to FedRAMP when setting expectations for specific cloud service providers.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: FedRAMP
- **AGM** — Agency Guidance: These rules for agencies apply to all agencies using a FedRAMP Certification.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Agencies
- **EVA** — Evaluation: These rules apply to the evaluation of vulnerabilities.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **RPT** — Reporting: These rules apply to reporting related to vulnerability detection and response.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers
- **TFR** — Timeframes: These rules apply to timeframes for vulnerability detection and response.
  - *Applies to* — types: 20x, Rev5; paths: Program, Agency; classes: B, C, D; affects: Providers

#### Subset FRP — FedRAMP Responsibilities

##### Additional Requirements  `VER-FRP-ARP`

*Affects: FedRAMP*

FedRAMP MAY require providers to share additional vulnerability information, alternative reports, or to report at an alternative frequency as a condition of a FedRAMP Corrective Action Plan or other agreements with federal agencies.

**Force:** MAY

**Defined terms used:** Agency, Provider, Vulnerability

---

##### Sensitive Details  `VER-FRP-ADV`

*Affects: FedRAMP*

FedRAMP MAY require providers to share additional information or details about vulnerabilities, including sensitive information that would likely lead to exploitation, as part of review, response or investigation by necessary parties.

**Force:** MAY

**Defined terms used:** Likely, Provider, Vulnerability, Vulnerability Response

---

#### Subset AGM — Agency Guidance

##### Notify FedRAMP  `VER-AGM-NFR`

*Affects: Agencies*

Agencies MUST notify FedRAMP after requesting any additional vulnerability information or materials from a cloud service provider beyond those FedRAMP requires by sending a notification to [info@fedramp.gov](mailto:info@fedramp.gov).

**Force:** MUST

> **Note:** This is an OMB policy; agencies are required to notify FedRAMP in OMB Memorandum M-24-15 section IV (a).

**Notification:**

- to FedRAMP, via form, [For Agencies] Additional Information, Security Requirements, or Certification Change, or After Request Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51822364715035>

**Defined terms used:** Agency, Provider, Vulnerability

---

##### Review Vulnerability Reports  `VER-AGM-RVR`

*Affects: Agencies*

Agencies SHOULD review the information provided in vulnerability reports at appropriate and reasonable intervals commensurate with the expectations and risk posture indicated by their Authorization to Operate, and SHOULD use automated processing and filtering of machine readable information from cloud service providers.

**Force:** SHOULD

> **Note:** FedRAMP recommends that agencies only review overdue and accepted vulnerabilities Potential Agency Impact N-rating > 2 unless the cloud service provider recommends mitigations or the service is included in a higher risk federal information system. Furthermore, accepted vulnerabilities generally only need to be reviewed when they are added or during an updated risk assessment due to changes in the agency's use or authorization.

**Defined terms used:** Accepted Vulnerability, Agency, Potential Agency Impact, Provider, Vulnerability

---

##### Maintain Agency Plans of Action and Milestones  `VER-AGM-MAP`

*Affects: Agencies*

Agencies SHOULD use vulnerability information reported by the Provider to maintain Plans of Action and Milestones for agency security programs when relevant according to agency security policies (such as if the agency takes action to mitigate the risk of exploitation or authorized the continued use of a cloud service with accepted vulnerabilities that put agency information systems at risk).

**Force:** SHOULD

**Defined terms used:** Accepted Vulnerability, Agency, FedRAMP Certified, Provider, Vulnerability

---

##### Do Not Request Extra Info  `VER-AGM-DRE`

*Affects: Agencies*

Agencies SHOULD NOT request additional information from cloud service providers that is not required by the FedRAMP Vulnerability Detection and Response rules UNLESS the head of the agency or an authorized delegate makes a determination that there is a demonstrable need for such.

**Force:** SHOULD NOT

> **Note:** This is related to the Presumption of Adequacy directed by 44 USC § 3613 (e).

**Notification:**

- to FedRAMP, via form, [For Agencies] Additional Information, Security Requirements, or Certification Change, or After Request Form — <https://help.fedramp.gov/hc/en-us/requests/new?ticket_form_id=51822364715035>

**Defined terms used:** Agency, FedRAMP Certified, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

#### Subset EVA — Evaluation

##### Evaluate Exploitability  `VER-EVA-ELX`

*Affects: Providers*

Providers MUST evaluate detected vulnerabilities, considering the context of the cloud service offering, to determine if they are likely exploitable vulnerabilities.

**Force:** MUST

> **Note:** The simple reality is that most traditional vulnerabilities discovered by scanners or during assessment are not likely to be exploitable; exploitation typically requires an unrealistic set of circumstances that will not occur during normal operation. The likelihood of exploitation will vary depending on so many factors that FedRAMP will not recommend a specific framework for approaching this beyond these rules.
> **Note:** The proof, ultimately, is in the pudding - providers who regularly evaluate vulnerabilities as not likely exploitable without careful consideration are more likely to suffer from an adverse impact where the root cause was an exploited vulnerability that was improperly evaluated. If done recklessly or deliberately, such actions will have a negative impact on a provider's FedRAMP Certification.

**Defined terms used:** Cloud Service Offering, Likely, Likely Exploitable Vulnerability (LEV), Provider, Regularly, Vulnerability, Vulnerability Detection

---

##### Evaluate Internet-Reachability  `VER-EVA-EIR`

*Affects: Providers*

Providers MUST evaluate detected vulnerabilities, considering the context of the cloud service offering, to determine if they are internet-reachable vulnerabilities.

**Force:** MUST

> **Note:** FedRAMP focuses on internet-reachable (rather than internet-accessible) to ensure that any service that might receive a payload from the internet is prioritized if that service has a vulnerability that can be triggered by processing the data in the payload.
> **Note:** The simplest way to prevent exploitation of internet-reachable vulnerabilities is to intercept, inspect, filter, sanitize, reject, or otherwise deflect triggering payloads before they are processed by the vulnerable resource; once this prevention is in place the vulnerability should no longer be considered an internet-reachable vulnerability.
> **Note:** A classic example of an internet-reachable vulnerability on systems that are not typically internet-accessible is [SQL injection](https://en.wikipedia.org/wiki/SQL_injection), where an application stack behind a load balancer and firewall with no ability to route traffic to or from the internet can receive a payload indirectly from the internet that triggers the manipulation or compromise of data in a database that can only be accessed by an authorized connection from the application server on a private network.
> **Note:** Another simple example is the infamous Log4Shell (<https://en.wikipedia.org/wiki/Log4Shell>) vulnerability from 2021, where exploitation was possible via vulnerable internet-reachable resources deep in the application stack that were often not internet-accessible themselves.

**Defined terms used:** Cloud Service Offering, FedRAMP Certified, Internet-Reachable Vulnerability (IRV), Provider, Vulnerability, Vulnerability Detection

---

##### Estimate Potential Agency Impact  `VER-EVA-EPA`

*Affects: Providers*

Providers MUST evaluate detected vulnerabilities, considering the context of the cloud service offering, to estimate the potential agency impact of exploitation on government customers AND assign one of the following Potential Agency Impact N-ratings (PAIN):

- **N1**: Exploitation could be expected to have minimal customer effects on one or more agencies that use the cloud service offering.
- **N2**: Exploitation could be expected to have narrow customer effects on one or more agencies that use the cloud service offering.
- **N3**: Exploitation could be expected to have a disruptive customer effect on one agency that uses the cloud service offering.
- **N4**: Exploitation could be expected to have a debilitating customer effect on one agency that uses the cloud service offering OR a disruptive customer effect on more than one federal agency that uses the cloud service offering.
- **N5**: Exploitation could be expected to have a debilitating customer effect on more than one agency that uses the cloud service offering.

**Force:** MUST

**Defined terms used:** Agency, Cloud Service Offering, Debilitating Customer Effect, Disruptive Customer Effect, Minimal Customer Effect, Narrow Customer Effect, Potential Agency Impact, Provider, Vulnerability, Vulnerability Detection

---

##### Assume It's Automatable  `VER-EVA-AIA`

*Affects: Providers*

Providers MUST assume the exploitation of vulnerabilities can be automated UNLESS they have evidence proving otherwise.

**Force:** MUST

**Defined terms used:** Provider, Vulnerability

---

##### Group Vulnerabilities  `VER-EVA-GRV`

*Affects: Providers*

Providers SHOULD evaluate detected vulnerabilities, considering the context of the cloud service offering, to identify logical groupings of affected information resources that may improve the efficiency and effectiveness of vulnerability response by consolidating further activity; FedRAMP Vulnerability Detection and Response rules are then applied to these consolidated groupings of vulnerabilities instead of each individual detected instance.

**Force:** SHOULD

**Defined terms used:** Cloud Service Offering, Information Resource, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Evaluate False Positives  `VER-EVA-EFP`

*Affects: Providers*

Providers SHOULD evaluate detected vulnerabilities, considering the context of the cloud service offering, to determine if they are false positive vulnerabilities.

**Force:** SHOULD

**Defined terms used:** Cloud Service Offering, False Positive Vulnerability, Provider, Vulnerability, Vulnerability Detection

---

##### Evaluation Factors  `VER-EVA-EFA`

*Affects: Providers*

Providers SHOULD consider at least the following factors when considering the context of the cloud service offering to evaluate detected vulnerabilities:

- **Criticality**: How important are the systems or information that might be impacted by the vulnerability?
- **Reachability**: How might a threat actor reach the vulnerability and how likely is that?
- **Exploitability**: How easy is it for a threat actor to exploit the vulnerability and how likely is that?
- **Detectability**: How easy is it for a threat actor to become aware of the vulnerability and how likely is that?
- **Prevalence**: How much of the cloud service offering is affected by the vulnerability?
- **Privilege**: How much privileged authority or access is granted or can be gained from exploiting the vulnerability?
- **Proximate Vulnerabilities**: How does this vulnerability interact with previously detected vulnerabilities, especially partially or fully mitigated vulnerabilities?
- **Known Threats**: How might already known threats leverage the vulnerability and how likely is that?

**Force:** SHOULD

**Defined terms used:** Cloud Service Offering, Fully Mitigated Vulnerability, Likely, Provider, Vulnerability, Vulnerability Detection

---

#### Subset RPT — Reporting

##### Persistent Reporting  `VER-RPT-PER`

*Affects: Providers*

Providers MUST report vulnerability detection and response activity (including persistent verification and validation) to all necessary parties persistently, summarizing ALL activity since the previous report; these reports are FedRAMP Certification Data and are subject to FedRAMP Certification Data Sharing rules.

**Force:** MUST

**Schema:** [FedRAMP Vulnerability Detail Report (VER-RPT-VDT)](https://fedramp.gov/schemas/fedramp-vulnerability-detail-report-schema-2026-06-24.json)
**Defined terms used:** All Necessary Parties, Certification Data, Persistently, Provider, Validation, Verification, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Vulnerability Details  `VER-RPT-VDT`

*Affects: Providers*

Providers MUST include the following information (if applicable) on detected vulnerabilities when reporting on vulnerability detection and response activity, UNLESS it is an accepted vulnerability:

- Provider's internally assigned tracking identifier
- Time and source of the detection
- Time of completed evaluation
- Is it an internet-reachable vulnerability or not?
- Is it a likely exploitable vulnerability or not?
- Historically and currently estimated Potential Agency Impact N-rating of exploitation
- Time and Potential Agency Impact N-rating of each completed and evaluated reduction in Potential Agency Impact N-rating
- Estimated time and target Potential Agency Impact N-rating of next reduction in Potential Agency Impact N-rating
- Is it currently or is it likely to become an overdue vulnerability or not? If so, explain.
- Any supplementary information the provider responsibly determines will help federal agencies assess or mitigate the risk to their federal customer data within the cloud service offering resulting from the vulnerability
- Final disposition of the vulnerability

**Force:** MUST

**Evidence artifacts (all):**

- A recent vulnerability report or a sample vulnerability report

**Schema:** [FedRAMP Vulnerability Detail Report (VER-RPT-VDT)](https://fedramp.gov/schemas/fedramp-vulnerability-detail-report-schema-2026-06-24.json)
**Defined terms used:** Accepted Vulnerability, Agency, Cloud Service Offering, Federal Customer Data, Internet-Reachable Vulnerability (IRV), Likely, Likely Exploitable Vulnerability (LEV), Overdue Vulnerability, Potential Agency Impact, Provider, Responsibly, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Accepted Vulnerability Info  `VER-RPT-AVI`

*Affects: Providers*

Providers MUST include the following information on accepted vulnerabilities when reporting on vulnerability detection and response activity:

- Provider's internally assigned tracking identifier
- Time and source of the detection
- Time of completed evaluation
- Is it an internet-reachable vulnerability or not?
- Is it a likely exploitable vulnerability or not?
- Currently estimated Potential Agency Impact N-rating
- Explanation of why this is an accepted vulnerability
- Any supplementary information the provider determines will responsibly help federal agencies assess or mitigate the risk to their federal customer data within the cloud service offering resulting from the accepted vulnerability

**Force:** MUST

**Evidence artifacts (all):**

- A recent vulnerability report or a sample vulnerability report

**Schema:** [FedRAMP Accepted Vulnerability Info (VER-RPT-AVI)](https://fedramp.gov/schemas/fedramp-accepted-vulnerability-info-schema-2026-06-24.json)
**Defined terms used:** Accepted Vulnerability, Agency, Cloud Service Offering, Federal Customer Data, Internet-Reachable Vulnerability (IRV), Likely, Likely Exploitable Vulnerability (LEV), Potential Agency Impact, Provider, Responsibly, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Responsible Disclosure  `VER-RPT-NID`

*Affects: Providers*

Providers MUST NOT irresponsibly disclose specific sensitive information about vulnerabilities that would likely lead to exploitation, but MUST disclose sufficient information for informed risk-based decision-making to all necessary parties.

**Force:** MUST NOT

> **Note:** This requirement will be superseded in the event of formal action related to an investigation or corrective action plan.

**Defined terms used:** All Necessary Parties, Likely, Provider, Vulnerability

---

##### High-Level Overviews  `VER-RPT-HLO`

*Affects: Providers*

Providers SHOULD include high-level overviews of ALL vulnerability detection and response activities conducted during this period for the cloud service offering; this includes vulnerability disclosure programs, bug bounty programs, penetration testing, assessments, etc.

**Force:** SHOULD

**Defined terms used:** Cloud Service Offering, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Responsible Public Disclosure  `VER-RPT-RPD`

*Affects: Providers*

Providers MAY responsibly disclose vulnerabilities publicly or with other parties if the provider determines doing so will NOT likely lead to exploitation.

**Force:** MAY

**Defined terms used:** Likely, Provider, Responsibly, Vulnerability

---

#### Subset TFR — Timeframes

##### Monthly Activity Report  `VER-TFR-MHR`

*Affects: Providers*

Providers MUST report vulnerability detection and response activity to all necessary parties in a consistent format that is human readable at least monthly.

**Force:** MUST · **Timeframe:** 1 months

**Evidence artifacts (all):**

- A recent vulnerability report or a sample vulnerability report

**Defined terms used:** All Necessary Parties, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Mark Accepted Vulnerabilities  `VER-TFR-MAV`

*Affects: Providers*

Providers MUST categorize any vulnerability that is not or will not be fully mitigated or remediated within 192 days of evaluation as an accepted vulnerability.

**Force:** MUST · **Timeframe:** 192 days

**Defined terms used:** Accepted Vulnerability, Provider, Vulnerability

---

##### Historical Activity  `VER-TFR-MRH`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY make all recent historical vulnerability detection and response activity available in JSON format for automated retrieval by all necessary parties (e.g. using an API service or similar); this information MAY be updated persistently, at least once every month.
  - *(force MAY; within 1 months)*
- **Class B** — Providers with Class B Certifications SHOULD make all recent historical vulnerability detection and response activity available in JSON format for automated retrieval by all necessary parties (e.g. using an API service or similar); this information SHOULD be updated persistently, at least once every month.
  - *(force SHOULD; within 1 months)*
- **Class C** — Providers with Class C Certifications SHOULD make all recent historical vulnerability detection and response activity available in JSON format for automated retrieval by all necessary parties (e.g. using an API service or similar); this information SHOULD be updated persistently, at least once every 14 days.
  - *(force SHOULD; within 14 days)*
- **Class D** — Providers with Class D Certifications SHOULD make all recent historical vulnerability detection and response activity available in JSON format for automated retrieval by all necessary parties (e.g. using an API service or similar); this information SHOULD be updated persistently, at least once every 7 days.
  - *(force SHOULD; within 7 days)*

**Schema:** [FedRAMP Historical Vulnerability Evaluation and Reporting Activity (VER-TFR-MRH)](https://fedramp.gov/schemas/fedramp-historical-ver-activity-schema-2026-06-24.json)
**Defined terms used:** All Necessary Parties, Persistently, Provider, Vulnerability, Vulnerability Detection, Vulnerability Response

---

##### Evaluate Vulnerabilities Quickly  `VER-TFR-EVU`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications SHOULD evaluate ALL vulnerabilities as required by VER-EVA (Evaluation) within 14 days of detection.
  - *(force SHOULD; within 14 days)*
- **Class B** — Providers with Class B Certifications SHOULD evaluate ALL vulnerabilities as required by VER-EVA (Evaluation) within 7 days of detection.
  - *(force SHOULD; within 7 days)*
- **Class C** — Providers with Class C Certifications SHOULD evaluate ALL vulnerabilities as required by VER-EVA (Evaluation) within 5 days of detection.
  - *(force SHOULD; within 5 days)*
- **Class D** — Providers with Class D Certifications SHOULD evaluate ALL vulnerabilities as required by VER-EVA (Evaluation) within 2 days of detection.
  - *(force SHOULD; within 2 days)*

**Defined terms used:** Provider, Vulnerability, Vulnerability Detection

---

##### Internet-Reachable Incidents  `VER-TFR-IRI`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY treat internet-reachable likely exploitable vulnerabilities where Potential Agency Impact N-rating > 3 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N3 or below.
  - *(force MAY)*
- **Class B** — Providers with Class B Certifications MAY treat internet-reachable likely exploitable vulnerabilities where Potential Agency Impact N-rating > 3 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N3 or below.
  - *(force MAY)*
- **Class C** — Providers with Class C Certifications SHOULD treat internet-reachable likely exploitable vulnerabilities where Potential Agency Impact N-rating > 3 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N3 or below.
  - *(force SHOULD)*
- **Class D** — Providers with Class D Certifications SHOULD treat internet-reachable likely exploitable vulnerabilities where Potential Agency Impact N-rating > 3 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N3 or below.
  - *(force SHOULD)*

**Defined terms used:** Agency, FedRAMP Reportable Incident, Incident, Likely, Likely Exploitable Vulnerability (LEV), Partially Mitigated Vulnerability, Potential Agency Impact, Provider, Vulnerability

---

##### Non-Internet-Reachable Incidents  `VER-TFR-NRI`

*Affects: Providers*

**Varies by Certification Class:**

- **Class A** — Providers with Class A Certifications MAY treat likely exploitable vulnerabilities that are NOT internet-reachable where Potential Agency Impact N-rating = 5 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N4 or below.
  - *(force MAY)*
- **Class B** — Providers with Class B Certifications MAY treat likely exploitable vulnerabilities that are NOT internet-reachable where Potential Agency Impact N-rating = 5 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N4 or below.
  - *(force MAY)*
- **Class C** — Providers with Class C Certifications MAY treat likely exploitable vulnerabilities that are NOT internet-reachable where Potential Agency Impact N-rating = 5 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N4 or below.
  - *(force MAY)*
- **Class D** — Providers with Class D Certifications SHOULD treat likely exploitable vulnerabilities that are NOT internet-reachable where Potential Agency Impact N-rating = 5 as a FedRAMP Reportable Incident until they are partially mitigated vulnerabilities at N4 or below.
  - *(force SHOULD)*

**Defined terms used:** Agency, FedRAMP Reportable Incident, Incident, Likely, Likely Exploitable Vulnerability (LEV), Partially Mitigated Vulnerability, Potential Agency Impact, Provider, Vulnerability

---

## KSI — Key Security Indicators

Key Security Indicators are outcome-based objectives. Each indicator lists the NIST SP 800-53 controls it maps to (lowercase, e.g. `ac-2`).

### CED — Cybersecurity Education  `KSI-CED`

#### Reviewing All Training  `KSI-CED-RAT`

The effectiveness of relevant cybersecurity education and training is persistently reviewed, including at least general training for all employees, role-specific training for employees in high risk roles, training for development and engineering staff on secure software delivery, and training for staff involved with incident response or disaster recovery.

**Maps to controls:** `cp-3`, `ir-2`, `ps-6`, `at-2`, `at-2.2`, `at-2.3`, `at-3.5`, `at-4`, `ir-2.3`, `at-3`, `sr-11.1`

**Defined terms used:** Incident, Persistently, Vulnerability Response

---

### CMT — Change Management  `KSI-CMT`

#### Logging Changes  `KSI-CMT-LMC`

Modifications to the cloud service offering are logged and monitored.

**Maps to controls:** `au-2`, `cm-3`, `cm-3.2`, `cm-4.2`, `cm-6`, `cm-8.3`, `ma-2`

**Defined terms used:** Cloud Service Offering

#### Redeploying vs Modifying  `KSI-CMT-RMV`

Changes to machine-based information resources are executed through the redeployment of version controlled resources rather than direct modification wherever reasonable.

**Maps to controls:** `cm-2`, `cm-3`, `cm-5`, `cm-6`, `cm-7`, `cm-8.1`, `si-3`

**Defined terms used:** Information Resource, Machine-Based (Information Resources)

#### Reviewing Change Procedures  `KSI-CMT-RVP`

The effectiveness of documented change management procedures is persistently reviewed.

**Maps to controls:** `cm-3`, `cm-3.2`, `cm-3.4`, `cm-5`, `cm-7.1`, `cm-9`

**Defined terms used:** Persistently

#### Validating Throughout Deployment  `KSI-CMT-VTD`

Persistent testing and validation of changes throughout deployment is automated.

**Maps to controls:** `cm-3`, `cm-3.2`, `cm-4.2`, `si-2`

**Defined terms used:** Persistently, Validation

---

### CNA — Cloud Native Architecture  `KSI-CNA`

#### Defining Functionality and Privileges  `KSI-CNA-DFP`

The functionality and privileges for infrastructure and services are strictly defined.

**Maps to controls:** `cm-2`, `si-3`

#### Enforcing Intended State  `KSI-CNA-EIS`

**Maps to controls:** `ca-2.1`, `ca-7.1`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Implementing Best Practices  `KSI-CNA-IBP`

The use and configuration of third-party machine-based information resources is persistently compared against the original provider's best practices and guidance.

**Maps to controls:** `ac-17.3`, `cm-2`, `pl-10`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently, Provider

#### Minimizing Attack Surface  `KSI-CNA-MAT`

Machine-based information resources are persistently reviewed to ensure they have a minimal attack surface and that lateral movement is minimized if compromised.

**Maps to controls:** `ac-17.3`, `ac-18.1`, `ac-18.3`, `ac-20.1`, `ca-9`, `sc-7.3`, `sc-7.4`, `sc-7.5`, `sc-7.8`, `sc-8`, `sc-10`, `si-10`, `si-11`, `si-16`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Optimizing for Availability  `KSI-CNA-OFA`

Machine-based information resources are persistently reviewed to ensure they are appropriately optimized for high availability and rapid recovery.

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Restricting Network Traffic  `KSI-CNA-RNT`

Machine-based information resources are persistently reviewed to ensure they are appropriately configured to limit inbound and outbound network traffic.

**Maps to controls:** `ac-17.3`, `ca-9`, `cm-7.1`, `sc-7.5`, `si-8`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Reviewing Protections  `KSI-CNA-RVP`

The effectiveness of protection against denial of service attacks and other unwanted activity for machine-based information resources is persistently reviewed.

**Maps to controls:** `sc-5`, `si-8`, `si-8.2`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Using Logical Networking  `KSI-CNA-ULN`

Logical networking and related capabilities are used and persistently reviewed to enforce traffic flow controls.

**Maps to controls:** `ac-12`, `ac-17.3`, `ca-9`, `sc-4`, `sc-7`, `sc-7.7`, `sc-8`, `sc-10`

**Defined terms used:** Persistently

---

### IAM — Identity and Access Management  `KSI-IAM`

#### Automating Account Management  `KSI-IAM-AAM`

The lifecycle and privileges of all accounts, roles, and groups are securely managed using automation.

**Maps to controls:** `ac-2.2`, `ac-2.3`, `ac-2.13`, `ac-6.7`, `ia-4.4`, `ia-12`, `ia-12.2`, `ia-12.3`, `ia-12.5`

#### Adopting Passwordless Methods  `KSI-IAM-APM`

Secure passwordless methods are used for user authentication and authorization when feasible, otherwise strong passwords with phishing-resistant MFA is used.

**Maps to controls:** `ac-3`, `ia-5.1`, `ia-5.2`, `ia-5.6`, `ia-6`, `ac-2`, `ia-2`, `ia-2.1`, `ia-2.2`, `ia-2.8`, `ia-5`, `ia-8`, `sc-23`

#### Ensuring Least Privilege  `KSI-IAM-ELP`

Identity and access management measures are used and persistently reviewed to ensure each user or device can only access the resources they need.

**Maps to controls:** `ac-2.5`, `ac-2.6`, `ac-3`, `ac-4`, `ac-6`, `ac-12`, `ac-14`, `ac-17`, `ac-17.1`, `ac-17.2`, `ac-17.3`, `ac-20`, `ac-20.1`, `cm-2.7`, `cm-9`, `ia-2`, `ia-3`, `ia-4`, `ia-4.4`, `ia-5.2`, `ia-5.6`, `ia-11`, `ps-2`, `ps-3`, `ps-4`, `ps-5`, `ps-6`, `sc-4`, `sc-20`, `sc-21`, `sc-22`, `sc-23`, `sc-39`, `si-3`

**Defined terms used:** Persistently

#### Authorizing Just-in-Time  `KSI-IAM-JIT`

A least-privileged, role and attribute-based, and just-in-time security authorization model is used and persistently reviewed for all user and non-user accounts and services.

**Maps to controls:** `ac-2`, `ac-2.1`, `ac-2.2`, `ac-2.3`, `ac-2.4`, `ac-2.6`, `ac-3`, `ac-4`, `ac-5`, `ac-6`, `ac-6.1`, `ac-6.2`, `ac-6.5`, `ac-6.7`, `ac-6.9`, `ac-6.10`, `ac-7`, `ac-20.1`, `ac-17`, `au-9.4`, `cm-5`, `cm-7`, `cm-7.2`, `cm-7.5`, `cm-9`, `ia-4`, `ia-4.4`, `ia-7`, `ps-2`, `ps-3`, `ps-4`, `ps-5`, `ps-6`, `ps-9`, `ra-5.5`, `sc-2`, `sc-23`, `sc-39`

**Defined terms used:** Persistently

#### Securing Non-User Authentication  `KSI-IAM-SNU`

Appropriately secure authentication methods are used and persistently reviewed for non-user accounts and services.

**Maps to controls:** `ac-2`, `ac-2.2`, `ac-4`, `ac-6.5`, `ia-3`, `ia-5.2`, `ra-5.5`

**Defined terms used:** Persistently

#### Responding to Suspicious Activity  `KSI-IAM-SUS`

Accounts with privileged access are disabled or otherwise secured in response to suspicious activity.

**Maps to controls:** `ac-2`, `ac-2.1`, `ac-2.3`, `ac-2.13`, `ac-7`, `ps-4`, `ps-8`

**Defined terms used:** Vulnerability Response

---

### INR — Incident Response  `KSI-INR`

#### Generating After Action Reports  `KSI-INR-AAR`

Incident after action reports are generated and lessons learned are persistently incorporated.

**Maps to controls:** `ir-3`, `ir-4`, `ir-4.1`, `ir-8`

**Defined terms used:** Incident, Persistently

#### Reviewing Incident Response Procedures  `KSI-INR-RIR`

The effectiveness of documented incident response procedures is persistently reviewed.

**Maps to controls:** `ir-4`, `ir-4.1`, `ir-6`, `ir-6.1`, `ir-6.3`, `ir-7`, `ir-7.1`, `ir-8`, `ir-8.1`, `si-4.5`

**Defined terms used:** Incident, Persistently, Vulnerability Response

#### Reviewing Past Incidents  `KSI-INR-RPI`

Past incidents are persistently reviewed for patterns or vulnerabilities that were not previously apparent or identified.

**Maps to controls:** `ir-3`, `ir-4`, `ir-4.1`, `ir-5`, `ir-8`

**Defined terms used:** Incident, Persistently, Vulnerability

---

### MLA — Monitoring, Logging, and Auditing  `KSI-MLA`

#### Authorizing Log Access  `KSI-MLA-ALA`

**Maps to controls:** `si-11`

**Defined terms used:** Persistently

#### Evaluating Configurations  `KSI-MLA-EVC`

The configuration of machine-based information resources, especially infrastructure as code, is persistently evaluated and tested.

**Maps to controls:** `ca-7`, `cm-2`, `cm-6`, `si-7.7`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Logging Event Types  `KSI-MLA-LET`

A list of information resources and event types that will be logged, monitored, and audited is maintained and persistently reviewed to ensure these activities occur.

**Maps to controls:** `ac-2.4`, `ac-6.9`, `ac-17.1`, `ac-20.1`, `au-2`, `au-7.1`, `au-12`, `si-4.4`, `si-4.5`, `si-7.7`

**Defined terms used:** Information Resource, Persistently

#### Operating SIEM Capability  `KSI-MLA-OSM`

A Security Information and Event Management (SIEM) or similar system(s) is used and persistently reviewed for centralized, tamper-resistant logging of events, activities, and changes.

**Maps to controls:** `ac-17.1`, `ac-20.1`, `au-2`, `au-3`, `au-3.1`, `au-4`, `au-5`, `au-6.1`, `au-6.3`, `au-7`, `au-7.1`, `au-8`, `au-9`, `au-11`, `ir-4.1`, `si-4.2`, `si-4.4`, `si-7.7`

**Defined terms used:** Persistently

#### Reviewing Logs  `KSI-MLA-RVL`

Logs are persistently reviewed and audited.

**Maps to controls:** `ac-2.4`, `ac-6.9`, `au-2`, `au-6`, `au-6.1`, `si-4`, `si-4.4`

**Defined terms used:** Persistently

---

### PIY — Policy and Inventory  `KSI-PIY`

#### Generating Inventories  `KSI-PIY-GIV`

Authoritative sources are used to automatically generate real-time inventories of all information resources when needed.

**Maps to controls:** `cm-2.2`, `cm-7.5`, `cm-8`, `cm-8.1`, `cm-12`, `cm-12.1`, `cp-2.8`

**Defined terms used:** Information Resource

#### Reviewing Executive Support  `KSI-PIY-RES`

Executive support for achieving the provider's security goals is persistently reviewed and demonstrated.

**Defined terms used:** Persistently, Provider

#### Reviewing Investments in Security  `KSI-PIY-RIS`

The effectiveness of the provider's investments in achieving security goals is persistently reviewed.

**Maps to controls:** `ac-5`, `ca-2`, `cp-2.1`, `cp-4.1`, `ir-3.2`, `pm-3`, `sa-2`, `sa-3`, `sr-2.1`

**Defined terms used:** Persistently, Provider

#### Reviewing Security in the SDLC  `KSI-PIY-RSD`

The effectiveness of building security and privacy considerations into the Software Development Lifecycle and aligning with CISA Secure By Design principles is persistently reviewed.

**Maps to controls:** `ac-5`, `au-3.3`, `cm-3.4`, `pl-8`, `pm-7`, `sa-3`, `sa-8`, `sc-4`, `sc-18`, `si-10`, `si-11`, `si-16`

**Defined terms used:** Persistently

#### Reviewing Vulnerability Disclosures  `KSI-PIY-RVD`

The effectiveness of the provider's vulnerability disclosure program is persistently reviewed.

**Maps to controls:** `ra-5.11`

**Defined terms used:** Persistently, Provider, Vulnerability

---

### RPL — Recovery Planning  `KSI-RPL`

#### Aligning Backups with Objectives  `KSI-RPL-ABO`

The alignment of machine-based information resource backups with defined recovery objectives is persistently reviewed.

**Maps to controls:** `cm-2.3`, `cp-6`, `cp-9`, `cp-10`, `cp-10.2`, `si-12`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently

#### Aligning Recovery Plan  `KSI-RPL-ARP`

The alignment of recovery plans with defined recovery objectives is persistently reviewed.

**Maps to controls:** `cp-2`, `cp-2.1`, `cp-2.3`, `cp-4.1`, `cp-6`, `cp-6.1`, `cp-6.3`, `cp-7`, `cp-7.1`, `cp-7.2`, `cp-7.3`, `cp-8`, `cp-8.1`, `cp-8.2`, `cp-10`, `cp-10.2`

**Defined terms used:** Persistently

#### Reviewing Recovery Objectives  `KSI-RPL-RRO`

The desired Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) are defined and persistently reviewed for alignment with the provider's business needs and capabilities.

**Maps to controls:** `cp-2.3`, `cp-10`

**Defined terms used:** Persistently, Provider

#### Testing Recovery Capabilities  `KSI-RPL-TRC`

The capability to recover from incidents and contingencies aligned with defined recovery objectives is persistently tested.

**Maps to controls:** `cp-2.1`, `cp-2.3`, `cp-4`, `cp-4.1`, `cp-6`, `cp-6.1`, `cp-9.1`, `cp-10`, `ir-3`, `ir-3.2`

**Defined terms used:** Incident, Persistently

---

### SCR — Supply Chain Risk  `KSI-SCR`

#### Mitigating Supply Chain Risk  `KSI-SCR-MIT`

Persistently identify, review, and mitigate potential supply chain risks.

**Maps to controls:** `ac-20`, `ra-3.1`, `sa-9`, `sa-10`, `sa-11`, `sa-15.3`, `sa-22`, `si-7.1`, `sr-5`, `sr-6`, `ca-7.4`, `sc-18`

**Defined terms used:** Persistently

#### Monitoring Supply Chain Risk  `KSI-SCR-MON`

Third party software information resources are automatically monitored for upstream vulnerabilities using mechanisms that may include contractual notification requirements or active monitoring services.

**Maps to controls:** `ac-20`, `ca-3`, `ir-6.3`, `ps-7`, `ra-5`, `sa-9`, `si-5`, `sr-5`, `sr-6`, `sr-8`

**Defined terms used:** Information Resource, Vulnerability

---

### SVC — Service Configuration  `KSI-SVC`

#### Automating Configuration Management  `KSI-SVC-ACM`

The configuration of machine-based information resources is managed using automation and persistently reviewed for drift.

**Maps to controls:** `ac-2.4`, `cm-2`, `cm-2.2`, `cm-2.3`, `cm-6`, `cm-7.1`, `pl-9`, `pl-10`, `sa-5`, `si-5`, `sr-10`

**Defined terms used:** Drift, Information Resource, Machine-Based (Information Resources), Persistently

#### Automating Secret Management  `KSI-SVC-ASM`

Management, protection, and regular rotation of digital keys, certificates, and other secrets is automated and persistently reviewed.

**Maps to controls:** `ac-17.2`, `ia-5.2`, `ia-5.6`, `sc-12`, `sc-17`

**Defined terms used:** Persistently, Regularly

#### Evaluating and Improving Security  `KSI-SVC-EIS`

Information resources are persistently evaluated for opportunities to improve security and those improvements are persistently made.

**Maps to controls:** `cm-7.1`, `cm-12.1`, `ma-2`, `pl-8`, `sc-7`, `sc-39`, `si-2.2`, `si-4`, `sr-10`

**Defined terms used:** Information Resource, Persistently

#### Preventing Residual Risk  `KSI-SVC-PRR`

**Maps to controls:** `sc-4`

**Defined terms used:** Federal Customer Data, Information Resource, Likely, Persistently

#### Removing Unwanted Data  `KSI-SVC-RUD`

**Maps to controls:** `si-12.3`, `si-18.4`

**Defined terms used:** Agency, Federal Customer Data, Promptly

#### Securing Information  `KSI-SVC-SIN`

Information is encrypted or otherwise secured from unwanted access or modification.

**Maps to controls:** `ac-1`, `ac-17.2`, `cp-9.8`, `sc-8`, `sc-8.1`, `sc-13`, `sc-20`, `sc-21`, `sc-22`, `sc-23`, `sc-28`, `sc-28.1`

#### Validating Communications  `KSI-SVC-VCM`

**Maps to controls:** `sc-23`, `si-7.1`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Persistently, Validation

#### Validating Resource Integrity  `KSI-SVC-VRI`

Use cryptographic methods to validate the integrity of machine-based information resources.

**Maps to controls:** `cm-2.2`, `cm-8.3`, `sc-13`, `sc-23`, `si-7`, `si-7.1`, `sr-10`

**Defined terms used:** Information Resource, Machine-Based (Information Resources), Validation

---

## CTL — Control Parameters & Guidance

FedRAMP-specific values for NIST SP 800-53 control parameters, plus supplemental guidance. Parameter IDs (e.g. `ac-06.01_odp.02`) reference Organization-Defined Parameters (ODPs) in the control catalog.

### AC

#### AC-06-01

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ac-06.01_odp.02` | all functions not publicly accessible |
| `ac-06.01_odp.05` | all security-relevant information not publicly available |

#### AC-20

**Guidance:**

- The interrelated controls of AC-20, CA-3, and SA-9 should be differentiated as follows:
- AC-20 describes system access to and from external systems.
- CA-3 describes documentation of an agreement between the respective system owners when data is exchanged between the CSO and an external system.
- SA-9 describes the responsibilities of external system owners. These responsibilities would typically be captured in the agreement required by CA-3.

#### AC-06-02

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ac-06.02_odp` | all security functions |

#### AC-06-08

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ac-06.08_odp` | any software except software explicitly documented |

---

### AU

#### AU-06

**Guidance:**

- This activity is considered vulnerability detection and is subject to the Vulnerability Detection and Response rules.

#### AU-06-05

**Guidance:**

- This activity is considered vulnerability detection and is subject to the Vulnerability Detection and Response rules.

#### AU-10

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `au-10_odp` | at least actions including the addition, modification, deletion, approval, sending, or receiving of data |

#### AU-12

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `au-12_odp.01` | at least all information system and network components where audit capability is deployed/available |

---

### CA

#### CA-07

**Guidance:**

- Follow the FedRAMP Continuous Collaborative Monitoring, Significant Change Notification, Vulnerability Detection and Response, and Vulnerability Evaluation and Reporting rules.

#### CA-08

**Guidance:**

- Penetration testing is part of vulnerability detection and is subject to the Vulnerability Detection and Response rules.

#### CA-02

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ca-02_odp.02` | individuals or roles to include FedRAMP and agency customers |

#### CA-02-03

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ca-02.03_odp.01` | any FedRAMP Recognized independent assessment service |

---

### CM

#### CM-01

**Guidance:**

- Follow the Significant Change Notification rules.

#### CM-08

**Guidance:**

- Follow the FedRAMP Continuous Collaborative Monitoring, Significant Change Notification, Vulnerability Detection and Response, and Vulnerability Evaluation and Reporting rules.

#### CM-11

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `cm-11_odp.03` | Continuously (via CM-7 (5)) |

#### CM-12

**Guidance:**

- Follow the FedRAMP Minimum Assessment Scope rules.

#### CM-12-01

**Guidance:**

- Follow the FedRAMP Minimum Assessment Scope rules.

#### CM-14

**Guidance:**

- If digital signatures/certificates are unavailable, alternative cryptographic integrity checks (hashes, self-signed certs, etc.) can be utilized.

---

### CP

#### CP-07-01

**Guidance:**

- The service provider may determine what is considered a sufficient degree of separation between the primary and alternate processing sites, based on the types of threats that are of concern. For one particular type of threat (i.e., hostile cyber attack), the degree of separation between sites will be less relevant.

#### CP-02-03

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `cp-02.03_odp.02` | time period defined in service provider and organization Service Level Agreements |

#### CP-10-04

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `cp-10.04_odp` | time period consistent with the restoration time-periods defined in the service provider and organization Service Level Agreements |

---

### IA

#### IA-02

**Guidance:**

- Multi-factor authentication must be phishing-resistant. In accordance with current CISA Guidance. Current CISA guidance can be found here: <https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf>

#### IA-02-01

**Guidance:**

- Multi-factor authentication must be phishing-resistant. In accordance with current CISA Guidance. Current CISA guidance can be found here: <https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf>

#### IA-02-02

**Guidance:**

- Multi-factor authentication must be phishing-resistant. In accordance with current CISA Guidance. Current CISA guidance can be found here: <https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf>

#### IA-02-08

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ia-02.08_odp` | privileged accounts; non-privileged accounts |

#### IA-05

#### IA-02-06

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ia-02.06_odp.01` | local, network and remote |
| `ia-02.06_odp.02` | privileged accounts; non-privileged accounts |

#### IA-04-04

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `ia-04.04_odp` | contractors; foreign nationals |

---

### IR

#### IR-01

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-02

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-02-01

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-02-02

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-03

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-03-02

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-04

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-04-01

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-04-02

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-04-04

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-04-06

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-04-11

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-05

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-05-01

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-06

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-06-01

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-06-03

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-07

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-07-01

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-08

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-09

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-09-02

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-09-03

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

#### IR-09-04

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Reporting rules.

---

### MA

#### MA-05

**Guidance:**

- CSPs should clearly document nationality requirements (or lack of) for maintenance personnel where applicable.

#### MA-05-01

**Guidance:**

- Only MA-5 (1) (a) (1) is required by FedRAMP Class C Baseline.

---

### PS

#### PS-07

**Guidance:**

- CSPs MUST clearly document any nationality requirements for any account type within its platform. If none exists, this must also be explicitly stated.

---

### RA

#### RA-05

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-05-02

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-05-03

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-05-04

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-05-05

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-05-08

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-05-11

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### RA-07

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

---

### SA

#### SA-05

**Guidance:**

- Follow the FedRAMP Secure Configuration Guide rules.

#### SA-09-05

#### SA-09-02

**Parameter values:**

| Parameter ID | FedRAMP value |
|---|---|
| `sa-09.02_odp` | all external systems where federal customer data is processed or stored |

---

### SC

#### SC-07

**Guidance:**

- SC-7 (b) may be met by using any technical capability or complement of capabilities that ensures logical separation between publicly accessible components and internal networks by preventing traversal without inspection and authorization; traffic may not flow unrestricted from publicly accessible components to internal networks.

#### SC-13

**Guidance:**

- Follow the FedRAMP Cryptographic Module Use rules.

---

### SI

#### SI-02

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### SI-02-02

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### SI-04

**Guidance:**

- Follow all applicable rules within the Vulnerability and Detection Response and Incident Communication Procedure guidance.

#### SI-04-01

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### SI-04-02

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### SI-04-04

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### SI-04-05

**Guidance:**

- Follow the FedRAMP Vulnerability Detection and Response and Vulnerability Evaluation and Reporting rules.

#### SI-05

**Guidance:**

- Follow the FedRAMP Addressing FedRAMP Communication rules.

#### SI-08

**Guidance:**

- When CSO sends email on behalf of the government as part of the business offering, Control Description should include implementation of Domain-based Message Authentication, Reporting & Conformance (DMARC) on the sending domain for outgoing messages as described in DHS Binding Operational Directive (BOD) 18-01. <https://www.cisa.gov/news-events/directives>
- SI-8 Guidance: CSPs should confirm DMARC configuration (where appropriate) to ensure that policy=reject and the rua parameter includes <reports@dmarc.cyber.dhs.gov>.  DMARC compliance should be documented in the SI-08 control implementation solution description, and list the FROM: domain(s) when emails are sent on behalf of the government.

---

### SR

#### SR-03

**Guidance:**

- CSO must document and maintain the supply chain custody, including replacement devices, to ensure the integrity of the devices before being introduced to the boundary.

#### SR-08

**Guidance:**

- Follow the FedRAMP Incident Evaluation and Communication rules.

---

*Generated from `FedRAMP Consolidated Rules for 2026` v2026.06.24.01 (2026-06-24).*
