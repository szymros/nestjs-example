import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

describe('UserController', ()=>{
    let controller: UserController;
    const mockUserService: UserService; 

    beforeEach( async () => {
        const module: TestingModule = await Test.createTestingModule({
        controllers: [UserController],
        providers: [{ provide: 'UserService', useValue: mockUserService}]
    }).overrideGuard('JwtAuthGuard').useValue(()=>{}).compile();
    controller = module.get<UserController>(UserController);
        controller = module.get<UserController>(UserController)
    })

    it('should be defined' , ()=> {
        expect(controller).toBeDefined();
    })  
})
