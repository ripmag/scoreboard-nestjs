"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncOptions = void 0;
const config_1 = require("@nestjs/config");
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
exports.default = exports.asyncOptions;
//# sourceMappingURL=data-source.js.map