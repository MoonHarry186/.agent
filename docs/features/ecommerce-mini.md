# Feature Specification: E-commerce Mini (Category & Product)

**Role:** `@business-analyst`
**Context:** Fresh implementation of category and product management system.

---

## [ENGLISH VERSION]

### User Stories
1. **As an admin**, I want to manage **Categories** so that I can group related products.
2. **As an admin**, I want to manage **Products** and associate each with a Category so that the Catalog is organized.

### Acceptance Criteria (AC)
- [ ] **Category CRUD:**
  - Create category (name, description).
  - List categories.
  - Update/Delete category.
- [ ] **Product CRUD:**
  - Create product (name, price, stock, categoryId).
  - `categoryId` must be a valid reference to an existing Category.
  - List products (populate category details).
- [ ] **Frontend Application:**
  - Category Management: CRUD UI for categories.
  - Product Management: CRUD UI for products with Category selection.
  - Responsive navigation.
- [ ] **Data Logic:**
  - Relationship: 1 Category -> N Products.
  - Deleting a category should either block if products exist or handle them gracefully (to be decided in Architecture).

---

## [PHIÊN BẢN TIẾNG VIỆT]

### Cốt Truyện Người Dùng (User Stories)
1. **Là quản trị viên**, tôi muốn quản lý **Danh mục** để nhóm các sản phẩm liên quan.
2. **Là quản trị viên**, tôi muốn quản lý **Sản phẩm** và liên kết chúng với Danh mục để hệ thống sản phẩm được tổ chức tốt.

### Tiêu Chí Chấp Nhận (Acceptance Criteria - AC)
- [ ] **CRUD Danh mục:**
  - Thêm danh mục (tên, mô tả).
  - Xem danh sách danh mục.
  - Cập nhật/Xóa danh mục.
- [ ] **CRUD Sản phẩm:**
  - Thêm sản phẩm (tên, giá, tồn kho, categoryId).
  - `categoryId` phải tham chiếu đến một Danh mục đang tồn tại.
  - Xem danh sách sản phẩm (kèm thông tin chi tiết danh mục).
- [ ] **Giao diện người dùng (Frontend):**
  - Quản lý Danh mục: Giao diện CRUD cho danh mục.
  - Quản lý Sản phẩm: Giao diện CRUD cho sản phẩm kèm chọn Danh mục.
  - Điều hướng Responsive.
- [ ] **Logic Dữ liệu:**
  - Quan hệ: 1 Danh mục -> Nhiều Sản phẩm.
  - Xử lý khi xóa Danh mục (có sản phẩm con) sẽ được quyết định ở bước Kiến trúc.
