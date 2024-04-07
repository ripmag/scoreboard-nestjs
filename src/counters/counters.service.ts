import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Counter } from './counter.entity';
import { Repository } from 'typeorm';
import { CreateCounterDTO } from './dto/create-counter-dto';

@Injectable()
export class CountersService {
    constructor(
        @InjectRepository(Counter)
        private readonly counterRepository: Repository<Counter>,
    ) {}
    private readonly counters = [];

    create(createCounterDTO: CreateCounterDTO): Promise<Counter> {
        const counter: Counter = new Counter();
        counter.counter = createCounterDTO.counter;
        counter.comment = createCounterDTO.comment;
        // console.log(this.counterRepository.find())

        return this.counterRepository.save(counter);
    }

    getAll(): Promise<Counter []> {
        // throw new Error('Emulate get info from DB');
        return this.counterRepository.find();
    }
}
