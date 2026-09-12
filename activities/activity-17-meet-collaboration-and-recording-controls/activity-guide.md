# Activity 17: Meet collaboration and recording controls

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K3 K7 A3

## Scenario

A product-review meeting needs decisions and action owners. Recording and transcripts are not assumed available or appropriate for every account or meeting.

## Goal and prerequisites

Approved tab only is shared, written decision and two owned actions persist, and recording limitations/privacy controls are accurately documented.

Tools: Meet, Calendar, Drive. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [decision-record.md](decision-record.md)
- [meeting-agenda.csv](meeting-agenda.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Create a training Calendar event for a short paired product-review meeting.
2. Attach or link only the approved mock brochure and decision-record.md template.
3. Join Meet with your partner and inspect host controls available to your account.
4. Share the single approved product-document tab; verify with your partner what is visible.
5. Discuss the three mock agenda items and record one decision and at least two actions with owners and due dates.
6. Do not record the exercise. Inspect recording availability only in a trainer demonstration and note account/admin limitations.
7. Save the written decision record in the Restricted project folder and share it only with the intended named participants.
8. End the meeting and verify action owners can open the decision record.

## Acceptance checks

Approved tab only is shared, written decision and two owned actions persist, and recording limitations/privacy controls are accurately documented.

| Evidence | Artifact | Expected result |
|---|---|---|
| INVITE | Participants | Intended training audience |
| SHARE | Visible content | Approved product tab |
| DECISION | Brochure | Approval and rationale recorded |
| ACTION | Marketing lead | Due 2026-09-16; Open |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Recording control absent | Edition/admin/role limitation | Use written record; note limitation |
| Customer sees internal window | Wrong share surface | Stop share; select approved tab |
| Action has no owner | Discussion not translated to work item | Assign owner and due date |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
