import { Controller, Get, Post, Body, Param, Request, UseGuards, UseInterceptors, ClassSerializerInterceptor, Put, Delete } from "@nestjs/common";
import { feedObjService } from './feedObj.service'
import { feedObj } from "./feedObj.entity";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseInterceptors(ClassSerializerInterceptor)
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
    @Put(':id')
    updateObj(@Param('id') id: number, @Body() newobj: feedObj, @Request() req){
        return this.feedObjService.updateObj(id, newobj)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createFeedObj(@Request() req ,@Body() obj: feedObj){
        return this.feedObjService.createFeedObj(obj, req.user.username);
    }

    @Delete(':id')
    deleteObj(@Param('id') id:number){
        return this.feedObjService.deleteObj(id);
    }
}