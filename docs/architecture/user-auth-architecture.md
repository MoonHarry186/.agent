# Architecture Decision Record: User Auth System

**Role:** `@techlead`
**Status:** PROPOSED

## 1. Database & ORM
- **Database:** **MongoDB** (NoSQL, flexible, installed on local machine).
- **ODM:** **Mongoose** (Elegant mongodb object modeling for node.js).

### User Collection (Mongoose Schema)
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID / String | Primary Key |
| `username` | String | Unique Identifier |
| `email` | String | Unique, Validated Email |
| `password` | String | **Hashed** version of the password (never plain text) |
| `createdAt` | DateTime | Timestamp |

## 2. API Contracts

### POST `/api/auth/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string (min 8 chars)"
  }
  ```
- **Response (Success):** `201 Created`
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": { "id": "...", "username": "..." }
  }
  ```

### POST `/api/auth/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response (Success):** `200 OK`
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": { "token": "JWT_TOKEN_HERE" }
  }
  ```

## 3. Tech Stack & Security
- **Hashing:** `bcrypt` with salt rounds (default 10).
- **Session:** Stateless using `JSON Web Token (JWT)`.
- **JWT Secret:** To be stored in `.env`.
- **Validation:** `Zod` (Backend) and React state validation (Frontend).

## 4. Folder Structure (Feature-based)
- **Backend:** `server/src/features/auth/` (Controller, Service, Routes).
- **Frontend:** `client/src/pages/auth/`, `client/src/apis/auth.ts`.
