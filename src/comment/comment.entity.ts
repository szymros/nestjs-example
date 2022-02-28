import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { FeedObj } from "src/FeedObj/feedObj.entity";


@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    contents: string;

    @ManyToOne(()=> FeedObj, parent => parent.comments)
    parent: FeedObj;

}