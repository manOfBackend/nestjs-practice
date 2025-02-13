import { NestFactory } from '@nestjs/core';
import { BuiltInBodyparserModule } from './built-in-bodyparser.module';

async function bootstrap() {
  const app = await NestFactory.create(BuiltInBodyparserModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
