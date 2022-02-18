import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class feedObj{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    owner_id: number;

    @Column()
    content: string;
}