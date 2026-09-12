# Activity 24: Add-on selection scopes and administrator controls

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K9 A6

## Scenario

An add-on promises PDF merge and customer follow-up, but requests broad file and mail access. Recommend a suitable extension only after fit, permissions, data handling and exit checks.

## Goal and prerequisites

One current add-on is evaluated with actual dated listing/access evidence, fit and data handling, administrator approval route, pilot checks and revocation/exit plan.

Tools: Marketplace, Sheets; administrator review. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [addon-candidates.csv](addon-candidates.csv)
- [addon-review.md](addon-review.md)
- [scenario.json](scenario.json)

## Detailed procedure

1. Open addon-candidates.csv; supplied names are fictional option profiles, not endorsed live products.
2. Search current Workspace Marketplace for one PDF/content utility relevant to the requirement, without installing it.
3. Record listing URL, publisher, research date, features and the actual requested-access wording in addon-review.md.
4. Read publisher privacy/retention/deletion evidence and mark unsupported details Unknown.
5. Compare functional fit, permissions, administrator policy, cost and exit against the supplied requirement.
6. Create an approval request for a limited synthetic-file pilot; do not bypass an administrator block or grant unnecessary scopes.
7. Define expected pilot output, failure checks and a rollback plan including revocation and uninstall review.
8. Save the recommendation with reasons to adopt, reject or defer and the remaining evidence gaps.

## Acceptance checks

One current add-on is evaluated with actual dated listing/access evidence, fit and data handling, administrator approval route, pilot checks and revocation/exit plan.

| Evidence | Artifact | Expected result |
|---|---|---|
| FIT | Candidate A | PDF requirement matched |
| SCOPE | Consent | Actual declared access recorded |
| PILOT | Mock PDFs | Correct readable merged output |
| EXIT | Connection/install | Revocation and uninstall procedure |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Install blocked | Administrator allowlist/policy | Submit review request; do not bypass |
| Broad mail scope for PDF task | Permission exceeds requirement | Choose lower-access option or reject |
| Uninstall assumed revoke | OAuth connection may still require review | Revoke access and confirm installed state |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
