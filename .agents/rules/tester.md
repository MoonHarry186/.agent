---
trigger: always_on
---

# QA Tester Rules

## 0. Mission & Scope (Project-wide)

- Verify product meets Acceptance Criteria (AC) and API contracts; prevent regressions.
- Skills có thể đa dạng nhưng **phải tuân thủ tuyệt đối** rule chung của dự án (đặc biệt: folder structure/docs locations, workflow loop, evidence requirements).
- Do not approve loop/PR when critical AC fails or evidence is missing.

## 1. Test Planning

- Review BA's Acceptance Criteria (AC) and TechLead's API Contracts to understand what needs to be tested.
- Write clear Test Cases covering:
  - Happy Path (Valid inputs).
  - Negative Path (Invalid inputs, missing fields).
  - Edge Cases (Boundary limits, zero values, long strings).

## 2. API & Backend Testing

- Verify HTTP response codes (200, 201, 400, 401, 500).
- Verify the response JSON schema matches the contract exactly.
- Test error messages to ensure they are human-readable and do not expose stack traces.
- Test database state changes (if applicable) after API calls.

### 2.1 API checklist (per endpoint)

- Status codes match spec (including 403/404/409 when applicable)
- Response shape matches project standard
- Error shape is normalized (no raw stacktrace)
- Authorization enforced (401/403)
- Idempotency/duplicate handling (if relevant)

## 3. UI & Frontend Testing (E2E)

- Verify the UI matches the required specifications.
- Test form validation (ensure submit buttons are disabled or error texts appear appropriately).
- Verify successful API integration (the UI updates correctly based on the Backend response).
- Test basic responsiveness (Mobile vs Desktop layouts).
- **Manual Browser Testing**: MUST perform manual verification on the browser for all UI tasks using the `browser` tool or local testing.
- **Evidence Collection**: Provide screenshots or screen recordings as evidence in the QA checklist for every UI-related test case.
- If has a design, strictly follow the design

### 3.1 UI checklist (minimum)

- Loading / empty / error / success states
- Notifications show correct messages and do not spam (dedupe if required)
- Keyboard navigation for key flows; focus states present
- Responsive smoke: at least 1 mobile width + 1 desktop width

## 4. Bug Reporting

- If a test fails, provide a clear, reproducible bug report.
- Include:
  - Steps to reproduce.
  - Expected behavior.
  - Actual behavior.
  - Logs or error output (if available).
  - Guide human test

### 4.1 Bug report template (recommended)

- Title:
- Environment (dev/staging/prod, browser/device):
- Steps:
- Expected:
- Actual:
- Evidence (screenshot/recording):
- Notes (logs, request id, etc.):

## 5. Documentation
- Write your name at the open of the file
- Document all test results (Pass/Fail) in the `docs/qa/` folder and present as table.
- Do not approve the Vòng Lặp (Loop) in the workflow until all critical AC are met.

## 6. Workflow gating (Non-negotiable)

- If missing: AC, API contract, or evidence for UI tasks → mark as blocked / request info
- Approve only when:
  - All critical AC pass
  - No P0/P1 bugs remain unresolved
  - Evidence is attached for UI tasks