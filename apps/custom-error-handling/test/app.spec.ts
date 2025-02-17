/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CustomErrorHandlingModule } from '../src/custom-error-handling.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CustomErrorHandlingModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('✅ [POST] /users - 성공적으로 유저 생성', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({ email: 'test@example.com', password: 'password123' })
      .expect(201);

    expect(response.body).toEqual({
      message: 'User created successfully',
      data: {
        email: 'test@example.com',
        password: 'password123',
      },
    });
  });

  it('❌ [POST] /users - 이메일이 없으면 400 에러 반환', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({ password: 'password123' })
      .expect(400);

    expect(response.body).toHaveProperty('error', 'Custom Validation Error');
    expect(response.body.message).toContain('email must be an email');
  });

  it('❌ [POST] /users - 패스워드가 없으면 400 에러 반환', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({ email: 'test@example.com' })
      .expect(400);

    expect(response.body).toHaveProperty('error', 'Custom Validation Error');
    expect(response.body.message).toContain('password should not be empty');
  });
});
