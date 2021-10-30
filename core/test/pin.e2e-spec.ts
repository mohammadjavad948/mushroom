import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { user, version } from './data';

describe('pins (e2e)', () => {
  let app: INestApplication;
  let token = '';
  const workId = 1;

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

    const data = await request(app.getHttpServer())
      .post(`/${version}/auth/login`)
      .send(user);

    token = data.body.token;
  });

  it('create pin', () => {
    return request(app.getHttpServer())
      .post(`/${version}/pins/${workId}`)
      .set('auth', token)
      .expect(201);
  });

  it('all pins', async () => {
    const data = await request(app.getHttpServer())
        .get(`/${version}/pins/1`)
        .send(user);

    expect(data.statusCode).toEqual(200);
    expect(data.body.length).toEqual(1);
  });

  it('remove pins', () => {
    return request(app.getHttpServer())
      .delete(`/${version}/pins/${workId}`)
      .set('auth', token)
      .expect(200);
  });
});
