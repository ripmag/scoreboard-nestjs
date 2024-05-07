import { 
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
 } from '@nestjs/websockets';
 import { GameEntity } from './game-entity';

import { Server } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GamesGateway {
  @WebSocketServer()
  server: Server;

  socketUpdateGame(game: GameEntity) {
    this.server.emit('updateGame', game);
  }
 
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
