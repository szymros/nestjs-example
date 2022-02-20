import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { userService } from "./user.service";
import { userController } from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [userController],
    providers: [userService],
    exports: [userService]
})
export class userModule{}