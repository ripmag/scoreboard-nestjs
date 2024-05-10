import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export const asyncOptions: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: 'scoreboard',
        host: configService.get('DB_HOST'),
        // host: 'localhost',
        // host: 'host.docker.internal',
        port: 5432,
        username: 'postgres',
        password: '00000000',
        entities: ['dist/**/*-entity.js'],
        migrations: ['dist/DB/migrations/*.js'],
        synchronize: false,
    })
}

export default asyncOptions;