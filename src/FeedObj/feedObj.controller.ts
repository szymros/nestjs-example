import { Controller, Get, Post, Body, Param, Request, UseGuards } from "@nestjs/common";
import { feedObjService } from './feedObj.service'
import { feedObj } from "./feedObj.entity";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('feed')
export class feedObjController{
    constructor(private readonly feedObjService: feedObjService){};

    @Get()
    getFeed(){
        return this.feedObjService.getFeedObj();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.feedObjService.getOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createFeedObj(@Request() req ,@Body() obj: feedObj){
        return this.feedObjService.createFeedObj(obj, req.user.username);
    }
}