import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from '../src/user/user.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../src/user/user.entity';

describe('UserController (e2e)', () => {
    let app: INestApplication;
    const mockUserRepo = {
        find: jest.fn().mockImplementation(()=>{})
    };

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [UserModule],
        })
        .overrideProvider(getRepositoryToken(User))
        .useValue(mockUserRepo)
        .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });


    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/user')
            .expect(200)
    });
});
