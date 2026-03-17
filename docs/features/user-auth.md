# Feature Specification: User Auth System

**Role:** `@business-analyst`
**Context:** Implementing a robust authentication system to verify security practices and database interactions.

---

## [ENGLISH VERSION]

### User Stories
1. **As a new user**, I want to register an account with my email/username and password so that I can access private features.
2. **As a registered user**, I want to log in using my credentials so that I can be authenticated by the system.
3. **As an authenticated user**, I want to be able to access protected routes that are restricted to logged-in users only.

### Acceptance Criteria (AC)
- [ ] **Registration:**
  - Endpoint `POST /api/auth/register`.
  - Validate email/username and password (min length).
  - Hash password using `bcrypt` before storing in DB.
  - Return `201 Created` on success.
- [ ] **Login:**
  - Endpoint `POST /api/auth/login`.
  - Verify credentials against DB.
  - Return `200 OK` with a `JWT` token on success.
- [ ] **Security:**
  - Passwords MUST NOT be stored in plain text.
  - Sensitive user data (like passwords) MUST NOT be returned in API responses.
- [ ] **Frontend:**
  - Implement Registration and Login forms.
  - Store JWT securely (localStorage or HttpOnly cookie logic).
  - Implement "Protected Routes" (e.g., a Dashboard page that redirects to Login if unauthorized).

---

## [PHIÊN BẢN TIẾNG VIỆT]

### Cốt Truyện Người Dùng (User Stories)
1. **Là một người dùng mới**, tôi muốn đăng ký tài khoản bằng email/username và mật khẩu để có thể truy cập các tính năng riêng tư.
2. **Là một người dùng đã đăng ký**, tôi muốn đăng nhập bằng thông tin của mình để hệ thống xác thực danh tính.
3. **Là một người dùng đã đăng nhập**, tôi muốn có thể truy cập các trang (Route) được bảo vệ mà chỉ những người đã đăng nhập mới xem được.

### Tiêu Chí Chấp Nhận (Acceptance Criteria - AC)
- [ ] **Đăng ký (Registration):**
  - Endpoint `POST /api/auth/register`.
  - Xác thực email/username và mật khẩu (độ dài tối thiểu).
  - Mã hóa mật khẩu bằng `bcrypt` trước khi lưu vào Database.
  - Trả về `201 Created` khi thành công.
- [ ] **Đăng nhập (Login):**
  - Endpoint `POST /api/auth/login`.
  - Kiểm tra thông tin đăng nhập đối chiếu với Database.
  - Trả về `200 OK` kèm theo một mã định danh `JWT` token khi thành công.
- [ ] **Bảo mật (Security):**
  - Mật khẩu TUYỆT ĐỐI KHÔNG được lưu dưới dạng văn bản thuần túy.
  - Dữ liệu nhạy cảm (như mật khẩu) KHÔNG được trả về trong các phản hồi API.
- [ ] **Frontend:**
  - Triển khai Form Đăng ký và Đăng nhập.
  - Lưu trữ JWT an toàn (localStorage hoặc logic cookie HttpOnly).
  - Triển khai "Protected Routes" (ví dụ: Trang Dashboard sẽ tự động chuyển hướng về trang Login nếu chưa đăng nhập).
