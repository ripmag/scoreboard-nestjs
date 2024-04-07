import { Injectable, Inject } from '@nestjs/common';
import { CountersService } from 'src/counters/counters.service';
import { Counter } from 'src/counters/counter.entity';
import { CreateCounterDTO } from 'src/counters/dto/create-counter-dto';

@Injectable()
export class EventsService {
    @Inject(CountersService)
    private readonly countersService: CountersService;

    create(createCounterDTO: CreateCounterDTO): Promise<Counter> {
        return this.countersService.create(createCounterDTO);
    }
}
