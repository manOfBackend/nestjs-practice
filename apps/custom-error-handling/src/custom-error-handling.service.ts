import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomErrorHandlingService {
  getHello(): string {
    return 'Hello World!';
  }
}
