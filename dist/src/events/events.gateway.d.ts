import { EventsService } from './events.service';
export declare class EventsGateway {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    handleMessage(client: any, payload: any): string;
}
