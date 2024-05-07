import { Inject } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { EventsService } from './events.service';

import { CreateCounterDTO } from 'src/counters/dto/create-counter-dto';

@WebSocketGateway(3002,{
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor( private readonly eventsService: EventsService) {}

  @SubscribeMessage('message2')
  handleMessage(client: any, payload: any): string {
    const createCounterDTO: CreateCounterDTO = new CreateCounterDTO();
    
  //   console.log('message',this.eventsService.create({
  //     "counter": 2,
  //     "comment": "New"
  // }))
    return 'Hello world!';
  }
}
