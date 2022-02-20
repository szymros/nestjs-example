import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { feedObj } from './../FeedObj/feedObj.entity'

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    second_name: string;

    @OneToMany( () => feedObj, obj => obj.owner_id)
    feedObjs: feedObj[];

}