import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { FeedObjModule } from '../FeedObj/feedObj.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity'

@Module({
  imports: [FeedObjModule, TypeOrmModule.forFeature([Comment])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
