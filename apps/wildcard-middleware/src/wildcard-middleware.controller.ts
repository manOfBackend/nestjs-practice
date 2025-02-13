import { Controller, Get } from '@nestjs/common';
import { WildcardMiddlewareService } from './wildcard-middleware.service';

@Controller()
export class WildcardMiddlewareController {
  constructor(private readonly wildcardMiddlewareService: WildcardMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.wildcardMiddlewareService.getHello();
  }
}
