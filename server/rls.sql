-- Drop any existing restrict policies
DROP POLICY IF EXISTS "Deny all public access to Event" ON "Event";

-- Enable RLS
ALTER TABLE "Event" ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to manage their own events
CREATE POLICY "Users can manage their own events" 
ON "Event"
FOR ALL 
TO authenticated 
USING ("userId" = auth.uid()::text)
WITH CHECK ("userId" = auth.uid()::text);
