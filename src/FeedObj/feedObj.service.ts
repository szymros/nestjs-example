import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FeedObj } from "./feedObj.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class FeedObjService{

    constructor(
        @InjectRepository(FeedObj)
        private FeedObjRepo: Repository<FeedObj>,
        private readonly UserService: UserService
        ){}

    async createFeedObj(newobj: FeedObj, username: string): Promise<FeedObj>{
        const user = await this.UserService.findOne(username);
        newobj.owner_id = user;
        return await this.FeedObjRepo.save(newobj);
    }

    async getFeedObj(): Promise<FeedObj[]>{
        return await this.FeedObjRepo.find();
    }

    async getOne(id:number): Promise<FeedObj>{
        return await this.FeedObjRepo.findOne(id);
    }

    async updateObj(id:number, newobj: FeedObj){
        return this.FeedObjRepo.update({id:id},newobj);
    }

    async deleteObj(id:number){
        return this.FeedObjRepo.delete({id:id});
    }
}