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
   - **Vòng lặp phát triển (Dev Loop):**
     - **Code:** `backend-developer` code luồng Backend, API, DB dựa trên bản thiết kế.
     - **TechLead Review:** `techlead` review code và tạo một file log ghi nhận lỗi/đóng góp (VD: `docs/reviews/[task]-techlead-review.md`).
     - **Tester Check:** `tester` kiểm thử các API, DB và tạo một file check list nghiệm thu (VD: `docs/qa/[task]-tester-checklist.md`).
     - *(Lặp lại quy trình Code -> TechLead Review -> Tester Check cho đến khi nội bộ Agent đánh giá là Đạt)*
   - **Push code:** Đẩy code hoàn thiện lên môi trường quản lý (Git).
   - **Review (HUMAN):** Sau khi vòng lặp tự động bên trên hoàn thành, Người dùng (HUMAN) review lại code Backend để đảm bảo chất lượng và bảo mật lần cuối.
   - **Approve (HUMAN) & Hoàn thành Task:** Chỉ khi có xác nhận bằng chat từ HUMAN Approve thì Task Backend mới được chuyển trạng thái sang `[hoàn thành]`.

7. **Vòng lặp (Loop): Frontend**
   - **Tạo nhánh (Branching):** Bắt buộc tạo và checkout sang nhánh mới (VD: `feature/[tên-tính-năng]-frontend`) trước khi code.
   - **Vòng lặp phát triển (Dev Loop):**
     - **Code:** `frontend-developer` code giao diện, kết nối API dựa trên thiết kế.
     - **TechLead Review:** `techlead` review kiến trúc Component và tạo một file log ghi nhận lỗi/đóng góp (VD: `docs/reviews/[task]-techlead-review.md`).
     - **Tester Check:** `tester` kiểm thử E2E, UI/UX trên các độ phân giải và tạo một file check list nghiệm thu (VD: `docs/qa/[task]-tester-checklist.md`).
     - *(Lặp lại quy trình Code -> TechLead Review -> Tester Check cho đến khi nội bộ Agent đánh giá là Đạt)*
   - **Push code:** Đẩy code hoàn thiện lên môi trường quản lý.
   - **Review (HUMAN):** Sau khi vòng lặp tự động bên trên hoàn thành, Người dùng (HUMAN) review lại code Frontend lần cuối.
   - **Approve (HUMAN) & Hoàn thành Task:** Chỉ khi có xác nhận bằng chat từ HUMAN Approve thì Task Frontend mới được chuyển trạng thái sang `[hoàn thành]`.

8. **Hoàn thiện & Triển khai (Done & Deploy)**
   - Đảm bảo toàn bộ tính năng (cả Backend và Frontend) hoạt động tích hợp trơn tru.
   - Báo cáo hoàn thành tính năng, chuẩn bị merge vào nhánh chính (Main/Master) hoặc deploy lên môi trường Production.