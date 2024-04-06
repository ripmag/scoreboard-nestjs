import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountersModule } from './counters/counters.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { CountersController } from './counters/counters.controller';

@Module({
  imports: [CountersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('counters');  //routes option
      // .forRoutes({path: 'counters/*', method: RequestMethod.GET}); // with method option
      .forRoutes(CountersController);
  }
}
