import { Test, TestingModule } from '@nestjs/testing';
import { AsyncMiddlewareController } from './async-middleware.controller';
import { AsyncMiddlewareService } from './async-middleware.service';

describe('AsyncMiddlewareController', () => {
  let asyncMiddlewareController: AsyncMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AsyncMiddlewareController],
      providers: [AsyncMiddlewareService],
    }).compile();

    asyncMiddlewareController = app.get<AsyncMiddlewareController>(AsyncMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(asyncMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
