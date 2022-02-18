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
        return this.userRepo.find();
    }

    async createUser(newUser: User) : Promise<User>{
        return this.userRepo.save(newUser);
    }
}