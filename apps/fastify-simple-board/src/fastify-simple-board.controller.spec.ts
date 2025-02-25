import { Test, TestingModule } from '@nestjs/testing';
import { FastifySimpleBoardController } from './fastify-simple-board.controller';
import { FastifySimpleBoardService } from './fastify-simple-board.service';

describe('FastifySimpleBoardController', () => {
  let fastifySimpleBoardController: FastifySimpleBoardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FastifySimpleBoardController],
      providers: [FastifySimpleBoardService],
    }).compile();

    fastifySimpleBoardController = app.get<FastifySimpleBoardController>(FastifySimpleBoardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fastifySimpleBoardController.getHello()).toBe('Hello World!');
    });
  });
});
