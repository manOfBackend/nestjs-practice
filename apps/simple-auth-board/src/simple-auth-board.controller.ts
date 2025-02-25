import { Controller, Get } from '@nestjs/common';
import { SimpleAuthBoardService } from './simple-auth-board.service';

@Controller()
export class SimpleAuthBoardController {
  constructor(private readonly simpleAuthBoardService: SimpleAuthBoardService) {}

  @Get()
  getHello(): string {
    return this.simpleAuthBoardService.getHello();
  }
}
