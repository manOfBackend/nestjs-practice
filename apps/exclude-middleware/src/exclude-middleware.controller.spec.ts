import { Test, TestingModule } from '@nestjs/testing';
import { ExcludeMiddlewareController } from './exclude-middleware.controller';
import { ExcludeMiddlewareService } from './exclude-middleware.service';

describe('ExcludeMiddlewareController', () => {
  let excludeMiddlewareController: ExcludeMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExcludeMiddlewareController],
      providers: [ExcludeMiddlewareService],
    }).compile();

    excludeMiddlewareController = app.get<ExcludeMiddlewareController>(ExcludeMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(excludeMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
