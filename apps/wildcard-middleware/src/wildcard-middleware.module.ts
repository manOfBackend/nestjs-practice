import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { WildcardMiddlewareController } from './wildcard-middleware.controller';
import { WildcardMiddlewareService } from './wildcard-middleware.service';
import { AdminController } from './admin.controller';
import { WildcardMiddleware } from './wildcard.middleware';

@Module({
  imports: [],
  controllers: [WildcardMiddlewareController, AdminController],
  providers: [WildcardMiddlewareService],
})
export class WildcardMiddlewareModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(WildcardMiddleware)
      .forRoutes(
        { path: 'admin', method: RequestMethod.ALL },
        { path: 'admin/*', method: RequestMethod.ALL },
      );
  }
}
