import { Controller, Get } from '@nestjs/common';
import { AsyncMiddlewareService } from './async-middleware.service';

@Controller()
export class AsyncMiddlewareController {
  constructor(private readonly asyncMiddlewareService: AsyncMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.asyncMiddlewareService.getHello();
  }
}
