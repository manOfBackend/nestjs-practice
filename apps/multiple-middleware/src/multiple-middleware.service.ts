import { Injectable } from '@nestjs/common';

@Injectable()
export class MultipleMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
