# Tester Checklist: Category CRUD

**Task:** Task 2: [Backend] Triển khai CRUD Danh mục (Category)
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** [/] IN PROGRESS

## Test Cases

| ID | Test Case | Action | Expected Result | Status | Số lần fix |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-CAT-01 | Create Category | POST /api/categories | 201 Created, name returned | ✅ Pass | 0 |
| TC-CAT-02 | Create Duplicate | POST with same name | 400 Bad Request | [ ] | 0 |
| TC-CAT-03 | List Categories | GET /api/categories | 200 OK, list of categories | ✅ Pass | 0 |
| TC-CAT-04 | Update Category | PUT /api/categories/:id | 200 OK, updated data | [ ] | 0 |
| TC-CAT-05 | Delete Category (Empty) | DELETE category with 0 products | [ ] | 0 |
| TC-CAT-06 | Delete Category (Negative) | DELETE category with products | [ ] | 0 |

## Evidence
- **TC-CAT-01 & TC-CAT-03**: Verified via curl.
  - POST Output: `{"success":true,"data":{"name":"Electronics",...},"message":"Category created successfully"}`
  - GET Output: `{"success":true,"data":[{"name":"Electronics",...}],"message":"Categories retrieved successfully"}`
