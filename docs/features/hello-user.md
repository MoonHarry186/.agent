# Feature Specification: Hello User

**Role:** `@business-analyst`
**Context:** A simple health-check feature to verify frontend-backend communication. The user inputs their name and receives a personalized greeting.

## User Stories
1. **As a user**, I want to enter my name into a text input and click "Gửi" so that the system knows who I am.
2. **As a user**, I want to see the message "Xin chào thân ái, [Tên]!" returned from the server and displayed on my screen after submitting, so that I know the system responded successfully.

## Acceptance Criteria (AC)
- [ ] The UI renders an input field for the user's name and a Submit button labeled "Gửi".
- [ ] The frontend prevents submitting an empty name (Frontend validation).
- [ ] The backend provides a `POST /api/hello` endpoint.
- [ ] The endpoint accepts a JSON payload: `{ "name": "string" }` and validates it.
- [ ] On success, the backend returns a `200 OK` status with the standard response format containing: `"Xin chào thân ái, [Tên]!"`.
- [ ] The frontend correctly displays the returned message on the screen directly below the form.
- [ ] If an error occurs (e.g., network failure), the UI displays a graceful error message without a broken white screen.

## Domain Model
- **Request (POST):** `{ name: string }`
- **Response (Success):** Standard format with `data` or `message` containing the string.
- No database persistence is required for this specific feature.
