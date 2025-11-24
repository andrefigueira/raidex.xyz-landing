import { sql } from "@vercel/postgres";

export async function createSubscribersTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS subscribers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      source VARCHAR(50) DEFAULT 'landing_page'
    );
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
  `;
}

export async function addSubscriber(name: string, email: string) {
  // Create table if it doesn't exist
  await createSubscribersTable();

  // Check if email already exists
  const existing = await sql`
    SELECT id FROM subscribers WHERE email = ${email}
  `;

  if (existing.rows.length > 0) {
    throw new Error("This email is already subscribed");
  }

  // Insert new subscriber
  const result = await sql`
    INSERT INTO subscribers (name, email)
    VALUES (${name}, ${email})
    RETURNING id, created_at
  `;

  return result.rows[0];
}

export async function getSubscriberCount() {
  await createSubscribersTable();

  const result = await sql`
    SELECT COUNT(*) as count FROM subscribers
  `;

  return parseInt(result.rows[0].count, 10);
}
