import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game-entity';
import { GameDTO } from './dto/game-dto';
import { GamesGateway } from './games.gateway';
@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(GameEntity)
        private readonly gameRepository: Repository<GameEntity>,
        private readonly gamesGateway: GamesGateway
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
        game.setsScore = [];
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

    async deleteGame(id: number): Promise<boolean> {
        const gameToRemove = await this.getGame(id);

        if (!gameToRemove) {
            // return false;
            throw new Error(`Игра с id ${id} не найдена.`);            
        }
        const x = await this.gameRepository.remove(gameToRemove);
        console.log(`Игра с id ${id} успешно удалена.`, x);
        return true
    }

    async updateInfo(id: number, gameUpdate: GameDTO): Promise<GameEntity> {
        let game = await this.getGame(id);
        if (gameUpdate.gameName) {
            game.gameName = gameUpdate.gameName;
        }

        if (gameUpdate.team1Name) {
            game.team1Name = gameUpdate.team1Name;
        }

        if (gameUpdate.team2Name) {
            game.team2Name = gameUpdate.team2Name;
        }

        const savedGame = await this.gameRepository.save(game);
        this.gamesGateway.socketUpdateGame(savedGame);

        return savedGame;
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

        const savedGame = await this.gameRepository.save(game);
        this.gamesGateway.socketUpdateGame(savedGame);

        return savedGame;
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

        const savedGame = await this.gameRepository.save(game);
        this.gamesGateway.socketUpdateGame(savedGame);

        return savedGame;
    }

    async resetScore(id: number): Promise<GameEntity> {
        let game = await this.getGame(id);
        game.setsWinTeam1 = 0;
        game.setsWinTeam2 = 0;
        game.team1Score = 0;
        game.team2Score = 0;
        game.setsScore = [];
        game.isGameOver = false;

        const savedGame = await this.gameRepository.save(game);
        this.gamesGateway.socketUpdateGame(savedGame);

        return savedGame;
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
