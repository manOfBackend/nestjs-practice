import { Test, TestingModule } from '@nestjs/testing';
import { FunctionalMiddlewareController } from './functional-middleware.controller';
import { FunctionalMiddlewareService } from './functional-middleware.service';

describe('FunctionalMiddlewareController', () => {
  let functionalMiddlewareController: FunctionalMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FunctionalMiddlewareController],
      providers: [FunctionalMiddlewareService],
    }).compile();

    functionalMiddlewareController = app.get<FunctionalMiddlewareController>(FunctionalMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(functionalMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
