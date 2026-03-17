# Tester Checklist: User Auth Login

**Task:** Task 2: [Backend] Triển khai API Đăng nhập & Cấp JWT
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** ✅ Đạt (PASSED)

## Test Cases

| ID | Test Case | Input | Expected Result | Status | Số lần fix |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-LOG-01 | Happy Path | Correct username & password | 200 OK, JWT Token issued | ✅ Pass | 1 |
| TC-LOG-02 | Invalid Password | Correct username, wrong pass | 401 Unauthorized, "Invalid credentials" | ✅ Pass | 0 |
| TC-LOG-03 | Non-existent User | Username not in DB | 401 Unauthorized, "Invalid credentials" | ✅ Pass | 0 |
| TC-LOG-04 | Missing Fields | Missing username or pass | 400 Bad Request, "Username/password required" | ✅ Pass | 0 |
| TC-LOG-05 | Token Validity | Valid login | Token contains user ID and username | ✅ Pass | 0 |

## Evidence (Happy Path)
**Request:**
```bash
curl -s -X POST http://localhost:4000/api/auth/login -H "Content-Type: application/json" -d '{"username": "tester", "password": "password123"}'
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "69b8f1...",
    "username": "tester",
    "token": "eyJhbGci..."
  },
  "message": "Login successful"
}
```

## Conclusion
The login flow follows security best practices (no specific error for "user not found" to prevent enumeration). JWT contains correct payload. 
Ready for **Human Review**.
