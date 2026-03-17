---
description: Quy trình phát triển tính năng từ bước nhận yêu cầu đến khi test hoàn thiện
---

---
description: Quy trình phát triển tính năng từ bước nhận yêu cầu đến khi test hoàn thiện
---

# Feature Workflow

Quy trình chuẩn để phát triển một tính năng mới (feature), áp dụng các kỹ năng chuyên biệt (skills) của agent kết hợp với sự phê duyệt của con người.

1. **Nhận Yêu cầu (Request) - `project-manager`**
   - Tiếp nhận thông tin yêu cầu ban đầu về tính năng.
   - Ghi thông tin yêu cầu thô của user ra docs/requirements/, ghi nguyên văn, có ngày và giờ

2. **Phân tích (Analyze) - `business-analyst`**
   - BA sẽ phân tích yêu cầu nghiệp vụ.
   - Output: Định nghĩa rõ ràng User Stories và Acceptance Criteria (AC).
   - **Review (HUMAN):** Yêu cầu Người dùng (HUMAN) review tài liệu phân tích.
   - **Vòng lặp (Loop):** Nếu HUMAN Reject (yêu cầu sửa), BA phải sửa lại. Chỉ khi HUMAN **Approve** thì mới chuyển sang bước

3. **Chia task (Task Breakdown) - `project-manager`**
   - PM dựa trên yêu cầu đã phân tích để chia nhỏ thành các task kỹ thuật cụ thể có thể quản lý được.
   - Cung cấp estimate và timeline dự kiến nếu cần.
   - **Review (HUMAN):** Yêu cầu Người dùng (HUMAN) review danh sách task.
   - **Vòng lặp (Loop):** Nếu HUMAN Reject, PM phải điều chỉnh lại. Chỉ khi HUMAN **Approve** thì Agent tạo ra một file Artifact (ví dụ: `task_selection.md`) liệt kê các task cụ thể dựa trên phân tích ở bước 3 và chuyển sang bước 4

4. **Chọn task (Task Selection) - HUMAN**
   - Người dùng (HUMAN) mở file Artifact này, đánh dấu `[x]` vào task/component cụ thể muốn Agent thực hiện tiếp theo.

5. **Thiết kế (Architecture) - `techlead`**
   - Techlead thiết kế kiến trúc kỹ thuật: database schema, cấu trúc hệ thống, API contracts và các design pattern áp dụng.

6. **Vòng lặp (Loop): Backend**
   - **Tạo branch**: Tạo nhánh mới cho từng task/tính năng trước khi bắt đầu code.
   - **Backend (code) - `backend-developer`:** Triển khai luồng Backend, API, DB dựa trên bản thiết kế.
   - **Loop (code → review → test → code)**:
     - Code backend theo thiết kế.
     - **Review code (bot `techlead`)**: Techlead bot review kiến trúc, chất lượng code, bảo mật.
     - **Test chức năng - `tester` (bắt buộc)**: Kiểm thử API, logic và các case quan trọng. Không được bỏ qua bước test.
     - Quay lại bước code nếu phát hiện issue. Lặp cho đến khi backend ổn định.
   - **Human review & approve**: HUMAN review lại toàn bộ thay đổi backend và approve.
   - **Push code lên nhánh**: Push code lên remote branch tương ứng. **KHÔNG tự động merge**.

7. **Vòng lặp (Loop): Frontend**
   - **Loop (code → review → test → code)**:
     - Code giao diện và luồng tương tác.
     - **Review code (bot `techlead`)**: Techlead bot review cấu trúc component, performance, maintainability.
     - **Test chức năng - `tester` (bắt buộc)**:
     - Kiểm thử logic, CSS, responsive.
     - **Case A – Task thay đổi UI/logic** (ảnh hưởng tới phần người dùng nhìn thấy hoặc business flow):
       - **Browser Test chi tiết**: Test thực tế trên trình duyệt các màn hình bị ảnh hưởng.
       - Quay phim/chụp ảnh làm bằng chứng khi cần, đặc biệt với flow quan trọng.
     - **Case B – Task chỉ thay đổi cấu trúc (refactor, đổi folder, đổi tên file, tách component, gom module)**:
       - Chạy các lệnh kỹ thuật:
         - `npm run lint` (hoặc tương đương trong project)
         - `npm run test` (nếu có test liên quan)
         - `npm run build` (hoặc typecheck) để đảm bảo không vỡ import/compile.
       - **Quick smoke test (tuỳ chọn)**: Mở ứng dụng, load 1–2 page chính để chắc chắn app không bị trắng / crash.
       - Không bắt buộc quay phim/chụp ảnh nếu UI/flow không đổi.
     - Quay lại bước code nếu phát hiện issue. Lặp cho đến khi frontend ổn định.
   - **Human review & approve**: HUMAN review UI/UX và approve.
   - **Push code lên nhánh**: Push code frontend lên remote branch. **KHÔNG tự động merge**.

8. **Hoàn thiện & Triển khai (Done & Deploy)**
   - Đảm bảo toàn bộ tính năng hoạt động trơn tru.
   - Báo cáo hoàn thành, hướng dẫn HUMAN merge vào `main` hoặc chuẩn bị deploy.

