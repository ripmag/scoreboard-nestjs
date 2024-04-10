import { Controller, Get, Param, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameEntity } from './game-entity';

@Controller('games')
export class GamesController {
    constructor(
        private gamesService: GamesService,
    ) { }

    @Post('createGame')
    createGame(): number {
        this.gamesService.create();
        return 1;
    }

    @Get('getGames')
    getAll(): Promise<GameEntity []> {
        return this.gamesService.getAll();
    }

    @Get(':id')
    getGame(@Param() params: any): Promise<GameEntity> {        
        return this.gamesService.getGame(params.id);
    }

    @Post(':id/addPointTeam1')
    addPointTeam1(@Param() params: any): Promise<GameEntity> {        
        return this.gamesService.addPointTeam1(params.id);
    }

}