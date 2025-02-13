import { NestFactory } from '@nestjs/core';
import { FunctionalMiddlewareModule } from './functional-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(FunctionalMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
