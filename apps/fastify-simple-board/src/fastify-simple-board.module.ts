import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FastifySimpleBoardController } from './fastify-simple-board.controller';
import { FastifySimpleBoardService } from './fastify-simple-board.service';
import { AuthModule } from './auth/auth.module';
import { BoardModule } from './board/board.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [AuthModule, BoardModule],
  controllers: [FastifySimpleBoardController],
  providers: [
    FastifySimpleBoardService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class FastifySimpleBoardModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
