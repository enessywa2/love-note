import { Request, Response, NextFunction } from 'express';
import { createClient } from '@supabase/supabase-js';
import prisma from '../prismaClient';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

export const supabaseAdmin = process.env.SUPABASE_SERVICE_ROLE_KEY 
  ? createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  try {
    // Upsert user into Prisma DB to ensure they exist for other operations (like linking)
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        email: user.email!,
        name: user.user_metadata?.name || null,
        gender: user.user_metadata?.gender || 'male',
      },
      create: {
        id: user.id,
        email: user.email!,
        name: user.user_metadata?.name || null,
        gender: user.user_metadata?.gender || 'male',
      },
    });
  } catch (err) {
    console.error('Failed to sync user to Prisma:', err);
    // We continue even if sync fails, but operations needing the User record might fail later
  }

  req.user = { id: user.id, email: user.email };
  next();
};

export const authenticate = authenticateToken;
