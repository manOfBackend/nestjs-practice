import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AsyncMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Async Middleware] Processing request...`);

    // 비동기 작업 (예제: 2초 지연)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`[Async Middleware] Request completed.`);
    next();
  }
}
