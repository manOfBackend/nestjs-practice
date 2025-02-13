import { Controller, Get } from '@nestjs/common';
import { DiMiddlewareService } from './di-middleware.service';

@Controller()
export class DiMiddlewareController {
  constructor(private readonly diMiddlewareService: DiMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.diMiddlewareService.getHello();
  }
}
