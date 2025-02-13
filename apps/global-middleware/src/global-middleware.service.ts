import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
