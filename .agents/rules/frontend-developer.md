---
trigger: always_on
---

# Frontend Developer Rules

## 1. Code Quality & Architecture
- Use a component-based architecture (React, Next.js, etc.).
- Keep components small, reusable, and single-responsibility.
- Follow consistent naming conventions (PascalCase for components, camelCase for variables/functions).
- Avoid deeply nested component trees; use composition.
- Strongly type all props and state using TypeScript.

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
- Make sure style is applied
- If has design, strictly follow design
- Use libraries: antd, axios, react-icons, react-redux, react-router-dom, react-dom, lodash

## 5. Accessibility (a11y)
- Use semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<button>`).
- Provide `alt` text for all meaningful images.
- Ensure all forms have labels.
- Support full keyboard navigation.
- Ensure proper color contrast.

## 6. Data Fetching & APIs
- Use robust data fetching libraries like React Query or SWR to handle caching and loading states.
- Always implement loading skeletons or spinners.
- Handle API errors gracefully and display user-friendly error messages (no broken white screens).
- Libraries might be utilized: @reduxjs/toolkit/query/react, @reduxjs/toolkit, react-query based on the requirements

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
  - `App.tsx`: Main application component.
  - `index.css`: Global styles.
  - `main.tsx`: Entry point.

## 8. Git & Workflow
- **Branch Required**: You MUST NEVER code directly on the `main` or `master` branch.
- **Naming Convention**: Use prefix `feature/...`, `bugfix/...`, `ui/...`.
- Provide clear commit messages describing changes to the UI or Logic.
- Always review code before merging.