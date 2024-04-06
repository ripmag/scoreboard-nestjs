import { Controller, Get, Post } from '@nestjs/common';
import { CountersService } from './counters.service';

@Controller('counters')
export class CountersController {
    constructor (private countersService: CountersService) {}
    @Post('create')
    createCounter() {
        return this.countersService.create(1);
    }

    @Get('getAllCounters')
    getAllCounters() {
        return this.countersService.getAll();
    }

    @Post (':id')
    add() {
        return 'add';
    }

    @Post (':id')
    sub() {
        return 'sub';
    }

    @Post (':id')
    reset() {
        return 'reset';
    }
}
