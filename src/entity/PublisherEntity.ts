import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { BookEntity } from "./BookEntity"


@Entity()
export class PublisherEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => BookEntity, book => book.publisherId)
    books: BookEntity[]
}
