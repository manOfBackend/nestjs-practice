import { Controller, Get } from '@nestjs/common';
import { ExcludeMiddlewareService } from './exclude-middleware.service';

@Controller()
export class ExcludeMiddlewareController {
  constructor(private readonly excludeMiddlewareService: ExcludeMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.excludeMiddlewareService.getHello();
  }
}
