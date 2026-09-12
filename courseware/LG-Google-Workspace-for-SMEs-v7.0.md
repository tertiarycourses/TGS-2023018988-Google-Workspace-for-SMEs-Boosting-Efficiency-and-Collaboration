# Learner Guide

Google Workspace for SMEs - Boosting Efficiency and Collaboration · TGS-2023018988 · Version7.0

## How to use this guide

This guide explains how Harbour Home Supplies, a fictional SME, controls content and access, creates and maintains customer assets, and uses defined metrics and reviewed integrations. Each Activity includes complete steps, mock records, acceptance checks and troubleshooting. Procedures appear here and in activity folders; the slide deck teaches mechanisms and evidence.

### Before you start

Required: current browser, training Google Account, Drive, Docs, Sheets, Slides, Forms and Sites. Calendar/Meet/Chat, shared drives, Admin reports, appointment schedules and extensions depend on role, edition and administrator policy. Practise only in new training containers. When unavailable, complete the documented fallback and record the evidence gap rather than claim the feature was executed.

### Learning outcomes

| Outcome | Capability |
| --- | --- |
| LO1 | Implement content management policies and post and update content using Google Drive. |
| LO2 | Maintain web properties and assets, create and curate content, and maintain awareness of market offerings. |
| LO3 | Report performance metrics, recommend appropriate add-ons, and generate ideas to improve customer and visitor experience. |

### Skills framework

Content Management · ICT-SNM-3026-1.1

| Code | Knowledge |
| --- | --- |
| K1 | Content management policies, guidelines and permissions on content management |
| K2 | Web content for deployment |
| K3 | Organisation’s web properties and assets |
| K4 | Creation and curation of web content guidelines |
| K5 | Web content and platform management systems |
| K6 | Types of performance metrics of content management systems |
| K7 | Customer and visitor experience on web properties and assets |
| K8 | Types of market offerings on content management systems |
| K9 | Types of plug-ins to manage the organisation’s web properties and assets |
| Code | Ability |
| A1 | Implement content management policies, guidelines and permissions on content management |
| A2 | Post and update content on content management systems |
| A3 | Maintain web properties and assets to uphold standards on user experience |
| A4 | Maintain awareness of market offerings on content management systems |
| A5 | Report on metrics to measure performance of content management systems |
| A6 | Recommend the adoption of appropriate plug-ins to manage and maintain the organisation’s web properties and assets |
| A7 | Generate ideas to improve customer and visitor experience on web properties and assets |

## Governance and Drive content lifecycle

LO1 · K1 K2 K3 K5 A1 A2 · Slide range 17–62

### Activity 1 Content policy and identity boundaries

20 minutes · K1 K5 A1 · Slides 18–26

Harbour Home Supplies is a fictional Singapore SME with Sales, Operations and Finance teams. Its migration contains supplier invoices, customer enquiries and public product sheets. An external agency needs only approved marketing assets.

Goal: Completed policy covers classification, ownership, posting, review and exceptions; access evidence names the tested account and role.

Tools: Drive, Docs; administrator demonstration

Additional mechanism/chart slides: 245,246,247,248.

Mock inputs: [classification-register.csv](../activities/activity-01-content-policy-and-identity-boundaries/classification-register.csv), [policy-template.md](../activities/activity-01-content-policy-and-identity-boundaries/policy-template.md), [scenario.json](../activities/activity-01-content-policy-and-identity-boundaries/scenario.json).

Local package: activities/activity-01-content-policy-and-identity-boundaries/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Classification | Internal / Confidential / Public | Policy field, not automatic enforcement |
| Owner | Finance lead | Accountable for review |
| General access | Restricted | Default for internal records |
| Review date | 2026-10-01 | Monthly permission review |

Policy versus setting: A policy assigns accountability; Drive sharing is the enforcement action. A document describing Restricted does not change any permission.

Identity boundary: An email alias is not a separate account. Groups grant access to their current members; membership therefore needs review.

Administrator boundary: Only an authorised administrator changes domain or service controls. Learners draft a change request rather than alter a live tenant.

Public release: Copy only approved non-sensitive content to the public asset area. Keep invoices in an independently restricted container.

#### Detailed procedure

1. Open the local [policy-template.md](../activities/activity-01-content-policy-and-identity-boundaries/policy-template.md) and [classification-register.csv](../activities/activity-01-content-policy-and-identity-boundaries/classification-register.csv). Identify which example assets contain confidential data.

2. In Drive create a new training folder named HHS Activity 01 followed by your initials. Keep General access Restricted.

3. Create a Google Doc named HHS Content Policy v 1 and paste the policy template. Complete owner, classification, access, publication, retention and exception sections.

4. For each register row assign an accountable owner, permitted audience, update frequency and review date. Use Finance-only access for invoices.

5. Share only the training policy document with your paired learner as Commenter. Do not use Anyone with the link.

6. Ask your partner to open the document with the invited account and record their role. Remove the training grant after the test.

7. Draft an administrator change request describing external-sharing boundaries and evidence needed. Do not change a production domain.

8. Export the policy as PDF into your output folder and complete the evidence checklist with the tested identity and observed outcome.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| POL-001 | Policy approved | Named owner and monthly review |
| ACL-001 | Internal folder | Restricted; staff group only |
| TEST-001 | Agency account | Invoice access denied |
| EXC-001 | Agency product draft | Commenter; approval recorded |
| Symptom | Cause | Corrective check |
| Policy says restricted; link opens | General access is broader than the written policy | Restrict actual sharing and test another identity |
| Group includes former staff | Membership outlasted employment | Remove group membership; review direct grants |
| No administrator rights | Tenant settings inaccessible | Produce administrator request and evidence plan |

