/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as request from 'supertest';
import { SimpleAuthBoardModule } from '../src/simple-auth-board.module';

describe('게시판 컨트롤러 (e2e 테스트)', () => {
  let app: NestFastifyApplication;
  let userToken: string;
  let adminToken: string;
  let createdBoardId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SimpleAuthBoardModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();

    userToken = 'Bearer ' + (await getToken('test', 'password'));
    console.log('userToken:', userToken);
    adminToken = 'Bearer ' + (await getToken('admin', 'adminpassword'));
  });

  afterAll(async () => {
    await app.close();
  });

  async function getToken(username: string, password: string) {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username, password });

    if (!response.body || !response.body.access_token) {
      throw new Error(`❌ ${username} ${password} 로그인 실패: ${JSON.stringify(response.body)}`);
    }

    return response.body.access_token;
  }

  it('인증되지 않은 사용자는 게시글 목록을 조회할 수 없어야 한다.', async () => {
    await request(app.getHttpServer()).get('/boards').expect(401);
  });

  it('게시글을 등록할 수 있어야 한다.', async () => {
    const response = await request(app.getHttpServer())
      .post('/boards')
      .set('Authorization', userToken)
      .send({ title: '테스트 게시글', content: '이것은 테스트입니다.' })
      .expect(201);

    createdBoardId = response.body.id;
    expect(response.body).toHaveProperty('id');
  });

  it('게시글 목록을 조회할 수 있어야 한다.', async () => {
    const response = await request(app.getHttpServer())
      .get('/boards')
      .set('Authorization', userToken)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('일반 사용자는 게시글을 수정할 수 없어야 한다.', async () => {
    await request(app.getHttpServer())
      .patch(`/boards/${createdBoardId}`)
      .set('Authorization', userToken)
      .send({ title: '수정된 제목', content: '수정된 내용' })
      .expect(403);
  });

  it('관리자는 게시글을 수정할 수 있어야 한다.', async () => {
    console.log('createdBoardId:', createdBoardId);
    await request(app.getHttpServer())
      .patch(`/boards/${createdBoardId}`)
      .set('Authorization', adminToken)
      .send({ title: '수정된 제목', content: '수정된 내용' })
      .expect(200);
  });

  it('일반 사용자는 게시글을 삭제할 수 없어야 한다.', async () => {
    await request(app.getHttpServer())
      .delete(`/boards/${createdBoardId}`)
      .set('Authorization', userToken)
      .expect(403);
  });

  it('관리자는 게시글을 삭제할 수 있어야 한다.', async () => {
    await request(app.getHttpServer())
      .delete(`/boards/${createdBoardId}`)
      .set('Authorization', adminToken)
      .expect(200);
  });
});
