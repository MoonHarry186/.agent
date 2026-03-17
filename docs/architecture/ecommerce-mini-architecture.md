# Architecture Decision Record: E-commerce Mini (Category & Product)

**Role:** `@techlead`
**Status:** PROPOSED

## 1. Database & Models (MongoDB)

### Category Model
| Field | Type | Description |
| :--- | :--- | :--- |
| `name` | String | Required, Unique, Indexed |
| `description` | String | Optional |
| `createdAt` | DateTime | Auto-generated |

### Product Model
| Field | Type | Description |
| :--- | :--- | :--- |
| `name` | String | Required, Unique |
| `price` | Number | Required, Positive |
| `stock` | Number | Required, Min 0 |
| `categoryId` | ObjectId | **Ref: Category** (Required) |
| `createdAt` | DateTime | Auto-generated |

## 2. API Contracts

### Category APIs
- `GET /api/categories`: List all categories.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: **Sửa (Update)** category name/description.
- `DELETE /api/categories/:id`: **Xóa (Delete)** category (Constraint: Block if has products).

### Product APIs
- `GET /api/products`: List all products (Populate category).
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: **Sửa (Update)** product details.
- `DELETE /api/products/:id`: **Xóa (Delete)** product.

## 3. Implementation Details
- **Backend**: Use `express`, `mongoose`, `zod` for validation.
- **Frontend**: React + Tailwind v4 + Axios + React Query (preferred).
- **Structure**: Feature-based folders in `server/src/features/`.
- **Relationship Policy**: **Negative Guard on Delete**. Cannot delete a Category that contains Products.

## 4. Engineering Compliance
- **Dev Script**: `npm run dev` in both dirs.
- **Environment**: `.env.example` provided for both.
- **Validation**: Zod schema in feature folder.
