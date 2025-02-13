import { NestFactory } from '@nestjs/core';
import { CacheMiddlewareModule } from './cache-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(CacheMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
