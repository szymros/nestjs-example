import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from './user.entity'
import { UserModule } from "./user.module";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
        ){}

    async getUsers() : Promise<User[]>{
        return this.userRepo.find({relations:['FeedObjs', 'friends']});
    }

    async createUser(newUser: User) : Promise<User>{
        return this.userRepo.save(newUser);
    }

    async findOne(username: string) : Promise<User | undefined>{
        return this.userRepo.findOne({username : username}, {relations:['FeedObjs']});
    }

    async updateUser(username:string,updatedUser: User){
        const user : User = await this.userRepo.findOne({username:username});
        return this.userRepo.update({username:user.username},updatedUser);
    }


    //this works but it returns an error
    async addFriend(username:string, friendname:string){
        const friend: User = await this.userRepo.findOne({username:friendname},{relations:['friends']});
        const user: User = await this.userRepo.findOne({username:username},{relations:['friends']});
        user.friends.push(friend);
        friend.friends.push(user)
        await this.userRepo.save(friend);
        return await this.userRepo.save(user);
    }
}