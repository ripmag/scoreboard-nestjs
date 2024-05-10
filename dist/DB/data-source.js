"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncOptions = exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
exports.dataSourceOptions = {
    type: 'postgres',
    database: 'scoreboard',
    host: process.env.DB_HOST,
    port: 5432,
    username: 'postgres',
    password: '00000000',
    entities: ['dist/**/*-entity.js'],
    migrations: ['dist/DB/migrations/*.js'],
    synchronize: false,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.asyncOptions = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
        type: 'postgres',
        database: 'scoreboard',
        host: configService.get('DB_HOST'),
        port: 5432,
        username: 'postgres',
        password: '00000000',
        entities: ['dist/**/*-entity.js'],
        migrations: ['dist/DB/migrations/*.js'],
        synchronize: false,
    })
};
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map