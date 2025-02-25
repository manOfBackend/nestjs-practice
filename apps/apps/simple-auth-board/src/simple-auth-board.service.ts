import { Injectable } from '@nestjs/common';

@Injectable()
export class SimpleAuthBoardService {
  getHello(): string {
    return 'Hello World!';
  }
}
