import { BookEntity } from "../entity/BookEntity";
import { PublisherEntity } from "../entity/PublisherEntity";
import { PublisherRepository } from "../repository/PublisherRepository";

export class PublisherService{

    constructor(private repository: PublisherRepository){}

    getAllPublishers() {
        return this.repository.getAllPublishers();
    }

    postPublisher(publisher: PublisherEntity) {
        this.repository.postPublisher(publisher);
    }

    getIdPublisher(id: number) {
        return this.repository.getIdPublisher(id);
    }

    putPublisher(id: number, publisher: PublisherEntity) {
        return this.repository.putPublisher(id, publisher);
    }

    deletePublisher(id: number) {            
        this.repository.deletePublisher(id);
    }

}