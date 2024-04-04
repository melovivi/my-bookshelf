import { DataSource } from "typeorm";
import { BookEntity } from "../entity/BookEntity";

export class BookRepository{
    
    constructor(private appDataSource: DataSource){}

    repository = this.appDataSource.getRepository(BookEntity);

    async postBook(book: BookEntity) {

        try{
            return await this.appDataSource.manager.save(book)
        }catch(error){
            if (error.code === "23503") {
                return "Id de editora não encontrado";
            } else {
                return error.message;
            }
        }
    }

    async getAllBooks() {
        try{
            return await this.repository.find({relations: ['publisherId']})
        }catch(error){
            return error;
        }
        
    }

    async getIdBooks(id: number) {
        try{
            return await this.repository.findOne({
                where: { id: id },
                relations: ['publisherId'],
              });
        }catch(error){
            return error;
        }
    }

    async putBooks(id: number, book: BookEntity) {
     
        return await this.repository.update(id, book);
        
        
    }
    
    async deleteBook(id: number) {
        try{
            return await this.repository.delete(id);
        }catch(error){
            return 'Erro ao deletar livro por ID:' + error;
        }
    }

}