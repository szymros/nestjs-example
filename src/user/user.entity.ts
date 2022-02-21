import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { feedObj } from './../FeedObj/feedObj.entity'
import { Exclude } from 'class-transformer'

@Entity('users')
export class User{

    @Exclude()
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    username: string;

    @Exclude()
    @Column()
    password: string;

    @Column()   
    name: string;

    @Column()
    second_name: string;

    @OneToMany( () => feedObj, obj => obj.owner_id)
    feedObjs: feedObj[];

    @ManyToMany(() => User)
    @JoinTable({joinColumn: {name: 'users_id_1'}})
    friends: User[];

}