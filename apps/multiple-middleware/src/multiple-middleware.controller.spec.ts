import { Test, TestingModule } from '@nestjs/testing';
import { MultipleMiddlewareController } from './multiple-middleware.controller';
import { MultipleMiddlewareService } from './multiple-middleware.service';

describe('MultipleMiddlewareController', () => {
  let multipleMiddlewareController: MultipleMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MultipleMiddlewareController],
      providers: [MultipleMiddlewareService],
    }).compile();

    multipleMiddlewareController = app.get<MultipleMiddlewareController>(MultipleMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(multipleMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
