import { Injectable } from '@nestjs/common';

interface Board {
  title: string;
  content: string;
}

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  findAll() {
    return this.boards;
  }

  create(board: Board) {
    this.boards.push(board);
  }
}
