import { Test, TestingModule } from '@nestjs/testing';
import { GlobalMiddlewareController } from './global-middleware.controller';
import { GlobalMiddlewareService } from './global-middleware.service';

describe('GlobalMiddlewareController', () => {
  let globalMiddlewareController: GlobalMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GlobalMiddlewareController],
      providers: [GlobalMiddlewareService],
    }).compile();

    globalMiddlewareController = app.get<GlobalMiddlewareController>(GlobalMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(globalMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
