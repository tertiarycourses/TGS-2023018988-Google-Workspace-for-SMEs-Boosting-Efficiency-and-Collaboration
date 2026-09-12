# Activity 25: Apps Script and API integration contract

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 30 minutes · **Mapping:** K5 K9 A2 A6

## Scenario

The SME wants update timestamps on a content register and considers automated email. A safe bound-sheet example exposes the simple-trigger boundary before evaluating authorised integration.

## Goal and prerequisites

User edit C2 creates E2 timestamp; header/unrelated edits are ignored; report correctly states simple-trigger auth/runtime and programmatic-edit boundaries.

Tools: Sheets, Apps Script; optional developer extension. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [automation-register.csv](automation-register.csv)
- [request-schema.json](request-schema.json)
- [scenario.json](scenario.json)
- [timestamp.gs](timestamp.gs)
- [trigger-boundary.md](trigger-boundary.md)

## Detailed procedure

1. Create a Google Sheet named HHS Content Register with a tab named exactly Content Register and headers asset_id, title, status, owner, updated_at.
2. Enter three mock rows from automation-register.csv in rows 2–4.
3. Open Extensions then Apps Script and replace the editor contents with the supplied timestamp.gs code.
4. Save the script. Do not create any installable trigger or grant mail access for this core activity.
5. Return to Sheets and manually edit the status cell C2. Confirm a timestamp appears in E2.
6. Edit a header or column B and confirm the guarded script does not update an unrelated timestamp.
7. Read trigger-boundary.md and explain why manually running onEdit or a programmatic setValue is not the same as a user edit.
8. Save the script source and a test log. For the optional API design inspect request-schema.json and document OAuth/API requirements without creating credentials or calling production APIs.

## Acceptance checks

User edit C2 creates E2 timestamp; header/unrelated edits are ignored; report correctly states simple-trigger auth/runtime and programmatic-edit boundaries.

| Evidence | Artifact | Expected result |
|---|---|---|
| EDIT | Row 2 column C | Timestamp appears in E2 |
| HEADER | Row 1 | No timestamp change |
| OTHER | Different column | No timestamp change |
| SCRIPT | Programmatic setValue | No implicit onEdit event |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Manual Run changes nothing | No edit event object | Edit the training sheet column C |
| Bulk paste not stamped | Guard excludes multi-cell edits | Use single-cell task or design bulk handling |
| Script edit not stamped | Programmatic edit does not fire onEdit | Write timestamp explicitly in that automation |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
