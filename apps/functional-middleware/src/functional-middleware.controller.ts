import { Controller, Get } from '@nestjs/common';
import { FunctionalMiddlewareService } from './functional-middleware.service';

@Controller()
export class FunctionalMiddlewareController {
  constructor(private readonly functionalMiddlewareService: FunctionalMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.functionalMiddlewareService.getHello();
  }
}
