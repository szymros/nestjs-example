import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService} from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private AuthService: AuthService){
        super();
    };

    async validate(username: string, pass: string): Promise<any>{
        const user = await this.AuthService.validateUser(username, pass);
        if(!user){
            throw new UnauthorizedException;
        }
        return user;
    }
}