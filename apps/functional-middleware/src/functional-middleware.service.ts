import { Injectable } from '@nestjs/common';

@Injectable()
export class FunctionalMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
