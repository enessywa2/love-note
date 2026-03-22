import { supabase } from "./supabase";

export async function registerPushSubscription(userId: string) {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.warn('Push notifications are not supported by the browser.');
    return;
  }

  try {
    // Request notification permission
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('Notification permission denied.');
      return;
    }

    // Get the active service worker registration
    const registration = await navigator.serviceWorker.ready;
    if (!registration) {
      console.error('Service Worker registration not found.');
      return;
    }

    // Subscribe to push manager
    const publicVapidKey = import.meta.env.VITE_VAPID_PUBLIC_KEY;
    if (!publicVapidKey) {
      console.error('VITE_VAPID_PUBLIC_KEY is not defined in environment variables.');
      return;
    }

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    // Extract keys for backend
    const p256dh = btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('p256dh')!)));
    const auth = btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('auth')!)));
    const endpoint = subscription.endpoint;

    // Send subscription to Supabase backend
    const { error } = await supabase.from('PushSubscription').upsert({
      userId,
      endpoint,
      p256dh,
      auth
    }, { onConflict: 'endpoint' });

    if (error) {
      console.error('Failed to save push subscription to DB:', error);
    } else {
      console.log('Successfully subscribed to push notifications!');
    }
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
  }
}

// Utility function for VAPID conversion
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
