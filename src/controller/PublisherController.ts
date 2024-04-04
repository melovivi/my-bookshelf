import { Request, Response } from "express";
import { PublisherService } from "../service/PublisherService";
import { PublisherEntity } from "../entity/PublisherEntity";

export class PublisherController{
   
    constructor(private service: PublisherService) {}

   postPublisher(req: Request, res: Response){
        const publisherData = req.body as PublisherEntity;

        const publisher = new PublisherEntity;
        publisher.name = publisherData.name;

        const newPublisher = this.service.postPublisher(publisher);
        res.status(201).json(newPublisher);
    }
    
    
    async getAllPublishers(req: Request, res: Response) {
        const publishers = await this.service.getAllPublishers();
        res.status(200).json(publishers);
    }

    async getIdPublisher(req: Request, res: Response){
        const id = parseInt(req.params.id) ;
        const publisher = await this.service.getIdPublisher(id);

        if(publisher){
            res.status(200).json(publisher)
        }else{
            res.status(404).json({ message: 'Editora não encontrada' })
        }
    }

    async putPublisher(req: Request, res: Response) {
        const publisherData = req.body as PublisherEntity;

        const publisher = new PublisherEntity;
        publisher.name = publisher.name;

        const id = parseInt(req.params.id) ;
        
        const updateResult = await this.service.putPublisher(id, publisher);
        
        if(updateResult.affected == 0){
            res.status(404).json({ message: 'Editora não encontrado' });
        }else{
            res.status(200).json({ mensagem: 'Editora atualizado com sucesso' });
        }
    }

    async deletePublisher(req: Request, res: Response){
        const id = parseInt(req.params.id) ;
        const publisher = await this.service.getIdPublisher(id);
        
        if(publisher){
            this.service.deletePublisher(id);
            res.status(204).send(); 
        }else{
            res.status(404).json({ message: 'Editora não encontrado' });
        }
    }
}