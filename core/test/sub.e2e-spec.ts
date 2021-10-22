import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication, VersioningType} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from './../src/app.module';
import {user, version} from "./data";

describe('Sub (e2e)', () => {
    let app: INestApplication;
    let token = "";

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

});
