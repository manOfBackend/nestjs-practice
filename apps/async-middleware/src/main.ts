import { NestFactory } from '@nestjs/core';
import { AsyncMiddlewareModule } from './async-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(AsyncMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
