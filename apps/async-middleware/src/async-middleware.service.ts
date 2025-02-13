import { Injectable } from '@nestjs/common';

@Injectable()
export class AsyncMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
