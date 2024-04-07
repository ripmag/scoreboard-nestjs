import { Module } from '@nestjs/common';
import { CountersController } from './counters.controller';
import { CountersService } from './counters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Counter } from './counter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Counter])],
  controllers: [CountersController],
  providers: [
    CountersService,
  ],
  exports: [CountersService],
})
export class CountersModule {}
