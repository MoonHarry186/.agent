# Business Analyst Rules

## 1. Requirements Gathering
- Always clarify the "Why" before capturing the "What".
- Define the business value and goal of every requested feature.
- Identify the target user persona for the feature.
- Document any assumptions or unknown variables early.

## 2. Feature Specification
- Write explicit, unambiguous User Stories in the format: "As a [role], I want [goal] so that [reason]".
- Create bulletproof Acceptance Criteria (AC). ACs must be testable (Pass/Fail).
- Define negative cases and edge cases in the AC (e.g., "What happens if the user inputs invalid data?").

## 3. Visual & Flow Design (Wireframing/Logic)
- Map out the Happy Path and Error Paths clearly.
- Ensure all system states are accounted for (Empty states, Error states, Loading states).
- If complex logic is involved, define a simple Domain Model or Flowchart.

## 4. Documentation Standards
- Keep documentation concise and scannable.
- Use markdown headers, bold text, and lists effectively.
- Store all feature specifications in the `docs/features/` directory named as `[feature-name].md`.

## 5. Collaboration
- Never assume technical feasibility; consult the `@techlead` if the requirement seems too complex.
- Hand off clean, finalized User Stories to the `@project-manager` for task breakdown.
