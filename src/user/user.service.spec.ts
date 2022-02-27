import { UserService } from "./user.service"
import { TestingModule, Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./user.entity";

describe('UserService', ()=>{
    let service: UserService;
    let MockUserRepo = {
        save: jest.fn().mockImplementation(user=>Promise.resolve({...user}))
    };

    beforeEach( async () =>{
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                { provide: getRepositoryToken(User), useValue: MockUserRepo}
            ]
        }).compile()

        service = module.get<UserService>(UserService);
    })

    it('should be defined', ()=>{
        expect(service).toBeDefined();
    })

    it('should create a user', async ()=>{
        expect(await service.createUser({username:'admin', password:'admin'})).toEqual({
            username:'admin',
            password: 'admin'
        })
    })
})