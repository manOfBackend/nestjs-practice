import { Injectable } from '@nestjs/common';

@Injectable()
export class BuiltInBodyparserService {
  getHello(): string {
    return 'Hello World!';
  }
}
