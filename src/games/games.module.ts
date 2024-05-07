import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './game-entity';
import { GamesGateway } from './games.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  controllers: [GamesController],
  providers: [GamesService, GamesGateway]
})
export class GamesModule {}
