import { Controller, Get } from '@nestjs/common';

@Controller('games')
export class GamesController {
    @Get()
    getHello(): string {
      return 'GamesController getHello()';
    }
}