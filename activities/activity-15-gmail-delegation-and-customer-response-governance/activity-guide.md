# Activity 15: Gmail delegation and customer response governance

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K1 K7 A1 A7

## Scenario

Customer-support staff need access to a shared support mailbox. Sharing the password creates an identity and accountability problem; compare delegation with forwarding or alias use.

## Goal and prerequisites

Access design distinguishes mailbox account from alias, documents delegate scope and revocation, and produces a fact-checked customer response without shared credentials.

Tools: Gmail; delegation demonstration. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [access-request.md](access-request.md)
- [mailbox-options.csv](mailbox-options.csv)
- [reply-template.md](reply-template.md)
- [scenario.json](scenario.json)

## Detailed procedure

1. Open mailbox-options.csv and classify each address as account or alias.
2. Draft a delegation request for the real support mailbox architecture using access-request.md. Use example addresses only.
3. As authorised mailbox owner in a classroom demonstration, inspect Gmail Settings then Accounts and Import then Grant access to your account if available.
4. Do not add a live delegate without trainer-managed classroom authorisation; if unavailable, record the restriction and complete the design evidence.
5. Create a customer response draft using reply-template.md and replace product and delivery placeholders from the approved facts.
6. Check that the draft reveals no internal margin or unrelated customer details.
7. Complete a revocation/offboarding checklist naming who removes delegation and when.
8. Save the response draft and access decision showing why password sharing and alias-as-mailbox are rejected.

## Acceptance checks

Access design distinguishes mailbox account from alias, documents delegate scope and revocation, and produces a fact-checked customer response without shared credentials.

| Evidence | Artifact | Expected result |
|---|---|---|
| ARCH | Mailbox | Account versus alias identified |
| SCOPE | Delegate | Read/send/delete documented |
| REPLY | Template | Correct terms and current links |
| EXIT | Procedure | Delegation-removal owner named |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Alias absent from delegated accounts | Alias has no separate mailbox account | Use correct mailbox architecture |
| Staff uses owner password | Shared credential bypasses accountability | Replace with authorised named access |
| Delegate retains access after exit | Delegation not revoked | Remove delegation and review grants |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
