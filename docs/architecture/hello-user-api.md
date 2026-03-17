# API Documentation: Hello User API

**Endpoint:** `POST /api/hello`
**Base URL:** `http://localhost:4000`

### Description
Receives a user's name and returns a formatted greeting string.

### Request Body
```json
{
  "name": "string" // Required
}
```

### Response (200 OK)
```json
{
  "success": true,
  "message": "Xin chào thân ái, [name]!",
  "data": null
}
```

### Error Response (400 Bad Request)
Returned if the `name` field is missing or empty.
```json
{
  "success": false,
  "message": "Validation Error: Name is required."
}
```
