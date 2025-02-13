import { Injectable } from '@nestjs/common';

@Injectable()
export class ExcludeMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
