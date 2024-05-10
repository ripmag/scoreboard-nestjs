import { Injectable } from '@nestjs/common';
import AppConfig from './AppConfig';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World!! db_host=${process.env.DB_HOST}}`;
  }
}
