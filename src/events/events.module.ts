import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { CountersService } from 'src/counters/counters.service';
import { CountersModule } from 'src/counters/counters.module';
import { EventsService } from './events.service';

@Module({
    imports: [CountersModule],
    providers: [
        EventsGateway,
        EventsService,
        // CountersService,
        ],
})
export class EventsModule {}
