# API Documentation: Hello User API

**Date:** 2026-03-17
**Role:** `@backend-developer`
**Feature:** Core System Health Check / Hello User

## Implemented Endpoint
**POST** `/api/hello`
Base URL: `http://localhost:4000`

### Description
Receives a user's name and returns a formatted greeting string. The endpoint validates input payload using Zod and adheres to the standardized `BaseController` success/error response structure.

### Request Body
```json
{
  "name": "string" // Required: The name of the user
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
  "message": "Name is required."
}
```

## Architectural Notes
- The endpoint is grouped inside the `src/features/hello` directory following the Feature-based Modules Structure rule.
- Logic is delegated to `hello.service.ts` to keep the controller clean.
