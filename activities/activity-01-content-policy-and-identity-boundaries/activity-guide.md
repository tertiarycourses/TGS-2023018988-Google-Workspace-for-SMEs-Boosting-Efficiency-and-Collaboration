# Activity 1: Content policy and identity boundaries

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K1 K5 A1

## Scenario

Harbour Home Supplies is a fictional Singapore SME with Sales, Operations and Finance teams. Its migration contains supplier invoices, customer enquiries and public product sheets. An external agency needs only approved marketing assets.

## Goal and prerequisites

Completed policy covers classification, ownership, posting, review and exceptions; access evidence names the tested account and role.

Tools: Drive, Docs; administrator demonstration. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [classification-register.csv](classification-register.csv)
- [policy-template.md](policy-template.md)
- [scenario.json](scenario.json)

## Detailed procedure

1. Open the local policy-template.md and classification-register.csv. Identify which example assets contain confidential data.
2. In Drive create a new training folder named HHS Activity 01 followed by your initials. Keep General access Restricted.
3. Create a Google Doc named HHS Content Policy v 1 and paste the policy template. Complete owner, classification, access, publication, retention and exception sections.
4. For each register row assign an accountable owner, permitted audience, update frequency and review date. Use Finance-only access for invoices.
5. Share only the training policy document with your paired learner as Commenter. Do not use Anyone with the link.
6. Ask your partner to open the document with the invited account and record their role. Remove the training grant after the test.
7. Draft an administrator change request describing external-sharing boundaries and evidence needed. Do not change a production domain.
8. Export the policy as PDF into your output folder and complete the evidence checklist with the tested identity and observed outcome.

## Acceptance checks

Completed policy covers classification, ownership, posting, review and exceptions; access evidence names the tested account and role.

| Evidence | Artifact | Expected result |
|---|---|---|
| POL-001 | Policy approved | Named owner and monthly review |
| ACL-001 | Internal folder | Restricted; staff group only |
| TEST-001 | Agency account | Invoice access denied |
| EXC-001 | Agency product draft | Commenter; approval recorded |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Policy says restricted; link opens | General access is broader than the written policy | Restrict actual sharing and test another identity |
| Group includes former staff | Membership outlasted employment | Remove group membership; review direct grants |
| No administrator rights | Tenant settings inaccessible | Produce administrator request and evidence plan |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
