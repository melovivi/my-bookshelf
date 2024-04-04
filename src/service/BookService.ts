import { BookEntity } from "../entity/BookEntity";
import { BookRepository } from "../repository/BookRepository";

export class BookService{

    constructor(private repository: BookRepository){}

    getAllBooks() {
        return this.repository.getAllBooks();
    }

    postBook(book: BookEntity) {
       return this.repository.postBook(book);
    }

    getIdBooks(id: number) {
        return this.repository.getIdBooks(id);
    }

    putBooks(id: number, book: BookEntity) {
        return this.repository.putBooks(id, book);
    }

    deleteBook(id: number) {            
        this.repository.deleteBook(id);
    }

}