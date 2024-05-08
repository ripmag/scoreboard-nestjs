import { Counter } from './counter.entity';
import { Repository } from 'typeorm';
import { CreateCounterDTO } from './dto/create-counter-dto';
export declare class CountersService {
    private readonly counterRepository;
    constructor(counterRepository: Repository<Counter>);
    private readonly counters;
    create(createCounterDTO: CreateCounterDTO): Promise<Counter>;
    getAll(): Promise<Counter[]>;
}
