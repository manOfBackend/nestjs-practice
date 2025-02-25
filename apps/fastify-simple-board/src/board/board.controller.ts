/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Controller, Post, Get, Delete, Body, UseGuards, Req } from '@nestjs/common';
import { BoardService } from './board.service';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { Request } from 'express';

interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  userId: number;
}

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createPost(
    @Req() req: Request,
    @Body() body: { title: string; content: string; image?: string },
  ): Post {
    // @ts-ignore
    return this.boardService.createPost(req.user.userId, body.title, body.content, body.image);
  }

  @Get('all')
  getAllPosts(): Post[] {
    return this.boardService.getAllPosts();
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  deletePost(@Req() req: Request, @Body() body: { postId: number }) {
    // @ts-ignore
    return this.boardService.deletePost(body.postId, req.user.userId);
  }
}
