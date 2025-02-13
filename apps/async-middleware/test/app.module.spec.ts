import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AsyncMiddlewareModule } from '../src/async-middleware.module';

describe('AsyncMiddleware (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AsyncMiddlewareModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should log async processing for GET /users', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const start = Date.now();
    await request(app.getHttpServer()).get('/users').expect(200);
    const duration = Date.now() - start;

    expect(consoleSpy).toHaveBeenCalledWith('[Async Middleware] Processing request...');
    expect(consoleSpy).toHaveBeenCalledWith('[Async Middleware] Request completed.');
    expect(duration).toBeGreaterThanOrEqual(2000); // 최소 2초 이상 걸리는지 확인

    consoleSpy.mockRestore();
  });
});
