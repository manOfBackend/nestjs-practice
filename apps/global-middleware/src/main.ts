import { NestFactory } from '@nestjs/core';
import { GlobalMiddlewareModule } from './global-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(GlobalMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
