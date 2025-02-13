import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MultipleMiddlewareController } from './multiple-middleware.controller';
import { MultipleMiddlewareService } from './multiple-middleware.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger.middleware';
import { AuthMiddleware } from './auth.middleware';

@Module({
  imports: [],
  controllers: [MultipleMiddlewareController, UsersController],
  providers: [MultipleMiddlewareService],
})
export class MultipleMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, AuthMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
