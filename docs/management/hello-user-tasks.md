# Project Tasks: Hello User Feature

**Epic:** Core System Health Check
**Goal:** Implement the Hello User API and UI to verify simple POST request end-to-end flow.

## Task Breakdown

### Task 1: [Backend] Implement /api/hello endpoint
- **Assignee:** `@backend-developer`
- **Definition of Done (DoD):**
  - Implement `POST /api/hello` route.
  - Validate input (name string required).
  - Return formatted message: `"Xin chào thân ái, [Tên]!"`.
  - Handle errors gracefully via BaseController pattern (if applicable).

### Task 2: [Frontend] Implement UI & API Call
- **Assignee:** `@frontend-developer`
- **Dependencies:** Task 1 
- **Definition of Done (DoD):**
  - Build simple UI with input and "Gửi" button.
  - Implement frontend validation for empty string.
  - Implement API call to `POST /api/hello`.
  - Display the result message or error message below the form.

## Timeline & Risks
- **Estimate:** 0.5 days.
- **Risks:** CORS errors during frontend-backend communication. Mitigation: Ensure CORS is configured properly in local dev.
