# Task Breakdown: E-commerce Mini

**Role:** `@project-manager`
**Objective:** Decompose Category & Product management into actionable tasks.

---

## [ENGLISH VERSION]

### Phase 0: System Architecture (`@techlead`)
- **Task 0:** Design ADR & DB Schema.
  - Define `Category` (name, desc) and `Product` (name, price, stock, categoryId references Category).
  - Define API Contracts for CRUD.
  - **DoD:** Markdown file in `docs/architecture/` approved by HUMAN.

### Phase 1: Backend Implementation (`@backend-developer`)
- **Task 1: System Init.**
  - Setup `server/` with Express/TS/Mongoose and mandatory `npm run dev`.
  - Provide `.env.example`.
- **Task 3: Product CRUD.**
  - Implement full **CRUD (Create, Read, Update, Delete)** for Products linked to Categories.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
  - **DoD:** All 4 CRUD APIs functional, committed to branch, passed Dev Loop.

### Phase 2: Frontend Implementation (`@frontend-developer`)
- **Task 4: UI Init.**
  - Setup `client/` with Vite/React/TS/Tailwind v4.
- **Task 5: Category & Product UI.**
  - Build management interfaces for both entities.
  - **DoD:** UI functional and connected to Backend.

### Phase 3: Verification (`@tester`)
- **Task 6: API & Browser Verification.**
  - Verify 1-N relationship via API and UI.
  - **Browser Test:** Mandatory check with evidence.
  - **DoD:** QA Checklist with evidence (screenshots/recordings).

---

## [PHIÊN BẢN TIẾNG VIỆT]

### Giai đoạn 0: Kiến trúc hệ thống (`@techlead`)
- **Task 0:** Thiết kế ADR & Schema Database.
  - Định nghĩa Model `Category` và `Product` (liên kết 1-N).
  - Định nghĩa API Contract.
  - **DoD:** File Markdown trong `docs/architecture/` được HUMAN phê duyệt.

### Giai đoạn 1: Triển khai Backend (`@backend-developer`)
- **Task 1: Khởi tạo Project.**
  - Cài đặt `server/` với Express/TS/Mongoose, có sẵn script `dev`.
  - Cung cấp `.env.example`.
- **Task 2: CRUD Danh mục.**
  - Triển khai đầy đủ API Thêm/Xem/Sửa/Xóa Danh mục.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
- **Task 3: CRUD Sản phẩm.**
  - Triển khai API Sản phẩm liên kết với Danh mục.
  - **Dev Loop:** Code -> TechLead Log -> Tester Checklist.
  - **DoD:** Toàn bộ API hoạt động, đã commit, vượt qua Dev Loop.

### Giai đoạn 2: Triển khai Frontend (`@frontend-developer`)
- **Task 4: Khởi tạo UI.**
  - Cài đặt `client/` với Vite/React/TS/Tailwind v4.
- **Task 5: Giao diện Danh mục & Sản phẩm.**
  - Xây dựng giao diện quản lý cho cả hai thực thể.
  - **DoD:** UI hoạt động và kết nối thành công với Backend.

### Giai đoạn 3: Kiểm thử (`@tester`)
- **Task 6: Xác thực API & Trình duyệt.**
  - Kiểm tra quan hệ 1-N qua API và UI.
  - **Browser Test**: Bắt buộc có bằng chứng hình ảnh/video.
  - **DoD**: QA Checklist kèm bằng chứng.
