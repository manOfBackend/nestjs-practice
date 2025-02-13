import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MemoryCacheService } from '../src/memory-cache.service';
import { CacheMiddlewareModule } from '../src/cache-middleware.module';

describe('CacheMiddleware (e2e)', () => {
  let app: INestApplication;
  let cacheService: MemoryCacheService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CacheMiddlewareModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    cacheService = moduleFixture.get<MemoryCacheService>(MemoryCacheService);
    await app.init();
  });

  afterAll(async () => {
    await cacheService.del('/jobs/1'); // 테스트 후 캐시 삭제
    await app.close();
  });

  it('should cache job data', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await request(app.getHttpServer()).get('/jobs/1').expect(200);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Cache miss/));

    await request(app.getHttpServer()).get('/jobs/1').expect(200);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Cache hit/));

    consoleSpy.mockRestore();
  });
});
