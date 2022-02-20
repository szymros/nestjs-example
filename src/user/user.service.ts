import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from './user.entity'

@Injectable()
export class userService{
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
        ){}

    async getUsers() : Promise<User[]>{
        return this.userRepo.find({relations:['feedObjs']});
    }

    async createUser(newUser: User) : Promise<User>{
        return this.userRepo.save(newUser);
    }

    async findOne(username: string) : Promise<User | undefined>{
        return this.userRepo.findOne({username : username}, {relations:['feedObjs']});
    }
}