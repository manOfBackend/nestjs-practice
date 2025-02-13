import { Module } from '@nestjs/common';
import { GlobalMiddlewareController } from './global-middleware.controller';
import { GlobalMiddlewareService } from './global-middleware.service';

@Module({
  imports: [],
  controllers: [GlobalMiddlewareController],
  providers: [GlobalMiddlewareService],
})
export class GlobalMiddlewareModule {}
