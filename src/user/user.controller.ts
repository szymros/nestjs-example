import { Controller, Get, Post, Body, UseGuards, Request, Put, Param, UseInterceptors, ClassSerializerInterceptor, Req } from "@nestjs/common";
import { userService } from "./user.service";
import { User } from "./user.entity";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class userController{
    constructor(private readonly userService: userService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':username')
    getUser(@Param('username') username: string){
        return this.userService.findOne(username);
    }
    

    @Post()
    createUser(@Body() new_user: User){
        return this.userService.createUser(new_user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateUser(@Request() req,@Body() user: User){
        return this.userService.updateUser(req.user.username,user)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':friend')
    addFriend(@Param('friend') friend:string, @Request() req){
        return this.userService.addFriend(req.user.username, friend);
    }

}