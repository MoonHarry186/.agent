# Raw Requirements: Hello User

**Date:** 2026-03-17
**Source:** User Request

## Raw Input
> Hello User (Xin chào User):
> Một ô nhập Tên và nút "Gửi". Frontend gửi tên xuống API POST /hello, Backend trả về đoạn chữ "Xin chào thân ái, [Tên]!" và Frontend hiển thị ra màn hình.

## Initial Notes
- Feature requires a simple UI with an input + button.
- Needs an API `POST /hello` (updated to `/api/hello` per project convention during BA phase).
- Needs to display a predefined greeting string containing the user's name.
