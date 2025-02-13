import { NestFactory } from '@nestjs/core';
import { BasicMiddlewareModule } from './basic-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(BasicMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
