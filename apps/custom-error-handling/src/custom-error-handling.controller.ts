import { Controller, Get } from '@nestjs/common';
import { CustomErrorHandlingService } from './custom-error-handling.service';

@Controller()
export class CustomErrorHandlingController {
  constructor(private readonly customErrorHandlingService: CustomErrorHandlingService) {}

  @Get()
  getHello(): string {
    return this.customErrorHandlingService.getHello();
  }
}
