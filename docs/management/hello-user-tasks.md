# Project Tasks: Hello User Feature

**Role:** `@project-manager`
**Epic:** End-to-End Workflow Test
**Goal:** Implement the Hello User API and UI to verify the full development loop, including branching rules and folder structures.

## Task Breakdown

### Task 0: [TechLead] Architecture Design
- **Assignee:** `@techlead`
- **Definition of Done (DoD):**
  - Define exact API contract (Request/Response schema).
  - Document folder structure expectations for this feature.
  - Create ADR document in `/docs/architecture/`.

### Task 1: [Backend] Implement API `POST /api/hello`
- **Assignee:** `@backend-developer`
- **Dependencies:** Task 0
- **Definition of Done (DoD):**
  - Branch created: `feature/hello-user-backend`
  - Code resides in the `/server` folder.
  - Centralized routing configured.
  - validation implemented for the `name` field.
  - Endpoint returns standard JSON response.
  - Code reviewed and merged.

### Task 2: [Frontend] Implement UI & API Integration
- **Assignee:** `@frontend-developer`
- **Dependencies:** Task 1 (API must be ready to integrate)
- **Definition of Done (DoD):**
  - Branch created: `feature/hello-user-frontend`
  - Code resides in the `/client` folder.
  - Component renders input and "Gửi" button.
  - API call made to `/api/hello`.
  - Result displayed on screen.
  - Code reviewed and merged.

### Task 3: [QA] Feature Verification
- **Assignee:** `@tester`
- **Dependencies:** Task 1 & Task 2
- **Definition of Done (DoD):**
  - Test Happy Path (valid name).
  - Test Negative Path (empty name, server error handling).
  - Document results in `/docs/qa/`.

## Timeline & Risks
- **Estimate:** 0.5 days.
- **Risks:** Setup issues with new `/client` and `/server` folder structues. Mitigation: Ensure package managers and start scripts define paths correctly.
