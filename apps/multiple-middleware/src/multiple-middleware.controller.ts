import { Controller, Get } from '@nestjs/common';
import { MultipleMiddlewareService } from './multiple-middleware.service';

@Controller()
export class MultipleMiddlewareController {
  constructor(private readonly multipleMiddlewareService: MultipleMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.multipleMiddlewareService.getHello();
  }
}
