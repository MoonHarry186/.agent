# Architecture Decision Record: Hello User

**Role:** `@techlead`
**Date:** 2026-03-17
**Status:** Pending Review

## 1. Context
We need to implement a "Hello User" health-check feature to verify end-to-end communication while adhering strictly to the new Developer rules (separate `server/` and `client/` directories, centralized backend routing, and explicit branching).

## 2. API Contract (Backend)

We will expose a single REST API endpoint.

**Endpoint:** `POST /api/hello`
**Content-Type:** `application/json`

### Request Schema (Input Validation)
The backend must validate this structure (e.g., using `Zod` or `Joi`).
```json
{
  "name": "string (required, min length 1)"
}
```

### Response Schema (Success)
**Status:** `200 OK`
```json
{
  "success": true,
  "message": "Xin chào thân ái, [Tên]!",
  "data": null
}
```

### Response Schema (Error - Validation Failed)
**Status:** `400 Bad Request`
```json
{
  "success": false,
  "message": "Validation Error: Name is required."
}
```

## 3. Structural Enforcement

### Backend (Node.js/Express)
1. **Branching:** Developers MUST checkout to branch `feature/hello-user-backend`.
2. **Directory:** Code MUST reside in `worksflow/server/`.
3. **Central Routing:** All routes must aggregate through a central route file (e.g., `server/src/routes/index.ts`).
4. **Structure:** Follow feature-based modules (Controller, Service, Routes).

### Frontend (React/Next.js/Vite)
1. **Branching:** Developers MUST checkout to branch `feature/hello-user-frontend`.
2. **Directory:** Code MUST reside in `worksflow/client/`.
3. **Structure:** Use functional components. Perform validation before sending the request to `/api/hello`.

## 4. Risks & Mitigations
- **Network Errors (Frontend):** Implement `try/catch` and gracefully display network errors without breaking UI.
- **CORS Issues:** Ensure backend includes the `cors` middleware explicitly.
