import { headers } from 'next/headers';
import { Redis } from '@upstash/redis';

// Initialize Redis client. This will silently fail if env vars are missing, 
// allowing the fallback to still function in dev if they don't exist.
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

const WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 3; // Max 3 submissions per minute per IP

// Fallback in-memory map for development if Redis is not configured
const fallbackRateLimitMap = new Map<string, { count: number, timestamp: number }>();

export async function checkRateLimit(): Promise<boolean> {
  try {
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'anonymous';
    
    if (redis) {
      const key = `ratelimit:${ip}`;
      const requests = await redis.incr(key);
      
      if (requests === 1) {
        // Set expiry on the first request
        await redis.expire(key, 60);
      }
      
      if (requests > MAX_REQUESTS) {
        return false;
      }
      return true;
    } else {
      // Fallback in-memory behavior
      const now = Date.now();
      const windowStart = now - WINDOW_MS;
      const record = fallbackRateLimitMap.get(ip);

      if (!record || record.timestamp < windowStart) {
        fallbackRateLimitMap.set(ip, { count: 1, timestamp: now });
        return true;
      }
      if (record.count >= MAX_REQUESTS) {
        return false;
      }
      record.count += 1;
      fallbackRateLimitMap.set(ip, record);
      return true;
    }
  } catch (e) {
    // If headers cannot be read or redis fails, allow by default so we don't break the app
    console.warn('Rate limiter error:', e);
    return true;
  }
}
