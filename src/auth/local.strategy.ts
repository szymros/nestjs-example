import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { authService} from './auth.service';

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    constructor(private authservice: authService){
        super();
    };

    async validate(username: string, pass: string): Promise<any>{
        const user = await this.authservice.validateUser(username, pass);
        if(!user){
            throw new UnauthorizedException;
        }
        return user;
    }
}