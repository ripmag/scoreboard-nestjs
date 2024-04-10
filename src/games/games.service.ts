import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game-entity';
import { GameDTO } from './dto/game-dto';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(GameEntity)
        private readonly gameRepository: Repository<GameEntity>,
    ) { }

    async create(): Promise<GameEntity> {

        const game: GameDTO = new GameDTO();
        // game.gameName = gameDTO.gameName;
        // game.setsScore = gameDTO.setsScore;
        // game.team1Name = gameDTO.team1Name;
        // game.team2Name = gameDTO.team2Name;
        // game.team1Score = gameDTO.team1Score;
        // game.team2Score = gameDTO.team2Score;

        game.gameName = 'gameName';
        game.setsScore = ['setsScore'];
        game.team1Name = 'team1Name';
        game.team2Name = 'team2Name';
        game.team1Score = 0;
        game.team2Score = 0;

        return await this.gameRepository.save(game);
    }

    async getAll(): Promise<GameEntity[]> {
        // throw new Error('Emulate get info from DB');
        return await this.gameRepository.find();
    }

    async getGame(id: number): Promise<GameEntity> {
        return await this.gameRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async addPointTeam1(id: number): Promise<GameEntity> {
        let game = await this.getGame(id);
        game.team1Score += 1;

        return await this.gameRepository.save(game);
    }
}
