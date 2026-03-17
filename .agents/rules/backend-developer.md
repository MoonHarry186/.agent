---
trigger: always_on
---

# Backend Developer Rules

## 1. Code Quality & Standards

- Follow consistent coding conventions (naming, structure, formatting).
- Use **Feature-based modules structure** rather than grouping purely by file type (e.g., group a feature's controller, service, and repository together).
- Write clean, readable, maintainable code (not clever code).
- Use meaningful variable & function names.
- Keep functions small and single-responsibility.
- Always handle errors properly (no silent failures).

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

## 3. Database Design

- Use normalized structure (but don’t over-normalize).
- Prefer separate tables for scalability (good call you already chose this 👍).
- Use indexes for frequently queried fields.
- Never trust client input → always validate before saving.
- Use migrations or versioning for schema changes.

## 4. Security Rules

- Validate & sanitize all inputs.
- Never expose sensitive data (passwords, tokens).
- Use hashing (e.g., bcrypt) for passwords.
- Implement authentication & authorization properly (JWT, sessions).
- Protect against:
  - SQL Injection
  - XSS
  - CSRF

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

## 7. Testing

- Write unit tests for business logic.
- Write integration tests for APIs.
- Ensure critical flows always work:
  - Auth
  - Payment (very important for your WooCommerce flow)
  - Order creation

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
