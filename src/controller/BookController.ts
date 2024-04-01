import { Request, Response } from "express";
import { BookEntity } from "../entity/BookEntity";
import { BookService } from "../service/BookService";

export class BookController{
    constructor(private service: BookService) {}

   postBook(req: Request, res: Response){
        const bookData = req.body as BookEntity;

        const book = new BookEntity;
        book.name = bookData.name;
        book.author = bookData.author;
        book.publisher = bookData.publisher;
        book.yearPublication = bookData.yearPublication;

        const newBook = this.service.postBook(book);
        res.status(201).json(newBook);
    }
    
    
    async getAllBooks(req: Request, res: Response) {
        const books = await this.service.getAllBooks();
        res.status(200).json(books);
    }

    async getIdBooks(req: Request, res: Response){
        const id = parseInt(req.params.id) ;
        const book = await this.service.getIdBooks(id);

        if(book){
            res.status(200).json(book)
        }else{
            res.status(404).json({ message: 'Livro não encontrado' })
        }
    }

    async deleteBook(req: Request, res: Response){
        const id = parseInt(req.params.id) ;
        const book = await this.service.getIdBooks(id);
        
        
        
        if(book){
            this.service.deleteBook(id);
            res.status(204).send(); 
        }else{
            res.status(404).json({ message: 'Livro não encontrado' })
        }
    }
}