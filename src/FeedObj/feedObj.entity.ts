import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity'
import { Exclude } from 'class-transformer';

@Entity()
export class FeedObj{
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne( () => User, user=>user.FeedObjs)
    owner_id: User;

    @OneToMany(() => Comment, comment=> comment.parent)
    comments: Comment[];
}