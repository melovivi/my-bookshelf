import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { PublisherEntity } from "./PublisherEntity"

@Entity()
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    author: string

    @ManyToOne(() => PublisherEntity)
    @JoinColumn()
    publisherId: PublisherEntity;

    @Column()
    yearPublication: number

}