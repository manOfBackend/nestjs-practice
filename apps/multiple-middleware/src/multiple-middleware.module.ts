import { Module } from '@nestjs/common';
import { MultipleMiddlewareController } from './multiple-middleware.controller';
import { MultipleMiddlewareService } from './multiple-middleware.service';

@Module({
  imports: [],
  controllers: [MultipleMiddlewareController],
  providers: [MultipleMiddlewareService],
})
export class MultipleMiddlewareModule {}
