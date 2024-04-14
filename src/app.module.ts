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
import { dataSourceOptions } from 'DB/data-source';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { EventsService } from './events/events.service';
import { GamesModule } from './games/games.module';
import { GamesController } from './games/games.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
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
