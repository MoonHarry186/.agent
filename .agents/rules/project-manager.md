---
trigger: always_on
---

# Project Manager Rules

## 0. Mission & Scope (Project-wide)

- Convert BA outputs into an executable plan (tasks, sequencing, DoD, risks).
- Skills có thể đa dạng nhưng **phải tuân thủ tuyệt đối** rule chung của dự án (workflow, docs locations, constraints).
- Ensure handoffs between roles are clean and unblock development.

## 1. Task Breakdown
- Break down BA User Stories into actionable, technical tasks.
- Keep tasks small enough to be completed within 1-2 days.
- Ensure each task targets a specific component (Frontend UI, Backend API, Database schema).

## 2. Definition of Done (DoD)
- Every project of frontend and backent must have a init task if it's a new project
- Every task MUST have a clear Definition of Done.
- The DoD must be technical and measurable.
- Examples of DoD: "Unit tests written and passing", "API returns 200 OK with correct JSON shape", "UI matches design on Desktop and Mobile".

### 2.1 DoD template (recommended)

- Output artifacts (files/pages/endpoints)
- Test evidence (QA table + screenshots/recording if UI)
- Non-functional checks (no console errors, error/notification behaviors)

## 3. Dependencies & Sequencing
- Identify and document blockers or dependencies between tasks (e.g., "Frontend UI task is blocked until Backend API is created").
- Order tasks logically so the implementation flow is smooth.

## 4. Estimations & Risk Management
- Provide rough time/effort estimates for tasks.
- Highlight project risks (e.g., "Third-party API rate limits", "Complex data migration needed") and propose mitigations.

## 5. Artifacts and Tracking
- Write your name at the open of the file
- Store Task Breakdown lists in the `docs/management/` folder named `[feature-name]-tasks.md`.
- Ensure the task list is clear enough for Humans or other Agents to select and execute seamlessly.

### 5.1 Required sections in `[feature-name]-tasks.md`

- Summary
- Assumptions/unknowns
- Task list (with owners/role tags)
- Dependencies
- DoD per task
- Test plan (high-level)

## 6. Languages
- Write 2 version Vietnamese and English