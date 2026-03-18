---
trigger: always_on
---

## Project Rules (Global)

Tài liệu này là **source of truth** cho quy tắc toàn dự án. Mọi agent/nhân sự phải tuân thủ. Nếu có xung đột, ưu tiên theo thứ tự:

1. `project-rules.md` (file này)
2. `project-context.md`
3. rules theo vai trò (vd: `frontend-developer.md`, `tester.md`, `techlead.md`)
4. skills (vd: `skills/*/SKILL.md`)

---

## 1) Scope & Non-goals

- **Project name**: _(fill)_
- **Goal**: _(fill)_
- **In scope**: _(fill)_
- **Out of scope / Non-goals**: _(fill)_

---

## 2) Tech Stack (Pinned)

> Cập nhật các phiên bản/thư viện thực tế. Không tự ý đổi stack hoặc thêm dependency khi chưa được yêu cầu.

### Frontend

- **Framework**: _(fill)_
- **Language**: **JavaScript only** (no TypeScript)
- **Router**: _(fill)_
- **State**: _(fill)_
- **Styling/UI**: _(fill)_
- **HTTP**: _(fill: axios/fetch/rtk-query/react-query…)_

### Backend (if any)

- **Runtime**: _(fill)_
- **Framework**: _(fill)_
- **Database**: _(fill)_
- **Auth**: _(fill)_

---

## 3) Repository & Folder Structure (Canonical)

### Root layout

```
project-root/
├── server/          # Backend application
├── client/          # Frontend application
└── docs/            # Agent outputs / documentation
```

### Frontend layout (Required)

- **All frontend code MUST live under `client/`**

```
client/
└── src/
    ├── apis/         # API clients, axios instances, services (NO UI)
    ├── assets/       # Images/fonts/icons
    ├── components/   # Reusable UI components
    ├── configs/      # Env/config loaders, app config
    ├── constants/    # App-wide constants
    ├── hooks/        # Custom hooks
    ├── layouts/      # Layout shells (Header/Sidebar/Footer)
    ├── pages/        # Route-level pages/screens
    ├── routers/      # Route config and providers
    ├── stores/       # Global state (Redux/Zustand)
    └── utils/        # Pure helpers + error normalization
```

### Backend layout (Required)

- **All backend code MUST live under `server/`**
- Prefer `server/src/` as the only application source directory

```
server/
└── src/
    ├── app.js                # or index.js: app bootstrap
    ├── routes/               # Route registration (mount modules, versioning)
    ├── modules/              # Feature modules (feature-first)
    │   └── <module>/
    │       ├── controllers/  # HTTP handlers (thin)
    │       ├── services/     # Business logic (use cases)
    │       ├── validators/   # Request validation schemas
    │       ├── repositories/ # (optional) data access abstraction
    │       ├── models/       # (optional) DB models/schemas
    │       └── dtos/         # (optional) mapping/serialization helpers
    ├── middlewares/          # auth, rate limit, error middleware
    ├── utils/                # shared helpers (logging, error normalization, response helpers)
    ├── configs/              # env config, constants, feature flags
    └── db/                   # DB connection, migrations, seeds (if applicable)
```

### File extensions (Required)

- Use `.js` / `.jsx`
- Do not create `.ts` / `.tsx`

---

## 4) API Conventions (Required)

### Base URL & versioning

- **Base URL**: `/api/v1` (update if different)

### Response shape (Project standard)

```json
{ "success": true, "data": {}, "message": "Optional" }
```

### Error shape (Project standard)

All API errors must be normalized to:

```json
{ "code": "STRING", "message": "STRING", "status": 400, "details": {} }
```

### Client API handling rules

- Centralize network calls in `client/src/apis/` (no scattered `fetch` in UI)
- Every request must implement:
  - **Timeout** via `AbortController`
  - Consistent parsing (JSON when applicable; handle empty/204)
  - Normalize errors to the standard error shape above
- Auth handling:
  - `401/403` must be handled explicitly (trigger logout / redirect to login based on project behavior)
  - Never silently swallow auth errors

---

## 5) Error Handling (Required)

- Treat errors as first-class UI states: **loading / empty / error / success**
- No “silent failures”
- Do not rely on console-only feedback for users
- Preserve debug context (status, endpoint, request id) but **do not leak sensitive data** to UI

---

## 6) Notifications (Required)

- Use a **single** project-wide notification mechanism (toast/snackbar/banner) and keep it consistent
- Notifications must be:
  - Actionable (clear message, optional retry)
  - Deduplicated (avoid spamming on repeated failures)
  - Accessible (screen-reader friendly; no focus traps)

Rules of thumb:

- Inline errors: form validation / field-level problems
- Toast: transient success/failure
- Banner: global/system-wide issues (offline, degraded service, permissions)

---

## 7) Coding Conventions

- Naming:
  - Components: `PascalCase`
  - Variables/functions: `camelCase`
- Prefer small components, composition over deep nesting
- Avoid adding new dependencies unless explicitly requested

---

## 8) Security & Privacy (Baseline)

- Never commit secrets (tokens, `.env`, credentials)
- Do not log PII to console or client-facing errors
- Validate and sanitize user inputs (frontend validation is not a substitute for backend)

---

## 9) Definition of Done (DoD)

### Frontend DoD

- UI matches design (desktop + mobile)
- Handles states: loading/empty/error/success
- Error + notification behaviors implemented per rules
- No runtime crashes; no blocking console errors

### Backend DoD (if applicable)

- API conforms to response/error shape
- Validations + permissions enforced
- Tests or verification steps documented

---

## 10) Workflow (Non-negotiable)

- Never work directly on `main/master`
- Branch naming: `feature/*`, `bugfix/*`, `ui/*`
- Do not auto-merge; open PR and request review as required by project process