Primary source: [Current Google guidance](https://knowledge.workspace.google.com/admin/getting-started/set-up-google-workspace-for-your-organization)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 2 Drive ownership and team structure

20 minutes · K1 K3 K5 A1 A2 · Slides 27–35

A product catalogue must remain with Harbour Home Supplies when its editor leaves. A working draft currently sits in an individual My Drive folder. Decide where the source of record should live.

Goal: Folder structure and ownership register distinguish individual from organisation ownership; least-privilege role and unavailable-feature fallback are recorded.

Tools: Drive; shared drive if available

Additional mechanism/chart slides: None.

Mock inputs: [ownership-register.csv](../activities/activity-02-drive-ownership-and-team-structure/ownership-register.csv), [product-catalogue.csv](../activities/activity-02-drive-ownership-and-team-structure/product-catalogue.csv), [scenario.json](../activities/activity-02-drive-ownership-and-team-structure/scenario.json).

Local package: activities/activity-02-drive-ownership-and-team-structure/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| My Drive owner | Individual account | Lifecycle includes ownership handover |
| Shared drive owner | Organisation | Files remain when a member leaves |
| Shared drive role | Manager / Content Manager / Contributor | Use least privilege |
| Folder exception | Limited access | Available to authorised managers |

Persistence: Organisation ownership is the reason to use shared drives for team records; it is separate from the ability to edit.

Role selection: Managers manage membership and settings. Contributors add and edit content without the broader Manager powers.

Move boundary: Moving an existing file can change effective access. Inspect direct grants and drive restrictions before and after a move.

Availability: Shared drive availability depends on account and administrator settings. A Restricted My Drive training folder is the fallback, with a documented handover risk.

#### Detailed procedure

1. Read [ownership-register.csv](../activities/activity-02-drive-ownership-and-team-structure/ownership-register.csv) and draw the current author-to-file relationship.

2. If your training account has Shared drives and permission to create one, create HHS Marketing Training. Otherwise create a Restricted My Drive folder and note the fallback.

3. Create Drafts, Approved Assets and Archive subfolders. Do not add confidential data to a broadly accessible drive.

4. Upload [product-catalogue.csv](../activities/activity-02-drive-ownership-and-team-structure/product-catalogue.csv) into Drafts and create an accompanying catalogue Google Doc.

5. Inspect the item location and Share dialog. Record who owns the content and which role your account holds.

6. Ask an authorised trainer to demonstrate member roles where available; assign your partner only the minimum permitted role for the exercise.

7. Record the expected outcome if the editor leaves and identify the administrator or owner responsible for the handover.

8. Capture the folder structure and ownership/role evidence; remove temporary grants after verification.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| OWN-001 | CAT-001 location | Shared drive or documented fallback |
| ROLE-001 | Editor identity | Contributor, not Manager |
| EXIT-001 | Member removed | Organisation source remains |
| VIEW-001 | Agency identity | Only approved asset available |
| Symptom | Cause | Corrective check |
| Shared drives not visible | Account or policy does not offer access | Use fallback; record limitation |
| Agency sees too much | Broad drive membership | Use narrow approved sharing or separate release area |
| Move changes access | Restrictions differ between containers | Compare effective audience before and after |

Primary source: [Current Google guidance](https://support.google.com/a/users/answer/12380484?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 3 Sharing and effective access audit

25 minutes · K1 A1 · Slides 36–44

Finance deleted an agency user from one invoice file, but the agency still opens it through a group or public link. Diagnose all access paths rather than judging the direct People list alone.

Goal: Access register identifies all four grant paths; one approved allow and one uninvited deny outcome are recorded for the exact training asset.

Tools: Drive, two test identities

Additional mechanism/chart slides: None.

Mock inputs: [access-notes.md](../activities/activity-03-sharing-and-effective-access-audit/access-notes.md), [access-register.csv](../activities/activity-03-sharing-and-effective-access-audit/access-register.csv), [mock-invoice.csv](../activities/activity-03-sharing-and-effective-access-audit/mock-invoice.csv), [scenario.json](../activities/activity-03-sharing-and-effective-access-audit/scenario.json).

Local package: activities/activity-03-sharing-and-effective-access-audit/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| People with access | Account or group | Inspect direct and inherited paths |
| General access | Restricted / audience | May grant access without individual entry |
| Limited access | Folder-level control | Cannot manually apply to one file |
| Manager / owner | Privileged principal | Cannot remove their underlying access |

Union of grants: Removing one grant does not remove other access paths. A group or general audience can still authorise the account.

Inheritance: Adjust inherited sharing at its origin, or use an appropriate limited-access folder. Do not assume a child removal overrides all parent access.

Limited-access exception: Current Drive supports folder-level limited access. Shared drive Managers and My Drive owners retain their privileged access.

Verification: A Share dialog is configuration evidence. A separate account opening or being denied the exact file is outcome evidence.

#### Detailed procedure

1. Open [access-register.csv](../activities/activity-03-sharing-and-effective-access-audit/access-register.csv) and mark direct, group, inherited and general grants for each asset.

2. Create only synthetic invoice and product files in new training folders. Use the provided [mock-invoice.csv](../activities/activity-03-sharing-and-effective-access-audit/mock-invoice.csv).

3. Share a harmless product file with your partner, then inspect People with access and General access separately.

4. Remove the partner direct grant and ask the partner to test the same URL. Record the actual outcome.

5. If your role offers folder Limited access, demonstrate it only on a training subfolder. If unavailable, record the role/policy limitation and use a separate Restricted folder.

6. Correct any broad training grants at their actual origin. Do not remove permissions on existing business folders.

7. Test the exact file as the approved identity and as an uninvited identity. Record allow and deny results without exposing real accounts publicly.

8. Complete the audit findings and corrective actions, then remove temporary sharing.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| ACL-BEFORE | Agency | Opens through broader grant |
| ACL-AFTER | Agency | Denied after full correction |
| FIN-ALLOW | Finance tester | Can read expected file |
| REVIEW | Owner | Signs effective-access register |
| Symptom | Cause | Corrective check |
| Removed user still opens | Group / inherited / general grant remains | Inspect and correct each authorised path |
| Folder limited; public file opens | File has another general/direct grant | Review both General access and People |
| Cannot modify inherited grant | Permission originates at parent | Owner/manager changes origin; record blocker |

Primary source: [Current Google guidance](https://support.google.com/drive/answer/14254362)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 4 Posting lifecycle and asset metadata

20 minutes · K2 K5 A2 · Slides 45–53

Product sheet P-101 has three competing copies. Sales sent an obsolete price. Create a single source of record with an explicit business publication lifecycle.

Goal: One current P-101 source is registered, price is SGD 49, approval checkpoint and viewer evidence exist, and obsolete reference is retired.

Tools: Drive, Docs, Sheets

Additional mechanism/chart slides: None.

Mock inputs: [asset-register.csv](../activities/activity-04-posting-lifecycle-and-asset-metadata/asset-register.csv), [product-copy.md](../activities/activity-04-posting-lifecycle-and-asset-metadata/product-copy.md), [scenario.json](../activities/activity-04-posting-lifecycle-and-asset-metadata/scenario.json).

Local package: activities/activity-04-posting-lifecycle-and-asset-metadata/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| asset_id | P-101 | Stable business identifier |
| status | Draft / Review / Approved / Published | Business register states |
| source_url | Working Drive item | Do not substitute obsolete copy |
| published_on | 2026-09-13 | Release evidence and next review |

Business states: Draft and Approved are fields in our register, not a claim that Drive enforces a complete CMS approval workflow.

Stable source: A single source URL reduces ambiguity. Downloads and exported PDFs are snapshots, so published copies require review.

Version naming: Named editor versions make approved checkpoints inspectable; changing the filename alone does not prove content approval.

Retirement: An obsolete public file needs removal from current navigation and a controlled archive policy; record references before retirement.

#### Detailed procedure

1. Open [asset-register.csv](../activities/activity-04-posting-lifecycle-and-asset-metadata/asset-register.csv) and [product-copy.md](../activities/activity-04-posting-lifecycle-and-asset-metadata/product-copy.md). Identify P-101’s conflicting price values.

2. Create a Restricted Google Doc for P-101 and paste the product copy. Correct the price to SGD 49.00.

3. Create or import the asset register into Sheets and add source_url, approver, published_on and review_due columns.

4. Name the current document version Draft v 1, ask a partner to comment on accuracy, and resolve the review finding.

5. Record the approval in the register and name the corrected version Approved v 2.

6. Create an approved release PDF and keep its URL separate from the editable source URL. For this exercise share only with named test identities.

7. Update the index to the approved current copy and mark the older mock copy Superseded.

8. Open the registered URL as the intended viewer and verify price, title and release note. Save the completed register and release PDF.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| META | P-101 | ID, owner, status, due date populated |
| RELEASE | v 2 | Price SGD 49 and approval note |
| URL | Published copy | Current intended audience |
| OLD | v 1 reference | No longer used in current index |
| Symptom | Cause | Corrective check |
| Sales shares older PDF | Snapshot does not update with source | Replace public reference; verify release ID |
| Two current source links | Duplicate records for same asset ID | Choose authorised source and archive duplicate |
| Unapproved content publicly visible | Audience broadened before review | Restrict; approve and republish deliberately |

Primary source: [Current Google guidance](https://developers.google.com/workspace/drive/api/guides/manage-sharing)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 5 Search recovery and version diagnosis

20 minutes · K3 K5 A2 · Slides 54–62

The warehouse manager cannot find the approved delivery checklist. The search result contains a similarly named draft, and an edit removed an important dispatch check.

Goal: Correct checklist identity is found and the approved address verification line is restored with an inspectable recovery log.

Tools: Drive, Docs

Additional mechanism/chart slides: None.

Mock inputs: [dispatch-checklist.md](../activities/activity-05-search-recovery-and-version-diagnosis/dispatch-checklist.md), [recovery-log.csv](../activities/activity-05-search-recovery-and-version-diagnosis/recovery-log.csv), [scenario.json](../activities/activity-05-search-recovery-and-version-diagnosis/scenario.json).

Local package: activities/activity-05-search-recovery-and-version-diagnosis/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Search terms | delivery checklist | Match title then verify asset ID |
| Type filter | Documents | Reduce irrelevant results |
| Location | Approved Assets | Distinguish draft from release |
| Version history | named checkpoint | Requires appropriate access |

Identity check: A familiar filename is insufficient. Match asset ID, owner, location and current release record.

Recovery target: A version restore changes current content; compare the selected checkpoint and keep a review record.

Editor versus binary: Native editor version history and uploaded-file versions are different mechanisms. Inspect the appropriate history for the item type.

Access failure: Not found and not authorised can look similar. Verify the invited identity and known source URL before creating a duplicate.

#### Detailed procedure

1. Create a Google Doc from [dispatch-checklist.md](../activities/activity-05-search-recovery-and-version-diagnosis/dispatch-checklist.md) in your training folder and name its version Dispatch v 1.

2. Add the customer-address verification line and name the version Dispatch v 2 approved.

3. Make a later test edit that removes the line and clearly label it as a deliberate training fault.

4. Search Drive for the checklist title and apply the Documents type filter. Record the returned item identity and location.

5. Open File then Version history then See version history. Compare the named approved checkpoint with current content.

6. With owner/editor permission restore the approved checkpoint or copy the approved text back with an explicit recovery note.

7. Ask your partner to confirm the address-check line and open the current source URL.

8. Complete [recovery-log.csv](../activities/activity-05-search-recovery-and-version-diagnosis/recovery-log.csv) with item ID, selected checkpoint, reason and final validation.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| FIND | DELIVERY-01 | Correct location and identifier |
| HISTORY | Dispatch v 2 | Approved checkpoint identified |
| RECOVER | Current text | Address check restored |
| ACCESS | Intended viewer | Known URL opens |
| Symptom | Cause | Corrective check |
| Correct file absent from search | Wrong account, location or access | Test known URL and invited identity |
| Draft mistaken for current | Title reused without asset identifier | Validate register and approved location |
| Restored content still incomplete | Wrong checkpoint selected | Compare explicit acceptance lines |

Primary source: [Current Google guidance](https://support.google.com/docs/answer/190843?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

## Content assets and customer web properties

LO2 · K2 K3 K4 K5 K7 K8 A2 A3 A4 A7 · Slide range 63–207

### Activity 6 Docs structure and collaborative review

25 minutes · K2 K4 A2 A3 · Slides 64–72

A delivery policy is hard to navigate and reviewers overwrite each other. Build a structured document and distinguish proposed edits from accepted content.

Goal: Heading outline works; supported 14-day return correction is accepted, unsupported change rejected, and approved version evidence is saved.

Tools: Docs, Drive

Additional mechanism/chart slides: None.

Mock inputs: [delivery-policy.md](../activities/activity-06-docs-structure-and-collaborative-review/delivery-policy.md), [policy-facts.csv](../activities/activity-06-docs-structure-and-collaborative-review/policy-facts.csv), [scenario.json](../activities/activity-06-docs-structure-and-collaborative-review/scenario.json).

Local package: activities/activity-06-docs-structure-and-collaborative-review/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Heading styles | Heading 1 / Heading 2 | Structure supports outline and navigation |
| Mode | Suggesting | Proposal does not replace accepted text yet |
| Comment | specific selection + issue | Resolve after decision |
| Version | Approved delivery policy | Auditable release checkpoint |

Structure: Heading styles encode hierarchy; simply making text large or bold does not provide the same outline structure.

Review contract: Suggestions are proposals. An authorised editor accepts or rejects them; comments record discussion and can be resolved.

Source validation: The policy must trace delivery price and return window to a business-approved source, not an invented reviewer assumption.

Release state: A named approved checkpoint plus an approval record identifies the version intended for distribution.

#### Detailed procedure

1. Create a Google Doc from [delivery-policy.md](../activities/activity-06-docs-structure-and-collaborative-review/delivery-policy.md). Rename it HHS DP-01 delivery policy followed by your initials.

2. Apply Heading 1 to Delivery eligibility and Returns; apply Heading 2 to Standard delivery.

3. Check the document outline and confirm both main sections appear.

4. Share the training document with your partner as Commenter and ask them to propose the provided correction using Suggesting or a comment if suggesting is unavailable.

5. Select the return-window text and record the verified source from [policy-facts.csv](../activities/activity-06-docs-structure-and-collaborative-review/policy-facts.csv). Do not accept unsupported changes.

6. As editor accept the supported correction and reject the deliberately unsupported free-delivery suggestion.

7. Resolve the discussion only after checking final content. Name the current version Approved DP-01 v 2.

8. Export PDF and save review-evidence.md containing proposed change, decision, source and final value.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| STRUCT | Outline | Two Heading 1 sections visible |
| REVIEW | Suggestion | 14-day proposal recorded |
| DECISION | Accepted text | Verified terms reflected |
| RELEASE | Named version | DP-01 v 2 approved |
| Symptom | Cause | Corrective check |
| Outline missing headings | Direct formatting used instead of styles | Apply Heading 1/2 to structure |
| Reviewer overwrites content | Editing mode used for review | Use Suggesting and review role |
| Comment resolved but text wrong | Discussion closure mistaken for correction | Check final policy text and approval |

Primary source: [Current Google guidance](https://support.google.com/docs/answer/6033474?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 7 Docs templates and publication readiness

20 minutes · K2 K4 A2 A3 · Slides 73–81

Sales reuses a brochure containing an old address and an internal cost figure. Apply a publication checklist to a controlled template before export.

Goal: Brochure has no template placeholders or internal cost, accurate product facts, a tested descriptive link, and a readable approved PDF.

Tools: Docs, Drive

Additional mechanism/chart slides: None.

Mock inputs: [brochure-template.md](../activities/activity-07-docs-templates-and-publication-readiness/brochure-template.md), [product-facts.csv](../activities/activity-07-docs-templates-and-publication-readiness/product-facts.csv), [publication-checklist.csv](../activities/activity-07-docs-templates-and-publication-readiness/publication-checklist.csv), [scenario.json](../activities/activity-07-docs-templates-and-publication-readiness/scenario.json).

Local package: activities/activity-07-docs-templates-and-publication-readiness/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Template fields | product, price, contact, version | No unreplaced placeholders |
| Internal fields | unit_cost | Exclude from public copy |
| Link text | View delivery terms | Descriptive purpose |
| Image text | Alternative text | Meaningful description where appropriate |

Template scope: A template constrains structure but cannot prove correctness. Each copy still needs a source and reviewer.

Redaction: Deleting a visible cost from the public export is only one check. Review comments, links, embedded tables and metadata of the distributed artifact.

Readable links: Descriptive link text helps a reader predict destination; test the viewer’s permission on the target as well as the link itself.

Export divergence: PDF is a snapshot. A later source edit requires a newly reviewed export and replacement of the published reference.

#### Detailed procedure

1. Create a Google Doc using [brochure-template.md](../activities/activity-07-docs-templates-and-publication-readiness/brochure-template.md) and the [product-facts.csv](../activities/activity-07-docs-templates-and-publication-readiness/product-facts.csv) mock data.

2. Replace all brace placeholders and set the product name, SGD 29 price and example contact.

3. Remove the internal unit_cost field and review comments for internal notes.

4. Apply heading styles and add descriptive link text for the delivery policy.

5. Insert an optional locally supplied illustration and add an accurate alternative text description through Image options or the available Alt text control.

6. Review the [publication-checklist.csv](../activities/activity-07-docs-templates-and-publication-readiness/publication-checklist.csv) row by row and record pass or corrective action.

7. Download the document as PDF, open it, and inspect every page and hyperlink with a test viewer.

8. Save the approved brochure PDF and completed release checklist.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| FACT | Price | SGD 29 matches approved product record |
| LEAK | unit_cost | Absent from public export |
| LINK | Delivery terms | Intended viewer can open |
| PDF | Release copy | Current version and readable layout |
| Symptom | Cause | Corrective check |
| Placeholder remains | Template fields incomplete | Search for double-brace markers |
| PDF contains old address | Export predates source update | Regenerate from approved current source |
| Link gives permission error | Target ACL differs from brochure | Share approved target to intended audience |

Primary source: [Current Google guidance](https://support.google.com/a/users/?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 8 Sheets import schema and data validation

25 minutes · K2 K4 A2 · Slides 82–90

Enquiry data has duplicate IDs, numeric amounts stored as text and inconsistent stages. A marketing report is unreliable until the data contract is validated.

Goal: Clean sheet contains 12 unique enquiries, valid stages and numeric amounts; duplicate/type decisions and invalid-input rejection are evidenced.

Tools: Sheets

Additional mechanism/chart slides: None.

Mock inputs: [cleaning-log.csv](../activities/activity-08-sheets-import-schema-and-data-validation/cleaning-log.csv), [enquiries-dirty.csv](../activities/activity-08-sheets-import-schema-and-data-validation/enquiries-dirty.csv), [scenario.json](../activities/activity-08-sheets-import-schema-and-data-validation/scenario.json), [source-notes.md](../activities/activity-08-sheets-import-schema-and-data-validation/source-notes.md).

Local package: activities/activity-08-sheets-import-schema-and-data-validation/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| enquiry_id | E001...E012 | Required unique identifier |
| amount_sgd | Numeric >=0 | Currency formatting is not data cleaning |
| stage | New / Qualified / Won / Lost | Dropdown rejects invalid input |
| created_on | ISO date in source | Check interpreted date and locale |

Identifier rule: Duplicate rows may be repeats rather than new customers. Resolve using the stable enquiry ID before summing revenue.

Type boundary: Formatting a text cell as currency does not guarantee numeric values. Check ISNUMBER and the source import.

Validation: An allowed-value dropdown standardises new edits; audit existing invalid values rather than assuming validation cleans them.

Locale: Dates and decimal separators depend on spreadsheet locale. ISO source dates and explicit type checks reduce ambiguity.

#### Detailed procedure

1. In Sheets create HHS Enquiry Data and choose File then Import then Upload to import [enquiries-dirty.csv](../activities/activity-08-sheets-import-schema-and-data-validation/enquiries-dirty.csv) into a new sheet.

2. Rename the tab Raw and freeze the header row. Check spreadsheet locale and verify interpreted dates.

3. Duplicate the tab as Clean so the original mock input remains unchanged.

4. Add checks using COUNTIF for duplicate IDs and ISNUMBER for amount values.

5. Review duplicate E003 against [source-notes.md](../activities/activity-08-sheets-import-schema-and-data-validation/source-notes.md) and keep one authorised record. Record the decision in [cleaning-log.csv](../activities/activity-08-sheets-import-schema-and-data-validation/cleaning-log.csv).

6. Standardise stages to New, Qualified, Won or Lost and apply a Data validation dropdown to the stage column with invalid input rejected.

7. Format numeric amounts as SGD currency and confirm numeric values remain numbers.

8. Try a deliberate invalid stage in a spare test row, confirm rejection, remove the test row and export the cleaned CSV.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| ROWS | Input | 12 unique IDs after review |
| STAGE | Validation | Invalid PendingRejected input blocked |
| TYPE | Amounts | ISNUMBER true on report rows |
| DUP | E003 | Duplicate resolution documented |
| Symptom | Cause | Corrective check |
| Revenue unexpectedly zero | Amounts imported as text | Test ISNUMBER; correct source/import |
| Stage groups split | won and Won differ | Standardise against allowed stages |
| Revenue inflated | Duplicate enquiry ID counted twice | Review duplicate IDs before removal |

Primary source: [Current Google guidance](https://developers.google.com/workspace/sheets/api/guides/filters-overview)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 9 Sheets formulas and operational checks

25 minutes · K6 A5 · Slides 91–99

Operations needs the enquiry pipeline value and conversion rate. Compute explicit numerators and denominators rather than relying on an unlabeled percentage.

Goal: Total 12, Won 3, Won revenue SGD 960, conversion 25%, average won SGD 320 all match hand calculation and report labels identify the cohort.

Tools: Sheets

Additional mechanism/chart slides: 253,254,255,256,257,260.

Mock inputs: [enquiries-clean.csv](../activities/activity-09-sheets-formulas-and-operational-checks/enquiries-clean.csv), [hand-check.md](../activities/activity-09-sheets-formulas-and-operational-checks/hand-check.md), [products-lookup.csv](../activities/activity-09-sheets-formulas-and-operational-checks/products-lookup.csv), [scenario.json](../activities/activity-09-sheets-formulas-and-operational-checks/scenario.json).

Local package: activities/activity-09-sheets-formulas-and-operational-checks/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Total enquiries | =COUNTA(A2:A13) | 12 validated IDs |
| Won enquiries | =COUNTIF(C2:C13,"Won") | 3 Won records |
| Won revenue | =SUMIF(C2:C13,"Won",D2:D13) | SGD 960 |
| Conversion | =IF(B2=0,"No data",B3/B2) | Summary B2 total 12; B3 Won 3; result 25% |

Named denominator: A 25% conversion rate here means Won enquiries divided by all 12 validated enquiries. It does not mean website visitor conversion.

Conditional aggregation: SUMIF matches the stage column and sums the corresponding amount range. Keep both ranges aligned.

Empty period: IFERROR avoids a divide error but a displayed zero can hide no data. Display an explicit no-data label in the report.

Verification: Independent hand calculation on three won records should match the spreadsheet result before charts are published.

#### Detailed procedure

1. Import [enquiries-clean.csv](../activities/activity-09-sheets-formulas-and-operational-checks/enquiries-clean.csv) into Sheets, rename the imported tab exactly Clean and confirm 12 enquiry rows plus one header. Formula references below depend on this tab name.

2. Create a Summary tab. Put labels Total enquiries, Won enquiries, Won revenue, Conversion andAverage won value in A2: A6; put their values/formulas in B2: B6.

3. Enter =COUNTA(Clean!A2: A13) and =COUNTIF(Clean!C2: C13,"Won") in the first two value cells.

4. Enter =SUMIF(Clean!C2: C13,"Won", Clean!D2: D13) for revenue.

5. In Summary B5 enter =IF(B2=0,"No data", B3/B2) and format numeric results as percent. B2 is total enquiries and B3 is Won enquiries; label this denominator explicitly.

6. Calculate average won value as Won revenue divided by Won count and format as SGD currency.

7. Use the provided [hand-check.md](../activities/activity-09-sheets-formulas-and-operational-checks/hand-check.md) to independently add 360,180 and 420 and compare against the sheet.

8. Add an empty-period test with a No data label, then save the report evidence and export the summary PDF.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| COUNT | Unique IDs | 12 |
| WON | Stage rows | 3 |
| REV | Won revenue | SGD 960 |
| RATE | Won / enquiries | 25% with cohort label |
| Symptom | Cause | Corrective check |
| SUMIF wrong total | Sum range offset from criteria range | Align row 2:13 on both ranges |
| Conversion exceeds 100% | Numerator and denominator from different populations | Use same validated enquiry cohort |
| Zero interpreted as failure | Empty period masked by IFERROR | State No data alongside result |

Primary source: [Current Google guidance](https://support.google.com/a/users/?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 10 Filter views pivots and editable charts

25 minutes · K6 A5 · Slides 100–108

Sales and Operations need different filtered views without disrupting each other. Summarise enquiry stages and visualise counts using the validated 12-row cohort.

Goal: Filter view does not disrupt peer view; pivot counts 4/3/3/2 total 12; chart is editable and correctly labels enquiry counts.

Tools: Sheets

Additional mechanism/chart slides: 258,259.

Mock inputs: [enquiries-clean.csv](../activities/activity-10-filter-views-pivots-and-editable-charts/enquiries-clean.csv), [scenario.json](../activities/activity-10-filter-views-pivots-and-editable-charts/scenario.json).

Local package: activities/activity-10-filter-views-pivots-and-editable-charts/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Basic filter | Shared sheet view | May change what other users see |
| Filter view | Saved named view | Does not disrupt another user view |
| Pivot rows | stage | Group New/Qualified/Won/Lost |
| Pivot values | COUNTA enquiry_id | Counts records, not amount totals |

View versus data: A filter hides rows in a view; it does not delete them. Verify the source range before interpreting a chart.

Pivot aggregation: Count of IDs answers how many enquiries; SUM of amount answers pipeline value. These are different measures.

Chart choice: A column chart compares stage counts. A line chart would imply an ordered temporal trend that these categories do not provide.

Collaboration test: Open the sheet as a second editor and verify a filter view selection does not alter the other editor’s working view.

#### Detailed procedure

1. Import [enquiries-clean.csv](../activities/activity-10-filter-views-pivots-and-editable-charts/enquiries-clean.csv) and name the tab Clean. Select the full header and 12 data rows.

2. Create a named filter view for Qualified enquiries using the Data menu Filter views control available to your account.

3. Ask a paired editor to confirm their own view remains unchanged; record the distinction from a basic filter.

4. Create a pivot table from Clean A1: D13 with stage as rows and COUNTA of enquiry_id as values.

5. Check that New 4, Qualified 3, Won 3 and Lost 2 sum to 12.

6. Insert a column chart from the stage/count summary, excluding the grand-total row.

7. Set the chart title to Validated enquiry stages and label the measure Enquiry count.

8. Export the pivot summary and capture chart/source evidence; save the view and verify again as a second user.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| VIEW | Sales qualified | Partner view unaffected |
| PIVOT | Stage counts | 4,3,3,2 |
| TOTAL | Pivot count | 12 |
| CHART | Column chart | Counts match source |
| Symptom | Cause | Corrective check |
| Partner loses visible rows | Basic filter applied to shared view | Use a filter view instead |
| Pivot counts 11 | Source range omitted final row | Inspect pivot source range |
| Won shown as revenue | Wrong measure/title pairing | Label count and currency separately |

Primary source: [Current Google guidance](https://developers.google.com/workspace/sheets/api/guides/filters-overview)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 11 Slides assets and customer presentation

20 minutes · K2 K4 A3 · Slides 109–117

Marketing needs a short customer presentation containing only approved product facts and a pipeline chart with a clear data period.

Goal: Three customer slides use approved facts, clear visual hierarchy and synthetic-data chart label; private cost details are absent and viewer access is verified.

Tools: Slides, Sheets, Drive

Additional mechanism/chart slides: None.

Mock inputs: [pitch-outline.md](../activities/activity-11-slides-assets-and-customer-presentation/pitch-outline.md), [product-facts.csv](../activities/activity-11-slides-assets-and-customer-presentation/product-facts.csv), [scenario.json](../activities/activity-11-slides-assets-and-customer-presentation/scenario.json), [stage-counts.csv](../activities/activity-11-slides-assets-and-customer-presentation/stage-counts.csv).

Local package: activities/activity-11-slides-assets-and-customer-presentation/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Slide title | Storage that fits your home | Specific customer-facing message |
| Price field | SGD 29 | Matches approved source |
| Chart period | September 2026 synthetic cohort | Identifies sample context |
| Source link | Controlled Google Sheet | Viewer access separate from edit |

Visual hierarchy: Title, image and concise verified values make the decision legible; the source register still governs correctness.

Chart dependency: A linked Sheets chart is a dependency. A later update needs review before refreshing the customer deck.

Audience boundary: Sharing a presentation does not necessarily grant the viewer access to every linked source file.

Privacy: Remove internal commentary and cost values from the customer copy; inspect the exported PDF and permission state.

#### Detailed procedure

1. Create a new Slides presentation named HHS Customer Pitch using the local [pitch-outline.md](../activities/activity-11-slides-assets-and-customer-presentation/pitch-outline.md).

2. Create three slides using title and image layouts, keeping product price SGD 29 and approved delivery/return terms.

3. Insert a locally supplied product illustration or an approved mock image; add accurate alternative text.

4. Insert or link a Sheets chart from the validated stage counts and label it Synthetic September 2026 enquiry cohort.

5. Use consistent theme fonts and check the visual hierarchy in presentation mode.

6. Review speaker notes, comments and hidden content for internal margin/cost values and remove them from the customer copy.

7. Share only with your named training viewer and ask them to open the presentation.

8. Download PDF and inspect all pages. Save the source presentation URL, release PDF and publication checklist.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| PRICE | Customer slide | SGD 29 |
| CHART | Stages | 4/3/3/2 with synthetic label |
| PRIVATE | Notes/comments | No internal cost values |
| VIEW | PDF/viewer | Readable and accessible |
| Symptom | Cause | Corrective check |
| Linked chart out of date | Source changed after insertion | Review current data and refresh deliberately |
| Customer cannot open source | Source ACL separate | Share approved source or use snapshot |
| Notes contain internal margin | Source deck reused without release review | Remove private notes and inspect export |

Primary source: [Current Google guidance](https://support.google.com/a/users/?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 12 Forms publication consent and response schema

25 minutes · K2 K3 K4 A3 · Slides 118–126

Harbour Home Supplies needs a customer enquiry form. Its responder audience, email collection and response visibility are independent choices with privacy consequences.

Goal: Published responder link works; consent is required; private results summary is off; response sheet stays restricted and synthetic response is correctly captured.

Tools: Forms, Sheets

Additional mechanism/chart slides: None.

Mock inputs: [enquiry-form-spec.md](../activities/activity-12-forms-publication-consent-and-response-schema/enquiry-form-spec.md), [scenario.json](../activities/activity-12-forms-publication-consent-and-response-schema/scenario.json), [test-response.csv](../activities/activity-12-forms-publication-consent-and-response-schema/test-response.csv).

Local package: activities/activity-12-forms-publication-consent-and-response-schema/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Question fields | name, email, product, consent | Collect minimum relevant data |
| Collect email | Verified or responder input | Choose deliberately and disclose |
| Limit 1 response | Google sign-in required | Not suitable for all anonymous visitors |
| Summary visibility | View results summary | May reveal full text to responders |

Publish requirement: Current Forms requires publication before responders can access a form. Editor sharing and responder access are separate.

Email collection: A one-response limit requires sign-in but does not by itself record the username; email collection is a distinct setting.

Summary risk: Response summaries can expose full-text answers or charts to responders. Keep summary visibility off for private enquiries.

Response ACL: A published enquiry form does not justify publishing the linked response spreadsheet containing customer contact details.

#### Detailed procedure

1. Create a blank Form from [enquiry-form-spec.md](../activities/activity-12-forms-publication-consent-and-response-schema/enquiry-form-spec.md) and give it the title HHS Product Enquiry Training.

2. Add product dropdown, contact-name, email and required consent questions using the supplied mock question text.

3. Choose email collection deliberately. For this scenario use responder input and describe its purpose in the form introduction.

4. In Settings review Limit to 1 response and the sign-in consequence. Leave it off for the visitor scenario unless your trainer sets a restricted classroom audience.

5. Turn off View results summary and explain the privacy reason in your evidence log.

6. Link responses to a new Google Sheet and keep the response spreadsheet Restricted to authorised staff/test owner.

7. Publish the form to the authorised training responder audience and copy the responder link, not the editor link.

8. Open as a test responder, submit the provided synthetic record, inspect its row in the response sheet and verify that other responses are not exposed.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| PUB | Responder URL | Published training form opens |
| CONSENT | Test response | Required contact permission |
| SUMMARY | Responder view | No private response summary |
| SHEET | Response spreadsheet | Staff-only Restricted |
| Symptom | Cause | Corrective check |
| Responder sees unpublished form | Form draft not published | Publish to authorised training responders |
| Private answers visible | Results summary enabled | Disable summary and retest responder view |
| External visitor blocked | Audience or sign-in restriction | Align responder controls to intended audience |

Primary source: [Current Google guidance](https://support.google.com/docs/answer/2839588?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 13 Forms validation and customer feedback analysis

25 minutes · K6 K7 A5 A7 · Slides 127–135

A feedback survey contains satisfaction ratings outside 1–5 and missing responses. Validate inputs and interpret the sample without turning a small survey into a population claim.

Goal: Validated 10-response sample has mean 3.6/5 and 6/10 positive ratings; report labels synthetic scope and proposes a measurable website improvement.

Tools: Forms, Sheets

Additional mechanism/chart slides: 261.

Mock inputs: [feedback-form-spec.md](../activities/activity-13-forms-validation-and-customer-feedback-analysis/feedback-form-spec.md), [feedback.csv](../activities/activity-13-forms-validation-and-customer-feedback-analysis/feedback.csv), [scenario.json](../activities/activity-13-forms-validation-and-customer-feedback-analysis/scenario.json).

Local package: activities/activity-13-forms-validation-and-customer-feedback-analysis/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| rating | Integer 1..5 | Reject out-of-range input |
| issue_category | Delivery / Product / Website | Controlled choices |
| response_id | F001..F010 | Unique synthetic record |
| mean_rating | =AVERAGE(B2:B11) | 36/10 =3.6 |

Validation: The 1–5 boundary is part of the question contract; distinguish unanswered from a genuine low score.

Aggregation: The mean 3.6 uses 10 valid responses. A positive share 60% uses ratings 4 or 5 and the same 10-response denominator.

Interpretation: Synthetic convenience feedback is evidence for practising analysis, not a verified claim about real customer satisfaction.

Action link: Tie the lowest Website scores to a testable navigation improvement and define what evidence would indicate success.

#### Detailed procedure

1. Create or update a training feedback Form using [feedback-form-spec.md](../activities/activity-13-forms-validation-and-customer-feedback-analysis/feedback-form-spec.md) with a required 1–5 rating and controlled issue category.

2. Test the input boundary by attempting an invalid value if the chosen question type permits it, or verify the fixed scale endpoints.

3. Import [feedback.csv](../activities/activity-13-forms-validation-and-customer-feedback-analysis/feedback.csv) into a separate Sheets analysis tab; these are synthetic practise responses, not live survey data.

4. Check ten unique response IDs, rating bounds and missing-value count.

5. Calculate the rating mean using AVERAGE on the ten numeric values and independently add them to 36.

6. Calculate the proportion rating 4 or 5 using COUNTIF for values>=4 divided by 10.

7. Create a column chart of issue counts and a short analysis note labeling the sample synthetic.

8. Propose one website navigation test with an acceptance measure and save the feedback report and validation evidence.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| N | Valid sample | 10 |
| MEAN | Rating | 3.6/5 |
| POSITIVE | Rating 4 or 5 | 6/10 =60% |
| ACTION | Website issue | Navigation test defined |
| Symptom | Cause | Corrective check |
| Mean greater than 5 | Out-of-range value included | Validate 1..5 and quarantine invalid rows |
| Blank counted as zero | Missing interpreted as negative feedback | Separate missing from rating 1 |
| 60% called customer-wide satisfaction | Sample overgeneralised | Label synthetic 10-response sample |

Primary source: [Current Google guidance](https://support.google.com/docs/answer/2839588?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 14 Gmail routing labels and search controls

20 minutes · K3 K5 A3 · Slides 136–144

Sales loses customer enquiries among newsletters. Route only matching messages to a label and verify that a reply is treated according to its own criteria.

Goal: Positive and negative message tests match the declared criteria; action is label only and the report distinguishes reply criteria from conversation grouping.

Tools: Gmail

Additional mechanism/chart slides: None.

Mock inputs: [filter-spec.md](../activities/activity-14-gmail-routing-labels-and-search-controls/filter-spec.md), [mock-emails.csv](../activities/activity-14-gmail-routing-labels-and-search-controls/mock-emails.csv), [scenario.json](../activities/activity-14-gmail-routing-labels-and-search-controls/scenario.json).

Local package: activities/activity-14-gmail-routing-labels-and-search-controls/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Search | subject:(HHS enquiry) | Test matching messages first |
| Action | Apply label Enquiries | Label need not archive message |
| Existing messages | Apply filter to matching conversations | Choose explicitly |
| Reply behaviour | Criteria checked on message | Replies need their own match |

Matching contract: A filter applies the criteria to messages. A reply without matching fields need not inherit the same filter action.

Labels: A label categorises a message without necessarily removing it from Inbox; Archive is a separate action.

Search before mutation: Preview the exact search matches before saving a routing rule, particularly before forwarding or deletion.

Privacy boundary: Automatic forwarding is a data-disclosure action. The training rule applies a local label only.

#### Detailed procedure

1. Read [mock-emails.csv](../activities/activity-14-gmail-routing-labels-and-search-controls/mock-emails.csv) and [filter-spec.md](../activities/activity-14-gmail-routing-labels-and-search-controls/filter-spec.md); no real customer message is needed.

2. Use trainer-provided received synthetic messages in a dedicated classroom test mailbox: two enquiry subjects and two non-matching subjects. Unsent drafts cannot demonstrate incoming-filter application. If received test mail is unavailable, document the planned test and do not claim the routing passed.

3. In Gmail search subject:(HHS enquiry) and inspect the preview matches.

4. Create an Enquiries training label, then create a filter from the search criteria.

5. Select Apply the label and choose the training label. Do not select forwarding or Delete it.

6. If you intend to label existing synthetic messages, choose the matching-existing option deliberately.

7. Check a matching message, a non-matching message and a reply whose subject differs; record observed outcomes.

8. Remove the training filter and optional label after saving evidence.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| MATCH | M01/M03 | Enquiries label present |
| NEGATIVE | M02/M04 | Label absent |
| RULE | Filter action | No forwarding or delete |
| CLEANUP | Training rule | Removed after evidence |
| Symptom | Cause | Corrective check |
| Newsletter labeled | Criteria too broad | Preview and narrow subject/sender |
| Reply not labeled | Reply fails saved criteria | Inspect its actual fields |
| Old mail unaffected | Existing matching option not selected | Apply explicitly only if intended |

Primary source: [Current Google guidance](https://support.google.com/mail/answer/6579)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 15 Gmail delegation and customer response governance

20 minutes · K1 K7 A1 A7 · Slides 145–153

Customer-support staff need access to a shared support mailbox. Sharing the password creates an identity and accountability problem; compare delegation with forwarding or alias use.

Goal: Access design distinguishes mailbox account from alias, documents delegate scope and revocation, and produces a fact-checked customer response without shared credentials.

Tools: Gmail; delegation demonstration

Additional mechanism/chart slides: None.

Mock inputs: [access-request.md](../activities/activity-15-gmail-delegation-and-customer-response-governance/access-request.md), [mailbox-options.csv](../activities/activity-15-gmail-delegation-and-customer-response-governance/mailbox-options.csv), [reply-template.md](../activities/activity-15-gmail-delegation-and-customer-response-governance/reply-template.md), [scenario.json](../activities/activity-15-gmail-delegation-and-customer-response-governance/scenario.json).

Local package: activities/activity-15-gmail-delegation-and-customer-response-governance/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Delegate | Named Google account | Mailbox permissions, not password sharing |
| Allowed | Read, send, delete email | Broad mailbox access |
| Not allowed | Change owner password | Not a full account takeover |
| Alias | Alternate email address | Not independent delegatable account |

Delegation scope: A delegate can manage email, including deleting messages. Grant only to trusted support staff and record review ownership.

Account boundary: An alias is an alternate address, not a separate Google Account. Do not design a delegated mailbox around an alias.

Restrictions: Delegation does not grant all non-email integrations or account security controls. Verify the current surface’s supported features.

Customer handling: Use an approved response template and link to current public terms, while keeping personal customer details inside the restricted mailbox.

#### Detailed procedure

1. Open [mailbox-options.csv](../activities/activity-15-gmail-delegation-and-customer-response-governance/mailbox-options.csv) and classify each address as account or alias.

2. Draft a delegation request for the real support mailbox architecture using [access-request.md](../activities/activity-15-gmail-delegation-and-customer-response-governance/access-request.md). Use example addresses only.

3. As authorised mailbox owner in a classroom demonstration, inspect Gmail Settings then Accounts and Import then Grant access to your account if available.

4. Do not add a live delegate without trainer-managed classroom authorisation; if unavailable, record the restriction and complete the design evidence.

5. Create a customer response draft using [reply-template.md](../activities/activity-15-gmail-delegation-and-customer-response-governance/reply-template.md) and replace product and delivery placeholders from the approved facts.

6. Check that the draft reveals no internal margin or unrelated customer details.

7. Complete a revocation/offboarding checklist naming who removes delegation and when.

8. Save the response draft and access decision showing why password sharing and alias-as-mailbox are rejected.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| ARCH | Mailbox | Account versus alias identified |
| SCOPE | Delegate | Read/send/delete documented |
| REPLY | Template | Correct terms and current links |
| EXIT | Procedure | Delegation-removal owner named |
| Symptom | Cause | Corrective check |
| Alias absent from delegated accounts | Alias has no separate mailbox account | Use correct mailbox architecture |
| Staff uses owner password | Shared credential bypasses accountability | Replace with authorised named access |
| Delegate retains access after exit | Delegation not revoked | Remove delegation and review grants |

Primary source: [Current Google guidance](https://support.google.com/mail/answer/138350?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 16 Calendar availability and booking boundaries

20 minutes · K3 K7 A3 A7 · Slides 154–162

Sales offers consultations to Singapore customers while a partner works in another time zone. An availability link should show bookable slots without exposing private event details.

Goal: Booking route: timezone is correct, configured busy slot is excluded and a test booking creates an event. Standard-event fallback: invitation displays the same Singapore/UTC instant and intended audience; booking checks are explicitly Not executed.

Tools: Calendar

Additional mechanism/chart slides: None.

Mock inputs: [calendar-events.csv](../activities/activity-16-calendar-availability-and-booking-boundaries/calendar-events.csv), [scenario.json](../activities/activity-16-calendar-availability-and-booking-boundaries/scenario.json).

Local package: activities/activity-16-calendar-availability-and-booking-boundaries/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Time zone | Asia/Singapore UTC+8 | Label exported meeting times |
| Duration | 30 minutes | Defined consultation slot |
| Availability | 10:00–12:00 weekdays | Business policy for this scenario |
| Sharing level | Free/busy where appropriate | Separate from full event details |

Time contract: An absolute instant and display timezone are different. Record timezone explicitly in invitations and customer instructions.

Conflicts: Booking availability reflects configured calendars and busy events. Verify the selected conflict calendars rather than assuming all calendars are checked.

Privacy: Free/busy reveals availability without necessarily sharing event titles. Review the calendar’s actual permission level.

Edition boundary: Appointment schedules and premium capabilities depend on account/subscription. A standard event invitation is the classroom fallback.

#### Detailed procedure

1. Create a new training calendar if allowed and set its timezone to Asia/Singapore.

2. Import or manually enter the three synthetic events from [calendar-events.csv](../activities/activity-16-calendar-availability-and-booking-boundaries/calendar-events.csv); include a 10:30–11:00 busy block.

3. Create a 30-minute appointment schedule for the stated training hours if available. Otherwise create a standard event and document the fallback.

4. For appointment schedules review the calendars included in conflict checking and booking-page audience. For the standard-event fallback review the guest list, availability/free-busy information available to you, and agree a non-conflicting test time with your partner.

5. Check calendar sharing and avoid exposing private event details to the test customer.

6. If appointment schedules are available, open the booking link as the intended test visitor and inspect timezone and available slots. If unavailable, open the standard event invitation as your invited partner and compare the displayed Singapore time and UTC instant.

7. For the booking route, book one harmless test slot and verify the resulting event and busy-state change. For the standard-event fallback, accept the invitation and verify the same instant and intended audience; do not claim booking-page or conflict-exclusion behaviour was executed.

8. Cancel the test booking or remove the standard test event. Save timezone and privacy evidence. Label booking/conflict checks Not executed when the account does not offer appointment schedules.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| TIME | 10:00 +08:00 | 02:00 UTC same instant |
| BUSY | 10:30–11:00 | Excluded where configured |
| PRIVACY | Viewer | No private titles |
| BOOK | Training slot | One booking creates expected event |
| Symptom | Cause | Corrective check |
| Customer books busy time | Relevant calendar not checked | Review conflict-calendar selection |
| Meeting shifted 8 hours | Timezone omitted or misread | Compare Singapore and UTC instant |
| Customer sees private title | Calendar sharing too broad | Choose intended free/busy audience |

Primary source: [Current Google guidance](https://support.google.com/calendar/answer/11608416?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 17 Meet collaboration and recording controls

20 minutes · K3 K7 A3 · Slides 163–171

A product-review meeting needs decisions and action owners. Recording and transcripts are not assumed available or appropriate for every account or meeting.

Goal: Approved tab only is shared, written decision and two owned actions persist, and recording limitations/privacy controls are accurately documented.

Tools: Meet, Calendar, Drive

Additional mechanism/chart slides: 252.

Mock inputs: [decision-record.md](../activities/activity-17-meet-collaboration-and-recording-controls/decision-record.md), [meeting-agenda.csv](../activities/activity-17-meet-collaboration-and-recording-controls/meeting-agenda.csv), [scenario.json](../activities/activity-17-meet-collaboration-and-recording-controls/scenario.json).

Local package: activities/activity-17-meet-collaboration-and-recording-controls/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Meeting identity | Calendar organiser | Authorised host controls |
| Screen share | Approved browser tab | Avoid unrelated windows |
| Recording | Edition/admin/role dependent | Do not assume free availability |
| Action item | owner, due_on, status | Business decision record |

Host boundary: Meeting controls depend on host, account and administrator settings. Review who can join and present before sharing sensitive content.

Screen disclosure: Sharing a tab narrows the visible surface compared with an entire screen, but learners still check the content and notifications.

Recording scope: Availability and save location depend on the edition and meeting context. Recording also requires an approved purpose and participant notice.

Decision persistence: A written decision/action record is the durable output for this exercise; it is not replaced by an unreviewed recording.

#### Detailed procedure

1. Create a training Calendar event for a short paired product-review meeting.

2. Attach or link only the approved mock brochure and [decision-record.md](../activities/activity-17-meet-collaboration-and-recording-controls/decision-record.md) template.

3. Join Meet with your partner and inspect host controls available to your account.

4. Share the single approved product-document tab; verify with your partner what is visible.

5. Discuss the three mock agenda items and record one decision and at least two actions with owners and due dates.

6. Do not record the exercise. Inspect recording availability only in a trainer demonstration and note account/admin limitations.

7. Save the written decision record in the Restricted project folder and share it only with the intended named participants.

8. End the meeting and verify action owners can open the decision record.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| INVITE | Participants | Intended training audience |
| SHARE | Visible content | Approved product tab |
| DECISION | Brochure | Approval and rationale recorded |
| ACTION | Marketing lead | Due 2026-09-16; Open |
| Symptom | Cause | Corrective check |
| Recording control absent | Edition/admin/role limitation | Use written record; note limitation |
| Customer sees internal window | Wrong share surface | Stop share; select approved tab |
| Action has no owner | Discussion not translated to work item | Assign owner and due date |

Primary source: [Current Google guidance](https://support.google.com/meet/answer/9308681?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 18 Chat spaces tasks and whiteboarding replacement

20 minutes · K3 K7 A3 A7 · Slides 172–180

A product launch needs a persistent discussion space and collaborative ideas. Legacy Jamboard instructions are unusable because the application ended 31 December 2024.

Goal: Persistent discussion or documented fallback, owned task and three measurable ideas exist; no instructions depend on retired Jamboard.

Tools: Chat, Slides, Tasks if available

Additional mechanism/chart slides: 251.

Mock inputs: [customer-journey.csv](../activities/activity-18-chat-spaces-tasks-and-whiteboarding-replacement/customer-journey.csv), [idea-board.md](../activities/activity-18-chat-spaces-tasks-and-whiteboarding-replacement/idea-board.md), [scenario.json](../activities/activity-18-chat-spaces-tasks-and-whiteboarding-replacement/scenario.json).

Local package: activities/activity-18-chat-spaces-tasks-and-whiteboarding-replacement/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Space membership | Internal training users | Review external audience policy |
| Thread | Launch decision topic | Keep rationale attached to discussion |
| Task fields | assignee, due date, status | Record ownership |
| Whiteboard alternative | Slides brainstorm | Core exercise without third-party licence |

Persistence: A space keeps shared discussion context and linked records; the underlying file still has its own sharing settings.

Task ownership: A task is actionable when an assignee and due date are explicit. Verify completion evidence, not only a chat acknowledgement.

Retired product: Jamboard is end-of-life. Rebuild its original brainstorm purpose with Slides or evaluate current third-party alternatives separately.

External boundary: External-space availability depends on administrator policy and space configuration. Keep classroom members internal unless explicitly authorised.

#### Detailed procedure

1. Create a training Chat space if your account permits it; otherwise document the space design and use a shared Slides board.

2. If a Chat space is available, add only your paired training learner and give it the launch title. Otherwise share the Slides brainstorm board with the named partner and record the no-space fallback.

3. For the Chat route post the mock agenda in a thread and link the approved brochure, then verify partner file access. For the fallback place the agenda and brochure link on the shared Slides board and verify partner access there.

4. For the Chat route create a task with named assignee and due date. For the fallback record the same owned task in a shared decision/action table and mark Chat task execution Not executed.

5. Create a Slides brainstorm board using [idea-board.md](../activities/activity-18-chat-spaces-tasks-and-whiteboarding-replacement/idea-board.md) with three columns for idea, customer friction and acceptance measure.

6. Add at least three ideas from the supplied [customer-journey.csv](../activities/activity-18-chat-spaces-tasks-and-whiteboarding-replacement/customer-journey.csv) and assign an owner to each.

7. Record Jamboard retirement and compare optional FigJam, Lucidspark or Miro only as evaluated alternatives, not required purchases.

8. Save space/task/board evidence and remove temporary classroom membership after the exercise.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| SPACE | Members | Only intended training identities |
| ASSET | Brochure link | Opens for member |
| TASK | Terms review | Owner and due date |
| IDEA | Slides board | Three measurable visitor improvements |
| Symptom | Cause | Corrective check |
| Member cannot open linked brochure | File ACL differs from space | Share approved asset to intended members |
| Task remains unassigned | Chat message substituted for task | Assign owner and due date |
| Jamboard link fails | Retired application | Use Slides board; retain exported legacy evidence if available |

Primary source: [Current Google guidance](https://support.google.com/chat/answer/9260076?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 19 Sites architecture navigation and draft content

30 minutes · K2 K3 K4 K5 A3 · Slides 181–189

Customers cannot find delivery terms or the enquiry form on the SME site. Design a small information architecture around actual customer tasks and independent source assets.

Goal: Four task-oriented pages with approved facts and a documented independent embed ACL exist; delivery terms are discoverable within 2 clicks in the test.

Tools: Sites, Docs, Drive

Additional mechanism/chart slides: None.

Mock inputs: [product-facts.csv](../activities/activity-19-sites-architecture-navigation-and-draft-content/product-facts.csv), [scenario.json](../activities/activity-19-sites-architecture-navigation-and-draft-content/scenario.json), [site-copy.md](../activities/activity-19-sites-architecture-navigation-and-draft-content/site-copy.md), [usability-log.csv](../activities/activity-19-sites-architecture-navigation-and-draft-content/usability-log.csv).

Local package: activities/activity-19-sites-architecture-navigation-and-draft-content/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Page hierarchy | Home, Products, Delivery, Contact | Consistent task-based labels |
| Primary action | Product enquiry | One visible destination |
| Draft | Unpublished changes | Review before publishing |
| Embedded asset | Approved brochure PDF | Viewer ACL checked separately |

Information architecture: The site map names pages and tasks; it is a design artifact, not a broad list of site benefits.

Content dependency: A Sites page can embed a file, but the file’s permission remains independent. A visible editor embed is not proof of customer access.

Draft boundary: Editing a published site creates changes requiring publication; distinguish editor preview from current visitor content.

Task test: Evaluate a visitor’s ability to find the delivery price and enquiry action, then record observed completion and friction.

#### Detailed procedure

1. Create a new training Google Site and use [site-copy.md](../activities/activity-19-sites-architecture-navigation-and-draft-content/site-copy.md) as the approved mock content source.

2. Create Home, Products, Delivery and Contact pages with the stated navigation labels.

3. Add approved product names/prices from [product-facts.csv](../activities/activity-19-sites-architecture-navigation-and-draft-content/product-facts.csv) and a clear Product enquiry action.

4. Insert the approved brochure or document from your training Drive folder and note its independent Share setting.

5. Add delivery terms SGD 5 below SGD 80 and the approved return window.

6. Preview desktop and mobile layouts and check page hierarchy and navigation labels.

7. As site author open Preview and have your partner perform the delivery-price task on the author’s displayed preview; record clicks and confusion in [usability-log.csv](../activities/activity-19-sites-architecture-navigation-and-draft-content/usability-log.csv). Alternatively explicitly invite the paired learner as an editor for draft preview. This is a draft usability test; published visitor access is verified in Activity 20.

8. Save the site draft and evidence; publish only to the authorised training audience in the next activity.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| MAP | Four pages | Task labels consistent |
| FACT | Delivery | SGD 5 / threshold SGD 80 |
| EMBED | Brochure | Intended viewer access |
| TASK | Delivery terms | Located within 2 clicks |
| Symptom | Cause | Corrective check |
| Viewer sees permission request | Embedded file restricted to editors | Share approved release file appropriately |
| Terms absent from live site | Draft changes not published | Review and publish current change |
| Navigation uses internal jargon | Labels reflect departments, not visitor tasks | Use product/delivery/contact task labels |

Primary source: [Current Google guidance](https://support.google.com/sites/answer/90569?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 20 Sites publishing embed access and maintenance

30 minutes · K3 K4 A3 · Slides 190–198

The editor sees a brochure and form correctly, but a customer gets permission errors. Validate site publication, responder access and embedded file sharing as separate controls.

Goal: Exact published site, brochure and form work for intended viewer; response sheet denies unauthorised access and maintenance checklist has resolved findings.

Tools: Sites, Drive, Forms

Additional mechanism/chart slides: None.

Mock inputs: [maintenance-checklist.csv](../activities/activity-20-sites-publishing-embed-access-and-maintenance/maintenance-checklist.csv), [scenario.json](../activities/activity-20-sites-publishing-embed-access-and-maintenance/scenario.json).

Local package: activities/activity-20-sites-publishing-embed-access-and-maintenance/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Editor URL | Sites editing surface | Not the visitor release URL |
| Published URL | Published training site | Test current content |
| Drive embed | File General access + People | Separate ACL |
| Form embed | Publish + responders | Separate responder contract |

Three audiences: Site viewers, embedded-file viewers and form responders are separate permission contracts. Align them deliberately.

Response privacy: The form can accept enquiries while its response sheet remains staff-only. Do not grant customers access to the response store.

Maintenance cycle: Check content facts, broken links, mobile layout, audience and review dates. Record findings and corrective action for each item.

Live verification: Open the exact published URL with the intended viewer. Editor preview does not establish current visitor behaviour.

#### Detailed procedure

1. Open the training Sites draft from Activity 19 and review the local [maintenance-checklist.csv](../activities/activity-20-sites-publishing-embed-access-and-maintenance/maintenance-checklist.csv).

2. Check approved product/delivery facts and resolve any usability finding before publication.

3. Inspect sharing on the embedded brochure and grant only the authorised training viewer audience.

4. Inspect the Form publication and responder settings; use the correct published responder link.

5. Keep the linked response spreadsheet Restricted to the owner or approved staff; do not share it to site visitors.

6. Publish the Site to the authorised training audience and copy its published visitor URL.

7. Open that exact URL with your partner’s visitor account and test navigation, brochure access and one synthetic form submission.

8. Complete every maintenance-checklist row with observation and evidence, fix failures and repeat the visitor test before saving release records.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| SITE | Published URL | Current facts visible |
| FILE | Embed | Viewer opens brochure |
| FORM | Responder | Synthetic submission succeeds |
| PRIVATE | Response sheet | Uninvited visitor denied |
| Symptom | Cause | Corrective check |
| Site opens; brochure denied | Drive embed ACL excludes visitor | Share approved file with intended audience |
| Form not accepting visitor | Form unpublished or responder restricted | Publish/align responder audience |
| Response data exposed | Response sheet broadened with site | Restrict response store separately |

Primary source: [Current Google guidance](https://support.google.com/sites/answer/90569?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 21 CMS market offerings and weighted selection

25 minutes · K8 A4 · Slides 199–207

An SME choosing between Google Sites, WordPress and SharePoint needs a documented content-management decision, including audience, editing workflow, integrations and operational ownership.

Goal: Comparison covers Google Sites plus 2 offerings with dated primary sources, weights 100, correct 3.65/3.90/3.45 scores and a mandatory-constraint decision.

Tools: Sheets, browser research

Additional mechanism/chart slides: 249,250,262.

Mock inputs: [cms-requirements.md](../activities/activity-21-cms-market-offerings-and-weighted-selection/cms-requirements.md), [offering-evidence.csv](../activities/activity-21-cms-market-offerings-and-weighted-selection/offering-evidence.csv), [scenario.json](../activities/activity-21-cms-market-offerings-and-weighted-selection/scenario.json), [selection-matrix.csv](../activities/activity-21-cms-market-offerings-and-weighted-selection/selection-matrix.csv).

Local package: activities/activity-21-cms-market-offerings-and-weighted-selection/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Criteria weights | Ease 30, Public 25, Governance 25, Extension 20 | Sum 100 in scenario |
| Score scale | 1..5 | Learner analysis, not vendor benchmark |
| Google Sites | Simple team/site authoring | Assess against required workflow |
| Other offerings | WordPress / SharePoint | Verify roles and deployment context |

Scenario scores: The scores are an explicit fictional analyst judgement. They are not current market statistics or universal product rankings.

CMS boundary: Google Sites is a site builder within Workspace; Docs/Drive manage collaboration assets. Do not imply it supplies every workflow of a dedicated CMS.

WordPress roles: WordPress provides role/capability controls; hosting, updates and plugins introduce operational responsibilities that must be assigned.

SharePoint permissions: SharePoint sharing and modern site permissions support Microsoft 365 collaboration; validate the audience and tenant configuration for the actual use case.

#### Detailed procedure

1. Read [cms-requirements.md](../activities/activity-21-cms-market-offerings-and-weighted-selection/cms-requirements.md) and mark mandatory versus weighted criteria.

2. Open the official Google Sites, WordPress roles and SharePoint permissions documentation listed in sources.md.

3. Record the supported role/sharing/publishing contracts and research date in [offering-evidence.csv](../activities/activity-21-cms-market-offerings-and-weighted-selection/offering-evidence.csv).

4. Import [selection-matrix.csv](../activities/activity-21-cms-market-offerings-and-weighted-selection/selection-matrix.csv) into Sheets and verify weights sum to 100.

5. Calculate each weighted score using SUMPRODUCT of weights and scenario scores divided by 100.

6. Confirm Sites 3.65, WordPress 3.90 and SharePoint 3.45 for the supplied fictional scores.

7. Change one requirement or weight and explain how the recommendation changes; apply mandatory constraints before interpreting the rank.

8. Save a comparison report with sources, scenario assumptions, risks, operational owner and recommendation.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| WEIGHTS | Matrix | 30+25+25+20=100 |
| MATH | Sites score | 3.65 |
| SOURCES | Offerings | Official links/date documented |
| GATE | Must-have | Failure excludes unsuitable option |
| Symptom | Cause | Corrective check |
| Weights total 110 | Scoring arithmetic invalid | Normalise weights to 100 |
| Vendor brochure treated as proof | Feature claim lacks contract source | Read official roles/permission documentation |
| High score hides unmet hard constraint | Weighted average masks mandatory need | Apply must-have gate before ranking |

Primary source: [Current Google guidance](https://wordpress.org/documentation/article/roles-and-capabilities/)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

## Metrics add-ons and integration decisions

LO3 · K5 K6 K7 K9 A2 A5 A6 A7 · Slide range 208–244

### Activity 22 Workspace metrics and evidence provenance

30 minutes · K6 A5 · Slides 209–217

The original practical assessment requests document access frequency, collaboration rate and engagement. Report defined measures from labelled synthetic events without claiming unavailable tenant telemetry.

Goal: Report correctly shows 60 view events and 50% defined collaboration across 4 edited docs, with explicit synthetic source, population and limitation notes.

Tools: Sheets; Admin reporting demonstration

Additional mechanism/chart slides: 263,264,266.

Mock inputs: [document-events.csv](../activities/activity-22-workspace-metrics-and-evidence-provenance/document-events.csv), [document-summary.csv](../activities/activity-22-workspace-metrics-and-evidence-provenance/document-summary.csv), [metric-dictionary.md](../activities/activity-22-workspace-metrics-and-evidence-provenance/metric-dictionary.md), [scenario.json](../activities/activity-22-workspace-metrics-and-evidence-provenance/scenario.json), [weekly-views.csv](../activities/activity-22-workspace-metrics-and-evidence-provenance/weekly-views.csv).

Local package: activities/activity-22-workspace-metrics-and-evidence-provenance/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| View events | action=view per document | Event count is not unique visitors |
| Unique viewers | distinct actor_id for views | Synthetic stable identifiers |
| Collaboration rate | docs with>=2 editors / edited docs | Defined business measure |
| Data provenance | Synthetic mock / live admin report | State source and availability |

Metric definition: Define event, population and denominator. View frequency counts events; unique viewers deduplicate identities; these answer different questions.

Provenance: Core activity uses synthetic event data. Live Admin reports require authorised roles and feature availability; they are a separately demonstrated source.

Collaboration rule: Our 50% rate means two of four edited documents have at least two distinct editors. It is a business-defined measure, not a guaranteed built-in report label.

Interpretation: High access is not automatically success. Pair a measurable user task or enquiry outcome with content activity and note source limitations.

#### Detailed procedure

1. Import [document-events.csv](../activities/activity-22-workspace-metrics-and-evidence-provenance/document-events.csv) and [document-summary.csv](../activities/activity-22-workspace-metrics-and-evidence-provenance/document-summary.csv) into Sheets as separate Raw Events and Summary tabs.

2. Read [metric-dictionary.md](../activities/activity-22-workspace-metrics-and-evidence-provenance/metric-dictionary.md) and identify action, actor_id, document_id and event date.

3. Count view events per document using a pivot table or COUNTIFS and confirm 24,18,12 and 6.

4. In a new Editor Counts tab enter DOC01–DOC04 in A2: A5. In B2 enter =COUNTUNIQUE(FILTER('Raw Events'!D$2: D$68,'Raw Events'!C$2: C$68=A2,'Raw Events'!E$2: E$68="edit")) and fill down. This independently deduplicates actor IDs from the raw event rows. Verify 3,2,1,1 against the supplied summary.

5. Flag each edited document with>=2 distinct editors and compute collaborative documents divided by all 4 edited documents.

6. Confirm total 60 view events and 50% collaboration rate with a hand check.

7. Create a labelled monthly report stating synthetic source, September period, definitions, limitations and one corrective action.

8. If a trainer demonstrates Admin Reports, record the actual role/edition/source and differences without replacing synthetic results with invented telemetry.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| VIEWS | DOC01..04 | 24+18+12+6=60 |
| EDITORS | DOC01..04 | 3,2,1,1 |
| COLLAB | >=2 editors | 2/4=50% |
| SOURCE | Report | Synthetic explicitly stated |
| Symptom | Cause | Corrective check |
| Views called customers | Repeated/internal events misclassified | Label view events and source population |
| Collaboration denominator wrong | All assets included instead of edited docs | Use the defined 4 edited-doc cohort |
| Admin metric unavailable | Role/edition/report limitation | Use labelled synthetic data; record gap |

Primary source: [Current Google guidance](https://support.google.com/a/answer/4579696?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 23 Visitor journey funnel and improvement tests

25 minutes · K6 K7 A5 A7 · Slides 218–226

Marketing wants three customer-experience improvements. Use a synthetic visitor funnel and test definitions rather than asserting website analytics is automatically available from Drive.

Goal: Funnel and ratios are correct and labelled synthetic; three ideas name friction, owner, measure, threshold and test period.

Tools: Sheets, Sites

Additional mechanism/chart slides: 265.

Mock inputs: [experiment-template.csv](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/experiment-template.csv), [journey-friction.csv](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/journey-friction.csv), [scenario.json](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/scenario.json), [visitor-funnel.csv](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/visitor-funnel.csv).

Local package: activities/activity-23-visitor-journey-funnel-and-improvement-tests/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Product reach | 600/1000 | 60% of landing cohort |
| Start rate | 120/600 | 20% of product cohort |
| Completion rate | 72/120 | 60% of starters |
| Visitor conversion | 72/1000 | 7.2% of landing cohort |

Population alignment: Use a cohort/time period where stages are comparable. The supplied funnel is explicitly synthetic and simplified for practice.

Different denominators: Completion 60% and visitor conversion 7.2% can both be correct because their denominators differ.

Instrumentation: Real visitor measurement requires configured analytics and approved data collection. Drive file activity is not a substitute for site visitor sessions.

Testable ideas: Improve product navigation, shorten enquiry fields and offer booking. Each idea names friction, owner, metric and an acceptance threshold.

#### Detailed procedure

1. Import [visitor-funnel.csv](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/visitor-funnel.csv) into Sheets and read [journey-friction.csv](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/journey-friction.csv).

2. Calculate product reach 600/1000, start rate 120/600, completion 72/120 and visitor conversion 72/1000.

3. Label all four denominators and verify 60%,20%,60% and 7.2%.

4. Create a column or funnel-style comparison chart that displays the four synthetic stage counts.

5. Write three improvements: task-based product navigation, a shorter consented enquiry form, and a consultation-booking link.

6. For each idea name customer friction, change, owner, success metric, target and test period using [experiment-template.csv](../activities/activity-23-visitor-journey-funnel-and-improvement-tests/experiment-template.csv).

7. State that real site visitor measurement requires configured analytics and approved collection; do not claim these are live Workspace metrics.

8. Save the monthly visitor report and three measurable idea proposals.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| FUNNEL | Stages | 1000/600/120/72 |
| MATH | Conversion | 7.2% landing cohort |
| IDEA1 | Navigation | Product reach target>=70% |
| IDEA2/3 | Form/booking | Completion>=75%; availability test |
| Symptom | Cause | Corrective check |
| Conversion 60% shown as visitor rate | Starter denominator mistaken for landing cohort | Label each ratio explicitly |
| Analytics reports no visitors | Instrumentation not configured/available | Verify actual collection; avoid invented data |
| Three ideas cannot be tested | No measure or owner | Add threshold, period and accountable owner |

Primary source: [Current Google guidance](https://support.google.com/analytics/answer/12195621?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 24 Add-on selection scopes and administrator controls

25 minutes · K9 A6 · Slides 227–235

An add-on promises PDF merge and customer follow-up, but requests broad file and mail access. Recommend a suitable extension only after fit, permissions, data handling and exit checks.

Goal: One current add-on is evaluated with actual dated listing/access evidence, fit and data handling, administrator approval route, pilot checks and revocation/exit plan.

Tools: Marketplace, Sheets; administrator review

Additional mechanism/chart slides: None.

Mock inputs: [addon-candidates.csv](../activities/activity-24-add-on-selection-scopes-and-administrator-controls/addon-candidates.csv), [addon-review.md](../activities/activity-24-add-on-selection-scopes-and-administrator-controls/addon-review.md), [scenario.json](../activities/activity-24-add-on-selection-scopes-and-administrator-controls/scenario.json).

Local package: activities/activity-24-add-on-selection-scopes-and-administrator-controls/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Functional fit | Merge approved PDFs | Requirement-specific evidence |
| Requested access | Files / mail as declared | Review actual consent wording |
| Admin status | Allowed / blocked / limited | Policy can prevent installation |
| Exit | Revoke OAuth and uninstall | Separate access and installation review |

Scope boundary: A requested OAuth permission describes data access, not a quality endorsement. Compare it with the actual business requirement.

Administrator controls: Workspace app availability may be controlled by administrator policy. A learner should submit a recommendation rather than bypass a blocked app.

Data handling: Review where content is processed, retention, deletion and subcontractors using current publisher evidence. Mark unknowns explicitly.

Pilot and rollback: Use synthetic files, define output checks, limit the pilot audience and document revocation/uninstallation and output portability.

#### Detailed procedure

1. Open [addon-candidates.csv](../activities/activity-24-add-on-selection-scopes-and-administrator-controls/addon-candidates.csv); supplied names are fictional option profiles, not endorsed live products.

2. Search current Workspace Marketplace for one PDF/content utility relevant to the requirement, without installing it.

3. Record listing URL, publisher, research date, features and the actual requested-access wording in [addon-review.md](../activities/activity-24-add-on-selection-scopes-and-administrator-controls/addon-review.md).

4. Read publisher privacy/retention/deletion evidence and mark unsupported details Unknown.

5. Compare functional fit, permissions, administrator policy, cost and exit against the supplied requirement.

6. Create an approval request for a limited synthetic-file pilot; do not bypass an administrator block or grant unnecessary scopes.

7. Define expected pilot output, failure checks and a rollback plan including revocation and uninstall review.

8. Save the recommendation with reasons to adopt, reject or defer and the remaining evidence gaps.

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| FIT | Candidate A | PDF requirement matched |
| SCOPE | Consent | Actual declared access recorded |
| PILOT | Mock PDFs | Correct readable merged output |
| EXIT | Connection/install | Revocation and uninstall procedure |
| Symptom | Cause | Corrective check |
| Install blocked | Administrator allowlist/policy | Submit review request; do not bypass |
| Broad mail scope for PDF task | Permission exceeds requirement | Choose lower-access option or reject |
| Uninstall assumed revoke | OAuth connection may still require review | Revoke access and confirm installed state |

Primary source: [Current Google guidance](https://support.google.com/a/answer/6089179?hl=en)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

### Activity 25 Apps Script and API integration contract

30 minutes · K5 K9 A2 A6 · Slides 236–244

The SME wants update timestamps on a content register and considers automated email. A safe bound-sheet example exposes the simple-trigger boundary before evaluating authorised integration.

Goal: User edit C2 creates E2 timestamp; header/unrelated edits are ignored; report correctly states simple-trigger auth/runtime and programmatic-edit boundaries.

Tools: Sheets, Apps Script; optional developer extension

Additional mechanism/chart slides: None.

Mock inputs: [automation-register.csv](../activities/activity-25-apps-script-and-api-integration-contract/automation-register.csv), [request-schema.json](../activities/activity-25-apps-script-and-api-integration-contract/request-schema.json), [scenario.json](../activities/activity-25-apps-script-and-api-integration-contract/scenario.json), [timestamp.gs](../activities/activity-25-apps-script-and-api-integration-contract/timestamp.gs), [trigger-boundary.md](../activities/activity-25-apps-script-and-api-integration-contract/trigger-boundary.md).

Local package: activities/activity-25-apps-script-and-api-integration-contract/. Every named input file is included in this folder.

| Field or control | Scenario value | Interpretation |
| --- | --- | --- |
| Event object | e.range | Exists when user edit fires trigger |
| Guard | sheet name + column 3 + row>1 | Ignore unrelated/header edits |
| Write | column 5 new Date() | Only bound sheet for simple trigger |
| Authorization | Simple trigger cannot send mail | Installable runs creator if used |

Trigger identity: onEdit receives an event for a user edit; clicking Run manually has no normal edit event, so the guard returns safely.

Simple-trigger limit: Simple triggers cannot call services that require authorisation, such as sending email; their runtime limit is 30 seconds.

Programmatic edit: A script/API setValue does not cause onEdit to run. Automation needs explicit timestamp logic or another deliberately designed trigger.

Integration boundary: An installable trigger runs as its creator and requires relevant consent. A REST API client requires its own OAuth/API configuration; do not paste credentials into files.

#### Detailed procedure

1. Create a Google Sheet named HHS Content Register with a tab named exactly Content Register and headers asset_id, title, status, owner, updated_at.

2. Enter three mock rows from [automation-register.csv](../activities/activity-25-apps-script-and-api-integration-contract/automation-register.csv) in rows 2–4.

3. Open Extensions then Apps Script and replace the editor contents with the supplied [timestamp.gs](../activities/activity-25-apps-script-and-api-integration-contract/timestamp.gs) code.

4. Save the script. Do not create any installable trigger or grant mail access for this core activity.

5. Return to Sheets and manually edit the status cell C2. Confirm a timestamp appears in E2.

6. Edit a header or column B and confirm the guarded script does not update an unrelated timestamp.

7. Read [trigger-boundary.md](../activities/activity-25-apps-script-and-api-integration-contract/trigger-boundary.md) and explain why manually running onEdit or a programmatic setValue is not the same as a user edit.

8. Save the script source and a test log. For the optional API design inspect [request-schema.json](../activities/activity-25-apps-script-and-api-integration-contract/request-schema.json) and document OAuth/API requirements without creating credentials or calling production APIs.

/** @OnlyCurrentDoc */

function onEdit(e) {

  if (!e || !e.range) return;

  const r=e.range, s=r.getSheet();

  if (s.getName()!=="Content Register") return;

  if (r.getColumn()!==3 || r.getRow()<2) return;

  if(r.getNumRows()!==1 || r.getNumColumns()!==1)return;

  s.getRange(r.getRow(),5).setValue(new Date());

}

#### Acceptance and troubleshooting

| Evidence | Artifact | Expected result |
| --- | --- | --- |
| EDIT | Row 2 column C | Timestamp appears in E2 |
| HEADER | Row 1 | No timestamp change |
| OTHER | Different column | No timestamp change |
| SCRIPT | Programmatic setValue | No implicit onEdit event |
| Symptom | Cause | Corrective check |
| Manual Run changes nothing | No edit event object | Edit the training sheet column C |
| Bulk paste not stamped | Guard excludes multi-cell edits | Use single-cell task or design bulk handling |
| Script edit not stamped | Programmatic edit does not fire onEdit | Write timestamp explicitly in that automation |

Primary source: [Current Google guidance](https://developers.google.com/apps-script/guides/triggers)

Verified 13 September 2026. Save your completed output and exact observed evidence privately; remove temporary grants or test configuration after validation.

## Supplementary mechanisms and legacy coverage

### Domain verification and mail routing

Activity 1; slide 245. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

DOMAIN SETUP CHANGE RECORD

domain: harbour.example (fictional)

TXT proof: Google-provided verification token

MX purpose: route inbound mail to Google

MX target: use current Setup Wizard record

new standard setup:  smtp.google.com

verification status: separate from mail flow

evidence: verified domain + received test mail

Separate mechanisms: Domain verification proves control of the domain. MX records route inbound email; one does not substitute for the other.

DNS owner: Only the authorised DNS administrator changes domain records. Use the exact current Google setup instructions for the tenant.

Mail cutover: Preserve the current routing design until the approved migration cutover. Mixed old/new records require deliberate review.

Verification: Administrator evidence includes domain verified and successful inbound/outbound test messages, not merely a screenshot of DNS fields.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Domain verification and mail routing](https://support.google.com/a/answer/60216?hl=en)

### User alias group and access contract

Activity 1; slide 246. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

IDENTITY SCHEMA

user: individual Google Account with sign-in

alias: alternate address for existing account

group: membership-based mail/access audience

licence: product/service entitlement

status: active/suspended lifecycle

asset owner: individual or organisation

review: account, group, direct grants

User: A user account has a sign-in identity and service entitlements; do not treat an alias as a separately licensed login.

Alias: An alternate address can receive mail for its underlying account, but is not an independent delegated mailbox.

Group: Membership grants audience-based access; offboarding must review groups as well as direct file permissions.

Evidence: Capture the requested identity type, licence/status and expected audience. An authorised administrator implements the request.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [User alias group and access contract](https://knowledge.workspace.google.com/admin/getting-started/set-up-google-workspace-for-your-organization)

### Suspension handover and deletion gate

Activity 1; slide 247. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

OFFBOARDING CHANGE REQUEST

identity: departing Marketing editor

containment: approved suspension

inventory: My Drive files andownership

handover: transfer eligible business assets

shared drive: organisation content remains

delegation/group grants: review separately

deletion: only after approved retention/handover

Suspension: Suspension restricts account access while retaining the account’s data; it is not the same as deletion or ownership handover.

Handover: Inventory individually owned assets and verify transfer using the actual administrator workflow before approving deletion.

Independent grants: Remove obsolete delegation and group membership explicitly. The lifecycle request lists each surface and its responsible owner.

Acceptance: Approved successor opens required assets; retained shared-drive content remains organisation-owned; retention decisions are documented.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Suspension handover and deletion gate](https://knowledge.workspace.google.com/admin/users/suspend-a-user-temporarily)

### Service availability and account security controls

Activity 1; slide 248. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

ADMINISTRATOR CONTROL REQUEST

OU/group: Marketing training cohort

service: Sites enabled only if approved

app policy: allowed Marketplace utilities

2-Step Verification: enrolment and policy review

licence: required edition capability

external sharing: approved audience boundary

evidence: actual policy + test identity outcome

Policy surface: Service availability, app approval and sharing are different settings. Identify the actual policy surface and cohort.

Security: 2-Step Verification changes sign-in controls; it does not by itself restrict an already shared public file.

Availability: A missing feature may be licence, role or administrator policy. Record which evidence would distinguish these causes.

Authorisation: Core learners write a change request and test plan. Only an authorised administrator changes tenant policy.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Service availability and account security controls](https://knowledge.workspace.google.com/admin/getting-started/set-up-google-workspace-for-your-organization)

### Workspace content tools and boundaries

Activity 21; slide 249. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

CONTENT NEED -> WORKSPACE OFFERING

Drive: store and share controlled assets

Docs: structured text and reviewed edits

Sheets: typed registers, formulas and charts

Slides: approved visual presentation

Forms: published collection and responses

Sites: site pages andembedded assets

Gmail: mail routing andcustomer reply

Content assets: Drive stores assets; Docs, Sheets andSlides author distinct artifact types. Use the appropriate source of record.

Collection: Forms publishes questions and stores responses; its responder audience differs from the response-sheet audience.

Web property: Sites assembles pages and embeds, but does not automatically broaden access to embedded files.

Selection: K8 awareness includes matching Workspace offerings to a need, then comparing dedicated CMS alternatives when required.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Workspace content tools and boundaries](https://workspace.google.com/training/)

### Communication and optional extension selection

Activity 21; slide 250. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

WORKFLOW NEED -> OFFERING

Calendar: availability and event invitations

Meet: hosted meeting and screen-share

Chat: persistent team space and discussion

Tasks: owned follow-up work where available

Apps Script: bound or authorised automation

REST APIs: OAuth-enabled client integration

Marketplace: add-on with publisher/scope review

Persistent record: Meeting/chat communication links to controlled source assets; it does not replace document ownership or publication review.

Optional capabilities: Edition/admin policy can limit booking, recording or app installation. Core exercise fallbacks are documented.

Integration: Apps Script identity and OAuth clients have explicit permission contracts; do not assume every extension runs with the same identity.

Fit: Recommend the least sufficient tool for the required artifact, privacy boundary and operating owner.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Communication and optional extension selection](https://support.google.com/a/users/?hl=en)

### Retired applications and current replacements

Activity 18; slide 251. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

LEGACY UPDATE RECORD

Jamboard app: end of life 31 December 2024

Core brainstorm: shared Slides board

Currents: unavailable from 5 July 2023

Core community: Google Chat spaces

Duet AI: now Gemini for Google Workspace

AI availability: current account/admin check

AI output: source-check before publication

Jamboard: The original brainstorm learning purpose remains; procedures use a current shared Slides board instead of retired Jamboard.

Currents: Replace legacy Currents community links with a current Chat-space design and review the audience/file boundaries.

Gemini name: Duet AI for Workspace is now Gemini for Workspace. Do not preserve retired labels as current controls or assume every AI capability is enabled.

Human review: Generated text or images require source, privacy and accuracy review before becoming an approved customer asset.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Retired applications and current replacements](https://support.google.com/chat/answer/14310347?hl=en)

### Meet Companion mode and echo prevention

Activity 17; slide 252. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

HYBRID MEETING TOPOLOGY

meeting room hardware: room audio/video

laptop Companion Mode: second screen

laptop microphone: off

meetingaudio on laptop: off

participation: chat/presentation features

speaker/listen route: room hardware

acceptance: no feedback +intended content

Audio boundary: Companion Mode disables the laptop microphone and meeting audio to avoid echo while using room audio.

Second screen: The laptop can participate in supported collaboration surfaces while room hardware carries the conversation.

Availability: Supported features and devices vary. Verify the actual current account and device surface in the trainer demonstration.

Fault isolation: No laptop meeting audio in Companion Mode is expected. Check room-audio route rather than treating it as broken laptop speakers.

Detailed practice:1. Read the supplementary contract. 2. Complete the administrator or workflow change-request fields. 3. Identify the owning account/role and current policy. 4. List the authorised implementation actions. 5. Specify the exact allow/deny or output evidence. 6. Have your trainer demonstrate only in an approved tenant or record the design fallback. 7. Save the supported result and mark unexecuted checksNot executed.

Primary source: [Meet Companion mode and echo prevention](https://support.google.com/meet/answer/11295507?hl=en)

### Relative absolute and named references

Activity 9; slide 253. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

Formula Checks!H1 tax rate 0.09

Formula Checks!D2 net value 120; D3 net value 240

=D2*(1+$H$1) ->130.8

Fill down: D3 changes; H1 stays fixed

Tax_Rate refers to 'Formula Checks'!$H$1

=D2*(1+Tax_Rate) ->130.8

Relative D2 moves when filled

Absolute $H$1 anchors the rate

Relative: A relative input reference follows the row when copied; an unanchored rate reference can drift into blank cells.

Absolute: Dollar markers lock column and row. Inspect the filled formula rather than checking only the first result.

Named range: Tax_Rate gives the rate a business meaning but still needs an accurately defined source range.

Verification: For net 120 at 9% the total 130.8; for net 240 the total 261.6. Both use the same 0.09 rate.

Detailed practice:1. Open the supplied Clean enquiry sheet. 2. Create a Formula Checks tab. 3. Enter each displayed expression and verify the listed result. 4. For absolute/named references add H1=0.09 and define Tax_Rate through Data then Named ranges. 5. For lookup import products-lookup.csv as Products. 6. For slicers use Data then Add a slicer and select the source; inspect chart/pivot and a separate SUMformula. 7. Save the expression, result and independentraw-rowcheck in your evidence log.

Primary source: [Relative absolute and named references](https://support.google.com/docs/answer/63175?hl=en)

### Rounding and conditional averages

Activity 9; slide 254. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

Clean!D2: D13 contains 12 amounts

=ROUND(2820/12,2) ->235.00

=AVERAGE(Clean!D2:D13) ->235

=AVERAGEIF(Clean!C2:C13,"Won",Clean!D2:D13)

Won amounts:360,180,420

Won average:960/3=320

display 2 decimals is not data rounding

round at defined business stage

Conditional mean: AVERAGEIF uses the qualifying stage cohort and corresponding amount range; all-enquiry mean 235 differs from Won mean 320.

Rounding: ROUND changes the computed value at a specified precision. Formatting only controls how the number is displayed.

Precision policy: Specify when to round: per line or after aggregation. Different rounding sequences can produce different financial totals.

Acceptance: Recompute sum/count for the Won cohort; verify source types and aligned ranges before trusting the mean.

Detailed practice:1. Open the supplied Clean enquiry sheet. 2. Create a Formula Checks tab. 3. Enter each displayed expression and verify the listed result. 4. For absolute/named references add H1=0.09 and define Tax_Rate through Data then Named ranges. 5. For lookup import products-lookup.csv as Products. 6. For slicers use Data then Add a slicer and select the source; inspect chart/pivot and a separate SUMformula. 7. Save the expression, result and independentraw-rowcheck in your evidence log.

Primary source: [Rounding and conditional averages](https://support.google.com/docs/answer/3256529?hl=en)

### Extremes ranking and ties

Activity 9; slide 255. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

Validated amounts:120,240,360,180,90,150,300,420,60,200,500,200

=LARGE(Clean!D2:D13,2) ->420

=SMALL(Clean!D2:D13,2) ->90

=RANK(420,Clean!D2:D13,0) ->2

maximum 500; minimum 60

values 200 and 200 form a tie

top n is not the same as unique top values

rank ties need explicit business rule

Nth value: LARGE returns the nth largest value; SMALL returns the nth smallest. Repeated values participate in the order.

Rank order: RANK with 0 ranks descending; verify the chosen order and population before interpreting a league table.

Ties: Equal values can share a rank. State the tie-handling rule rather than implying a unique winner.

Verification: Sorted values independently show 500 then 420; smallest 60 then 90. These cross-check formula outputs.

Detailed practice:1. Open the supplied Clean enquiry sheet. 2. Create a Formula Checks tab. 3. Enter each displayed expression and verify the listed result. 4. For absolute/named references add H1=0.09 and define Tax_Rate through Data then Named ranges. 5. For lookup import products-lookup.csv as Products. 6. For slicers use Data then Add a slicer and select the source; inspect chart/pivot and a separate SUMformula. 7. Save the expression, result and independentraw-rowcheck in your evidence log.

Primary source: [Extremes ranking and ties](https://support.google.com/docs/answer/3094008?hl=en)

### Conditional minimum maximum and no matches

Activity 9; slide 256. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

Won cohort:360,180,420

=MINIFS(Clean!D2:D13,Clean!C2:C13,"Won") ->180

=MAXIFS(Clean!D2:D13,Clean!C2:C13,"Won") ->420

criteria range and value range must match size

test cohort Absent has 0 matches

MINIFS withno match returns 0

precheck COUNTIF forNo data

zero must not be mistaken forreal minimum

Conditional extrema: The minimum and maximum apply only to the matching Won cohort, not to all enquiry amounts.

Range contract: All value and criterion ranges need equal dimensions; misalignment is a contract defect.

No matches: MINIFS returns 0 when no criterion matches; check count before presenting 0 as a real business minimum.

Acceptance: Won minimum 180 and maximum 420 agree with three raw Won rows; an absentcohort displaysNo data.

Detailed practice:1. Open the supplied Clean enquiry sheet. 2. Create a Formula Checks tab. 3. Enter each displayed expression and verify the listed result. 4. For absolute/named references add H1=0.09 and define Tax_Rate through Data then Named ranges. 5. For lookup import products-lookup.csv as Products. 6. For slicers use Data then Add a slicer and select the source; inspect chart/pivot and a separate SUMformula. 7. Save the expression, result and independentraw-rowcheck in your evidence log.

Primary source: [Conditional minimum maximum and no matches](https://support.google.com/docs/answer/7014063?hl=en)

### Exact match lookup and source identity

Activity 9; slide 257. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

Products!A2: C4: ID, name, price

P101, Desk lamp,49

P102, Storage box,29

P103, Wall shelf,79

=VLOOKUP("P102",Products!$A$2:$C$4,3,FALSE) ->29

first column must contain search key

FALSE requests exact match

missing P999 ->#N/A; review source

Lookup contract: The search key must be in the first column of the range; column index 3 returns price from this three-column range.

Exact match: FALSE requests exact matching. Omitting this argument defaults to approximate mode and can yield an inappropriate result.

Stable range: Anchor the lookup range before filling rows so each enquiry searches the same approved product source.

Failure check: A missing ID should produce a visible missing-keyfinding or deliberate IFNA message, not a guessed product price.

Detailed practice:1. Open the supplied Clean enquiry sheet. 2. Create a Formula Checks tab. 3. Enter each displayed expression and verify the listed result. 4. For absolute/named references add H1=0.09 and define Tax_Rate through Data then Named ranges. 5. For lookup import products-lookup.csv as Products. 6. For slicers use Data then Add a slicer and select the source; inspect chart/pivot and a separate SUMformula. 7. Save the expression, result and independentraw-rowcheck in your evidence log.

Primary source: [Exact match lookup and source identity](https://support.google.com/docs/answer/3093318?hl=en)

### Slicers filters and formula visibility

Activity 10; slide 258. This extension preserves approved legacy coverage without adding assessment questions or mandatory activity folders.

SOURCE: Clean enquirytable

basicfilter: shared table view

filterview: saved independent view

slicer: controls matching charts/pivots

formula SUM overrange: own computation

slicer does not inherently rewrite formulas

verifychartsource andselected stage

unfiltered counts 4,3,3,2

Different surfaces: Basic filters, filter views and slicers change different presentation/analysis surfaces; choose based on collaboration need.

Slicer boundary: A slicer can filter charts/pivot tables sharing the intended dataset. Do not assume a normal SUM formula changes with the slicer.

Source contract: Charts and pivots must point to the expected data range and measure. Verify the filtered output with raw matching rows.

Practice bridge: Use the same 12 validated enquiries in Activity 10’s supplementary check; save filter selection and observed outputs.

Detailed practice:1. Open the supplied Clean enquiry sheet. 2. Create a Formula Checks tab. 3. Enter each displayed expression and verify the listed result. 4. For absolute/named references add H1=0.09 and define Tax_Rate through Data then Named ranges. 5. For lookup import products-lookup.csv as Products. 6. For slicers use Data then Add a slicer and select the source; inspect chart/pivot and a separate SUMformula. 7. Save the expression, result and independentraw-rowcheck in your evidence log.

Primary source: [Slicers filters and formula visibility](https://support.google.com/docs/answer/9245556?hl=en)

## Quick reference

| Expression or control | Purpose |
| --- | --- |
| General access / People with access | Check all audience paths separately |
| Heading 1 / Heading 2 | Encode document structure |
| COUNTIF / SUMIF | Count stages and aggregate matching numeric values |
| SUMPRODUCT | Apply declared decision weights |
| Published responder link | Share the Form responder surface |
| Sites published URL | Test actual intended visitor view |
| onEdit(e) | Guarded user-edit timestamp in bound sheet |

## Assessment and support

The live original instruments specify 9WA short-answer questions,60 minutes, and 3PP tasks,90 minutes. The course totals 16 hours:13.5 hours training and 2.5 hours assessment. The original live instruments and authenticated TMS record govern these timings; the public page’s 2-hour summary differs.

1. TRAQOM and required class digital attendance.

2. Assessment digital attendance.

3. Written Assessment then Practical Performance.

4. Upload completed answers to the LMS.

5. Sign the Assessment Summary Record.

[Open LMS courseware and assessment portal](https://lms-tms.tertiaryinfotech.com/)

Support: enquiry@tertiaryinfotech.com ·+65 6100 0613 ·www.tertiarycourses.com.sg. Funding eligibility and current terms follow the official enrolment information. Use mock data and keep private account evidence outside public activity repositories.
