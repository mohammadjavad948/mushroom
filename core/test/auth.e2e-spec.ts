import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { user, version } from './data';

describe('Auth (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1',
    });

    await app.init();
  });

  it('signup', () => {
    return request(app.getHttpServer())
      .post(`/${version}/auth/signup`)
      .send({ username: 'sfsef', password: 'skfj' })
      .expect(201);
  });

  it('login', () => {
    return request(app.getHttpServer())
      .post(`/${version}/auth/login`)
      .send(user)
      .expect(201);
  });
});
