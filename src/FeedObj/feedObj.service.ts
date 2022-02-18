import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { feedObj } from "./feedObj.entity";

@Injectable()
export class feedObjService{

    constructor(
        @InjectRepository(feedObj)
        private feedObjRepo: Repository<feedObj>
        ){}

    async createFeedObj(newobj: feedObj): Promise<feedObj>{
        return await this.feedObjRepo.save(newobj);
    }

    async getFeedObj(): Promise<feedObj[]>{
        return await this.feedObjRepo.find();
    }

    async getOne(id:number): Promise<feedObj>{
        return await this.feedObjRepo.findOne(id);
    }
}