import { Controller, Get } from '@nestjs/common';
import { BuiltInBodyparserService } from './built-in-bodyparser.service';

@Controller()
export class BuiltInBodyparserController {
  constructor(private readonly builtInBodyparserService: BuiltInBodyparserService) {}

  @Get()
  getHello(): string {
    return this.builtInBodyparserService.getHello();
  }
}
