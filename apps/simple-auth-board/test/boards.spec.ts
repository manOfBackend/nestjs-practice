import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as request from 'supertest';
import { SimpleAuthBoardModule } from '../src/simple-auth-board.module';

describe('게시판 컨트롤러 (e2e 테스트)', () => {
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

  it('게시글을 등록할 수 있어야 한다.', async () => {
    await request(app.getHttpServer())
      .post('/boards')
      .send({ title: '테스트 게시글', content: '이것은 테스트입니다.' })
      .expect(201);
  });

  it('게시글 목록을 조회할 수 있어야 한다.', async () => {
    const response = await request(app.getHttpServer()).get('/boards').expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
