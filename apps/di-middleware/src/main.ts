import { NestFactory } from '@nestjs/core';
import { DiMiddlewareModule } from './di-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(DiMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
