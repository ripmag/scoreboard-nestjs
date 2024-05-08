import { GameEntity } from './game-entity';
import { Server } from 'socket.io';
export declare class GamesGateway {
    server: Server;
    socketUpdateGame(game: GameEntity): void;
    handleMessage(client: any, payload: any): string;
}
