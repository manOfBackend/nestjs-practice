import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RouteSpecificController } from './route-specific.controller';
import { RouteSpecificService } from './route-specific.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [RouteSpecificController, UsersController],
  providers: [RouteSpecificService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET }); // GET /users 요청에서만 실행
  }
}
