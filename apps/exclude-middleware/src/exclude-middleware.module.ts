import { Module } from '@nestjs/common';
import { ExcludeMiddlewareController } from './exclude-middleware.controller';
import { ExcludeMiddlewareService } from './exclude-middleware.service';

@Module({
  imports: [],
  controllers: [ExcludeMiddlewareController],
  providers: [ExcludeMiddlewareService],
})
export class ExcludeMiddlewareModule {}
