import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { feedObjService } from './feedObj.service'
import { feedObj } from "./feedObj.entity";

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

    @Post()
    createFeedObj(@Body() obj: feedObj){
        return this.feedObjService.createFeedObj(obj);
    }
}