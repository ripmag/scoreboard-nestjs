import { Repository } from 'typeorm';
import { GameEntity } from './game-entity';
import { GameDTO } from './dto/game-dto';
import { GamesGateway } from './games.gateway';
export declare class GamesService {
    private readonly gameRepository;
    private readonly gamesGateway;
    constructor(gameRepository: Repository<GameEntity>, gamesGateway: GamesGateway);
    create(): Promise<GameEntity>;
    getAll(): Promise<GameEntity[]>;
    getGame(id: number): Promise<GameEntity>;
    deleteGame(id: number): Promise<boolean>;
    updateInfo(id: number, gameUpdate: GameDTO): Promise<GameEntity>;
    addPointTeam1(id: number): Promise<GameEntity>;
    addPointTeam2(id: number): Promise<GameEntity>;
    resetScore(id: number): Promise<GameEntity>;
    isGameOver(game: GameEntity): boolean;
    isSetOver(game: GameEntity): boolean;
    isShortSet(game: GameEntity): boolean;
    doSetOver(game: GameEntity): void;
}
