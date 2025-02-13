import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
