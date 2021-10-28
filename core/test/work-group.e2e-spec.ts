import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { user, version } from './data';

describe('work group (e2e)', () => {
  let app: INestApplication;
  let token = '';
  const id = 4;

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

  it('create workgroup', () => {
    return request(app.getHttpServer())
      .post(`/${version}/work-group`)
      .set('auth', token)
      .send({
        name: 'sukdfjs',
        color: '#ffffff',
        isPrivate: true,
      })
      .expect(201);
  });

  it('view workgroup', () => {
    return request(app.getHttpServer())
      .get(`/${version}/work-group/${id}`)
      .set('auth', token)
      .expect(200);
  });

  it('update workgroup', () => {
    return request(app.getHttpServer())
      .patch(`/${version}/work-group/${id}`)
      .set('auth', token)
      .send({
        name: 'jhggk',
        color: '#ffffff',
        isPrivate: false,
      })
      .expect(200);
  });

  it('remove workgroup', () => {
    return request(app.getHttpServer())
      .delete(`/${version}/work-group/${id}`)
      .set('auth', token)
      .expect(200);
  });
});
