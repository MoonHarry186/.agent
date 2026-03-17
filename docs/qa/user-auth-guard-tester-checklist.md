# Tester Checklist: Protected Routes & Auth Guard

**Task:** Task 4: [Frontend] Triển khai Protected Routes & Auth Guard
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** ✅ Đạt (PASSED)

## Test Cases

| ID | Test Case | Action | Expected Result | Status | Số lần fix |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-GUA-01 | Unauthenticated Access | Access /dashboard without token | Redirect to /login | ✅ Pass | 0 |
| TC-GUA-02 | Authenticated Access | Access /dashboard with token | Page renders correctly | ✅ Pass | 0 |
| TC-GUA-03 | Authenticated Login Access | Access /login with token | Redirect to /dashboard | ✅ Pass | 0 |
| TC-GUA-04 | Logout Flow | Click Logout on Dashboard | Token cleared, Redirect to /login | ✅ Pass | 0 |

## Evidence
- Verified by manually clearing `localStorage` and observing redirection behavior.
- Verified that logged-in users cannot manually navigate back to `/login`.

## Conclusion
The Auth Guard system is robust and correctly secures the application routes.
Ready for **Human Review**.
