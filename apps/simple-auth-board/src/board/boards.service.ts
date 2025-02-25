import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './interfaces/board.interface';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];
  private idCounter = 1;

  findAll(): Board[] {
    return this.boards;
  }

  findOne(id: number): Board {
    const board = this.boards.find((board) => board.id === id);
    if (!board) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }
    return board;
  }

  create(title: string, content: string): Board {
    const newBoard: Board = { id: this.idCounter++, title, content };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, title: string, content: string): Board {
    const board = this.findOne(id);
    board.title = title;
    board.content = content;
    return board;
  }

  delete(id: number): void {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index === -1) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }
    this.boards.splice(index, 1);
  }
}
