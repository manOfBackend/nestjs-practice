import { Module } from '@nestjs/common';
import { WildcardMiddlewareController } from './wildcard-middleware.controller';
import { WildcardMiddlewareService } from './wildcard-middleware.service';

@Module({
  imports: [],
  controllers: [WildcardMiddlewareController],
  providers: [WildcardMiddlewareService],
})
export class WildcardMiddlewareModule {}
