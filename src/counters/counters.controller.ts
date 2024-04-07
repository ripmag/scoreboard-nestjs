import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CountersService } from './counters.service';
import { CreateCounterDTO } from './dto/create-counter-dto';

@Controller('counters')
export class CountersController {
    constructor (
        private countersService: CountersService,        
        ) {}

    @Post('create')
    createCounter(@Body() createCounterDTO: CreateCounterDTO) {
        return this.countersService.create(createCounterDTO);
    }

    @Get('getAllCounters')
    getAllCounters() {
        try {
            return this.countersService.getAll();            
        } catch (error) {
            throw new HttpException (
                'Emulate error get data',
                HttpStatus.INTERNAL_SERVER_ERROR,
                {cause: error},
            );
        }
        
    }

    @Get (':id')
    fineOne(@Param('id', ParseIntPipe) id: number) {
        return `get by ID - ${typeof id}`;
    }

    // @Post (':id')
    // sub() {
    //     return 'sub';
    // }

    // @Post (':id')
    // reset() {
    //     return 'reset';
    // }
}
