import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedObjService } from './feedObj.service';
import { FeedObjController } from './feedObj.controller';
import { FeedObj } from './feedObj.entity'
import { UserModule } from "./../user/user.module";
import { AuthModule } from "./../auth/auth.module";

@Module({
    imports : [ TypeOrmModule.forFeature([FeedObj]), UserModule, AuthModule],
    controllers: [FeedObjController],
    providers : [FeedObjService]
})
export class FeedObjModule{}