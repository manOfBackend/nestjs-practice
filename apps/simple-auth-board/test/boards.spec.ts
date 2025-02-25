import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as request from 'supertest';
import { SimpleAuthBoardModule } from '../src/simple-auth-board.module';

describe('게시판 컨트롤러 (e2e 테스트)', () => {
  let app: NestFastifyApplication;
  let createdBoardId: number;

  beforeAll(async () => {
    jest.setTimeout(10000); // 테스트 타임아웃 증가

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
    const response = await request(app.getHttpServer())
      .post('/boards')
      .send({ title: '테스트 게시글', content: '이것은 테스트입니다.' })
      .expect(201);

    createdBoardId = response.body.id;
    expect(response.body).toHaveProperty('id');
  });

  it('게시글 목록을 조회할 수 있어야 한다.', async () => {
    const response = await request(app.getHttpServer()).get('/boards').expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('게시글 상세 정보를 조회할 수 있어야 한다.', async () => {
    await request(app.getHttpServer())
      .get(`/boards/${createdBoardId}`)
      .expect(200)
      .then((response) => {
        expect(response.body.id).toBe(createdBoardId);
        expect(response.body.title).toBe('테스트 게시글');
      });
  });

  it('게시글을 수정할 수 있어야 한다.', async () => {
    await request(app.getHttpServer())
      .patch(`/boards/${createdBoardId}`)
      .send({ title: '수정된 게시글', content: '수정된 내용입니다.' })
      .expect(200)
      .then((response) => {
        expect(response.body.title).toBe('수정된 게시글');
      });
  });

  it('게시글을 삭제할 수 있어야 한다.', async () => {
    await request(app.getHttpServer()).delete(`/boards/${createdBoardId}`).expect(200);

    await request(app.getHttpServer()).get(`/boards/${createdBoardId}`).expect(404);
  });
});
