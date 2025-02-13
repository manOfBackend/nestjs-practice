import { Module } from '@nestjs/common';
import { AsyncMiddlewareController } from './async-middleware.controller';
import { AsyncMiddlewareService } from './async-middleware.service';

@Module({
  imports: [],
  controllers: [AsyncMiddlewareController],
  providers: [AsyncMiddlewareService],
})
export class AsyncMiddlewareModule {}
