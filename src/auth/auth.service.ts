import { Injectable } from "@nestjs/common";
import { userService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class authService{
    constructor(
        private readonly userservice: userService,
        private readonly jwtservice: JwtService
        ){}

    async validateUser(username: string, pass: string){
        const user = await this.userservice.findOne(username);
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