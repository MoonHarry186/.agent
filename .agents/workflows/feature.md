---
description: Quy trình phát triển tính năng từ bước nhận yêu cầu đến khi test hoàn thiện
---

# Feature Workflow

Quy trình chuẩn để phát triển một tính năng mới (feature), áp dụng các kỹ năng chuyên biệt (skills) của agent kết hợp với sự phê duyệt của con người.

## Artifacts (Required paths)

- Requirements (raw): `docs/requirements/<feature-name>-request.md`
- Feature spec (BA): `docs/features/<feature-name>.md`
- Task breakdown (PM): `docs/management/<feature-name>-tasks.md`
- Architecture + API contracts (TechLead): `docs/architecture/<feature-name>.md`
- QA checklist + evidence (Tester): `docs/qa/<feature-name>-qa.md`

1. **Nhận Yêu cầu (Request) - `project-manager`**

- Tiếp nhận thông tin yêu cầu ban đầu về tính năng.
- Ghi thông tin yêu cầu thô của user ra `docs/requirements/<feature-name>-request.md`, ghi nguyên văn, có ngày và giờ.
- **Exit criteria**: file requirements tồn tại + đủ ngữ cảnh để BA phân tích (mục tiêu, đối tượng, phạm vi, ràng buộc).

2. **Phân tích (Analyze) - `business-analyst`**

- BA sẽ phân tích yêu cầu nghiệp vụ.
- Output: Định nghĩa rõ ràng User Stories và Acceptance Criteria (AC).
- **Review (HUMAN):** Yêu cầu Người dùng (HUMAN) review tài liệu phân tích.
- **Vòng lặp (Loop):** Nếu HUMAN Reject (yêu cầu sửa), BA phải sửa lại. Chỉ khi HUMAN **Approve** thì mới chuyển sang bước 3.
- **Exit criteria**: spec nằm tại `docs/features/<feature-name>.md`, có AC testable (Pass/Fail), gồm happy/negative/edge cases, có states (loading/empty/error) nếu có UI.

3. **Chia task (Task Breakdown) - `project-manager`**

- PM dựa trên yêu cầu đã phân tích để chia nhỏ thành các task kỹ thuật cụ thể có thể quản lý được.
- Cung cấp estimate và timeline dự kiến nếu cần.
- **Review (HUMAN):** Yêu cầu Người dùng (HUMAN) review danh sách task.
- **Vòng lặp (Loop):** Nếu HUMAN Reject, PM phải điều chỉnh lại. Chỉ khi HUMAN **Approve** thì cập nhật task artifact và chuyển sang bước 4.
- **Exit criteria**: task list nằm tại `docs/management/<feature-name>-tasks.md`, mỗi task có DoD rõ + dependencies + role owner.

4. **Chọn task (Task Selection) - HUMAN**

- Người dùng (HUMAN) mở file Artifact này, đánh dấu `[x]` vào task/component cụ thể muốn Agent thực hiện tiếp theo.

5. **Thiết kế (Architecture) - `techlead`**

- Techlead thiết kế kiến trúc kỹ thuật: database schema, cấu trúc hệ thống, API contracts và các design pattern áp dụng.
- **Output required** (trong `docs/architecture/<feature-name>.md`):
  - DB schema/collections + indexes (nếu có)
  - API contracts (request/response) + error cases (normalized error shape)
  - Permission rules (401/403), validations
  - Integration notes (frontend mapping, states/notifications)
- **Review (HUMAN)**: HUMAN review & approve architecture/contract trước khi vào loop backend/frontend.

6. **Vòng lặp (Loop): Backend cho từng task**

- **Phạm vi**: Áp dụng cho **task backend cụ thể** đã được đánh dấu là đang thực hiện trong `docs/management/<feature-name>-tasks.md`.
- **Tạo branch**: Tạo nhánh mới cho từng task trước khi bắt đầu code.
- **Backend (code) - `backend-developer`:** Triển khai luồng Backend, API, DB dựa trên bản thiết kế.
- **Loop (code → review → test → code)**:
  - Code backend theo thiết kế.
  - **Review code (bot `techlead`)**: Techlead bot review kiến trúc, chất lượng code, bảo mật.
  - **Test chức năng - `tester` (bắt buộc)**: Kiểm thử API, logic và các case quan trọng. Không được bỏ qua bước test.
  - Lưu test cases + kết quả Pass/Fail vào `docs/qa/<feature-name>-qa.md` (kèm evidence nếu cần).
  - Quay lại bước code nếu phát hiện issue. Lặp cho đến khi backend ổn định.
- **Exit criteria (Backend)**:
  - API đúng contract + response/error shape chuẩn
  - Validation + authz (401/403) enforced
  - Không leak stacktrace/sensitive data
  - QA checklist phần backend **Pass**
- **Human review & approve**: HUMAN review lại toàn bộ thay đổi backend và approve.
- **Cập nhật Task**: Backend developer mở `docs/management/<feature-name>-tasks.md`, cập nhật trạng thái task backend tương ứng (ví dụ: `In Review` → `Done`) và **ghi rõ tên mình** vào task đó.
- **Push code lên nhánh**: Push code lên remote branch tương ứng. **KHÔNG tự động merge**.
- **Chờ HUMAN chọn task tiếp theo**: Sau khi hoàn tất 1 task backend và push code, dừng lại và chờ HUMAN chọn task tiếp theo (hoặc cập nhật task mới cần làm).

7. **Vòng lặp (Loop): Frontend cho từng task**

- **Phạm vi**: Áp dụng cho **task frontend cụ thể** đã được đánh dấu là đang thực hiện trong `docs/management/<feature-name>-tasks.md`.
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
    - Lưu test cases + kết quả Pass/Fail vào `docs/qa/<feature-name>-qa.md` (kèm evidence nếu Case A).
  - Quay lại bước code nếu phát hiện issue. Lặp cho đến khi frontend ổn định.
- **Exit criteria (Frontend)**:
  - UI handles states: loading/empty/error/success
  - Notifications/error messages theo chuẩn dự án, không spam
  - Responsive smoke (mobile + desktop)
  - QA checklist phần frontend **Pass** + evidence (nếu Case A)
- **Human review & approve**: HUMAN review UI/UX và approve.
- **Cập nhật Task**: Frontend developer mở `docs/management/<feature-name>-tasks.md`, cập nhật trạng thái task frontend tương ứng (ví dụ: `In Review` → `Done`) và **ghi rõ tên mình** vào task đó.
- **Push code lên nhánh**: Push code frontend lên remote branch. **KHÔNG tự động merge**.
- **Chờ HUMAN chọn task tiếp theo**: Sau khi hoàn tất 1 task frontend và push code, dừng lại và chờ HUMAN chọn task tiếp theo (hoặc cập nhật task mới cần làm).

9. **Hoàn thiện & Triển khai (Done & Deploy)**

- Đảm bảo toàn bộ tính năng hoạt động trơn tru.
- Báo cáo hoàn thành, hướng dẫn HUMAN merge vào `main` hoặc chuẩn bị deploy.
- **Done checklist**:
  - Link artifacts: requirements/spec/tasks/architecture/qa
  - Summary of changes (backend + frontend)
  - How to test (steps)
  - Migration/seed notes (if any)
  - Known limitations / follow-ups

