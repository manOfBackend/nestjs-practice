import { Module } from '@nestjs/common';
import { DiMiddlewareController } from './di-middleware.controller';
import { DiMiddlewareService } from './di-middleware.service';

@Module({
  imports: [],
  controllers: [DiMiddlewareController],
  providers: [DiMiddlewareService],
})
export class DiMiddlewareModule {}
