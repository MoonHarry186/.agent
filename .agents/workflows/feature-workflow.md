---
description: Quy trình phát triển tính năng từ bước nhận yêu cầu đến khi test hoàn thiện
---

# Feature Workflow

Quy trình chuẩn để phát triển một tính năng mới (feature), áp dụng các kỹ năng chuyên biệt (skills) của agent kết hợp với sự phê duyệt của con người.

1. **Nhận Yêu cầu (Request)**
   - Tiếp nhận thông tin yêu cầu ban đầu về tính năng.

2. **Phân tích (Analyze) - `business-analyst`**
   - BA sẽ phân tích yêu cầu nghiệp vụ.
   - Output: Định nghĩa rõ ràng User Stories và Acceptance Criteria (AC).
   - **Review (HUMAN):** Yêu cầu Người dùng (HUMAN) review tài liệu phân tích.
   - **Vòng lặp (Loop):** Nếu HUMAN Reject (yêu cầu sửa), BA phải sửa lại. Chỉ khi HUMAN **Approve** thì mới chuyển sang bước 

3. **Chia task (Task Breakdown) - `project-manager`**
   - PM dựa trên yêu cầu đã phân tích để chia nhỏ thành các task kỹ thuật cụ thể có thể quản lý được.
   - Cung cấp estimate và timeline dự kiến nếu cần.
   - **Review (HUMAN):** Yêu cầu Người dùng (HUMAN) review danh sách task.
   - **Vòng lặp (Loop):** Nếu HUMAN Reject, PM phải điều chỉnh lại. Chỉ khi HUMAN **Approve** thì mới chuyển sang bước 4.

4. **Chọn task (Task Selection) - HUMAN**
   - Agent tạo ra một file Artifact (ví dụ: `task_selection.md`) liệt kê các task cụ thể dựa trên phân tích ở bước 3.
   - Người dùng (HUMAN) mở file Artifact này, đánh dấu `[x]` vào task/component cụ thể muốn Agent thực hiện tiếp theo.

5. **Thiết kế (Architecture) - `techlead`**
   - Techlead thiết kế kiến trúc kỹ thuật: database schema, cấu trúc hệ thống, API contracts và các design pattern áp dụng.

6. **Vòng lặp (Loop): Backend**
   - **BƯỚC CHUẨN (6-Step Cycle):**
     1. **Dev - `backend-developer`**: Triển khai code luồng Backend, API, DB dựa trên bản thiết kế. Phải thiết lập `.env.example` và script `npm run dev`.
     2. **Test - `tester`**: Kiểm thử API và logic hệ thống (automated/manual).
     3. **Checklist Update - `tester`**: Cập nhật QA Checklist (`docs/qa/`) với trạng thái Pass/Fail và LOG chi tiết cho mọi lỗi tìm thấy (kể cả lỗi nhỏ fix ngay).
     4. **Dev Check - `backend-developer`**: Check lại Checklist để xem các case bị Fail.
     5. **Fix - `backend-developer`**: Sửa bug và cập nhật lại code.
     6. **Re-Test - `tester`**: Kiểm tra lại các lỗi đã fix và cập nhật Checklist thành Pass.
   - **Review (HUMAN):** Người dùng review code sau khi chu kỳ 6 bước hoàn tất 100% Pass.
   - **Approval (HUMAN)**: HUMAN duyệt Task. **KHÔNG tự động merge**. Chờ lệnh hoặc HUMAN tự merge.

7. **Vòng lặp (Loop): Frontend**
   - **BƯỚC CHUẨN (6-Step Cycle):**
     1. **Dev - `frontend-developer`**: Triển khai giao diện, kết nối API. Đảm bảo `npm run dev` hoạt động.
     2. **Test - `tester`**: Kiểm thử logic & CSS. Bắt buộc test trên trình duyệt, quay phim/chụp ảnh bằng chứng.
     3. **Checklist Update - `tester`**: Cập nhật QA Checklist (`docs/qa/`) với trạng thái Pass/Fail và LOG chi tiết lỗi.
     4. **Dev Check - `frontend-developer`**: Check Checklist để tìm các case chưa đạt.
     5. **Fix - `frontend-developer`**: Sửa lỗi UI/UX và Logic.
     6. **Re-Test - `tester`**: Verify lại trên Browser và update Checklist.
   - **Review (HUMAN):** Người dùng review UI/UX sau khi Checklist Pass 100%.
   - **Approval (HUMAN)**: HUMAN duyệt Task. **KHÔNG tự động merge**.

8. **Hoàn thiện & Triển khai (Done & Deploy)**
   - Đảm bảo toàn bộ tính năng hoạt động trơn tru.
   - Báo cáo hoàn thành, hướng dẫn HUMAN merge vào `main` hoặc chuẩn bị deploy.