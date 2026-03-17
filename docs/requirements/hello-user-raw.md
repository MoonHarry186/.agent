# Raw Requirements: Hello User

**Date:** 2026-03-17
**Source:** User Request

## Raw Input
> Hello User (Xin chào User):
> Một ô nhập Tên và nút "Gửi". Frontend gửi tên xuống API POST /hello, Backend trả về đoạn chữ "Xin chào thân ái, [Tên]!" và Frontend hiển thị ra màn hình.

## Initial Notes
- Simple feature to test end-to-end flow.
- UI: Input field + Submit button.
- API: `POST /hello` (will map to `/api/hello` per standard REST conventions).
- Backend returns a personalized greeting.
- Frontend displays the greeting.
