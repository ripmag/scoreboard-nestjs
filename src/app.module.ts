import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountersModule } from './counters/counters.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { CountersController } from './counters/counters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { EventsService } from './events/events.service';
import { GamesModule } from './games/games.module';
import { GamesController } from './games/games.controller';
import { asyncOptions } from 'DB/data-source';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(asyncOptions),
    CountersModule,
    EventsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway, EventsService],
})
export class AppModule implements NestModule {  
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('counters');  //routes option
      // .forRoutes({path: 'counters/*', method: RequestMethod.GET}); // with method option
      .forRoutes(CountersController, GamesController);
  }
}
