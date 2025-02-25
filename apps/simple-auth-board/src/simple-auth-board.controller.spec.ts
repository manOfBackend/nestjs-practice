import { Test, TestingModule } from '@nestjs/testing';
import { SimpleAuthBoardController } from './simple-auth-board.controller';
import { SimpleAuthBoardService } from './simple-auth-board.service';

describe('SimpleAuthBoardController', () => {
  let simpleAuthBoardController: SimpleAuthBoardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SimpleAuthBoardController],
      providers: [SimpleAuthBoardService],
    }).compile();

    simpleAuthBoardController = app.get<SimpleAuthBoardController>(SimpleAuthBoardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(simpleAuthBoardController.getHello()).toBe('Hello World!');
    });
  });
});
