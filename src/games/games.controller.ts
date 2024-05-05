import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameEntity } from './game-entity';
import { GameDTO } from './dto/game-dto';

@Controller('games')
export class GamesController {
    constructor(
        private gamesService: GamesService,
    ) { }

    @Post('createGame')
    createGame(): Promise<GameEntity> {
        return this.gamesService.create();        
    }

    @Get('getGames')
    getAll(): Promise<GameEntity []> {
        return this.gamesService.getAll();
    }

    @Get(':id')
    getGame(@Param() params: any): Promise<GameEntity> {        
        return this.gamesService.getGame(params.id);
    }

    @Delete(':id')
    deleteGame(@Param() params: any): Promise<boolean> {        
        return this.gamesService.deleteGame(params.id);
    }

    @Post(':id/addPointTeam1')
    addPointTeam1(@Param() params: any): Promise<GameEntity> {        
        return this.gamesService.addPointTeam1(params.id);
    }

    @Post(':id/addPointTeam2')
    addPointTeam2(@Param() params: any): Promise<GameEntity> {        
        return this.gamesService.addPointTeam2(params.id);
    }

    @Put(':id/updateInfo')
    updateInfo(
        @Param('id') id: number,
        @Body() gameUpdate: any // like gameDTO
    ): Promise<GameEntity> {
        return this.gamesService.updateInfo(id, gameUpdate);
    }

}