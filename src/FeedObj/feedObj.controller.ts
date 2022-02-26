import { Controller, Get, Post, Body, Param, Request, UseGuards, UseInterceptors, ClassSerializerInterceptor, Put, Delete } from "@nestjs/common";
import { FeedObjService } from './feedObj.service'
import { FeedObj } from "./feedObj.entity";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('feed')
export class FeedObjController{
    constructor(private readonly FeedObjService: FeedObjService){};

    @Get()
    getFeed(){
        return this.FeedObjService.getFeedObj();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.FeedObjService.getOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateObj(@Param('id') id: number, @Body() newobj: FeedObj, @Request() req){
        return this.FeedObjService.updateObj(id, newobj)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createFeedObj(@Request() req ,@Body() obj: FeedObj){
        return this.FeedObjService.createFeedObj(obj, req.user.username);
    }

    @Delete(':id')
    deleteObj(@Param('id') id:number){
        return this.FeedObjService.deleteObj(id);
    }
}