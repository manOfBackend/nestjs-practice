import { Controller, Get } from '@nestjs/common';
import { RouteSpecificService } from './route-specific.service';

@Controller()
export class RouteSpecificController {
  constructor(private readonly routeSpecificService: RouteSpecificService) {}

  @Get()
  getHello(): string {
    return this.routeSpecificService.getHello();
  }
}
