import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CacheMiddlewareController } from './cache-middleware.controller';
import { CacheMiddlewareService } from './cache-middleware.service';
import { JobsController } from './jobs.controller';
import { CacheMiddleware } from './cache.middleware';
import { MemoryCacheService } from './memory-cache.service';

@Module({
  imports: [],
  controllers: [CacheMiddlewareController, JobsController],
  providers: [CacheMiddlewareService, MemoryCacheService],
})
export class CacheMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CacheMiddleware).forRoutes(JobsController);
  }
}
