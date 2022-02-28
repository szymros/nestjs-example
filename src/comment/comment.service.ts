import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity'
import { CreateCommentDto } from './comment-create.dto';
import { FeedObj } from '../../src/FeedObj/feedObj.entity';
import { FeedObjService } from 'src/FeedObj/feedObj.service';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepo: Repository<Comment>,
        private readonly feedObjService: FeedObjService
        ){}

    async createComment(newComment: CreateCommentDto){
        const parent: FeedObj = await this.feedObjService.getOne(newComment.parent_id);
        const comment = this.commentRepo.create(newComment);
        comment.parent = parent;
        return this.commentRepo.save(comment);
    }

    async getComments(parent_id:number){
        const parent: FeedObj = await this.feedObjService.getOne(parent_id);
        return this.commentRepo.find({parent:parent})
    }
}
