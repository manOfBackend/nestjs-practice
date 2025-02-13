import { Module } from '@nestjs/common';
import { FunctionalMiddlewareController } from './functional-middleware.controller';
import { FunctionalMiddlewareService } from './functional-middleware.service';

@Module({
  imports: [],
  controllers: [FunctionalMiddlewareController],
  providers: [FunctionalMiddlewareService],
})
export class FunctionalMiddlewareModule {}
