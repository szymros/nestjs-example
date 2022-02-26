import { Controller, Get, Post, Body, UseGuards, Request, Put, Param, UseInterceptors, ClassSerializerInterceptor, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { JwtAuthGuard } from "./../auth/jwt-auth.guard";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController{
    constructor(private readonly UserService: UserService){}

    @Get()
    getUsers(){
        return this.UserService.getUsers();
    }

    @Get(':username')
    getUser(@Param('username') username: string){
        return this.UserService.findOne(username);
    }
    

    @Post()
    createUser(@Body() new_user: User){
        return this.UserService.createUser(new_user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateUser(@Request() req,@Body() user: User){
        return this.UserService.updateUser(req.user.username,user)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':friend')
    addFriend(@Param('friend') friend:string, @Request() req){
        return this.UserService.addFriend(req.user.username, friend);
    }

}