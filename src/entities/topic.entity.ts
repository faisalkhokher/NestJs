import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { type } from "os";


@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    title:string

    @Column({type:'varchar'})
    description:string

    @OneToMany((type)=> Comment , (comment) => comment.topic)
    comments:Comment

}