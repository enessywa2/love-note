import express from 'express';
import prisma from '../prismaClient';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// GET STATUS (Current User + Partner)
router.get('/status', authenticateToken, async (req: any, res) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { 
        id: true,
        name: true,
        email: true,
        mood: true,
        partnerId: true 
      }
    });

    if (!user) return res.status(404).json({ error: 'User not found' });

    let partner = null;
    if (user.partnerId) {
      partner = await prisma.user.findUnique({
        where: { id: user.partnerId },
        select: {
          id: true,
          name: true,
          email: true,
          gender: true,
          mood: true,
          lastMoodUpdate: true
        }
      });
    }

    res.json({ linked: !!partner, partner, user: { mood: user.mood } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// LINK PARTNER
router.post('/link', authenticateToken, async (req: any, res) => {
  const userId = req.user.id;
  const { partnerEmail } = req.body;

  if (!partnerEmail) {
    return res.status(400).json({ error: 'Partner email required' });
  }

  try {
    const partner = await prisma.user.findUnique({
      where: { email: partnerEmail }
    });

    if (!partner) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (partner.id === userId) {
      return res.status(400).json({ error: 'You cannot link with yourself' });
    }

    if (partner.partnerId && partner.partnerId !== userId) {
      return res.status(400).json({ error: 'User is already linked to someone else' });
    }

    // Mutual update
    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { partnerId: partner.id }
      }),
      prisma.user.update({
        where: { id: partner.id },
        data: { partnerId: userId }
      })
    ]);

    res.json({ message: 'Partner linked successfully', partner: { id: partner.id, name: partner.name, email: partner.email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// UNLINK PARTNER
router.post('/unlink', authenticateToken, async (req: any, res) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { partnerId: true }
    });

    if (user?.partnerId) {
      await prisma.$transaction([
        prisma.user.update({
          where: { id: userId },
          data: { partnerId: null }
        }),
        prisma.user.update({
          where: { id: user.partnerId },
          data: { partnerId: null }
        })
      ]);
    }

    res.json({ message: 'Partner unlinked successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE MOOD
router.put('/mood', authenticateToken, async (req: any, res) => {
  const userId = req.user.id;
  const { mood } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { 
        mood,
        lastMoodUpdate: new Date()
      }
    });

    res.json({ message: 'Mood updated', mood: user.mood });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
