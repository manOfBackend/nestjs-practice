import { Controller, Get } from '@nestjs/common';
import { FastifySimpleBoardService } from './fastify-simple-board.service';

@Controller()
export class FastifySimpleBoardController {
  constructor(private readonly fastifySimpleBoardService: FastifySimpleBoardService) {}

  @Get()
  getHello(): string {
    return this.fastifySimpleBoardService.getHello();
  }
}
