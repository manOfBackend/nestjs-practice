import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MultipleMiddlewareModule } from '../src/multiple-middleware.module';

describe('MultipleMiddleware (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MultipleMiddlewareModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 401 when Authorization header is missing', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/users').expect(401);

    expect(consoleSpy).toHaveBeenCalledWith('[LoggerMiddleware] GET /users');
    expect(consoleSpy).toHaveBeenCalledWith('[AuthMiddleware] Unauthorized request');

    consoleSpy.mockRestore();
  });

  it('should allow request when Authorization header is present', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', 'Bearer token')
      .expect(200);

    expect(consoleSpy).toHaveBeenCalledWith('[LoggerMiddleware] GET /users');
    expect(consoleSpy).toHaveBeenCalledWith('[AuthMiddleware] Authorized request');

    consoleSpy.mockRestore();
  });
});
