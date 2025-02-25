import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async findAll() {
    return await this.boardsService.findAll();
  }

  @Post()
  create(@Body() board) {
    this.boardsService.create(board);
    return { message: '게시글이 등록되었습니다.' };
  }
}
