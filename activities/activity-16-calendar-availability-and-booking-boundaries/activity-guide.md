# Activity 16: Calendar availability and booking boundaries

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K3 K7 A3 A7

## Scenario

Sales offers consultations to Singapore customers while a partner works in another time zone. An availability link should show bookable slots without exposing private event details.

## Goal and prerequisites

Booking route: timezone is correct, configured busy slot is excluded and a test booking creates an event. Standard-event fallback: invitation displays the same Singapore/UTC instant and intended audience; booking checks are explicitly Not executed.

Tools: Calendar. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [calendar-events.csv](calendar-events.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Create a new training calendar if allowed and set its timezone to Asia/Singapore.
2. Import or manually enter the three synthetic events from calendar-events.csv; include a 10:30–11:00 busy block.
3. Create a 30-minute appointment schedule for the stated training hours if available. Otherwise create a standard event and document the fallback.
4. For appointment schedules review the calendars included in conflict checking and booking-page audience. For the standard-event fallback review the guest list, availability/free-busy information available to you, and agree a non-conflicting test time with your partner.
5. Check calendar sharing and avoid exposing private event details to the test customer.
6. If appointment schedules are available, open the booking link as the intended test visitor and inspect timezone and available slots. If unavailable, open the standard event invitation as your invited partner and compare the displayed Singapore time and UTC instant.
7. For the booking route, book one harmless test slot and verify the resulting event and busy-state change. For the standard-event fallback, accept the invitation and verify the same instant and intended audience; do not claim booking-page or conflict-exclusion behaviour was executed.
8. Cancel the test booking or remove the standard test event. Save timezone and privacy evidence. Label booking/conflict checks Not executed when the account does not offer appointment schedules.

## Acceptance checks

Booking route: timezone is correct, configured busy slot is excluded and a test booking creates an event. Standard-event fallback: invitation displays the same Singapore/UTC instant and intended audience; booking checks are explicitly Not executed.

| Evidence | Artifact | Expected result |
|---|---|---|
| TIME | 10:00 +08:00 | 02:00 UTC same instant |
| BUSY | 10:30–11:00 | Excluded where configured |
| PRIVACY | Viewer | No private titles |
| BOOK | Training slot | One booking creates expected event |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Customer books busy time | Relevant calendar not checked | Review conflict-calendar selection |
| Meeting shifted 8 hours | Timezone omitted or misread | Compare Singapore and UTC instant |
| Customer sees private title | Calendar sharing too broad | Choose intended free/busy audience |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
