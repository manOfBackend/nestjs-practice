/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MemoryCacheService } from './memory-cache.service';

@Injectable()
export class CacheMiddleware implements NestMiddleware {
  constructor(private readonly cacheService: MemoryCacheService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const cacheKey = req.originalUrl;
    const cachedData = await this.cacheService.get(cacheKey);

    if (cachedData) {
      console.log(`[CacheMiddleware] Cache hit for ${cacheKey}`);
      return res.json(JSON.parse(cachedData));
    }

    console.log(`[CacheMiddleware] Cache miss for ${cacheKey}`);

    const originalJson = res.json.bind(res);
    res.json = ((body: any) => {
      if (res.statusCode === 200) {
        this.cacheService.set(cacheKey, body, 30).catch(console.error);
      }
      return originalJson(body);
    }) as unknown as typeof res.json;

    next();
  }
}
