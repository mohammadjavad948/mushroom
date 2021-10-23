import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication, VersioningType} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from './../src/app.module';
import {user, version} from "./data";

describe('work (e2e)', () => {
    let app: INestApplication;
    let token = "";
    let id = 2;

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

    it('create work', () => {
        return request(app.getHttpServer())
            .post(`/${version}/work`)
            .set('auth', token)
            .send({
                title: "sukdfjs",
                description: "#ffffff",
                dueDate: new Date(),
                groupId: 1
            })
            .expect(201)
    })

    it('view work', () => {
        return request(app.getHttpServer())
            .get(`/${version}/work/${id}`)
            .set('auth', token)
            .expect(200)
    });

    it('update work', () => {
        return request(app.getHttpServer())
            .patch(`/${version}/work/${id}`)
            .set('auth', token)
            .send({
                title: "sukdfjs",
                description: "#ffffff",
                dueDate: new Date(),
            })
            .expect(200)
    });

    it('remove work', () => {
        return request(app.getHttpServer())
            .delete(`/${version}/work/${id}`)
            .set('auth', token)
            .expect(200)
    });
});
