import { Module } from "@nestjs/common";
import { userModule } from "src/user/user.module";
import { authService } from "./auth.service";
import { localStrategy } from "./local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { jwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        userModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'}
        })
    ],
    providers: [authService, localStrategy, jwtStrategy],
    exports: [authService]

})
export class authModule{}