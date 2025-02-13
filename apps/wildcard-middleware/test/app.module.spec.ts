import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WildcardMiddlewareModule } from '../src/wildcard-middleware.module';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WildcardMiddlewareModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should log request for GET /admin', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/admin').expect(200);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\[Wildcard Middleware\] GET \/admin/),
    );
    consoleSpy.mockRestore();
  });

  it('should log request for GET /admin/123', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/admin/123').expect(200);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\[Wildcard Middleware\] GET \/admin\/123/),
    );
    consoleSpy.mockRestore();
  });

  it('should NOT log request for GET /users', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/users').expect(404); // 이 경로는 존재하지 않음

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
