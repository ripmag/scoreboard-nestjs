import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'scoreboard',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '00000000',
    // entities: [Counter, GameEntity],
    entities: ['dist/**/*-entity.js'],
    migrations: ['dist/DB/migrations/*.js'],
    synchronize: false,
    // logging: true,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;