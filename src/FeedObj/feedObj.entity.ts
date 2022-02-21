import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './../user/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class feedObj{
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( () => User, user=>user.feedObjs)
    owner_id: User;

    @Column()
    content: string;
}