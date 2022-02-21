import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { feedObj } from "./feedObj.entity";
import { userService } from "src/user/user.service";

@Injectable()
export class feedObjService{

    constructor(
        @InjectRepository(feedObj)
        private feedObjRepo: Repository<feedObj>,
        private readonly userservice: userService
        ){}

    async createFeedObj(newobj: feedObj, username: string): Promise<feedObj>{
        const user = await this.userservice.findOne(username);
        newobj.owner_id = user;
        return await this.feedObjRepo.save(newobj);
    }

    async getFeedObj(): Promise<feedObj[]>{
        return await this.feedObjRepo.find();
    }

    async getOne(id:number): Promise<feedObj>{
        return await this.feedObjRepo.findOne(id);
    }

    async updateObj(id:number, newobj: feedObj){
        return this.feedObjRepo.update({id:id},newobj);
    }

    async deleteObj(id:number){
        return this.feedObjRepo.delete({id:id});
    }
}