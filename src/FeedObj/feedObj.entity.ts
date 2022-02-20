import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './../user/user.entity';

@Entity()
export class feedObj{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( () => User, user=>user.feedObjs)
    owner_id: User;

    @Column()
    content: string;
}