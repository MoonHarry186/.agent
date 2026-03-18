---
trigger: always_on
---

# Frontend Developer Rules

## 0. Mission & Scope (Project-wide)

- Deliver UI/features đúng design, đúng business flow, tích hợp API ổn định.
- Skills có thể đa dạng nhưng **phải tuân thủ tuyệt đối** rule chung của dự án (đặc biệt: JavaScript-only, folder structure, API/error/notification standards, workflow).
- Ưu tiên code đơn giản, rõ ràng, dễ maintain; tránh over-engineering.

## 1. Code Quality & Architecture

- Use a component-based architecture (React, Next.js, etc.).
- Keep components small, reusable, and single-responsibility.
- Follow consistent naming conventions (PascalCase for components, camelCase for variables/functions).
- Avoid deeply nested component trees; use composition.
- Define clear props/state contracts in JavaScript (validate where needed; document assumptions in code).

## 2. State Management

- Use local state (`useState`, `useReducer`) when state is self-contained.
- Use context or tools like Zustand/Redux only for truly global state.
- Keep state as flat as possible.
- Avoid passing props down more than 2-3 levels (Prop Drilling) without Context.

## 3. Performance

- Implement lazy loading for routes and heavy components.
- Optimize and compress images before rendering (use WebP, Next/Image).
- Minimize re-renders by using `useMemo`, `useCallback`, and `React.memo` where appropriate.
- Debounce or throttle frequent events (like scrolling or fast typing).

## 4. Styling & UI/UX

- Use utility classes (TailwindCSS) or CSS Modules systematically.
- Avoid global CSS rules except for CSS variables and resets.
- Ensure all interactive elements have responsive states (hover, focus, active, disabled).
- Maintain a consistent design system (colors, typography, spacing).
- Ensure style is applied consistently across states (loading/disabled/error).
- If has design, strictly follow design.
- Use existing project libraries only; do not introduce new dependencies unless requested.

## 5. Accessibility (a11y)

- Use semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<button>`).
- Provide `alt` text for all meaningful images.
- Ensure all forms have labels.
- Support full keyboard navigation.
- Ensure proper color contrast.

## 6. Data Fetching & APIs

- Follow the project standard API layer in `client/src/apis/` (no scattered `fetch` in UI).
- Always implement UI states: loading / empty / error / success.
- Handle API errors gracefully and display user-friendly messages (no broken white screens).
- Ensure auth failures (401/403) are handled according to project behavior (redirect/login/logout).

## 7. Folder Structure Rule

- **Client Directory**: All frontend application code MUST be stored and executed within the `client/` directory.
- **Src Directory Structure**: Inside `client/src/`, follow this specific structure:
  - `apis/`: API call definitions (e.g., axios instances, services).
  - `assets/`: Static assets (images, fonts, global icons).
  - `components/`: Reusable UI components (buttons, cards, modals).
  - `configs/`: Configuration files (environment variables, global settings).
  - `constants/`: Global constants, enums, or fixed strings.
  - `hooks/`: Custom React hooks.
  - `layouts/`: Layout components (Header, Footer, Sidebar).
  - `pages/`: Page components (routed components).
  - `routers/`: Routing configuration and provider.
  - `stores/`: Global state management files (Zustand, Redux).
  - `utils/`: Helper functions and utilities.
  - `index.css`: Global styles.

### File extensions (Required)

- Use `.js` / `.jsx`
- Do not create `.ts` / `.tsx`

## 8. Git & Workflow

- **Branch Required**: You MUST NEVER code directly on the `main` or `master` branch.
- **Naming Convention**: Use prefix `feature/...`, `bugfix/...`, `ui/...`.
- Provide clear commit messages describing changes to the UI or Logic.
- Always review code before merging.

### 8.1. Tuân thủ Feature Workflow (Frontend)

- Frontend developer **PHẢI** tuân theo chặt chẽ `Feature Workflow` trong `/.agents/workflows/feature-workflow.md`.
- Khi làm frontend cho một feature hoặc một task, luôn follow **Bước 7 – Vòng lặp (Loop): Frontend**
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

## 9. Definition of Done (Frontend)

- UI matches design (desktop + mobile)
- Handles states: loading/empty/error/success
- Error + notification behaviors implemented per project rules
- No runtime crashes; no blocking console errors
