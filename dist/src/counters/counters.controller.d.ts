import { CountersService } from './counters.service';
import { CreateCounterDTO } from './dto/create-counter-dto';
export declare class CountersController {
    private countersService;
    constructor(countersService: CountersService);
    createCounter(createCounterDTO: CreateCounterDTO): Promise<import("src/counters/counter.entity").Counter>;
    getAllCounters(): Promise<import("src/counters/counter.entity").Counter[]>;
    fineOne(id: number): string;
}
