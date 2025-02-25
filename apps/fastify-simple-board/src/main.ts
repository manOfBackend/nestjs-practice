import { NestFactory } from '@nestjs/core';
import { FastifySimpleBoardModule } from './fastify-simple-board.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    FastifySimpleBoardModule,
    new FastifyAdapter(),
  );

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
