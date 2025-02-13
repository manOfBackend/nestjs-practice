import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BasicMiddlewareController } from './basic-middleware.controller';
import { BasicMiddlewareService } from './basic-middleware.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [BasicMiddlewareController],
  providers: [BasicMiddlewareService],
})
export class BasicMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
