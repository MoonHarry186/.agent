---
trigger: always_on
---

# Backend Developer Rules

## 0. Mission & Scope (Project-wide)

- Implement backend features (API + business logic + DB) đúng theo **API contracts** và **architecture** của TechLead.
- Skills có thể đa dạng nhưng **phải tuân thủ tuyệt đối** rule chung của dự án (đặc biệt: response/error shape, folder structure, workflow).
- Prefer code đơn giản, rõ ràng, dễ maintain; tránh over-engineering.

## 1. Code Quality & Standards

- Follow consistent coding conventions (naming, structure, formatting).
- Use **Feature-based modules structure** rather than grouping purely by file type (e.g., group a feature's controller, service, and repository together).
- Write clean, readable, maintainable code (not clever code).
- Use meaningful variable & function names.
- Keep functions small and single-responsibility.
- Always handle errors properly (no silent failures).
- Keep controller/route thin; put business logic in services/use-cases.

## 2. API Design Principles

- **Centralized Routing**: Must have a central route file (route tổng) to manage and aggregate all feature routes.
- Follow RESTful conventions:
  - `GET /products`
  - `POST /products`
  - `PUT /products/:id`
  - `DELETE /products/:id`
- Use proper HTTP status codes:
  - `200 OK`
  - `201 Created`
  - `400 Bad Request`
  - `401 Unauthorized`
  - `404 Not Found`
  - `500 Internal Error`
- Standardize response format:
  ```json
  {
    "success": true,
    "data": {},
    "message": "Optional message"
  }
  ```
- Standardize error shape (project standard), never leak stacktrace:
  ```json
  { "code": "STRING", "message": "STRING", "status": 400, "details": {} }
  ```
- Versioning/base path (if project uses it): keep consistent (e.g. `/api/v1`).
- For list endpoints: define pagination/filter/sort conventions and keep consistent.

## 3. Database Design

- Use normalized structure (but don’t over-normalize).
- Prefer separate tables for scalability (good call you already chose this 👍).
- Use indexes for frequently queried fields.
- Never trust client input → always validate before saving.
- Use migrations or versioning for schema changes.
- Avoid N+1 queries; prefer batched queries/joins (depending on DB).

## 4. Security Rules

- Validate & sanitize all inputs.
- Enforce authorization on every protected resource (RBAC/permissions if project has).
- Never expose sensitive data (passwords, tokens).
- Use hashing (e.g., bcrypt) for passwords.
- Implement authentication & authorization properly (JWT, sessions).
- Protect against:
  - SQL Injection
  - XSS
  - CSRF

## 4.1 Validation (Required)

- Validate request body/query/params at module boundary (controller) using a schema validator (project standard).
- Define and reuse validation schemas under `modules/<module>/validators/`.
- Reject invalid inputs with `400` and normalized error shape.

## 5. Performance & Scalability

- Avoid unnecessary queries (N+1 problem).
- Use pagination for large datasets.
- Cache when needed (Redis, memory cache).
- Optimize heavy operations (queue, background jobs).
- Design for scalability from early stage (your POD app will need this).

## 6. Logging & Debugging

- Log important events:
  - Errors
  - Requests
  - Critical actions
- Use structured logs:
  ```json
  {
    "level": "error",
    "message": "Database connection failed",
    "timestamp": "..."
  }
  ```
- Never log sensitive data.
- Prefer correlation/request id if project provides it (helps trace issues).

## 6.1 Error Handling (Required)

- Centralize error handling in an error middleware/handler.
- Normalize errors into the project error shape.
- Map common cases consistently:
  - `400`: validation
  - `401`: unauthenticated
  - `403`: unauthorized
  - `404`: resource not found
  - `409`: conflict (duplicate, invalid state)
  - `500`: unexpected
- Never return raw stack traces to clients (keep for server logs only).

## 7. Testing

- Write unit tests for business logic.
- Write integration tests for APIs.
- Ensure critical flows always work:
  - Auth
  - Payment (very important for your WooCommerce flow)
  - Order creation

### 7.1 Minimal test checklist (per endpoint)

- Happy path
- Invalid input (missing/invalid types/boundaries)
- Auth required (401) + permission required (403) if applicable
- Not found (404) when id/resource does not exist
- Conflict (409) when violated constraints (if any)

## 8. Documentation

- Every API must be documented (Swagger / Postman).
- Include:
  - Endpoint
  - Request params
  - Response format
- Keep docs updated (not “write once then forget”).

## 9. Git & Workflow

- **Branch Required**: You MUST NEVER code directly on the `main` or `master` branch.
- Use clear commit messages:
  - `feat: add product API`
  - `fix: validate price input`
- Work with branches:
  - `feature/...`
  - `bugfix/...`
- Always review code before merging.

### 9.1. Tuân thủ Feature Workflow (Backend)

- Backend developer **PHẢI** tuân theo chặt chẽ `Feature Workflow` trong `/.agents/workflows/feature-workflow.md`.
- Khi làm backend cho một feature hoặc một task, luôn follow **Bước 6 – Vòng lặp (Loop): Backend**:
  - **Code Backend**: Triển khai luồng Backend, API, DB đúng theo bản thiết kế (bước Techlead).
  - **Loop (code → review → test → code)**:
    - Code backend theo thiết kế.
    - Gửi cho bot `techlead` review code (kiến trúc, chất lượng, bảo mật).
    - Bắt buộc chạy test chức năng (tester) cho API & logic. Không được bỏ qua bước test.
    - Nếu có issue → quay lại code, lặp đến khi backend ổn định.
  - **Human review & approve**: Sau khi qua vòng bot + tester, HUMAN phải review & approve thay đổi backend.

## 10. Folder Structure Rule

- **Server Directory**: All backend application code MUST be stored and executed within the `server/` directory. Do not place backend source code in the root directory.
- Prefer `server/src/` as the only application source directory.

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

### File extensions

- Default: `.js`
- Do not introduce TypeScript (`.ts/.tsx`) unless the project explicitly asks for it.
