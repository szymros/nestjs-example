import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateCommentDto } from './comment-create.dto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController{

    constructor(private readonly commentService: CommentService){}

    @Post()
    createComment(@Body() newComment: CreateCommentDto){
        return this.commentService.createComment(newComment);
    }

    @Get(':id')
    getComments(@Param('id') id:number){
        return this.commentService.getComments(id);
    }
}
