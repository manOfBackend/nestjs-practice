import { NestFactory } from '@nestjs/core';
import { SimpleAuthBoardModule } from './simple-auth-board.module';

async function bootstrap() {
  const app = await NestFactory.create(SimpleAuthBoardModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
