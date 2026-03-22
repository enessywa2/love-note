import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkOnly } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { BackgroundSyncPlugin } from 'workbox-background-sync';

declare let self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

// Cache Supabase API requests for offline access
registerRoute(
  ({ url }) => url.hostname.includes('supabase.co') && url.pathname.includes('/rest/v1/'),
  new StaleWhileRevalidate({
    cacheName: 'supabase-api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
  'GET'
);

// Background Sync for uploads
const bgSyncPlugin = new BackgroundSyncPlugin('photo-upload-queue', {
  maxRetentionTime: 24 * 60 // Retry for up to 24 hours
});

registerRoute(
  ({ url }) => url.hostname.includes('supabase.co') && url.pathname.includes('/rest/v1/'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  if (!event.data) return;

  try {
    const data = event.data.json();
    
    event.waitUntil(
      self.registration.showNotification(data.title || "Love Notes", {
        body: data.body || "You have a new message!",
        icon: "/icon-192.png",
        badge: "/icon-192.png",
        vibrate: [100, 50, 100],
        data: {
          url: data.url || "/",
        }
      })
    );
  } catch (err) {
    console.error("Error parsing push event data:", err);
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';
  
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        // If so, just focus it.
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (self.clients.openWindow) {
        return self.clients.openWindow(urlToOpen);
      }
    })
  );
});
