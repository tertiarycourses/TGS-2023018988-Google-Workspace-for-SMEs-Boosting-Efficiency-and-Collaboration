# Activity 20: Sites publishing embed access and maintenance

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 30 minutes · **Mapping:** K3 K4 A3

## Scenario

The editor sees a brochure and form correctly, but a customer gets permission errors. Validate site publication, responder access and embedded file sharing as separate controls.

## Goal and prerequisites

Exact published site, brochure and form work for intended viewer; response sheet denies unauthorised access and maintenance checklist has resolved findings.

Tools: Sites, Drive, Forms. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [maintenance-checklist.csv](maintenance-checklist.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Open the training Sites draft from Activity 19 and review the local maintenance-checklist.csv.
2. Check approved product/delivery facts and resolve any usability finding before publication.
3. Inspect sharing on the embedded brochure and grant only the authorised training viewer audience.
4. Inspect the Form publication and responder settings; use the correct published responder link.
5. Keep the linked response spreadsheet Restricted to the owner or approved staff; do not share it to site visitors.
6. Publish the Site to the authorised training audience and copy its published visitor URL.
7. Open that exact URL with your partner’s visitor account and test navigation, brochure access and one synthetic form submission.
8. Complete every maintenance-checklist row with observation and evidence, fix failures and repeat the visitor test before saving release records.

## Acceptance checks

Exact published site, brochure and form work for intended viewer; response sheet denies unauthorised access and maintenance checklist has resolved findings.

| Evidence | Artifact | Expected result |
|---|---|---|
| SITE | Published URL | Current facts visible |
| FILE | Embed | Viewer opens brochure |
| FORM | Responder | Synthetic submission succeeds |
| PRIVATE | Response sheet | Uninvited visitor denied |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Site opens; brochure denied | Drive embed ACL excludes visitor | Share approved file with intended audience |
| Form not accepting visitor | Form unpublished or responder restricted | Publish/align responder audience |
| Response data exposed | Response sheet broadened with site | Restrict response store separately |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
