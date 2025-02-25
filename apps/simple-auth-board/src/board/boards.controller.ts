import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  create(@Body() board: CreateBoardDto) {
    return this.boardsService.create(board.title, board.content);
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.boardsService.update(id, title, content);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.boardsService.delete(id);
    return { message: '게시글이 삭제되었습니다.' };
  }
}
