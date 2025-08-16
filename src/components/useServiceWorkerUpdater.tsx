'use client';
import { useEffect, useState } from 'react';
import { Workbox } from 'workbox-window';

export function useServiceWorkerUpdater() {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      try {
        const wb = new Workbox('/sw.js');
        wb.addEventListener('waiting', () => setHasUpdate(true));
        wb.register();
      } catch {
        // ignore if not in production
      }
    }
  }, []);

  return { hasUpdate };
}
