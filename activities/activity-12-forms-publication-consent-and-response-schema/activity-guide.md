# Activity 12: Forms publication consent and response schema

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K2 K3 K4 A3

## Scenario

Harbour Home Supplies needs a customer enquiry form. Its responder audience, email collection and response visibility are independent choices with privacy consequences.

## Goal and prerequisites

Published responder link works; consent is required; private results summary is off; response sheet stays restricted and synthetic response is correctly captured.

Tools: Forms, Sheets. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [enquiry-form-spec.md](enquiry-form-spec.md)
- [scenario.json](scenario.json)
- [test-response.csv](test-response.csv)

## Detailed procedure

1. Create a blank Form from enquiry-form-spec.md and give it the title HHS Product Enquiry Training.
2. Add product dropdown, contact-name, email and required consent questions using the supplied mock question text.
3. Choose email collection deliberately. For this scenario use responder input and describe its purpose in the form introduction.
4. In Settings review Limit to 1 response and the sign-in consequence. Leave it off for the visitor scenario unless your trainer sets a restricted classroom audience.
5. Turn off View results summary and explain the privacy reason in your evidence log.
6. Link responses to a new Google Sheet and keep the response spreadsheet Restricted to authorised staff/test owner.
7. Publish the form to the authorised training responder audience and copy the responder link, not the editor link.
8. Open as a test responder, submit the provided synthetic record, inspect its row in the response sheet and verify that other responses are not exposed.

## Acceptance checks

Published responder link works; consent is required; private results summary is off; response sheet stays restricted and synthetic response is correctly captured.

| Evidence | Artifact | Expected result |
|---|---|---|
| PUB | Responder URL | Published training form opens |
| CONSENT | Test response | Required contact permission |
| SUMMARY | Responder view | No private response summary |
| SHEET | Response spreadsheet | Staff-only Restricted |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Responder sees unpublished form | Form draft not published | Publish to authorised training responders |
| Private answers visible | Results summary enabled | Disable summary and retest responder view |
| External visitor blocked | Audience or sign-in restriction | Align responder controls to intended audience |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
