import { Controller, Get } from '@nestjs/common';
import { CacheMiddlewareService } from './cache-middleware.service';

@Controller()
export class CacheMiddlewareController {
  constructor(private readonly cacheMiddlewareService: CacheMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.cacheMiddlewareService.getHello();
  }
}
