import { NestFactory } from '@nestjs/core';
import { CustomErrorHandlingModule } from './custom-error-handling.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from './custom-exception/custom-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(CustomErrorHandlingModule);

  // 글로벌 ValidationPipe 적용
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // 커스텀 예외 필터 적용
  app.useGlobalFilters(new CustomExceptionFilter());

  await app.listen(3000);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
