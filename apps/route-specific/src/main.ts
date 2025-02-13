import { NestFactory } from '@nestjs/core';
import { RouteSpecificModule } from './route-specific.module';

async function bootstrap() {
  const app = await NestFactory.create(RouteSpecificModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
