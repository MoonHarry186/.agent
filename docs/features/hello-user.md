# Feature Specification: Hello User

**Context:**
A simple feature to verify full-stack communication. The system allows users to submit their name and receive a personalized greeting from the server.

## User Stories
1. **As a user**, I want to enter my name into a text field and click a "Gửi" (Submit) button so that the system can acknowledge my input.
2. **As a user**, I want to see the message "Xin chào thân ái, [Tên]!" returned from the server and displayed on my screen after submitting.

## Acceptance Criteria (AC)
- [ ] The UI renders an input field for the name and a Submit button labeled "Gửi".
- [ ] Submitting an empty name is prevented (frontend validation).
- [ ] The backend exposes a `POST /api/hello` endpoint accepting a JSON payload: `{ "name": "string" }`.
- [ ] The backend responds with a 200 OK status containing `{ "success": true, "message": "Xin chào thân ái, [Tên]!" }`.
- [ ] The frontend displays the returned message clearly on the screen.

## Domain Model
- **Request (POST):** `{ name: string }`
- **Response (Success):** `{ success: boolean, message: string }`
- **Response (Error):** `{ success: boolean, message: string }`
