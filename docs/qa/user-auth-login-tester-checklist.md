# Tester Checklist: User Auth Login

**Task:** Task 2: [Backend] Triển khai API Đăng nhập & Cấp JWT
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** ✅ Đạt (PASSED)

## AC Checklist
- [x] Endpoint `POST /api/auth/login` exists and is reachable.
- [x] Successfully authenticates valid credentials.
- [x] Returns a valid `JWT` token in the response data.
- [x] Returns `401 Unauthorized` for incorrect password.
- [x] Returns `401 Unauthorized` for non-existent username.
- [x] Returns `400 Bad Request` for missing fields in request body.

## Test Result
**Request:**
```bash
curl -s -X POST http://localhost:4000/api/auth/login -H "Content-Type: application/json" -d '{"username": "harrymoon", "password": "securePassword123"}'
```
**Response:**
```json
{"success":true,"data":{"id":"...","username":"harrymoon","token":"..."},"message":"Login successful"}
```

## Conclusion
The login flow follows all security standards and successfully issues tokens. Ready for **Human Review**.
