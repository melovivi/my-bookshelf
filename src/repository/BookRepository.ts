import { DataSource } from "typeorm";
import { AppDataSource } from "../data-source";
import { BookEntity } from "../entity/BookEntity";

export class BookRepository{
    
    constructor(private appDataSource: DataSource){}

    repository = this.appDataSource.getRepository(BookEntity);

    async postBook(book: BookEntity) {
        await this.appDataSource.manager.save(book)
    }

    getAllBooks() {
        return this.repository.find()
    }

    getIdBooks(id: number) {
        try{
            return this.repository.findOneBy({id: id,});
        }catch(error){
            console.error('Erro ao encontrar livro por ID:', error);
            throw error;
        }
    }
    
    deleteBook(id: number) {
        try{
            return this.repository.delete(id);
        }catch(error){
            console.error('Erro ao deletar livro por ID:', error);
            throw error;
        }
    }

}