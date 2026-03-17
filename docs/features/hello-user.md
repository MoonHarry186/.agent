# Feature Specification: Hello User

**Role:** `@business-analyst`
**Context:** A simple health-check feature to verify frontend-backend communication via a structured looping workflow.

---

## [ENGLISH VERSION]

### User Stories
1. **As a user**, I want to enter my name into a text input and click "Gửi" so that the system knows who I am.
2. **As a user**, I want to see the message "Xin chào thân ái, [Tên]!" returned from the server and displayed on my screen after submitting, so that I know the system responded successfully.

### Acceptance Criteria (AC)
- [ ] The UI renders an input field for the user's name and a Submit button labeled "Gửi".
- [ ] The frontend prevents submitting an empty name (Frontend validation).
- [ ] The backend provides a `POST /api/hello` endpoint.
- [ ] The endpoint accepts a JSON payload: `{ "name": "string" }` and validates it.
- [ ] On success, the backend returns a `200 OK` status with the standard response format containing: `"Xin chào thân ái, [Tên]!"`.
- [ ] The frontend correctly displays the returned message on the screen directly below the form.
- [ ] If an error occurs (e.g., network timeout), the UI displays a graceful error message without breaking the layout.

---

## [PHIÊN BẢN TIẾNG VIỆT]

### Cốt Truyện Người Dùng (User Stories)
1. **Là một người dùng**, tôi muốn nhập tên của mình vào ô nhập liệu và nhấn nút "Gửi" để hệ thống biết tôi là ai.
2. **Là một người dùng**, tôi muốn nhìn thấy thông báo "Xin chào thân ái, [Tên]!" được trả về từ server và hiển thị trên màn hình sau khi gửi, để tôi biết hệ thống đã phản hồi thành công.

### Tiêu Chí Chấp Nhận (Acceptance Criteria - AC)
- [ ] Giao diện (UI) hiển thị một ô nhập liệu cho tên người dùng và một nút Gửi có nhãn là "Gửi".
- [ ] Frontend ngăn chặn việc gửi khi tên bị bỏ trống (Xác thực Frontend).
- [ ] Backend cung cấp một endpoint `POST /api/hello`.
- [ ] Endpoint chấp nhận payload JSON: `{ "name": "string" }` và có xác thực dữ liệu.
- [ ] Khi thành công, backend trả về mã lỗi `200 OK` với định dạng phản hồi chuẩn thay cho nội dung: `"Xin chào thân ái, [Tên]!"`.
- [ ] Frontend hiển thị chính xác thông báo được trả về trên màn hình ngay dưới biểu mẫu.
- [ ] Nếu xảy ra lỗi (ví dụ: timeout mạng), UI hiển thị một thông báo lỗi nhẹ nhàng mà không làm hỏng bố cục trang web.
