"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncOptions = void 0;
const config_1 = require("@nestjs/config");
exports.asyncOptions = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
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
};
exports.default = exports.asyncOptions;
//# sourceMappingURL=data-source.js.map