/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryCacheService {
  private cache: Map<string, string> = new Map();

  async get(key: string): Promise<string | null> {
    return this.cache.get(key) || null;
  }

  async set(key: string, value: any, ttl: number = 30): Promise<void> {
    this.cache.set(key, JSON.stringify(value));

    // TTL 적용 (메모리에서 자동 삭제)
    setTimeout(() => this.cache.delete(key), ttl * 1000);
  }

  async del(key: string): Promise<void> {
    this.cache.delete(key);
  }
}
