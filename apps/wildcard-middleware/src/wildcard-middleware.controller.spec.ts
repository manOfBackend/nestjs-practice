import { Test, TestingModule } from '@nestjs/testing';
import { WildcardMiddlewareController } from './wildcard-middleware.controller';
import { WildcardMiddlewareService } from './wildcard-middleware.service';

describe('WildcardMiddlewareController', () => {
  let wildcardMiddlewareController: WildcardMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WildcardMiddlewareController],
      providers: [WildcardMiddlewareService],
    }).compile();

    wildcardMiddlewareController = app.get<WildcardMiddlewareController>(WildcardMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wildcardMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
