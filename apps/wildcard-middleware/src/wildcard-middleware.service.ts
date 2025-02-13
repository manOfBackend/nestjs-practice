import { Injectable } from '@nestjs/common';

@Injectable()
export class WildcardMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
