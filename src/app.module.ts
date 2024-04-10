import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountersModule } from './counters/counters.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { CountersController } from './counters/counters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Counter } from './counters/counter.entity';
import { GameEntity } from './games/game-entity';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { EventsService } from './events/events.service';
import { GamesModule } from './games/games.module';
import { GamesController } from './games/games.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'scoreboard',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '00000000',
      entities: [Counter, GameEntity],
      synchronize: true,
      logging: true,
    }),
    CountersModule,
    EventsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway,EventsService],
})
export class AppModule implements NestModule {
  // constructor (private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('counters');  //routes option
      // .forRoutes({path: 'counters/*', method: RequestMethod.GET}); // with method option
      .forRoutes(CountersController, GamesController);
  }
}
