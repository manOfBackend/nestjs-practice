import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './board/boards.module';

@Module({
  imports: [AuthModule, UsersModule, BoardsModule],
})
export class SimpleAuthBoardModule {}
