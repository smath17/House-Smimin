import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createMediaQuery(query: string) {
  // SSR-safe: starts with false on server
  const { subscribe, set } = writable(false);

  if (browser) {
    const mediaQuery = window.matchMedia(query);
    set(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => set(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return {
      subscribe,
      destroy: () => mediaQuery.removeEventListener('change', handler)
    };
  }

  // Server-side: return safe defaults
  return { subscribe, destroy: () => {} };
}

export const isMobile = createMediaQuery('(max-width: 767px)');
export const isTablet = createMediaQuery('(min-width: 768px) and (max-width: 1199px)');
export const isDesktop = createMediaQuery('(min-width: 1200px)');