import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/route-specific.module';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should log request for GET /users', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/users').expect(200);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\[Route-Specific Middleware\] GET \/users/),
    );
    consoleSpy.mockRestore();
  });

  it('should NOT log request for POST /users', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).post('/users').send({}).expect(404);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should NOT log request for GET /other-route', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/other-route').expect(404);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
