import { Controller, Get } from '@nestjs/common';
import { BasicMiddlewareService } from './basic-middleware.service';

@Controller()
export class BasicMiddlewareController {
  constructor(
    private readonly basicMiddlewareService: BasicMiddlewareService,
  ) {}

  @Get()
  getHello(): string {
    return this.basicMiddlewareService.getHello();
  }
}
