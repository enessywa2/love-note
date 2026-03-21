-- Enable Row Level Security on tables
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Event" ENABLE ROW LEVEL SECURITY;

-- Create policies: deny all direct public/anon access.
-- The Express backend connects as the 'postgres' superuser which
-- bypasses RLS, so the API layer remains the sole gatekeeper.

-- User table: no direct access allowed
CREATE POLICY "deny_public_users" ON "User"
  AS RESTRICTIVE
  FOR ALL
  TO PUBLIC
  USING (false);

-- Event table: no direct access allowed
CREATE POLICY "deny_public_events" ON "Event"
  AS RESTRICTIVE
  FOR ALL
  TO PUBLIC
  USING (false);
