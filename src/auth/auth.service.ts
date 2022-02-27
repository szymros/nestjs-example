import { Injectable } from "@nestjs/common";
import { UserService } from "./../user/user.service";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService{
    constructor(
        private readonly UserService: UserService,
        private readonly jwtservice: JwtService
        ){}

    async validateUser(username: string, pass: string){
        const user = await this.UserService.findOne(username);
        if(user && user.password === pass){
            const { password, ...result} = user;
            return user;
        }
        return null;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user.id}
        return{
            access_token: this.jwtservice.sign(payload)
        };
    }
}