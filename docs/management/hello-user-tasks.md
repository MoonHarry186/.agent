# Project Tasks: Hello User Feature

**Role:** `@project-manager`
**Epic:** End-to-End Workflow Test

---

## [ENGLISH VERSION]

### Task Breakdown

#### Task 0: [TechLead] Architecture Design
- **Assignee:** `@techlead`
- **Definition of Done (DoD):**
  - Define exact API contract (Request/Response schema).
  - Document folder structure expectations for this feature.
  - Create ADR document in `/docs/architecture/`.

#### Task 1: [Backend] Implement API `POST /api/hello`
- **Assignee:** `@backend-developer`
- **Dependencies:** Task 0
- **Definition of Done (DoD):**
  - Branch created: `feature/hello-user-backend`.
  - Code resides in the `/server` folder.
  - Endpoint returns standard JSON response.
  - *Internal Dev Loop:* TechLead review (`[task]-techlead-review.md`) and QA check list (`[task]-tester-checklist.md`) passed.
  - *Final:* Human review & HUMAN Approve completed.

#### Task 2: [Frontend] Implement UI & API Integration
- **Assignee:** `@frontend-developer`
- **Dependencies:** Task 1 
- **Definition of Done (DoD):**
  - Branch created: `feature/hello-user-frontend`.
  - Code resides in the `/client` folder.
  - React flow calls `/api/hello` and handles errors gracefully.
  - *Internal Dev Loop:* TechLead review (`[task]-techlead-review.md`) and QA check list (`[task]-tester-checklist.md`) passed.
  - *Final:* Human review & HUMAN Approve completed.

---

## [PHIÊN BẢN TIẾNG VIỆT]

### Phân rã Công việc (Task Breakdown)

#### Task 0: [TechLead] Thiết kế Kiến trúc
- **Người thực hiện:** `@techlead`
- **Định nghĩa Hoàn thành (DoD):**
  - Xác định chính xác hợp đồng API (Schema Request/Response).
  - Tài liệu hóa chuẩn cấu trúc thư mục cho tính năng này.
  - Tạo tài liệu Quyết định Kiến trúc (ADR) trong thư mục `/docs/architecture/`.

#### Task 1: [Backend] Xây dựng API `POST /api/hello`
- **Người thực hiện:** `@backend-developer`
- **Phụ thuộc:** Task 0
- **Định nghĩa Hoàn thành (DoD):**
  - Hoàn tất tạo nhánh: `feature/hello-user-backend`.
  - Toàn bộ code nằm trong thư mục `/server`.
  - Endpoint trả về phản hồi JSON theo chuẩn.
  - *Vòng lặp Dev nội bộ:* Hoàn tất TechLead review (tạo `[task]-techlead-review.md`) và QA Checklist (tạo `[task]-tester-checklist.md`).
  - *Cuối cùng:* Khách hàng (Human) review và xác nhận HUMAN Approve.

#### Task 2: [Frontend] Tích hợp UI & API
- **Người thực hiện:** `@frontend-developer`
- **Phụ thuộc:** Task 1 
- **Định nghĩa Hoàn thành (DoD):**
  - Hoàn tất tạo nhánh: `feature/hello-user-frontend`.
  - Toàn bộ code nằm trong thư mục `/client`.
  - React component gọi thành công API `/api/hello` và xử lý lỗi UI mượt mà.
  - *Vòng lặp Dev nội bộ:* Hoàn tất TechLead review (tạo `[task]-techlead-review.md`) và QA Checklist (tạo `[task]-tester-checklist.md`).
  - *Cuối cùng:* Khách hàng (Human) review và xác nhận HUMAN Approve.
