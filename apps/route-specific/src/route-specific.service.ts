import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteSpecificService {
  getHello(): string {
    return 'Hello World!';
  }
}
