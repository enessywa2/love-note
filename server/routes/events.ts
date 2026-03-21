import express from 'express';
import prisma from '../prismaClient';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = express.Router();

// GET all events for user
router.get('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { userId: req.user!.id }
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ADD event
router.post('/', authenticate, async (req: AuthRequest, res) => {
  const { title, month, day, emoji } = req.body;

  try {
    const event = await prisma.event.create({
      data: {
        userId: req.user!.id,
        title,
        month: parseInt(month),
        day: parseInt(day),
        emoji
      }
    });
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE event
router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    await prisma.event.delete({
      where: { 
        id: req.params.id,
        userId: req.user!.id
      }
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
