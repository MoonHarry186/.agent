# Tester Checklist: User Auth Registration

**Task:** Task 1: [Backend] Triển khai API Đăng ký (Register)
**Date:** 2026-03-17
**Tester:** `@tester`
**Status:** ✅ Đạt (PASSED)

## AC Checklist
- [x] Endpoint `POST /api/auth/register` exists and is reachable.
- [x] Successfully creates user in MongoDB with payload: `{ username, email, password }`.
- [x] Password is confirmed to be hashed in the database collection.
- [x] System prevents duplicate Registration (returns error if email/username already exists).
- [x] Returns `201 Created` on success.
- [x] Error handling returns `400 Bad Request` for invalid/missing data.

## Test Result
**Request:**
```bash
curl -s -X POST http://localhost:4000/api/auth/register -H "Content-Type: application/json" -d '{"username": "tester", "email": "test@test.com", "password": "password123"}'
```
**Response:**
```json
{"success":true,"data":{"id":"...","username":"tester","email":"test@test.com"},"message":"User registered successfully"}
```

## Conclusion
The registration flow satisfies all security and functional requirements. Ready for **Human Review**.
