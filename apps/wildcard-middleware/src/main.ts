import { NestFactory } from '@nestjs/core';
import { WildcardMiddlewareModule } from './wildcard-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(WildcardMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
