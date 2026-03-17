---
description: Quy trình phát triển tính năng từ bước nhận yêu cầu đến khi test hoàn thiện
---

# Feature Workflow

Quy trình chuẩn để phát triển một tính năng mới (feature), áp dụng các kỹ năng chuyên biệt (skills) của agent kết hợp với sự phê duyệt của con người.

1. **Nhận Yêu cầu (Request)**
   - Tiếp nhận thông tin yêu cầu ban đầu về tính năng.
   - **Bắt buộc:** Ghi chép lại nguyên văn/chi tiết yêu cầu thô của người dùng vào một file log (ví dụ: `docs/requirements/[tên-feature]-raw.md`) để làm cơ sở đối chiếu sau này.

2. **Phân tích (Analyze) - `business-analyst`**
   - BA sẽ phân tích yêu cầu nghiệp vụ.
   - Output: Định nghĩa rõ ràng User Stories và Acceptance Criteria (AC).

3. **Chia task (Task Breakdown) - `project-manager`**
   - PM dựa trên yêu cầu đã phân tích để chia nhỏ thành các task kỹ thuật cụ thể có thể quản lý được.
   - Cung cấp estimate và timeline dự kiến nếu cần.

4. **Chọn task (Task Selection) - HUMAN**
   - Agent tạo ra một file Artifact (ví dụ: `task_selection.md`) liệt kê các task cụ thể dựa trên phân tích ở bước 3.
   - Người dùng (HUMAN) xem file Artifact đó, rồi trả lời trực tiếp trong khung chat để chỉ định Agent thực hiện Task nào.
   - **Bắt buộc:** Sau khi Agent làm xong một Task, Agent PHẢI yêu cầu Người dùng (HUMAN) review. Chỉ khi HUMAN **Approve (phê duyệt)** thì Agent mới được phép mở lại file `task_selection.md` và đánh dấu `[hoàn thành]` cho Task đó.

5. **Thiết kế (Architecture) - `techlead`**
   - Techlead thiết kế kiến trúc kỹ thuật: database schema, cấu trúc hệ thống, API contracts và các design pattern áp dụng.

6. **Vòng lặp (Loop): Backend**
   - **Tạo nhánh (Branching):** Bắt buộc tạo và checkout sang nhánh mới (VD: `feature/[tên-tính-năng]-backend`) trước khi code.
   - **Backend (code) - `backend-developer`:** Triển khai code luồng Backend, API, DB dựa trên bản thiết kế.
   - **Push code:** Đẩy code lên môi trường quản lý (Git).
   - **Test - `tester`:** Kiểm thử các API và logic Backend (Unit/Integration Test) xem có bị lỗi hoặc chưa thỏa mãn AC không.
   - **Review (HUMAN):** Người dùng (HUMAN) review code Backend để đảm bảo chất lượng và bảo mật.
   - *(Lặp lại quá trình code -> push -> test -> review này cho đến khi Backend hoàn chỉnh)*
   - **Hoàn thành Task:** Chỉ khi HUMAN Approve thì Task Backend mới được chuyển trạng thái sang `[hoàn thành]`.

7. **Vòng lặp (Loop): Frontend**
   - **Tạo nhánh (Branching):** Bắt buộc tạo và checkout sang nhánh mới (VD: `feature/[tên-tính-năng]-frontend`) trước khi code.
   - **Frontend (code) - `frontend-developer`:** Triển khai code giao diện, kết nối với API Backend đã có.
   - **Push code:** Đẩy code Frontend lên môi trường quản lý.
   - **Review (HUMAN):** Người dùng (HUMAN) review code Frontend, UI/UX, và performance.
   - **Test - `tester`:** Kiểm thử giao diện (E2E Test, Accessibility, Responsive) để đảm bảo đáp ứng đúng thiết kế và AC ban đầu.
   - *(Lặp lại quá trình code -> push -> review -> test này cho đến khi Frontend hoàn chỉnh)*
   - **Hoàn thành Task:** Chỉ khi HUMAN Approve thì Task Frontend mới được chuyển trạng thái sang `[hoàn thành]`.

8. **Hoàn thiện & Triển khai (Done & Deploy)**
   - Đảm bảo toàn bộ tính năng (cả Backend và Frontend) hoạt động tích hợp trơn tru.
   - Báo cáo hoàn thành tính năng, chuẩn bị merge vào nhánh chính (Main/Master) hoặc deploy lên môi trường Production.