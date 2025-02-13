import { Test, TestingModule } from '@nestjs/testing';
import { DiMiddlewareController } from './di-middleware.controller';
import { DiMiddlewareService } from './di-middleware.service';

describe('DiMiddlewareController', () => {
  let diMiddlewareController: DiMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiMiddlewareController],
      providers: [DiMiddlewareService],
    }).compile();

    diMiddlewareController = app.get<DiMiddlewareController>(DiMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(diMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
