import { Request, Response, Router } from "express";
import { AppDataSource } from "./data-source";
import { BookService } from "./service/BookService";
import { BookRepository } from "./repository/BookRepository";
import { BookController } from "./controller/BookController";

const router = Router(); 

AppDataSource.initialize().then(async () => {
    const repository = new BookRepository(AppDataSource);
    const service = new BookService(repository);
    const controller = new BookController(service);

    router.post('/books', (req: Request, res: Response) => {
        controller.postBook(req, res);
    });

    router.get('/books', (req: Request, res: Response) => {
        controller.getAllBooks(req, res);
    });

    router.get('/books/:id', (req, res) => {
        controller.getIdBooks(req, res);
    });

    router.delete('/books/:id', (req, res) => {
        controller.deleteBook(req, res);
    });
    
}).catch(error => console.log(error))

export default router;