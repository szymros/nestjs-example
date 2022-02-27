import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateUserDto } from './create-user.dto';

describe('UserController', ()=>{
    let controller: UserController;
    let service: UserService;
    const MockUserService = {
        createUser: jest.fn(dto => {
            return {
                id: Date.now(),
                ...dto
            }
        })
    }

    beforeEach( async () => {
        const module: TestingModule = await Test.createTestingModule({
        controllers: [UserController],
        providers: [UserService]
    }).overrideProvider(UserService).useValue(MockUserService).compile();

        controller = module.get<UserController>(UserController);
        service = module.get<UserService>(UserService) 
    })

    it('should be defined' , ()=> {
        expect(controller).toBeDefined();
    })

    it('should create a user', ()=>{
        expect(controller.createUser({username:'admin',password:'admin'})).toEqual({
            id: expect.any(Number),
            username: 'admin',
            password: 'admin',
        })
    })
})
