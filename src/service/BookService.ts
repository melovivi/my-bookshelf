import { BookEntity } from "../entity/BookEntity";
import { BookRepository } from "../repository/BookRepository";

export class BookService{

    constructor(private repository: BookRepository){}

    getAllBooks() {
        return this.repository.getAllBooks();
    }

    postBook(book: BookEntity) {
        this.repository.postBook(book);
    }

    getIdBooks(id: number) {
        return this.repository.getIdBooks(id);
    }

    deleteBook(id: number) {            
        this.repository.deleteBook(id);
    }

}