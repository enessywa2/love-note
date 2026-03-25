import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';
import ideasData from '../src/data/ideas.json';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const vapidPublic = process.env.VITE_VAPID_PUBLIC_KEY;
const vapidPrivate = process.env.VAPID_PRIVATE_KEY;
const vapidSubject = process.env.VAPID_SUBJECT || 'mailto:hello@lovenote.com';

interface Request {
  method: string;
  headers: {
    authorization?: string;
  };
}

interface Response {
  status: (code: number) => {
    json: (data: any) => Response;
  };
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // To secure it, we expect a CRON_SECRET from Vercel CRON or manual trigger
  if (
    process.env.CRON_SECRET &&
    req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!supabaseUrl || !supabaseKey || !vapidPublic || !vapidPrivate) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  webpush.setVapidDetails(vapidSubject, vapidPublic, vapidPrivate);
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Fetch all active subscriptions
    const { data: subscriptions, error } = await supabase
      .from('PushSubscription')
      .select('*');

    if (error) throw error;
    if (!subscriptions || subscriptions.length === 0) {
      return res.status(200).json({ message: 'No subscriptions found' });
    }

    let successCount = 0;
    let failureCount = 0;

    // Send a random idea to each subscription
    for (const sub of subscriptions) {
      const randomIdea = ideasData[Math.floor(Math.random() * ideasData.length)];
      
      const pushConfig = {
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth,
        },
      };

      const payload = JSON.stringify({
        title: `Love Note Idea ${randomIdea.emoji}`,
        body: randomIdea.text,
        url: '/ideas',
      });

      try {
        await webpush.sendNotification(pushConfig, payload);
        successCount++;
      } catch (err: any) {
        console.error('Error sending push:', err);
        // If subscription is gone (410 or 404), remove it from DB
        if (err.statusCode === 410 || err.statusCode === 404) {
          await supabase.from('PushSubscription').delete().eq('id', sub.id);
        }
        failureCount++;
      }
    }

    return res.status(200).json({ 
      message: 'Push notifications processed', 
      successCount, 
      failureCount 
    });

  } catch (error) {
    console.error('Notification handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
