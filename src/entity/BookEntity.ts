import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    author: string

    @Column()
    publisher: string

    @Column()
    yearPublication: number

}