import { Test, TestingModule } from '@nestjs/testing';
import { RouteSpecificController } from './route-specific.controller';
import { RouteSpecificService } from './route-specific.service';

describe('RouteSpecificController', () => {
  let routeSpecificController: RouteSpecificController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RouteSpecificController],
      providers: [RouteSpecificService],
    }).compile();

    routeSpecificController = app.get<RouteSpecificController>(RouteSpecificController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(routeSpecificController.getHello()).toBe('Hello World!');
    });
  });
});
