import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export const asyncOptions: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: 5432,
        ssl: configService.get('DB_SSL'),
        host: configService.get('DB_HOST'),
        database: configService.get('DB_NAME'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        entities: ['dist/**/*-entity.js'],
        migrations: ['dist/DB/migrations/*.js'],
        synchronize: false,
    })
}

export default asyncOptions;