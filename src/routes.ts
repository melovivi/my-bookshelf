import { Request, Response, Router } from "express";
import { AppDataSource } from "./data-source";
import { BookService } from "./service/BookService";
import { BookRepository } from "./repository/BookRepository";
import { BookController } from "./controller/BookController";
import { PublisherRepository } from "./repository/PublisherRepository";
import { PublisherService } from "./service/PublisherService";
import { PublisherController } from "./controller/PublisherController";

const router = Router(); 

AppDataSource.initialize().then(async () => {
    const bookRepository = new BookRepository(AppDataSource);
    const bookService = new BookService(bookRepository);
    const bookController = new BookController(bookService);

    const publisherRepository = new PublisherRepository(AppDataSource);
    const publisherService = new PublisherService(publisherRepository);
    const publisherController = new PublisherController(publisherService);

    router.post('/books', (req: Request, res: Response) => {
        bookController.postBook(req, res);
    });

    router.get('/books', (req: Request, res: Response) => {
        bookController.getAllBooks(req, res);
    });

    router.get('/books/:id', (req, res) => {
        bookController.getIdBooks(req, res);
    });

    router.put('/books/:id', (req, res) => {
        bookController.putBook(req, res);
    });

    router.delete('/books/:id', (req, res) => {
        bookController.deleteBook(req, res);
    });

    router.post('/publishers', (req: Request, res: Response) => {
        publisherController.postPublisher(req, res);
    });

    router.get('/publishers', (req: Request, res: Response) => {
        publisherController.getAllPublishers(req, res);
    });

    router.get('/publishers/:id', (req, res) => {
        publisherController.getIdPublisher(req, res);
    });

    router.put('/publishers/:id', (req, res) => {
        publisherController.putPublisher(req, res);
    });

    router.delete('/publishers/:id', (req, res) => {
        publisherController.deletePublisher(req, res);
    });
    
}).catch(error => console.log(error))

export default router;