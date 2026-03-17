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
   - **Backend (code) - `backend-developer`:** Triển khai code luồng Backend, API, DB dựa trên bản thiết kế.
   - **Push code:** Đẩy code lên môi trường quản lý (Git).
   - **Review (HUMAN):** Người dùng (HUMAN) review code Backend để đảm bảo chất lượng và bảo mật.
   - **Test - `tester`:** Kiểm thử các API và logic Backend (Unit/Integration Test) xem có bị lỗi hoặc chưa thỏa mãn AC không.
   - *(Lặp lại quá trình code -> push -> review -> test này cho đến khi Backend hoàn chỉnh)*

7. **Vòng lặp (Loop): Frontend**
   - **Frontend (code) - `frontend-developer`:** Triển khai code giao diện, kết nối với API Backend đã có.
   - **Push code:** Đẩy code Frontend lên môi trường quản lý.
   - **Review (HUMAN):** Người dùng (HUMAN) review code Frontend, UI/UX, và performance.
   - **Test - `tester`:** Kiểm thử giao diện (E2E Test, Accessibility, Responsive) để đảm bảo đáp ứng đúng thiết kế và AC ban đầu.
   - *(Lặp lại quá trình code -> push -> review -> test này cho đến khi Frontend hoàn chỉnh)*

8. **Hoàn thiện & Triển khai (Done & Deploy)**
   - Đảm bảo toàn bộ tính năng (cả Backend và Frontend) hoạt động tích hợp trơn tru.
   - Báo cáo hoàn thành tính năng, chuẩn bị merge vào nhánh chính (Main/Master) hoặc deploy lên môi trường Production.