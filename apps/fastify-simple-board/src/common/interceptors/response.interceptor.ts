import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before request is handled');
    const start = Date.now();

    return next.handle().pipe(
      tap(() => console.log(`Response time: ${Date.now() - start}ms`)),
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
