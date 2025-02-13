import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
