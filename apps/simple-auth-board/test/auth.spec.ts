import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as request from 'supertest';
import { SimpleAuthBoardModule } from '../src/simple-auth-board.module';

describe('인증 (e2e 테스트)', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SimpleAuthBoardModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('로그인 시 JWT 토큰을 반환해야 한다.', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'test', password: 'password' })
      .expect(201);

    expect(response.body).toHaveProperty('access_token');
  });

  it('잘못된 인증 정보로 로그인하면 401 에러가 발생해야 한다.', async () => {
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'wrong', password: 'password' })
      .expect(401);
  });

  it('JWT 없이 보호된 경로에 접근하면 401 에러가 발생해야 한다.', async () => {
    await request(app.getHttpServer()).get('/auth/profile').expect(401);
  });
});
