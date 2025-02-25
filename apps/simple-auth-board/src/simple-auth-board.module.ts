import { Module } from '@nestjs/common';
import { SimpleAuthBoardController } from './simple-auth-board.controller';
import { SimpleAuthBoardService } from './simple-auth-board.service';

@Module({
  imports: [],
  controllers: [SimpleAuthBoardController],
  providers: [SimpleAuthBoardService],
})
export class SimpleAuthBoardModule {}
