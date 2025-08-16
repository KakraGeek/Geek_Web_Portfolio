// Simple in-memory rate limiter
// In production, consider using Redis or a more robust solution

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export class RateLimiter {
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 5, windowMs: number = 10 * 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const entry = rateLimitStore.get(identifier);

    if (!entry) {
      // First request from this identifier
      rateLimitStore.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    if (now > entry.resetTime) {
      // Window has expired, reset
      rateLimitStore.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    if (entry.count >= this.maxRequests) {
      // Rate limit exceeded
      return false;
    }

    // Increment count
    entry.count++;
    return true;
  }

  getRemainingTime(identifier: string): number {
    const entry = rateLimitStore.get(identifier);
    if (!entry) return 0;
    
    const remaining = entry.resetTime - Date.now();
    return Math.max(0, remaining);
  }

  // Clean up expired entries (call periodically)
  cleanup(): void {
    const now = Date.now();
    Array.from(rateLimitStore.entries()).forEach(([key, entry]) => {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key);
      }
    });
  }
}

// Create a rate limiter instance: 5 requests per 10 minutes
export const contactRateLimiter = new RateLimiter(5, 10 * 60 * 1000);

// Clean up expired entries every 5 minutes
setInterval(() => {
  contactRateLimiter.cleanup();
}, 5 * 60 * 1000);
