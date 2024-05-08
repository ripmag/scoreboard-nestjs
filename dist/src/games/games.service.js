"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("./game-entity");
const game_dto_1 = require("./dto/game-dto");
const games_gateway_1 = require("./games.gateway");
let GamesService = class GamesService {
    constructor(gameRepository, gamesGateway) {
        this.gameRepository = gameRepository;
        this.gamesGateway = gamesGateway;
    }
    async create() {
        const game = new game_dto_1.GameDTO();
        game.gameName = 'gameName';
        game.setsScore = [];
        game.team1Name = 'team1Name';
        game.team2Name = 'team2Name';
        game.team1Score = 0;
        game.team2Score = 0;
        return await this.gameRepository.save(game);
    }
    async getAll() {
        return await this.gameRepository.find();
    }
    async getGame(id) {
        return await this.gameRepository.findOne({
            where: {
                id: id,
            }
        });
    }
    async deleteGame(id) {
        const gameToRemove = await this.getGame(id);
        if (!gameToRemove) {
            throw new Error(`Игра с id ${id} не найдена.`);
        }
        const x = await this.gameRepository.remove(gameToRemove);
        console.log(`Игра с id ${id} успешно удалена.`, x);
        return true;
    }
    async updateInfo(id, gameUpdate) {
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
    async addPointTeam1(id) {
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
    async addPointTeam2(id) {
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
    async resetScore(id) {
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
    isGameOver(game) {
        if (game.isGameOver)
            return true;
    }
    isSetOver(game) {
        if (game.isGameOver)
            return true;
        const maxPoints = this.isShortSet(game) ? 15 : 25;
        if (game.team1Score >= maxPoints &&
            game.team1Score >= game.team2Score + 2) {
            return true;
        }
        if (game.team2Score >= maxPoints &&
            game.team2Score >= game.team1Score + 2) {
            return true;
        }
    }
    isShortSet(game) {
        return (game.setsWinTeam1 === 2 &&
            game.setsWinTeam2 === 2);
    }
    doSetOver(game) {
        if (game.team1Score > game.team2Score) {
            game.setsWinTeam1++;
            if (game.setsWinTeam1 === 3) {
                game.isGameOver = true;
                return;
            }
            ;
        }
        else {
            game.setsWinTeam2++;
            if (game.setsWinTeam2 === 3) {
                game.isGameOver = true;
                return;
            }
            ;
        }
        game.setsScore.push(`${game.team1Score} : ${game.team2Score}`);
        game.team1Score = 0;
        game.team2Score = 0;
    }
};
exports.GamesService = GamesService;
exports.GamesService = GamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.GameEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        games_gateway_1.GamesGateway])
], GamesService);
//# sourceMappingURL=games.service.js.map