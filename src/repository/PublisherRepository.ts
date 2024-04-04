import { DataSource } from "typeorm";
import { PublisherEntity } from "../entity/PublisherEntity";

export class PublisherRepository{
    
    constructor(private appDataSource: DataSource){}

    repository = this.appDataSource.getRepository(PublisherEntity);

    async postPublisher(book: PublisherEntity) {
        await this.appDataSource.manager.save(book)
    }

    getAllPublishers() {
        return this.repository.find()
    }

    getIdPublisher(id: number) {
        try{
            return this.repository.findOneBy({id: id,});
        }catch(error){
            console.error('Erro ao encontrar Editora por ID:', error);
            throw error;
        }
    }

    putPublisher(id: number, book: PublisherEntity) {
        try{
            return this.repository.update(id, book);
        }catch(error){
            console.error('Erro ao encontrar Editora por ID:', error);
            throw error;
        }
        
    }
    
    deletePublisher(id: number) {
        try{
            return this.repository.delete(id);
        }catch(error){
            console.error('Erro ao deletar Editora por ID:', error);
            throw error;
        }
    }

}