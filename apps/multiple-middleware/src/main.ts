import { NestFactory } from '@nestjs/core';
import { MultipleMiddlewareModule } from './multiple-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(MultipleMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
