import { Controller, Get } from '@nestjs/common';
import { GlobalMiddlewareService } from './global-middleware.service';

@Controller()
export class GlobalMiddlewareController {
  constructor(private readonly globalMiddlewareService: GlobalMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.globalMiddlewareService.getHello();
  }
}
