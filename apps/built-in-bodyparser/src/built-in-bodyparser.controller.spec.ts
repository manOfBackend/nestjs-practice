import { Test, TestingModule } from '@nestjs/testing';
import { BuiltInBodyparserController } from './built-in-bodyparser.controller';
import { BuiltInBodyparserService } from './built-in-bodyparser.service';

describe('BuiltInBodyparserController', () => {
  let builtInBodyparserController: BuiltInBodyparserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BuiltInBodyparserController],
      providers: [BuiltInBodyparserService],
    }).compile();

    builtInBodyparserController = app.get<BuiltInBodyparserController>(BuiltInBodyparserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(builtInBodyparserController.getHello()).toBe('Hello World!');
    });
  });
});
