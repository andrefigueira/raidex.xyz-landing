# API Reference

## Endpoints

### POST /api/subscribe

Subscribe a new email to the waitlist.

**Request Body:**
```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email format)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "You're in! We'll notify you when raids begin."
}
```

**Error Responses:**

*Validation Error (400):*
```json
{
  "success": false,
  "error": "Name must be at least 2 characters"
}
```

*Duplicate Email (409):*
```json
{
  "success": false,
  "error": "This email is already subscribed"
}
```

*Server Error (500):*
```json
{
  "success": false,
  "error": "Something went wrong. Please try again."
}
```

## Rate Limiting

Currently no rate limiting implemented. Consider adding in production:
- 5 requests per minute per IP
- Use Vercel's Edge Middleware for rate limiting

## Implementation Example

```typescript
// Client-side usage
const subscribe = async (name: string, email: string) => {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};
```

## Database Schema

```sql
CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'landing_page'
);

CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_created_at ON subscribers(created_at);
```
