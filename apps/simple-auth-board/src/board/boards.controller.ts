import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './interfaces/board.interface';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  findAll(): Board[] {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Board {
    return this.boardsService.findOne(id);
  }

  @Post()
  create(@Body('title') title: string, @Body('content') content: string): Board {
    return this.boardsService.create(title, content);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('content') content: string,
  ): Board {
    return this.boardsService.update(id, title, content);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): { message: string } {
    this.boardsService.delete(id);
    return { message: '게시글이 삭제되었습니다.' };
  }
}
