import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { SimpleAuthBoardModule } from './simple-auth-board.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    SimpleAuthBoardModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
