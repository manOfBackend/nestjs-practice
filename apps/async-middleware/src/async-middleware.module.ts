import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AsyncMiddlewareController } from './async-middleware.controller';
import { AsyncMiddlewareService } from './async-middleware.service';
import { UsersController } from './users.controller';
import { AsyncMiddleware } from './async.middleware';

@Module({
  imports: [],
  controllers: [AsyncMiddlewareController, UsersController],
  providers: [AsyncMiddlewareService],
})
export class AsyncMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AsyncMiddleware).forRoutes(UsersController);
  }
}
