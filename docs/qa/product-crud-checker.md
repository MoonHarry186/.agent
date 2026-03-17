# Tester Checklist: Product CRUD

**Task:** Task 3: [Backend] Triển khai CRUD Sản phẩm (Product)
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** [/] IN PROGRESS

## Test Cases

| ID | Test Case | Action | Expected Result | Status | Số lần fix |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-PRO-01 | Create Product | POST /api/products | 201 Created, category linked | ✅ Pass | 0 |
| TC-PRO-02 | Create with Invalid Category | POST with non-existent catId | 404 Not Found | [ ] | 0 |
| TC-PRO-03 | List Products | GET /api/products | 200 OK, category populated | ✅ Pass | 0 |
| TC-PRO-04 | Update Product | PUT /api/products/:id | 200 OK, updated details | [ ] | 0 |
| TC-PRO-05 | Delete Product | DELETE /api/products/:id | 200 OK | [ ] | 0 |
| TC-PRO-06 | Get by Category | GET /api/products/category/:id | 200 OK, filtered list | [ ] | 0 |

## Evidence
- **TC-PRO-01 & TC-PRO-03**: Verified via curl.
  - POST Output: `{"success":true,"data":{"name":"Smartphone",...},"message":"Product created successfully"}`
  - GET Output: `{"success":true,"data":[{"name":"Smartphone","categoryId":{"name":"Electronics",...},...}],"message":"Products retrieved successfully"}`
