import { Injectable } from '@nestjs/common';

@Injectable()
export class DiMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
