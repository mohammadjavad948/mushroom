import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { user, version } from './data';

describe('Sub (e2e)', () => {
  let app: INestApplication;
  let token = '';
  const privateGroupId = 2;
  const publicGroupId = 3;

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

  it('cant sub to private group', () => {
    return request(app.getHttpServer())
      .patch(`/${version}/sub/${privateGroupId}`)
      .set('auth', token)
      .expect(403);
  });

  it('can sub to public group', () => {
    return request(app.getHttpServer())
      .patch(`/${version}/sub/${publicGroupId}`)
      .set('auth', token)
      .expect(200);
  });

  it('can view subs', () => {
    return request(app.getHttpServer())
      .get(`/${version}/sub`)
      .set('auth', token)
      .expect(200);
  });

  it('can unsub from public group', () => {
    return request(app.getHttpServer())
      .patch(`/${version}/sub/unsub/${publicGroupId}`)
      .set('auth', token)
      .expect(200);
  });
});
