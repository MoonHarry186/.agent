# Tester Checklist: User Auth Registration

**Task:** Task 1: [Backend] Triển khai API Đăng ký (Register)
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** ✅ Đạt (PASSED)

## Test Cases

| ID | Test Case | Input | Expected Result | Status | Số lần fix |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-REG-01 | Happy Path | Valid username, email, pass | 201 Created, User object (no pass) | ✅ Pass | 0 |
| TC-REG-02 | Duplicate Username | Existing username | 400 Bad Request, "User already exists" | ✅ Pass | 0 |
| TC-REG-03 | Duplicate Email | Existing email | 400 Bad Request, "User already exists" | ✅ Pass | 0 |
| TC-REG-04 | Missing Fields | Missing email or password | 400 Bad Request, "Missing required fields" | ✅ Pass | 0 |
| TC-REG-05 | Security: Hashing | Valid pass | Password stored as hash in DB | ✅ Pass | 0 |

## Evidence (Happy Path)
**Request:**
```bash
curl -s -X POST http://localhost:4000/api/auth/register -H "Content-Type: application/json" -d '{"username": "tester", "email": "test@test.com", "password": "password123"}'
```
**Response:**
```json
{"success":true,"data":{"id":"69b8f1...","username":"tester","email":"test@test.com"},"message":"User registered successfully"}
```

## Conclusion
The registration flow satisfies all functional and security requirements. 
Password hashing confirmed in MongoDB. Ready for **Human Review**.
