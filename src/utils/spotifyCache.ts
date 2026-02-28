// PERF: Spotify data caching utility with 5-minute TTL
const CACHE_KEY = "spotify_playlist_cache";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

interface CacheData<T> {
  data: T;
  timestamp: number;
}

export function getCachedData<T>(key: string = CACHE_KEY): T | null {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp }: CacheData<T> = JSON.parse(cached);
    const now = Date.now();

    // PERF: Check if cache is still valid (within TTL)
    if (now - timestamp < CACHE_TTL) {
      return data;
    }

    // PERF: Cache expired, remove it
    localStorage.removeItem(key);
    return null;
  } catch {
    return null;
  }
}

export function setCachedData<T>(data: T, key: string = CACHE_KEY): void {
  try {
    const cacheData: CacheData<T> = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
  } catch {
    // Silently fail if localStorage is full or unavailable
  }
}

export function clearCache(key: string = CACHE_KEY): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Silently fail
  }
}
