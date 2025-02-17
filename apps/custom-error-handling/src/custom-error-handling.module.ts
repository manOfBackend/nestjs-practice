import { Module } from '@nestjs/common';
import { CustomErrorHandlingController } from './custom-error-handling.controller';
import { CustomErrorHandlingService } from './custom-error-handling.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [CustomErrorHandlingController],
  providers: [CustomErrorHandlingService],
})
export class CustomErrorHandlingModule {}
