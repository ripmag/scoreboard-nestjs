import { Counter } from 'src/counters/counter.entity';
import { CreateCounterDTO } from 'src/counters/dto/create-counter-dto';
export declare class EventsService {
    private readonly countersService;
    create(createCounterDTO: CreateCounterDTO): Promise<Counter>;
}
