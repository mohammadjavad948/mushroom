import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication, VersioningType} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from './../src/app.module';
import {user, version} from "./data";

describe('work group (e2e)', () => {
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

        console.log(data.body)

        token = data.body.token;
    });

    it('create workgroup', () => {
        return request(app.getHttpServer())
            .post(`/${version}/work-group`)
            .set('auth', token)
            .send({
                name: "sukdfjs",
                color: "#ffffff",
                isPrivate: true
            })
            .expect(201)
    })
});
