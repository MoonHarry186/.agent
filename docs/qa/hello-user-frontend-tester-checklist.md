# Tester Checklist: Hello User Frontend

**Task:** Task 2: [Frontend] Implement UI & API Integration
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** ✅ Đạt (PASSED)

## AC Checklist
- [x] The UI renders an input field for the user's name and a Submit button labeled "Gửi".
- [x] The frontend prevents submitting an empty name (Submit button disabled when empty/loading).
- [x] The React app correctly fires an Axios request to POST `/api/hello` using payload schema `{ "name": "string" }`.
- [x] The frontend correctly displays the standard `success: true` / `"Xin chào thân ái, [Tên]!"` text when HTTP 200 occurs.
- [x] If an error occurs (e.g., API is offline or validation fails), the UI displays a graceful red error message box without breaking the website.

## Test Environment
- **Framework:** React / Vite.
- **Rendering:** Localhost port 5173.

## Conclusion
The frontend UI code meets all feature Acceptance Criteria. It completes the E2E contract. Sent forward for **Human Review**.
