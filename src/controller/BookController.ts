import { Request, Response } from "express";
import { BookEntity } from "../entity/BookEntity";
import { BookService } from "../service/BookService";

export class BookController{
   
    constructor(private service: BookService) {}

   async postBook(req: Request, res: Response){
        const bookData = req.body as BookEntity;

        const book = new BookEntity;
        book.name = bookData.name;
        book.author = bookData.author;
        book.publisherId = bookData.publisherId;
        book.yearPublication = bookData.yearPublication;

        const newBook = await this.service.postBook(book);

        

        if(newBook instanceof BookEntity){
            res.status(201).json(newBook);
        }else{
            res.status(400).json({ messageError: newBook })
        }

        
    }
    
    
    async getAllBooks(req: Request, res: Response) {
        const books = await this.service.getAllBooks();
        
        if(Array.isArray(books)){
            res.status(200).json(books);
        }else{
            res.status(400).json({ messageErro: books })
        }
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

    async putBook(req: Request, res: Response) {
        const bookData = req.body as BookEntity;

        const book = new BookEntity;
        book.name = bookData.name;
        book.author = bookData.author;
        book.publisherId = bookData.publisherId;
        book.yearPublication = bookData.yearPublication;

        const id = parseInt(req.params.id) ;
        
        const updateResult = await this.service.putBooks(id, book);
        
        if(updateResult.affected == 0){
            res.status(404).json({ message: 'Livro não encontrado' });
        }else{
            res.status(200).json({ mensagem: 'Livro atualizado com sucesso' });
        }
    }

    async deleteBook(req: Request, res: Response){
        const id = parseInt(req.params.id) ;
        const book = await this.service.getIdBooks(id);
        
        if(book){
            this.service.deleteBook(id);
            res.status(204).send(); 
        }else{
            res.status(404).json({ message: 'Livro não encontrado' });
        }
    }
}