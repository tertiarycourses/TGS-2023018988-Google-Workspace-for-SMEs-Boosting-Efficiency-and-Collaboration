# Activity 3: Sharing and effective access audit

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K1 A1

## Scenario

Finance deleted an agency user from one invoice file, but the agency still opens it through a group or public link. Diagnose all access paths rather than judging the direct People list alone.

## Goal and prerequisites

Access register identifies all four grant paths; one approved allow and one uninvited deny outcome are recorded for the exact training asset.

Tools: Drive, two test identities. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [access-notes.md](access-notes.md)
- [access-register.csv](access-register.csv)
- [mock-invoice.csv](mock-invoice.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Open access-register.csv and mark direct, group, inherited and general grants for each asset.
2. Create only synthetic invoice and product files in new training folders. Use the provided mock-invoice.csv.
3. Share a harmless product file with your partner, then inspect People with access and General access separately.
4. Remove the partner direct grant and ask the partner to test the same URL. Record the actual outcome.
5. If your role offers folder Limited access, demonstrate it only on a training subfolder. If unavailable, record the role/policy limitation and use a separate Restricted folder.
6. Correct any broad training grants at their actual origin. Do not remove permissions on existing business folders.
7. Test the exact file as the approved identity and as an uninvited identity. Record allow and deny results without exposing real accounts publicly.
8. Complete the audit findings and corrective actions, then remove temporary sharing.

## Acceptance checks

Access register identifies all four grant paths; one approved allow and one uninvited deny outcome are recorded for the exact training asset.

| Evidence | Artifact | Expected result |
|---|---|---|
| ACL-BEFORE | Agency | Opens through broader grant |
| ACL-AFTER | Agency | Denied after full correction |
| FIN-ALLOW | Finance tester | Can read expected file |
| REVIEW | Owner | Signs effective-access register |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Removed user still opens | Group / inherited / general grant remains | Inspect and correct each authorised path |
| Folder limited; public file opens | File has another general/direct grant | Review both General access and People |
| Cannot modify inherited grant | Permission originates at parent | Owner/manager changes origin; record blocker |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
