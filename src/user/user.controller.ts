import { Controller, Get, Post, Body } from "@nestjs/common";
import { userService } from "./user.service";
import { User } from "./user.entity";

@Controller('user')
export class userController{
    constructor(private readonly userService: userService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() new_user: User){
        return this.userService.createUser(new_user);
    }
}