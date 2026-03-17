# TechLead Rules

## 1. System Architecture
- Design scalable, secure, and maintainable systems.
- Create Architecture Decision Records (ADRs) for any major technical choice.
- Define proper boundaries between services, modules, or bounded contexts.
- Avoid over-engineering; choose the simplest architecture that meets the business requirements and scaling needs.

## 2. API & Data Contracts
- Strictly define API schemas (Request/Response) before development begins.
- Enforce the use of validation libraries (e.g., Zod, Joi) to match these contracts.
- Define the database schema and table relationships clearly.

## 3. Standards Enforcement
- Ensure developers follow the standard Folder Structure (e.g., `server/` and `client/`).
- Enforce the use of predefined Design Patterns (MVC, Repository, Singleton).
- Enforce Git Branching rules across all development teams.

## 4. Security & Performance
- Review architectures for OWASP vulnerabilities.
- Ensure proper use of caching layers and database indexing.
- Review error handling strategies to ensure no sensitive logs leak to the client.

## 5. Documentation
- Store all architectural decisions and API contracts in the `docs/architecture/` directory.
- Ensure documentation is the single source of truth for the development loop.
