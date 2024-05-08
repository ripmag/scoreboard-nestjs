import { GamesService } from './games.service';
import { GameEntity } from './game-entity';
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    createGame(): Promise<GameEntity>;
    getAll(): Promise<GameEntity[]>;
    getGame(params: any): Promise<GameEntity>;
    deleteGame(params: any): Promise<boolean>;
    addPointTeam1(params: any): Promise<GameEntity>;
    addPointTeam2(params: any): Promise<GameEntity>;
    updateInfo(id: number, gameUpdate: any): Promise<GameEntity>;
    resetScore(params: any): Promise<GameEntity>;
}
