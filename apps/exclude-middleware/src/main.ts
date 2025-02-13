import { NestFactory } from '@nestjs/core';
import { ExcludeMiddlewareModule } from './exclude-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(ExcludeMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
