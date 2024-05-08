"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    database: 'scoreboard',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '00000000',
    entities: ['dist/**/*-entity.js'],
    migrations: ['dist/DB/migrations/*.js'],
    synchronize: false,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map