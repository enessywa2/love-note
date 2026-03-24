-- Drop any existing restrict policies
DROP POLICY IF EXISTS "Deny all public access to Event" ON "Event";
DROP POLICY IF EXISTS "deny_public_events" ON "Event";
DROP POLICY IF EXISTS "Users can manage their own events" ON "Event";

-- Enable RLS
ALTER TABLE "Event" ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to manage their own events
-- This allows all operations (SELECT, INSERT, UPDATE, DELETE)
CREATE POLICY "Users can manage their own events" 
ON "Event"
FOR ALL 
TO authenticated 
USING (auth.uid()::text = "userId")
WITH CHECK (auth.uid()::text = "userId");
