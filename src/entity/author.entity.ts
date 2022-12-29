import {Entity, Column,PrimaryGeneratedColumn,OneToMany, CreateDateColumn} from 'typeorm';
import {Book} from './book.entity'
@Entity()
export class Author{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    fullName!: string

    @OneToMany(()=>Book, book=> book.author)
    books!: Book

    @CreateDateColumn({type:'timestamp'})
    createAt! :string
}