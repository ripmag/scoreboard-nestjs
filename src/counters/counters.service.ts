import { Injectable } from '@nestjs/common';

@Injectable()
export class CountersService {
    private readonly counters = [];

    create(counter) {
        this.counters.push(counter);
        return this.counters;
    }

    getAll() {
        return this.counters;
    }
}
