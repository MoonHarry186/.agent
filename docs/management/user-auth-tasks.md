# Task Breakdown: User Auth System

**Role:** `@project-manager`
**Objective:** Decompose the Auth feature into actionable technical tasks with a strict internal Dev Loop.

---

## [ENGLISH VERSION]

### Phase 0: System Architecture (`@techlead`)
- **Task 0:** Design Auth ADR & DB Schema.
  - Define User model (id, email/username, hashed_password).
  - Define JWT structure and Secret management plan.
  - **DoD:** Markdown file in `docs/architecture/` approved by HUMAN.

### Phase 1: Backend Implementation (`@backend-developer`)
- **Task 1:** Implement Registration API.
  - Use `bcrypt` for password hashing.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
- **Task 2:** Implement Login API & JWT Issuance.
  - Verify hash, return JWT in response.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
  - **DoD:** Task 1 + Task 2 committed to branch, passed Dev Loop, and Approved by HUMAN.

### Phase 2: Frontend Implementation (`@frontend-developer`)
- **Task 3:** Build Auth Forms & State.
  - Create Register/Login pages.
  - Store JWT in cookies/localStorage.
- **Task 4:** Implement Protected Routes & Auth Guard.
  - Prevent access to `/dashboard` without token.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
  - **DoD:** Commit to branch, passed Dev Loop, and Approved by HUMAN.

---

## [PHIÊN BẢN TIẾNG VIỆT]

### Giai đoạn 0: Kiến trúc hệ thống (`@techlead`)
- **Task 0:** Thiết kế Auth ADR & Schema Database.
  - Định nghĩa bảng User (id, email/username, hashed_password).
  - Định nghĩa cấu trúc JWT và kế hoạch quản lý mã Secret.
  - **DoD:** File markdown trong `docs/architecture/` được HUMAN phê duyệt.

### Giai đoạn 1: Triển khai Backend (`@backend-developer`)
- **Task 1:** Triển khai API Đăng ký.
  - Sử dụng `bcrypt` để băm mật khẩu.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
- **Task 2:** Triển khai API Đăng nhập & Cấp JWT.
  - Kiểm tra mã băm, trả về JWT trong response.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
  - **DoD:** Task 1 + Task 2 được commit vào branch, vượt qua Dev Loop và được HUMAN Phê duyệt.

### Giai đoạn 2: Triển khai Frontend (`@frontend-developer`)
- **Task 3:** Xây dựng Auth Forms & State.
  - Tạo các trang Đăng ký/Đăng nhập.
  - Lưu JWT vào cookies/localStorage.
- **Task 4:** Triển khai Protected Routes & Auth Guard.
  - Ngăn chặn truy cập `/dashboard` khi không có token.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
  - **DoD:** Commit vào branch, vượt qua Dev Loop và được HUMAN Phê duyệt.
