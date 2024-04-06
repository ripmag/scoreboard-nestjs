import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountersService } from './counters.service';
import { CreateCounterDTO } from './dto/create-counter-dto';

@Controller('counters')
export class CountersController {
    constructor (private countersService: CountersService) {}
    @Post('create')
    createCounter(@Body() createCounterDTO: CreateCounterDTO) {
        return this.countersService.create(createCounterDTO);
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
