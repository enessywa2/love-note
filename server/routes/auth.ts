import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'love-notes-secret-key';

// SIGNUP
router.post('/signup', async (req, res) => {
  const { email, password, name, gender } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name: name || null, gender: gender || 'male' }
    });
    
    const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email, name: user.name, gender: user.gender } });
  } catch (err: any) {
    if (err.code === 'P2002') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email, name: user.name, gender: user.gender } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE ACCOUNT
router.delete('/account', authenticateToken, async (req: any, res) => {
  const userId = req.user.id;
  try {
    // Delete all data associated with the user in a transaction
    await prisma.$transaction([
      prisma.event.deleteMany({ where: { userId } }),
      prisma.note.deleteMany({ where: { userId } }),
      prisma.photo.deleteMany({ where: { userId } }),
      prisma.pushSubscription.deleteMany({ where: { userId } }),
      // If this user was someone's partner, unlink them
      prisma.user.updateMany({
        where: { partnerId: userId },
        data: { partnerId: null }
      }),
      prisma.user.delete({ where: { id: userId } }),
    ]);
    
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    console.error('Delete account error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
