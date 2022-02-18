import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { feedObjService } from './feedObj.service';
import { feedObjController } from './feedObj.controller';
import { feedObj } from './feedObj.entity'

@Module({
    imports : [ TypeOrmModule.forFeature([feedObj])],
    controllers: [feedObjController],
    providers : [feedObjService]
})
export class feedObjModule{}