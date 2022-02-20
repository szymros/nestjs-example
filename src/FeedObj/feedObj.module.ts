import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { feedObjService } from './feedObj.service';
import { feedObjController } from './feedObj.controller';
import { feedObj } from './feedObj.entity'
import { userModule } from "src/user/user.module";
import { authModule } from "src/auth/auth.module";

@Module({
    imports : [ TypeOrmModule.forFeature([feedObj]), userModule, authModule],
    controllers: [feedObjController],
    providers : [feedObjService]
})
export class feedObjModule{}