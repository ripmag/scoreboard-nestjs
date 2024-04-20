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
        if (this.isGameOver(game)) {
            return game;
        }

        game.team1Score += 1;

        if (this.isSetOver(game)) {
            this.doSetOver(game);            
        }

        return await this.gameRepository.save(game);
    }

    async addPointTeam2(id: number): Promise<GameEntity> {
        let game = await this.getGame(id);
        if (this.isGameOver(game)) {
            return game;
        }

        game.team2Score += 1;

        if (this.isSetOver(game)) {
            this.doSetOver(game);            
        }

        return await this.gameRepository.save(game);
    }

    isGameOver(game: GameEntity): boolean {
        if (game.isGameOver) return true;
        

    }

    isSetOver(game: GameEntity): boolean {
        if (game.isGameOver) return true;
        const maxPoints = this.isShortSet(game) ? 15 : 25;

        if (game.team1Score >= maxPoints &&
            game.team1Score >= game.team2Score + 2
        ) {
            return true;
        }

        if (game.team2Score >= maxPoints &&
            game.team2Score >= game.team1Score + 2
        ) {
            return true;
        }
    }

    isShortSet (game: GameEntity): boolean {
        return (
            game.setsWinTeam1 === 2 &&
            game.setsWinTeam2 === 2);
    }

    doSetOver (game: GameEntity) {
        if (game.team1Score > game.team2Score) {
            game.setsWinTeam1++;
            if (game.setsWinTeam1 === 3) {
                game.isGameOver = true;
                //winer 1 team
                return;
            };

        } else {
            game.setsWinTeam2++;
            if (game.setsWinTeam2 === 3) {
                game.isGameOver = true;
                //winer 2 team
                return;
            };
        }

        game.setsScore.push(`${game.team1Score} : ${game.team2Score}`);
        game.team1Score = 0;
        game.team2Score = 0;        
    }
}
