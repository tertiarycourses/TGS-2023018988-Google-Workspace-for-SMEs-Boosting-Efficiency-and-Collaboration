# Activity 2: Drive ownership and team structure

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K1 K3 K5 A1 A2

## Scenario

A product catalogue must remain with Harbour Home Supplies when its editor leaves. A working draft currently sits in an individual My Drive folder. Decide where the source of record should live.

## Goal and prerequisites

Folder structure and ownership register distinguish individual from organisation ownership; least-privilege role and unavailable-feature fallback are recorded.

Tools: Drive; shared drive if available. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [ownership-register.csv](ownership-register.csv)
- [product-catalogue.csv](product-catalogue.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Read ownership-register.csv and draw the current author-to-file relationship.
2. If your training account has Shared drives and permission to create one, create HHS Marketing Training. Otherwise create a Restricted My Drive folder and note the fallback.
3. Create Drafts, Approved Assets and Archive subfolders. Do not add confidential data to a broadly accessible drive.
4. Upload product-catalogue.csv into Drafts and create an accompanying catalogue Google Doc.
5. Inspect the item location and Share dialog. Record who owns the content and which role your account holds.
6. Ask an authorised trainer to demonstrate member roles where available; assign your partner only the minimum permitted role for the exercise.
7. Record the expected outcome if the editor leaves and identify the administrator or owner responsible for the handover.
8. Capture the folder structure and ownership/role evidence; remove temporary grants after verification.

## Acceptance checks

Folder structure and ownership register distinguish individual from organisation ownership; least-privilege role and unavailable-feature fallback are recorded.

| Evidence | Artifact | Expected result |
|---|---|---|
| OWN-001 | CAT-001 location | Shared drive or documented fallback |
| ROLE-001 | Editor identity | Contributor, not Manager |
| EXIT-001 | Member removed | Organisation source remains |
| VIEW-001 | Agency identity | Only approved asset available |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Shared drives not visible | Account or policy does not offer access | Use fallback; record limitation |
| Agency sees too much | Broad drive membership | Use narrow approved sharing or separate release area |
| Move changes access | Restrictions differ between containers | Compare effective audience before and after |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
