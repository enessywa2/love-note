ALTER TABLE "Note" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own notes" 
ON "Note"
FOR ALL 
TO authenticated 
USING ("userId" = auth.uid()::text)
WITH CHECK ("userId" = auth.uid()::text);

ALTER TABLE "Photo" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own photos" 
ON "Photo"
FOR ALL 
TO authenticated 
USING ("userId" = auth.uid()::text)
WITH CHECK ("userId" = auth.uid()::text);
