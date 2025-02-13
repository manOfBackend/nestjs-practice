import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      console.log('[AuthMiddleware] Unauthorized request');
      return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log('[AuthMiddleware] Authorized request');
    next();
  }
}
